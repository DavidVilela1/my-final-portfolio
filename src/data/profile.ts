import type { I18nText } from '@/lib/i18n';

export const PROFILE = {
  name: 'David Vilela',
  location: 'Vila Real, Portugal',
  email: 'vileladavid112@gmail.com',
  github: 'https://github.com/DavidVilela1',
  linkedin: 'https://www.linkedin.com/in/davidvilelawebdev/',
  startedCoding: 2016,
  startedWorking: 2023,
} as const;

/** 0–4. Drives the shaded square grid in the About window. */
export type Proficiency = 0 | 1 | 2 | 3 | 4;

export type SkillGroup = {
  key: string;
  label: I18nText;
  items: { name: string; level: Proficiency }[];
};

export const SKILLS: SkillGroup[] = [
  {
    key: 'frontend',
    label: { en: 'Frontend', pt: 'Frontend' },
    items: [
      { name: 'Next.js', level: 4 },
      { name: 'React', level: 4 },
      { name: 'Tailwind CSS', level: 4 },
      { name: 'Vue', level: 2 },
      { name: 'Angular', level: 2 },
    ],
  },
  {
    key: 'backend',
    label: { en: 'Backend', pt: 'Backend' },
    items: [
      { name: 'Node.js', level: 4 },
      { name: 'Express', level: 3 },
      { name: 'PostgreSQL', level: 3 },
      { name: '.NET', level: 2 },
    ],
  },
  {
    key: 'language',
    label: { en: 'Languages', pt: 'Linguagens' },
    items: [
      { name: 'TypeScript', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'SQL', level: 3 },
      { name: 'C#', level: 2 },
    ],
  },
  {
    key: 'api',
    label: { en: 'API', pt: 'API' },
    items: [
      { name: 'REST', level: 4 },
      { name: 'GraphQL', level: 3 },
    ],
  },
  {
    key: 'design',
    label: { en: 'Design', pt: 'Design' },
    items: [
      { name: 'Figma', level: 4 },
      { name: 'FigJam', level: 3 },
      { name: 'Illustrator', level: 2 },
      { name: 'Notion', level: 3 },
    ],
  },
];

export const TOOLS: string[] = [
  'VSCode',
  'GitHub',
  'Docker',
  'Vercel',
  'Render',
  'DigitalOcean',
  'AWS S3',
  'Cloudflare',
  'Azure',
  'Redis Cloud',
  'Railway PostgreSQL',
];

export type LogEntry = { period: string; title: I18nText; lines: I18nText[] };

export const EXPERIENCE: LogEntry[] = [
  {
    period: '2023 — ' + new Date().getFullYear(),
    title: { en: 'Web development, professionally', pt: 'Desenvolvimento web, profissionalmente' },
    lines: [
      {
        en: 'Building and shipping web products end to end: interface design, frontend, API layer and the database underneath it.',
        pt: 'Construir e lançar produtos web de ponta a ponta: design de interface, frontend, camada de API e a base de dados por baixo.',
      },
      {
        en: 'TypeScript throughout — Next.js and React on the front, Node.js and PostgreSQL on the back.',
        pt: 'TypeScript de ponta a ponta — Next.js e React à frente, Node.js e PostgreSQL atrás.',
      },
      {
        en: 'Design and implementation by the same pair of hands, which keeps the gap between the Figma file and the build close to zero.',
        pt: 'Design e implementação pelas mesmas mãos, o que mantém a distância entre o ficheiro Figma e o produto final próxima de zero.',
      },
    ],
  },
  {
    period: '2016 — 2023',
    title: { en: 'Self-taught, then formally', pt: 'Autodidata, depois formalmente' },
    lines: [
      {
        en: 'Started writing code at thirteen. Long stretch of personal projects, breaking things and reading other people’s source.',
        pt: 'Comecei a escrever código aos treze anos. Um longo período de projetos pessoais, a partir coisas e a ler o código dos outros.',
      },
      {
        en: 'Moved from making things work to making them make sense — which is where the interest in UI/UX came from.',
        pt: 'Passei de fazer as coisas funcionarem para fazê-las fazer sentido — foi daí que veio o interesse por UI/UX.',
      },
    ],
  },
];
