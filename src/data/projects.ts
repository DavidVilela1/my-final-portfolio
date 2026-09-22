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
  status: 'SHIPPED' | 'ACTIVE' | 'ARCHIVED' | 'ON GOING' | 'PERSONAL';
  stack: string[];
  description: I18nText;
  links: { live?: string; repo?: string };
  /** Optional path under /public, e.g. '/covers/my-project.png'. */
  cover?: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: 'coutoserrao-website',
    title: 'Couto & Serrão Website',
    year: 2026,
    status: 'ON GOING',
    stack: ['React.js', 'Node.js', 'SQLite', 'TailwindCSS', 'GSAP', 'TypeScript'],
    description: {
      en: 'A construction company website in Portuguese and English, with smooth scrolling, page transitions and testimonials as stacked cards, backed by a back office where the company manages its portfolio, journal, testimonials and quote requests in both languages.',
      pt: 'Um website de uma empresa de construção em português e inglês, com navegação suave, transições entre páginas e testemunhos apresentados em cartões empilhados, apoiado por um back office onde a empresa pode gerir o seu portefólio, artigos, testemunhos e pedidos de orçamento em ambos os idiomas.',
    },
    links: { live: '', repo: 'https://github.com/DavidVilela1/couto-serrao-ofc' },
    featured: true,
  },
  {
    slug: 'monolith-digital',
    title: 'Monolith Digital',
    year: 2026,
    status: 'SHIPPED',
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
    slug: 'onlinecampus-pdacademia',
    title: 'OnlineCampus PDAcademia',
    year: 2025,
    status: 'ON GOING',
    stack: ['Next.js', 'React.js', 'TailwindCSS', 'PostgreSQL', 'Supabase', 'TypeScript'],
    description: {
      en: 'An online campus where the academy and partner training entities publish professional courses, students enroll, watch lessons and track progress, and earn verifiable completion certificates — all on an authentication and security foundation built entirely from scratch.',
      pt: 'Um campus online onde a academia e entidades formadoras parceiras publicam formações profissionais, os alunos se inscrevem, veem as aulas e acompanham o progresso, e recebem certificados de conclusão verificáveis — tudo sobre uma base de autenticação e segurança construída de raiz.',
    },
    links: {},
    featured: true,
  },
  {
    slug: 'monolith-erp',
    title: 'Monolith ERP',
    year: 2026,
    status: 'PERSONAL',
    stack: ['.NET Core', 'C#', 'PostgreSQL', 'DDD', 'CQRS'],
    description: {
      en: 'Modular monolith ERP for automotive parts distribution. C# / .NET 8, DDD, CQRS, PostgreSQL. - Personal Project :P',
      pt: 'ERP monolítico modular para distribuição de peças automóveis. C# / .NET 8, DDD, CQRS, PostgreSQL. - Projeto pessoal :P',
    },
    links: {repo: 'https://github.com/DavidVilela1/monolith'},
    featured: true,
  },
  {
    slug: 'aesfera-reinvented',
    title: '"A Esfera" Reinvented',
    year: 2026,
    status: 'PERSONAL',
    stack: ['Next.js', 'React.js', 'TailwindCSS', 'TypeScript', 'GSAP', 'Three.js'],
    description: {
      en: 'A frontend re-imagination of the website for the book "A esfera" by André Viana.',
      pt: 'Uma re-imaginação frontend do website respetivo ao livro "A esfera" de André Viana.',
    },
    links: {live:'https://aesfera-reinvented.vercel.app/', repo: 'https://github.com/DavidVilela1/aesfera-reinvented'},
    featured: true,
  },
];

export const featuredProjects = (): Project[] => PROJECTS.filter((p) => p.featured);
export const projectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
