type P = { className?: string };

const base = 'h-4 w-4 shrink-0';
const svg = (className?: string) => ({
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false as const,
  className: className ?? base,
});

export const FolderOpen = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M1.5 12.5V3.5h4l1.2 1.6h7.8v1.4" />
    <path d="M2.6 12.5 4 7.5h11l-1.4 5z" />
  </svg>
);

export const FolderClosed = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M1.5 12.5V3.5h4l1.2 1.6h7.8v7.4z" />
  </svg>
);

export const FileIcon = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M4 1.5h5l3 3v10H4z" />
    <path d="M9 1.5v3h3" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
);

export const Minus = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M3.5 8h9" />
  </svg>
);

export const Plus = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M3.5 8h9M8 3.5v9" />
  </svg>
);

export const ArrowLeft = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M12.5 8h-9M7 3.5 2.5 8 7 12.5" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...svg(className)}>
    <rect x="1.5" y="3.5" width="13" height="9" />
    <path d="m1.5 4.5 6.5 4.5 6.5-4.5" />
  </svg>
);

export const Github = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M6 14v-2.2c-2.3.4-2.9-1.1-2.9-1.1-.4-1-1-1.3-1-1.3-.8-.5 0-.5 0-.5.9.06 1.4.9 1.4.9.8 1.3 2 .95 2.5.72.08-.57.3-.95.56-1.17-1.9-.2-3.9-.95-3.9-4.2 0-.93.33-1.7.87-2.3-.09-.2-.38-1.08.08-2.25 0 0 .7-.22 2.3.87a8 8 0 0 1 4.2 0c1.6-1.1 2.3-.87 2.3-.87.46 1.17.17 2.05.08 2.25.54.6.87 1.37.87 2.3 0 3.26-2 4-3.9 4.2.3.27.58.8.58 1.6V14" />
  </svg>
);

export const Linkedin = ({ className }: P) => (
  <svg {...svg(className)}>
    <rect x="1.5" y="1.5" width="13" height="13" />
    <path d="M4.6 6.6v5M4.6 4.3v.1M7.6 11.6v-5M7.6 8.1c0-1 .7-1.5 1.6-1.5s1.6.5 1.6 1.8v3.2" />
  </svg>
);

export const Terminal = ({ className }: P) => (
  <svg {...svg(className)}>
    <rect x="1.5" y="2.5" width="13" height="11" />
    <path d="m4.5 6 2 2-2 2M8.5 10h3" />
  </svg>
);

export const User = ({ className }: P) => (
  <svg {...svg(className)}>
    <circle cx="8" cy="5.5" r="2.8" />
    <path d="M2.5 14c.6-2.7 2.8-4 5.5-4s4.9 1.3 5.5 4" />
  </svg>
);

export const Database = ({ className }: P) => (
  <svg {...svg(className)}>
    <ellipse cx="8" cy="3.8" rx="5.5" ry="2.3" />
    <path d="M2.5 3.8v8.4c0 1.3 2.5 2.3 5.5 2.3s5.5-1 5.5-2.3V3.8M2.5 8c0 1.3 2.5 2.3 5.5 2.3S13.5 9.3 13.5 8" />
  </svg>
);

export const Sliders = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" />
    <circle cx="6" cy="4.5" r="1.3" />
    <circle cx="10.5" cy="8" r="1.3" />
    <circle cx="5" cy="11.5" r="1.3" />
  </svg>
);

export const Info = ({ className }: P) => (
  <svg {...svg(className)}>
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.2v4M8 4.9v.1" />
  </svg>
);

export const External = ({ className }: P) => (
  <svg {...svg(className)}>
    <path d="M9.5 2.5h4v4M13.5 2.5 7 9" />
    <path d="M12 9.5v4h-9.5V4H7" />
  </svg>
);
