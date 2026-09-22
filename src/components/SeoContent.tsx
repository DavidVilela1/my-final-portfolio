import type { Dict } from '@/data/dict';
import { EXPERIENCE, PROFILE, SKILLS, TOOLS } from '@/data/profile';
import { PROJECTS } from '@/data/projects';
import type { Locale } from '@/lib/i18n';

/**
 * The visible interface renders each section only once its window is opened,
 * which would leave crawlers with an empty page. This mirror carries the same
 * text in document order. It is hidden from the accessibility tree because the
 * interactive version is already exposed there.
 */
export function SeoContent({ d, locale }: { d: Dict; locale: Locale }) {
  return (
    <div className="sr-only-crawl" aria-hidden="true">
      <h1>
        {PROFILE.name} — {d.about.role}
      </h1>
      <p>{d.about.statement}</p>
      {d.about.body.map((p) => (
        <p key={p}>{p}</p>
      ))}

      <h2>{d.windows.experience}</h2>
      {EXPERIENCE.map((e) => (
        <section key={e.period}>
          <h3>
            {e.period} — {e.title[locale]}
          </h3>
          {e.lines.map((l) => (
            <p key={l[locale]}>{l[locale]}</p>
          ))}
        </section>
      ))}

      <h2>{d.windows.background}</h2>
      {d.background.body.map((p) => (
        <p key={p}>{p}</p>
      ))}

      <h2>{d.windows.skills}</h2>
      {SKILLS.map((g) => (
        <p key={g.key}>
          {g.label[locale]}: {g.items.map((i) => i.name).join(', ')}
        </p>
      ))}
      <p>
        {d.skills.tools}: {TOOLS.join(', ')}
      </p>

      <h2>{d.windows.projects}</h2>
      {PROJECTS.map((p) => (
        <section key={p.slug}>
          <h3>
            {p.title} ({p.year})
          </h3>
          <p>{p.stack.join(', ')}</p>
          <p>{p.description[locale]}</p>
        </section>
      ))}

      <h2>{d.about.contact}</h2>
      <p>{PROFILE.email}</p>
      <p>{PROFILE.github}</p>
      <p>{PROFILE.linkedin}</p>
      <p>{PROFILE.location}</p>
    </div>
  );
}
