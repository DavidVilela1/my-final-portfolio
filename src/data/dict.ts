import type { Locale } from '@/lib/i18n';

export type Section = { heading: string; body: string[] };

const en = {
  meta: {
    title: 'David Vilela — Full Stack Developer & UI/UX Designer',
    description:
      'Portfolio of David Vilela, a 23-year-old full stack developer and UI/UX designer based in Vila Real, Portugal. TypeScript, Next.js, React, Node.js and PostgreSQL.',
    ogAlt: 'A dithered black and white portrait of David Vilela on a terminal desktop.',
  },
  boot: {
    brand: 'DAVIDVILELA.dev',
    subtitle: 'Portfolio Environment Setup',
    intro: ['Please wait while setup copies files', 'to the DAVID VILELA experience.'],
    wait: 'This may take a moment to complete.',
    copying: 'Setup is copying files...',
    steps: [
      'Indexing projects',
      'Loading experience.log',
      'Compiling frontend systems',
      'Preloading textures',
      'Mounting design system',
      'Checking locales',
      'Finalizing experience',
    ],
    ok: 'OK',
    press: 'Press any key to continue',
    pressTouch: 'Tap anywhere to continue',
    skip: 'Skip',
  },
  tree: {
    src: 'src',
    caseStudies: 'case-studies',
    system: 'system',
    ariaTree: 'Site navigation, shown as a file tree',
    ariaFolder: 'folder',
    collapse: 'Collapse',
    expand: 'Expand',
  },
  ui: {
    close: 'Close window',
    minimize: 'Collapse window',
    restore: 'Expand window',
    focus: 'Bring window to front',
    back: 'Back',
    open: 'Open',
    language: 'Language',
    clock: 'Local time in Vila Real',
    desktopAlt:
      'Dithered black and white portrait of David Vilela, rendered as the desktop wallpaper.',
    more: 'more',
    empty: 'No entries.',
  },
  windows: {
    about: 'ABOUT_ME.TXT',
    experience: 'EXPERIENCE.LOG',
    projects: 'PROJECTS.DB',
    skills: 'SKILLS.TXT',
    background: 'BACKGROUND.SYS',
    privacy: 'PRIVACY.TXT',
    cookies: 'COOKIES.TXT',
    terms: 'TERMS.TXT',
  },
  about: {
    role: 'FULL STACK DEVELOPER / UI-UX DESIGNER',
    statement: 'I LIKE WORKING WITH PEOPLE WHO CARE ABOUT WHAT THEY BUILD.',
    gridLabel: 'Stack proficiency',
    gridLegendLow: 'Less',
    gridLegendHigh: 'More',
    body: [
      'Twenty-three, from Vila Real. I write TypeScript for a living and design the interfaces it ends up behind.',
      'I have been coding since I was thirteen and working in development since 2023. Portuguese and English, both fluent.',
      'Most of my work sits in the seam between design and engineering: a Figma file on one screen, the build on the other, and nothing lost in between.',
    ],
    contact: 'Contact',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  experience: {
    intro: 'Work log. Newest first.',
    note: 'Open to work on well-made products, in Portugal or remote.',
  },
  background: {
    title: 'Where this comes from',
    body: [
      'I grew up in Vila Real, in the north of Portugal, far enough from anything that a laptop was the interesting thing in the room.',
      'I started writing code at thirteen because I wanted to change something on a page and found out I was allowed to. That never really wore off — the pleasure is still in the part where a thing that did not exist an hour ago now works.',
      'Somewhere along the way I got annoyed at my own interfaces and started learning design properly. I do not think of them as two jobs. A layout decision is an engineering decision made earlier, and an engineering decision is a layout decision you are stuck with later.',
      'I work in TypeScript by preference and enjoy .NET more than is fashionable. I read documentation before Stack Overflow. I would rather ship something small that holds than something large that wobbles.',
      'Portuguese is my first language, English is the one most of my work happens in.',
    ],
    facts: 'System facts',
    factLabels: {
      location: 'Location',
      languages: 'Languages',
      coding: 'Writing code since',
      working: 'Working since',
      focus: 'Focus',
    },
    factValues: {
      languages: 'Portuguese (native), English (fluent)',
      focus: 'Web products, end to end',
    },
  },
  skills: {
    stack: 'Stack',
    tools: 'Tools & infrastructure',
    legend: 'Filled squares indicate how much of my work is currently in that tool.',
  },
  projects: {
    intro: 'Index of every project on record.',
    colName: 'NAME',
    colYear: 'YEAR',
    colStack: 'STACK',
    colStatus: 'STATUS',
    openHint: 'Select a row to open the case study.',
    featuredOnly: 'Case study available',
  },
  caseStudy: {
    year: 'YEAR',
    stack: 'STACK',
    status: 'STATUS',
    links: 'LINKS',
    live: 'Live site',
    repo: 'Repository',
    noLinks: 'Not publicly available.',
  },
  notice: {
    title: 'NOTICE',
    body: 'This site sets no cookies and runs no analytics or third-party trackers. Your language and display preferences are stored in your own browser and never leave it.',
    accept: 'Understood',
    readPrivacy: 'Privacy',
    readCookies: 'Cookies',
    readTerms: 'Terms',
  },
  notFound: {
    code: 'ERROR 404',
    title: 'FILE NOT FOUND',
    body: [
      'The path you requested is not on this disk.',
      'It may have been moved, renamed, or it never existed.',
    ],
    home: 'Return to desktop',
  },
  legal: {
    updated: 'Last updated: February 2026',
    privacy: [
      {
        heading: '1. Who is responsible',
        body: [
          'This website is operated by David Vilela, an individual based in Vila Real, Portugal. For any question about this policy, write to vileladavid112@gmail.com.',
        ],
      },
      {
        heading: '2. What is collected',
        body: [
          'Nothing. This site has no contact form, no account system, no newsletter, no analytics and no advertising. No personal data is collected, stored or transmitted by this site.',
          'If you choose to email the address published on this site, your message and email address reach my personal mailbox. That is a message you sent me, not data this site collected; it is kept only as long as needed to reply and is never shared.',
        ],
      },
      {
        heading: '3. Local storage',
        body: [
          'Two small values may be written to your browser’s local storage: your chosen language and whether you have dismissed the notice banner. They are strictly necessary to make the site behave as you left it, are readable only by your own browser, and are never sent to any server. Clearing your browser data removes them.',
        ],
      },
      {
        heading: '4. Third parties',
        body: [
          'The site loads no third-party scripts, fonts, pixels or embeds. The typeface is self-hosted. The only outbound connections are ones you start yourself by clicking a link to GitHub, LinkedIn or a project site — each of which then applies its own privacy policy, not this one.',
          'The site is hosted on infrastructure that keeps standard server logs (IP address, timestamp, requested path) for security and abuse prevention. Those logs are the host’s, kept briefly, and are not used to profile visitors.',
        ],
      },
      {
        heading: '5. Your rights',
        body: [
          'Under the GDPR and Portuguese Law 58/2019 you have the right of access, rectification, erasure, restriction, portability and objection regarding personal data concerning you. Since this site holds no personal data, these rights apply only to any email correspondence you have sent me. Write to vileladavid112@gmail.com to exercise them.',
          'You may also lodge a complaint with the Portuguese supervisory authority, CNPD (www.cnpd.pt).',
        ],
      },
      {
        heading: '6. Changes',
        body: [
          'If this policy changes, the date above changes with it. There is no mailing list to notify, so the current version is always the one you are reading.',
        ],
      },
    ] as Section[],
    cookies: [
      {
        heading: '1. Short version',
        body: ['This site uses no cookies at all.'],
      },
      {
        heading: '2. Longer version',
        body: [
          'No first-party cookies, no third-party cookies, no pixels, no fingerprinting, no analytics and no advertising identifiers are used. Because nothing non-essential is stored, there is no consent to give and no preferences panel to manage — which is why the banner on this site is a notice rather than a consent request.',
        ],
      },
      {
        heading: '3. What is stored instead',
        body: [
          'Two entries in your browser’s local storage, both strictly necessary and both readable only by your own browser:',
          'dv.locale — the language you selected, so the site opens in it next time.',
          'dv.notice — a flag recording that you dismissed the notice banner, so it does not reappear on every visit.',
          'Neither is transmitted anywhere. Clearing site data in your browser removes both.',
        ],
      },
      {
        heading: '4. If this ever changes',
        body: [
          'Should analytics or any other non-essential technology be added later, this document will be updated first and a real consent banner — with a genuine reject option, and no scripts loading before you choose — will be shown before anything is set.',
        ],
      },
    ] as Section[],
    terms: [
      {
        heading: '1. Scope',
        body: [
          'These terms govern your use of this website. Using the site means you accept them. If you do not, please close the tab.',
        ],
      },
      {
        heading: '2. Purpose of the site',
        body: [
          'This is a personal portfolio. It exists to show work and to make it possible to contact me. It sells nothing, offers no service, takes no payment and creates no client relationship.',
        ],
      },
      {
        heading: '3. Intellectual property',
        body: [
          'The design, code, text and images of this site belong to David Vilela unless stated otherwise. You may read, quote with attribution, and link to it freely. You may not republish it as your own.',
          'Project names and trademarks belonging to third parties are used only to describe the work and remain the property of their owners.',
        ],
      },
      {
        heading: '4. Accuracy',
        body: [
          'Content is provided as is. Project descriptions marked as templates are illustrative placeholder content and do not describe real engagements. Reasonable care is taken to keep everything else accurate, but no warranty is given that it is complete or current.',
        ],
      },
      {
        heading: '5. External links',
        body: [
          'Links to GitHub, LinkedIn and project sites are provided for convenience. I do not control those sites and am not responsible for their content or their handling of your data.',
        ],
      },
      {
        heading: '6. Liability',
        body: [
          'To the extent permitted by law, no liability is accepted for any loss arising from use of this site or reliance on its content. Nothing here excludes liability that cannot lawfully be excluded.',
        ],
      },
      {
        heading: '7. Governing law',
        body: [
          'These terms are governed by Portuguese law. Any dispute falls to the courts of the district of Vila Real, Portugal, without prejudice to any mandatory consumer protection rules that apply to you.',
        ],
      },
    ] as Section[],
  },
};

export type Dict = typeof en;

const pt: Dict = {
  meta: {
    title: 'David Vilela — Full Stack Developer & Designer UI/UX',
    description:
      'Portefólio de David Vilela, programador full stack e designer UI/UX de 23 anos, em Vila Real, Portugal. TypeScript, Next.js, React, Node.js e PostgreSQL.',
    ogAlt: 'Retrato a preto e branco de David Vilela, com efeito de dithering, num ambiente de terminal.',
  },
  boot: {
    brand: 'DAVIDVILELA.dev',
    subtitle: 'Instalação do Ambiente de Portefólio',
    intro: ['Aguarde enquanto a instalação copia os ficheiros', 'para a experiência DAVID VILELA.'],
    wait: 'Pode demorar alguns instantes.',
    copying: 'A copiar ficheiros...',
    steps: [
      'A indexar projetos',
      'A carregar experience.log',
      'A compilar sistemas de frontend',
      'A pré-carregar texturas',
      'A montar o sistema de design',
      'A verificar idiomas',
      'A finalizar a experiência',
    ],
    ok: 'OK',
    press: 'Prima qualquer tecla para continuar',
    pressTouch: 'Toque no ecrã para continuar',
    skip: 'Saltar',
  },
  tree: {
    src: 'src',
    caseStudies: 'case-studies',
    system: 'system',
    ariaTree: 'Navegação do site, apresentada como uma árvore de ficheiros',
    ariaFolder: 'pasta',
    collapse: 'Fechar',
    expand: 'Abrir',
  },
  ui: {
    close: 'Fechar janela',
    minimize: 'Recolher janela',
    restore: 'Expandir janela',
    focus: 'Trazer janela para a frente',
    back: 'Voltar',
    open: 'Abrir',
    language: 'Idioma',
    clock: 'Hora local em Vila Real',
    desktopAlt:
      'Retrato a preto e branco de David Vilela, com efeito de dithering, usado como fundo do ambiente de trabalho.',
    more: 'mais',
    empty: 'Sem entradas.',
  },
  windows: {
    about: 'SOBRE_MIM.TXT',
    experience: 'EXPERIENCIA.LOG',
    projects: 'PROJETOS.DB',
    skills: 'COMPETENCIAS.TXT',
    background: 'PERCURSO.SYS',
    privacy: 'PRIVACIDADE.TXT',
    cookies: 'COOKIES.TXT',
    terms: 'TERMOS.TXT',
  },
  about: {
    role: 'FULL STACK DEVELOPER / DESIGNER UI-UX',
    statement: 'GOSTO DE TRABALHAR COM QUEM SE IMPORTA COM O QUE CONSTRÓI.',
    gridLabel: 'Domínio da stack',
    gridLegendLow: 'Menos',
    gridLegendHigh: 'Mais',
    body: [
      'Vinte e três anos, de Vila Real. Escrevo TypeScript para viver e desenho as interfaces por trás das quais ele acaba.',
      'Programo desde os treze anos e trabalho em desenvolvimento desde 2023. Português e inglês, ambos fluentes.',
      'A maior parte do meu trabalho vive na costura entre design e engenharia: um ficheiro Figma num ecrã, o produto no outro, e nada perdido pelo caminho.',
    ],
    contact: 'Contacto',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  experience: {
    intro: 'Registo de trabalho. Do mais recente para o mais antigo.',
    note: 'Disponível para trabalhar em produtos bem feitos, em Portugal ou remotamente.',
  },
  background: {
    title: 'De onde vem isto',
    body: [
      'Cresci em Vila Real, no norte de Portugal, suficientemente longe de tudo para que um portátil fosse a coisa mais interessante da sala.',
      'Comecei a escrever código aos treze anos porque queria mudar uma coisa numa página e descobri que podia. Isso nunca passou — o prazer continua a estar na parte em que uma coisa que não existia há uma hora passa a funcionar.',
      'A certa altura fiquei irritado com as minhas próprias interfaces e comecei a aprender design a sério. Não penso nisto como dois trabalhos. Uma decisão de layout é uma decisão de engenharia tomada mais cedo, e uma decisão de engenharia é uma decisão de layout com que se fica preso mais tarde.',
      'Trabalho em TypeScript por preferência e gosto de .NET mais do que é moda admitir. Leio a documentação antes do Stack Overflow. Prefiro lançar algo pequeno que aguenta a algo grande que abana.',
      'O português é a minha primeira língua; o inglês é aquela em que acontece a maior parte do meu trabalho.',
    ],
    facts: 'Dados do sistema',
    factLabels: {
      location: 'Localização',
      languages: 'Idiomas',
      coding: 'A programar desde',
      working: 'A trabalhar desde',
      focus: 'Foco',
    },
    factValues: {
      languages: 'Português (nativo), Inglês (fluente)',
      focus: 'Produtos web, de ponta a ponta',
    },
  },
  skills: {
    stack: 'Stack',
    tools: 'Ferramentas e infraestrutura',
    legend: 'Os quadrados preenchidos indicam quanto do meu trabalho passa atualmente por essa ferramenta.',
  },
  projects: {
    intro: 'Índice de todos os projetos registados.',
    colName: 'NOME',
    colYear: 'ANO',
    colStack: 'STACK',
    colStatus: 'ESTADO',
    openHint: 'Selecione uma linha para abrir o caso de estudo.',
    featuredOnly: 'Caso de estudo disponível',
  },
  caseStudy: {
    year: 'ANO',
    stack: 'STACK',
    status: 'ESTADO',
    links: 'LIGAÇÕES',
    live: 'Site online',
    repo: 'Repositório',
    noLinks: 'Não disponível publicamente.',
  },
  notice: {
    title: 'AVISO',
    body: 'Este site não usa cookies nem executa qualquer análise ou rastreio de terceiros. O idioma e as preferências de visualização ficam guardados no seu navegador e nunca saem dele.',
    accept: 'Compreendido',
    readPrivacy: 'Privacidade',
    readCookies: 'Cookies',
    readTerms: 'Termos',
  },
  notFound: {
    code: 'ERRO 404',
    title: 'FICHEIRO NÃO ENCONTRADO',
    body: [
      'O caminho que pediu não existe neste disco.',
      'Pode ter sido movido, mudado de nome, ou nunca ter existido.',
    ],
    home: 'Voltar ao ambiente de trabalho',
  },
  legal: {
    updated: 'Última atualização: fevereiro de 2026',
    privacy: [
      {
        heading: '1. Responsável',
        body: [
          'Este site é gerido por David Vilela, pessoa singular residente em Vila Real, Portugal. Para qualquer questão sobre esta política, escreva para vileladavid112@gmail.com.',
        ],
      },
      {
        heading: '2. Que dados são recolhidos',
        body: [
          'Nenhuns. Este site não tem formulário de contacto, contas de utilizador, newsletter, análises de tráfego nem publicidade. Não recolhe, guarda nem transmite quaisquer dados pessoais.',
          'Se optar por enviar um email para o endereço publicado no site, a sua mensagem e o seu endereço chegam à minha caixa de correio pessoal. Isso é uma mensagem que me enviou, não um dado recolhido pelo site; é conservada apenas o tempo necessário para responder e nunca é partilhada.',
        ],
      },
      {
        heading: '3. Armazenamento local',
        body: [
          'Podem ser escritos dois pequenos valores no armazenamento local do seu navegador: o idioma escolhido e a indicação de que já dispensou o aviso. São estritamente necessários para o site se comportar como o deixou, só o seu navegador os consegue ler e nunca são enviados para qualquer servidor. Limpar os dados do navegador elimina-os.',
        ],
      },
      {
        heading: '4. Terceiros',
        body: [
          'O site não carrega scripts, tipos de letra, pixels ou conteúdos incorporados de terceiros. A fonte é servida a partir do próprio site. As únicas ligações para o exterior são as que o próprio inicia ao clicar numa ligação para o GitHub, o LinkedIn ou um site de projeto — a partir daí aplica-se a política de privacidade desses sites, não esta.',
          'O site está alojado em infraestrutura que mantém registos de servidor normais (endereço IP, data e hora, caminho pedido) por razões de segurança e prevenção de abuso. Esses registos pertencem ao alojamento, são conservados por pouco tempo e não servem para traçar perfis de visitantes.',
        ],
      },
      {
        heading: '5. Os seus direitos',
        body: [
          'Ao abrigo do RGPD e da Lei n.º 58/2019, tem direito de acesso, retificação, apagamento, limitação, portabilidade e oposição relativamente aos dados pessoais que lhe digam respeito. Como este site não guarda dados pessoais, estes direitos aplicam-se apenas à correspondência por email que me tenha enviado. Escreva para vileladavid112@gmail.com para os exercer.',
          'Pode igualmente apresentar reclamação junto da autoridade de controlo portuguesa, a CNPD (www.cnpd.pt).',
        ],
      },
      {
        heading: '6. Alterações',
        body: [
          'Se esta política mudar, a data acima muda com ela. Não há lista de distribuição para avisar, por isso a versão em vigor é sempre a que está a ler.',
        ],
      },
    ],
    cookies: [
      {
        heading: '1. Versão curta',
        body: ['Este site não utiliza quaisquer cookies.'],
      },
      {
        heading: '2. Versão longa',
        body: [
          'Não são utilizados cookies próprios nem de terceiros, pixels, impressão digital do dispositivo, análises de tráfego ou identificadores publicitários. Como nada de não essencial é guardado, não há consentimento a dar nem painel de preferências a gerir — e é por isso que o aviso deste site é um aviso e não um pedido de consentimento.',
        ],
      },
      {
        heading: '3. O que é guardado em vez disso',
        body: [
          'Duas entradas no armazenamento local do seu navegador, ambas estritamente necessárias e ambas legíveis apenas pelo seu navegador:',
          'dv.locale — o idioma que selecionou, para o site abrir nele da próxima vez.',
          'dv.notice — um registo de que dispensou o aviso, para não reaparecer em todas as visitas.',
          'Nenhuma é transmitida para lado nenhum. Limpar os dados do site no navegador elimina ambas.',
        ],
      },
      {
        heading: '4. Se isto mudar',
        body: [
          'Caso venham a ser adicionadas análises de tráfego ou qualquer outra tecnologia não essencial, este documento será atualizado primeiro e será mostrado um verdadeiro banner de consentimento — com uma opção real de recusa e sem carregar scripts antes da sua escolha.',
        ],
      },
    ],
    terms: [
      {
        heading: '1. Âmbito',
        body: [
          'Estes termos regem a utilização deste site. Utilizá-lo significa aceitá-los. Se não os aceitar, feche o separador.',
        ],
      },
      {
        heading: '2. Finalidade do site',
        body: [
          'Este é um portefólio pessoal. Existe para mostrar trabalho e permitir o contacto comigo. Não vende nada, não presta qualquer serviço, não recebe pagamentos e não cria qualquer relação contratual.',
        ],
      },
      {
        heading: '3. Propriedade intelectual',
        body: [
          'O design, o código, os textos e as imagens deste site pertencem a David Vilela, salvo indicação em contrário. Pode ler, citar com atribuição e ligar livremente para o site. Não pode republicá-lo como sendo seu.',
          'Nomes de projetos e marcas de terceiros são usados apenas para descrever o trabalho e permanecem propriedade dos respetivos titulares.',
        ],
      },
      {
        heading: '4. Exatidão',
        body: [
          'O conteúdo é disponibilizado tal como está. As descrições de projeto assinaladas como modelo são conteúdo ilustrativo e não descrevem trabalhos reais. É tomado cuidado razoável com o restante conteúdo, mas não se garante que esteja completo ou atualizado.',
        ],
      },
      {
        heading: '5. Ligações externas',
        body: [
          'As ligações para o GitHub, o LinkedIn e sites de projetos existem por conveniência. Não controlo esses sites nem sou responsável pelo seu conteúdo ou pelo tratamento que dão aos seus dados.',
        ],
      },
      {
        heading: '6. Responsabilidade',
        body: [
          'Na medida permitida por lei, não é aceite qualquer responsabilidade por perdas decorrentes da utilização deste site ou da confiança no seu conteúdo. Nada aqui exclui responsabilidade que não possa legalmente ser excluída.',
        ],
      },
      {
        heading: '7. Lei aplicável',
        body: [
          'Estes termos regem-se pela lei portuguesa. Qualquer litígio cabe aos tribunais da comarca de Vila Real, Portugal, sem prejuízo das normas imperativas de defesa do consumidor que lhe sejam aplicáveis.',
        ],
      },
    ],
  },
};

export const DICT: Record<Locale, Dict> = { en, pt };
export const getDict = (locale: Locale): Dict => DICT[locale];
