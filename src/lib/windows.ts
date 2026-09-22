import type { Dict } from '@/data/dict';
import { PROJECTS, type Project } from '@/data/projects';

export type NodeId =
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'background'
  | 'privacy'
  | 'cookies'
  | 'terms'
  | `case:${string}`;

export type TreeItem = { id: NodeId; label: string };
export type TreeFolder = { key: 'src' | 'case-studies' | 'system'; label: string; items: TreeItem[] };

/** Preferred window size in px. Clamped to the viewport at open time. */
export const WINDOW_SIZE: Record<string, { w: number; h: number }> = {
  about: { w: 640, h: 430 },
  experience: { w: 620, h: 420 },
  projects: { w: 720, h: 380 },
  skills: { w: 600, h: 440 },
  background: { w: 620, h: 440 },
  privacy: { w: 620, h: 420 },
  cookies: { w: 620, h: 420 },
  terms: { w: 620, h: 420 },
  case: { w: 640, h: 400 },
};

export const sizeFor = (id: NodeId) => WINDOW_SIZE[id.startsWith('case:') ? 'case' : id];

export const caseSlug = (id: NodeId): string | null =>
  id.startsWith('case:') ? id.slice(5) : null;

export function windowTitle(id: NodeId, d: Dict): string {
  const slug = caseSlug(id);
  if (slug) return `${slug.toUpperCase()}.MD`;
  return d.windows[id as keyof Dict['windows']];
}

export function buildTree(d: Dict): TreeFolder[] {
  const featured: Project[] = PROJECTS.filter((p) => p.featured);
  return [
    {
      key: 'src',
      label: d.tree.src,
      items: [
        { id: 'about', label: d.windows.about },
        { id: 'experience', label: d.windows.experience },
        { id: 'projects', label: d.windows.projects },
        { id: 'skills', label: d.windows.skills },
        { id: 'background', label: d.windows.background },
      ],
    },
    {
      key: 'case-studies',
      label: d.tree.caseStudies,
      items: featured.map((p) => ({ id: `case:${p.slug}` as NodeId, label: `${p.slug}.md` })),
    },
    {
      key: 'system',
      label: d.tree.system,
      items: [
        { id: 'privacy', label: d.windows.privacy },
        { id: 'cookies', label: d.windows.cookies },
        { id: 'terms', label: d.windows.terms },
      ],
    },
  ];
}
