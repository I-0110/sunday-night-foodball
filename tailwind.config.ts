import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        background: '#FFFFFF',
        darkBackground: '#0F172A',

        textPrimary: '#1E293B',
        textSecondary: '#475569',
        darkTextPrimary: '#E2E8F0',
        darkTextSecondary: '#94A3B8',

        primary: '#E31837',
        darkPrimary: '#E31837',

        accent: '#FFB81C',
        darkAccent: '#FFB81C',

        buttonHover: '#8A1624',
        darkButtonHover: '#FFCD4C',

        borderLight: '#E2E8F0',
        borderDark: '#334155',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
