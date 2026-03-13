import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#060a10',
        panel: '#0e1822',
        panelSoft: '#101e2b',
        border: '#1f3346',
        text: '#e8f0f2',
        muted: '#9bb3bc',
        green: '#00d084',
        cyan: '#2ce7f7',
        greenSoft: '#0f7a57'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0, 208, 132, 0.2), 0 20px 80px rgba(0, 208, 132, 0.18)',
        card: '0 16px 48px rgba(1, 8, 18, 0.45)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(76, 126, 151, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(76, 126, 151, 0.12) 1px, transparent 1px)',
        glow:
          'radial-gradient(700px circle at 12% 12%, rgba(0, 208, 132, 0.18), transparent 50%), radial-gradient(600px circle at 88% 12%, rgba(44, 231, 247, 0.14), transparent 42%), radial-gradient(700px circle at 50% 90%, rgba(10, 122, 87, 0.18), transparent 46%)'
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
