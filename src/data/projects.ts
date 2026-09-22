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
  status: 'SHIPPED' | 'ACTIVE' | 'ARCHIVED';
  stack: string[];
  description: I18nText;
  links: { live?: string; repo?: string };
  /** Optional path under /public, e.g. '/covers/my-project.png'. */
  cover?: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: 'atlas-console',
    title: 'Atlas Console',
    year: 2026,
    status: 'SHIPPED',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    description: {
      en: 'An operations dashboard for a logistics team that had been running on spreadsheets. I mapped the existing workflow in FigJam, designed the interface in Figma, then built it: server-rendered pages, a typed API layer and role-based access. The hard part was not the data, it was reducing twelve columns of noise to the four numbers anyone actually acted on.',
      pt: 'Um painel de operações para uma equipa de logística que trabalhava em folhas de cálculo. Mapeei o fluxo existente no FigJam, desenhei a interface no Figma e depois construí tudo: páginas renderizadas no servidor, uma camada de API tipada e acessos por função. O difícil não foram os dados, foi reduzir doze colunas de ruído aos quatro números sobre os quais alguém agia de facto.',
    },
    links: { live: 'https://example.com', repo: 'https://github.com/DavidVilela1' },
    featured: true,
  },
  {
    slug: 'meridian-store',
    title: 'Meridian Store',
    year: 2025,
    status: 'SHIPPED',
    stack: ['React', 'Node.js', 'Express', 'Redis'],
    description: {
      en: 'Storefront and checkout for a small independent brand. Catalogue served from a cached read model so browsing stays instant under load, with the cart held server-side to survive a lost connection. Designed mobile-first, because that is where almost every order came from.',
      pt: 'Loja e checkout para uma marca independente. Catálogo servido a partir de um modelo de leitura em cache para navegar sempre rápido sob carga, com o carrinho guardado no servidor para sobreviver a uma ligação perdida. Desenhado primeiro para telemóvel, porque era de lá que vinha quase toda a encomenda.',
    },
    links: { live: 'https://example.com' },
    featured: true,
  },
  {
    slug: 'nortada-ds',
    title: 'Nortada Design System',
    year: 2025,
    status: 'ACTIVE',
    stack: ['Figma', 'React', 'TypeScript', 'Tailwind'],
    description: {
      en: 'A component library and the Figma library that matches it, one-to-one, for a team of four shipping three products. Tokens first, then primitives, then patterns. Written so a designer can read the code and a developer can read the file — that overlap is the whole point of the work.',
      pt: 'Uma biblioteca de componentes e a biblioteca Figma correspondente, uma para uma, para uma equipa de quatro pessoas com três produtos. Primeiro os tokens, depois os primitivos, depois os padrões. Escrito para que um designer consiga ler o código e um programador consiga ler o ficheiro — essa sobreposição é o objetivo do trabalho.',
    },
    links: { repo: 'https://github.com/DavidVilela1' },
    featured: true,
  },
  {
    slug: 'corvo-api',
    title: 'Corvo API',
    year: 2024,
    status: 'SHIPPED',
    stack: ['Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    description: {
      en: 'A GraphQL layer placed in front of three legacy REST services so the clients could stop knowing about any of them. Schema-first, persisted queries, and a dataloader pass that cut the request count on the busiest screen from thirty-one to four.',
      pt: 'Uma camada GraphQL colocada à frente de três serviços REST antigos para que os clientes deixassem de precisar de os conhecer. Schema primeiro, queries persistidas e uma passagem de dataloader que reduziu os pedidos do ecrã mais movimentado de trinta e um para quatro.',
    },
    links: { repo: 'https://github.com/DavidVilela1' },
    featured: true,
  },
  {
    slug: 'campo-booking',
    title: 'Campo Booking',
    year: 2024,
    status: 'ARCHIVED',
    stack: ['Vue', 'Node.js', 'PostgreSQL'],
    description: {
      en: 'A booking flow for a rural tourism operator, built in a fortnight to replace a phone-and-notebook system.',
      pt: 'Um fluxo de reservas para um operador de turismo rural, feito em duas semanas para substituir um sistema de telefone e caderno.',
    },
    links: {},
    featured: false,
  },
  {
    slug: 'rota-maps',
    title: 'Rota',
    year: 2023,
    status: 'ARCHIVED',
    stack: ['Angular', 'TypeScript', 'REST'],
    description: {
      en: 'A route-planning tool for a delivery fleet. First professional project, and the one that taught me to ask about the workflow before opening an editor.',
      pt: 'Uma ferramenta de planeamento de rotas para uma frota de entregas. Primeiro projeto profissional e o que me ensinou a perguntar pelo fluxo de trabalho antes de abrir um editor.',
    },
    links: {},
    featured: false,
  },
  {
    slug: 'this-site',
    title: 'davidvilela.dev',
    year: 2026,
    status: 'ACTIVE',
    stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind'],
    description: {
      en: 'This portfolio. A desktop environment rendered in two colours, with every section as a window you can drag, stack and close. No cookies, no tracking, no backend.',
      pt: 'Este portefólio. Um ambiente de trabalho desenhado a duas cores, com cada secção numa janela que se pode arrastar, empilhar e fechar. Sem cookies, sem rastreio, sem backend.',
    },
    links: { repo: 'https://github.com/DavidVilela1' },
    featured: false,
  },
];

export const featuredProjects = (): Project[] => PROJECTS.filter((p) => p.featured);
export const projectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
