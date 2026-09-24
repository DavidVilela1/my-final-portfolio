import type { I18nText } from '@/lib/i18n';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * THE ONLY FILE YOU NEED TO EDIT TO PUBLISH A PROJECT.
 *
 * `featured: true` puts the project in the case-studies/ folder of the nav tree.
 * Every project (featured or not) is listed in Projects.db.
 *
 * All four entries below are TEMPLATES with invented content — replace the text
 * with your own. Keep the shape and the site keeps working.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export type Project = {
  /** URL-safe id. Also the file name shown in the nav tree: `${slug}.md` */
  slug: string;
  title: string;
  year: number;
  /** Shown in the Projects.db table. */
  status: 'COMPLETED' | 'ACTIVE' | 'ARCHIVED' | 'ON GOING' | 'PERSONAL' | '4FUN' | 'DEMO';
  stack: string[];
  description: I18nText;
  links: { live?: string; repo?: string };
  /** Optional path under /public, e.g. '/covers/my-project.png'. */
  cover?: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
    {
    slug: 'syncra-realtime-kanban',
    title: 'Syncra - Real-time Kanban',
    year: 2026,
    status: 'DEMO',
    stack: ['Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'WebSockets', 'TailwindCSS'],
    description: {
      en: 'A real-time multiplayer Kanban: create a demo room in one click, share the link, and watch every card move sync live between everyone in the room.',
      pt: 'Um Kanban multijogador em tempo real: cria uma sala de demonstração com um clique, partilha o link e vê cada cartão mover-se em direto para todos na sala.',
    },
    links: { live: 'https://syncra-production-acdc.up.railway.app/', repo: 'https://github.com/DavidVilela1/syncra' },
    featured: true,
  },
  {
    slug: 'monolith-digital',
    title: 'Monolith Digital',
    year: 2026,
    status: 'COMPLETED',
    stack: ['React.js', 'Node.js', 'Express', 'Prisma', 'TailwindCSS', 'TypeScript', 'GSAP', 'Three.js'],
    description: {
      en: 'A studio website in Portuguese and English, with a 3D hero and fluid page transitions, backed by a custom back office where the team publishes projects and articles in both languages without touching code.',
      pt: 'Um site de um estúdio em português e inglês, com uma página inicial 3D e transições fluidas entre páginas, apoiado por uma área de gestão personalizada onde a equipa pode publicar projetos e artigos em ambos os idiomas, sem precisar de escrever uma única linha de código.',
    },
    links: { live: 'https://monolith-demo.onrender.com/', repo: 'https://github.com/DavidVilela1/monolith-marketing-digital' },
    featured: true,
  },
  {
    slug: 'this-portfolio',
    title: 'This Portfolio',
    year: 2026,
    status: 'ACTIVE',
    stack: ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    description: {
      en: 'A portfolio rendered as a black-and-white desktop environment. Boot sequence, a file-tree navigator, draggable windows, a CRT layer, English and European Portuguese, no cookies, no analytics, no backend.',
      pt: 'Um portefólio apresentado como um ambiente de trabalho a preto e branco. Sequência de arranque, navegador em árvore de ficheiros, janelas arrastáveis, camada CRT, em inglês e português europeu, sem cookies, sem analytics e sem back-end.',
    },
    links: { repo: 'https://github.com/DavidVilela1/my-final-portfolio' },
    featured: true,
  },
  {
    slug: 'tsblueprint',
    title: 'TSBlueprint',
    year: 2026,
    status: 'COMPLETED',
    stack: ['TypeScript', 'VS Code Extension API', 'TypeScript Compiler API', 'esbuild', 'Vitest'],
    description: {
      en: 'A VS Code extension that reads the TypeScript file you are editing and turns its interfaces and types into an interactive diagram that updates as you type — parsed locally with the TypeScript compiler, with typed messaging between the editor and a locked-down panel, and no data ever leaving the machine.',
      pt: 'Uma extensão para o VS Code que lê o ficheiro TypeScript que está a ser editado e transforma as suas interfaces e tipos num diagrama interativo que se atualiza enquanto se escreve — analisado localmente com o compilador do TypeScript, com comunicação tipada entre o editor e um painel isolado, e sem que nenhum dado saia da máquina.',
    },
    links: {live: 'https://marketplace.visualstudio.com/items?itemName=davidtools.ts-blueprint', repo: 'https://github.com/DavidVilela1/ts-blueprint'},
    featured: true,
  },
  {
    slug: 'monolith-erp',
    title: 'Monolith ERP',
    year: 2026,
    status: 'PERSONAL',
    stack: ['.NET Core', 'C#', 'PostgreSQL', 'DDD', 'CQRS'],
    description: {
      en: 'Modular monolith ERP for automotive parts distribution. C# / .NET 8, DDD, CQRS, PostgreSQL. - Personal Project :P - The website attached to it was also made by me.',
      pt: 'ERP monolítico modular para distribuição de peças automóveis. C# / .NET 8, DDD, CQRS, PostgreSQL. - Projeto pessoal :P - O website que acompanha também foi feito por mim.',
    },
    links: {repo: 'https://github.com/DavidVilela1/monolith'},
    featured: true,
  },
  {
    slug: 'ctx-pack',
    title: 'ctx-pack',
    year: 2026,
    status: 'COMPLETED',
    stack: ['TypeScript', 'Node.js', 'Commander.js', 'simple-git', 'js-tiktoken', 'tsup'],
    description: {
      en: 'An open-source CLI that packs the files you are working on (via git diff) into a single token-counted Markdown or JSON prompt, with the project tree and architecture rules, and copies it to the clipboard for any AI chat.',
      pt: 'Uma CLI open-source que agrupa os ficheiros em que estás a trabalhar (via git diff) num único prompt em Markdown ou JSON, com contagem de tokens, a árvore do projeto e as regras de arquitetura, e copia-o para a área de transferência, pronto para qualquer chat de IA.',
    },
    links: { repo: 'https://github.com/DavidVilela1/ctx-pack' },
    featured: true,
  },
];

export const featuredProjects = (): Project[] => PROJECTS.filter((p) => p.featured);
export const projectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
