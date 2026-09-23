'use client';

import { External, Github, Linkedin, Mail } from '@/components/Icons';
import type { Dict, Section } from '@/data/dict';
import { EXPERIENCE, PROFILE, SKILLS, TOOLS, type Proficiency } from '@/data/profile';
import { PROJECTS, projectBySlug } from '@/data/projects';
import { caseSlug, type NodeId } from '@/lib/windows';
import type { Locale } from '@/lib/i18n';

const LEVELS: Proficiency[] = [4, 3, 2, 1];

function Cell({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-[9px] w-[9px] border ${on ? 'border-white bg-white' : 'border-white/25 bg-transparent'}`}
    />
  );
}

/** Four squares filled bottom-up. The readable version of the About grid. */
function Meter({ level }: { level: Proficiency }) {
  return (
    <span className="flex gap-[3px]" aria-hidden="true">
      {[1, 2, 3, 4].map((n) => (
        <Cell key={n} on={n <= level} />
      ))}
    </span>
  );
}

function StackGrid({ d, l }: { d: Dict; l: Locale }) {
  return (
    <figure className="m-0">
      <figcaption className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
        {d.about.gridLabel}
      </figcaption>
      <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
        {SKILLS.map((group) => (
          <div key={group.key}>
            <div className="flex gap-[3px]">
              {group.items.map((item) => (
                <span key={item.name} className="flex flex-col gap-[3px]">
                  {LEVELS.map((row) => (
                    <Cell key={row} on={item.level >= row} />
                  ))}
                </span>
              ))}
            </div>
            <p className="mt-1.5 text-[9.5px] uppercase tracking-[0.14em] text-white/45">
              {group.label[l]}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-2 flex items-center gap-2 text-[10px] text-white/45">
        {d.about.gridLegendLow}
        <span className="flex gap-[3px]">
          {[1, 2, 3, 4].map((n) => (
            <Cell key={n} on={n > 2} />
          ))}
        </span>
        {d.about.gridLegendHigh}
      </p>
    </figure>
  );
}

const linkRow =
  'inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white hover:underline underline-offset-4';

function About({ d, l }: { d: Dict; l: Locale }) {
  return (
    <div className="space-y-5">
      <StackGrid d={d} l={l} />
      <hr className="border-white/15" />
      <div>
        <h3 className="text-xl font-semibold tracking-tight glow">{PROFILE.name}</h3>
        <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/55">
          {d.about.role}
        </p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.1em] text-white/85">
          {d.about.statement}
        </p>
      </div>
      <div className="space-y-2 text-white/70">
        {d.about.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div>
        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
          {d.about.contact}
        </p>
        <ul className="space-y-1.5">
          <li>
            <a className={linkRow} href={`mailto:${PROFILE.email}`}>
              <Mail />
              {PROFILE.email}
            </a>
          </li>
          <li>
            <a className={linkRow} href={PROFILE.github} target="_blank" rel="noreferrer noopener">
              <Github />
              {d.about.githubLabel}
              <External className="h-3 w-3" />
            </a>
          </li>
          <li>
            <a className={linkRow} href={PROFILE.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin />
              {d.about.linkedinLabel}
              <External className="h-3 w-3" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Experience({ d, l }: { d: Dict; l: Locale }) {
  return (
    <div className="space-y-5">
      <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">{d.experience.intro}</p>
      <ol className="space-y-5">
        {EXPERIENCE.map((entry) => (
          <li key={entry.period} className="border-l border-white/25 pl-4">
            <p className="text-[10px] tracking-[0.18em] text-white/55">{entry.period}</p>
            <h3 className="mt-1 text-sm font-medium">{entry.title[l]}</h3>
            <ul className="mt-2 space-y-1.5 text-white/70">
              {entry.lines.map((line) => (
                <li key={line[l]} className="flex gap-2">
                  <span aria-hidden="true" className="text-white/40">
                    &gt;
                  </span>
                  <span>{line[l]}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="border-t border-white/15 pt-3 text-white/60">{d.experience.note}</p>
    </div>
  );
}

function Background({ d }: { d: Dict }) {
  const facts: [string, string][] = [
    [d.background.factLabels.location, PROFILE.location],
    [d.background.factLabels.languages, d.background.factValues.languages],
    [d.background.factLabels.coding, String(PROFILE.startedCoding)],
    [d.background.factLabels.working, String(PROFILE.startedWorking)],
    [d.background.factLabels.focus, d.background.factValues.focus],
  ];
  return (
    <div className="space-y-5">
      <h3 className="text-sm font-medium">{d.background.title}</h3>
      <div className="space-y-2 text-white/70">
        {d.background.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div>
        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
          {d.background.facts}
        </p>
        <dl className="divide-y divide-white/10 border-y border-white/15">
          {facts.map(([k, v]) => (
            <div key={k} className="flex gap-4 py-1.5">
              <dt className="w-40 shrink-0 text-white/50">{k}</dt>
              <dd className="text-white/85">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function Skills({ d, l }: { d: Dict; l: Locale }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/50">{d.skills.stack}</p>
        <div className="space-y-4">
          {SKILLS.map((group) => (
            <div key={group.key}>
              <p className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/45">
                {group.label[l]}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <Meter level={item.level} />
                    <span className="text-white/80">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/50">{d.skills.tools}</p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-white/70">
          {TOOLS.map((t, i) => (
            <li key={t} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
              )}
              {t}
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-white/15 pt-3 text-[11px] text-white/50">{d.skills.legend}</p>
    </div>
  );
}

function ProjectsDb({
  d,
  l,
  onOpen,
}: {
  d: Dict;
  l: Locale;
  onOpen: (id: NodeId) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">{d.projects.intro}</p>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-white/25 text-[10px] uppercase tracking-[0.14em] text-white/50">
            <th scope="col" className="py-1.5 pr-3 font-normal">{d.projects.colName}</th>
            <th scope="col" className="py-1.5 pr-3 font-normal">{d.projects.colYear}</th>
            <th scope="col" className="py-1.5 pr-3 font-normal">{d.projects.colStack}</th>
            <th scope="col" className="py-1.5 font-normal">{d.projects.colStatus}</th>
          </tr>
        </thead>
        <tbody>
          {PROJECTS.map((p) => {
            const cells = (
              <>
                <td className="py-1.5 pr-3 align-top">{p.title}</td>
                <td className="py-1.5 pr-3 align-top tabular-nums text-white/70">{p.year}</td>
                <td className="py-1.5 pr-3 align-top text-white/60">{p.stack.join(' · ')}</td>
                <td className="py-1.5 align-top text-white/60">{p.status}</td>
              </>
            );
            return p.featured ? (
              <tr
                key={p.slug}
                role="button"
                tabIndex={0}
                aria-label={`${p.title} — ${d.projects.featuredOnly}`}
                onClick={() => onOpen(`case:${p.slug}` as NodeId)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpen(`case:${p.slug}` as NodeId);
                  }
                }}
                className="cursor-pointer border-b border-white/10 transition-colors hover:bg-white hover:text-black"
              >
                {cells}
              </tr>
            ) : (
              <tr key={p.slug} className="border-b border-white/10 text-white/70">
                {cells}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-[11px] text-white/45">
        {d.projects.openHint} <span className="sr-only-crawl">{PROJECTS.map((p) => p.description[l]).join(' ')}</span>
      </p>
    </div>
  );
}

function CaseStudy({ d, l, slug }: { d: Dict; l: Locale; slug: string }) {
  const p = projectBySlug(slug);
  if (!p) return <p className="text-white/60">{d.ui.empty}</p>;

  const meta: [string, React.ReactNode][] = [
    [d.caseStudy.year, p.year],
    [d.caseStudy.stack, p.stack.join(' · ')],
    [d.caseStudy.status, p.status],
  ];

  return (
    <article className="space-y-4">
      <header>
        <h3 className="text-lg font-semibold tracking-tight glow">{p.title}</h3>
      </header>
      <dl className="divide-y divide-white/10 border-y border-white/15">
        {meta.map(([k, v]) => (
          <div key={k} className="flex gap-4 py-1.5">
            <dt className="w-24 shrink-0 text-[10px] uppercase tracking-[0.14em] text-white/50">{k}</dt>
            <dd className="text-white/85">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="text-white/75">{p.description[l]}</p>
      <div>
        <p className="mb-1.5 text-[10px] uppercase tracking-[0.14em] text-white/50">
          {d.caseStudy.links}
        </p>
        {p.links.live || p.links.repo ? (
          <ul className="space-y-1">
            {p.links.live && (
              <li>
                <a className={linkRow} href={p.links.live} target="_blank" rel="noreferrer noopener">
                  <External className="h-3 w-3" />
                  {d.caseStudy.live}
                </a>
              </li>
            )}
            {p.links.repo && (
              <li>
                <a className={linkRow} href={p.links.repo} target="_blank" rel="noreferrer noopener">
                  <Github />
                  {d.caseStudy.repo}
                </a>
              </li>
            )}
          </ul>
        ) : (
          <p className="text-white/55">{d.caseStudy.noLinks}</p>
        )}
      </div>
    </article>
  );
}

function Legal({ d, sections }: { d: Dict; sections: Section[] }) {
  return (
    <div className="space-y-4">
      <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">{d.legal.updated}</p>
      {sections.map((s) => (
        <section key={s.heading}>
          <h3 className="mb-1.5 text-[11px] uppercase tracking-[0.14em] text-white/80">{s.heading}</h3>
          <div className="space-y-1.5 text-white/70">
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function WindowContent({
  id,
  d,
  locale,
  onOpen,
}: {
  id: NodeId;
  d: Dict;
  locale: Locale;
  onOpen: (id: NodeId) => void;
}) {
  const slug = caseSlug(id);
  if (slug) return <CaseStudy d={d} l={locale} slug={slug} />;

  switch (id) {
    case 'about':
      return <About d={d} l={locale} />;
    case 'experience':
      return <Experience d={d} l={locale} />;
    case 'background':
      return <Background d={d} />;
    case 'skills':
      return <Skills d={d} l={locale} />;
    case 'projects':
      return <ProjectsDb d={d} l={locale} onOpen={onOpen} />;
    case 'privacy':
      return <Legal d={d} sections={d.legal.privacy} />;
    case 'cookies':
      return <Legal d={d} sections={d.legal.cookies} />;
    case 'terms':
      return <Legal d={d} sections={d.legal.terms} />;
    default:
      return <p className="text-white/60">{d.ui.empty}</p>;
  }
}
