import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#040814',
        canvasAlt: '#07101c',
        panel: '#0c1625',
        panelSoft: '#0f1d31',
        panelElevated: '#102540',
        border: '#1a3154',
        text: '#edf5ff',
        muted: '#90a7c1',
        green: '#7ed957',
        lime: '#9cf06b',
        cyan: '#54a5ff',
        redSoft: '#ff6b7a',
        amber: '#f3b546',
        greenSoft: '#0f7a57'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(126, 217, 87, 0.18), 0 30px 90px rgba(126, 217, 87, 0.14)',
        card: '0 24px 80px rgba(2, 7, 18, 0.52)',
        blue: '0 24px 80px rgba(84, 165, 255, 0.16)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(76, 126, 151, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(76, 126, 151, 0.1) 1px, transparent 1px)',
        glow:
          'radial-gradient(800px circle at 12% 10%, rgba(126, 217, 87, 0.18), transparent 48%), radial-gradient(660px circle at 88% 12%, rgba(84, 165, 255, 0.18), transparent 40%), radial-gradient(720px circle at 50% 100%, rgba(31, 60, 102, 0.26), transparent 50%)',
        hero:
          'linear-gradient(180deg, rgba(4,8,20,0.14) 0%, rgba(4,8,20,0.8) 80%), radial-gradient(circle at top, rgba(84,165,255,0.18), transparent 35%)'
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleX(0.98)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseLine: 'pulseLine 3.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
