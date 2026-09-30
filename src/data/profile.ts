import type { I18nText } from '@/lib/i18n';

export const PROFILE = {
  name: 'David Vilela',
  location: 'Vila Real, Portugal',
  email: 'vileladavid112@gmail.com',
  github: 'https://github.com/DavidVilela1',
  linkedin: 'https://www.linkedin.com/in/davidvilelawebdev/',
  startedCoding: 2018,
  startedWorking: 2024,
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
      { name: 'Vue', level: 3 },
      { name: 'Angular', level: 3 },
      { name: 'ASP.NET', level: 2 },
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
      { name: 'Entity Framework', level: 2 },
    ],
  },
  {
    key: 'language',
    label: { en: 'Languages', pt: 'Linguagens' },
    items: [
      { name: 'TypeScript', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'SQL', level: 3 },
      { name: 'Python', level: 3 },
      { name: 'Rust', level: 2 },
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
  'Kubernetes',
];

export type LogEntry = { period: string; title: I18nText; lines: I18nText[] };

export const EXPERIENCE: LogEntry[] = [
  {
    period: '2024 — ' + new Date().getFullYear(),
    title: { en: 'Software & web development, professionally', pt: 'Desenvolvimento web e de software, profissionalmente' },
    lines: [
      {
        en: 'Building and shipping digital products end to end: interface design, frontend, API layer, the database underneath it and deployment.',
        pt: 'Construir e lançar produtos web de ponta a ponta: design de interface, frontend, camada de API, a base de dados por baixo e o deployment.',
      },
      {
        en: 'Specialist in — TypeScript from end to end — Next.js and React in front, Node.js and PostgreSQL behind.',
        pt: 'Especialista em — TypeScript de ponta a ponta — Next.js e React à frente, Node.js e PostgreSQL atrás.',
      },
      {
        en: 'Design and implementation by the same pair of hands, which keeps the gap between the Figma file and the build close to zero.',
        pt: 'Design e implementação pelas mesmas mãos, o que mantém a distância entre o ficheiro Figma e o produto final próxima de zero.',
      },
    ],
  },
  {
    period: '2018 — 2024',
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
