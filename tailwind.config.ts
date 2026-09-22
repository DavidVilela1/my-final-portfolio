import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { mono: ['var(--font-mono)', 'ui-monospace', 'monospace'] },
      colors: { ink: '#000000', phosphor: '#ffffff' },
      keyframes: {
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        flicker: { '0%,100%': { opacity: '0.035' }, '50%': { opacity: '0.055' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        flicker: 'flicker 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
