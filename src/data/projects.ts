import type { I18nText } from '@/lib/i18n';

export type Project = {
  /** URL-safe id. Also the file name shown in the nav tree: `${slug}.md` */
  slug: string;
  title: string;
  year: number;
  /** Shown in the Projects.db table. */
  status: 'COMPLETED' | 'ACTIVE' | 'ARCHIVED' | 'ON GOING' | 'PERSONAL' | '4FUN' | 'DEMO' | 'WIP';
  stack: string[];
  description: I18nText;
  links: { live?: string; repo?: string };
  /** Optional path under /public, e.g. '/covers/my-project.png'. */
  cover?: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
    {
      slug: 'hound-network-monitor',
      title: 'Hound - Home Network Monitor',
      year: 2026,
      status: 'WIP',
      stack: ['Python', 'FastAPI', 'Scapy', 'SQLite', 'SQLAlchemy', 'Pydantic', 'NiceGUI', 'WebSockets'],
      description: {
        en: 'A local home-network security monitor: it captures DNS lookups and connection attempts, scores each one with transparent, explainable risk signals and streams them to a live dashboard. Only the small capture process needs admin rights.',
        pt: 'Um monitor de segurança para a rede doméstica que corre localmente: captura pedidos DNS e tentativas de ligação, avalia cada um com sinais de risco transparentes e explicáveis e mostra-os num painel em direto. Só o pequeno processo de captura precisa de privilégios de administrador.',
      },
      links: { repo: 'https://github.com/DavidVilela1/hound' },
      featured: true,
    },
    {
      slug: 'purplepie-engine',
      title: 'PurplePie - 2D Game Engine',
      year: 2026,
      status: 'WIP',
      stack: ['Rust', 'wgpu', 'winit', 'hecs', 'glam' ],
      description: {
        en: 'A small, modular 2D game engine written in Rust: a fixed-timestep game loop, an engine-owned ECS world and a wgpu renderer behind a simple API, so game code never touches GPU or windowing internals. Built stage by stage with documented architecture decisions and CI on Linux, Windows and macOS.',
        pt: 'Um motor de jogo 2D pequeno e modular escrito em Rust: um ciclo de jogo com passo fixo, um mundo ECS gerido pelo motor e um renderizador wgpu por trás de uma API simples, para que o código do jogo nunca toque em detalhes da GPU ou das janelas. Desenvolvido por etapas, com decisões de arquitetura documentadas e CI em Linux, Windows e macOS.',
      },
      links: { repo: 'https://github.com/DavidVilela1/purplepie' },
      featured: true,
    },
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
