import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeGray: '#404040',
        themeYellow: '#F2D7A5',
      },
      fontSize: {
        xs: ['8rem', '1.5'],
        sm: ['11.32rem', '1.5'],
        base: ['16rem', '1.5'],
        lg: ['22.62rem', '1.5'],
        xl: ['31.99rem', '1.5'],
        '2xl': ['45.23rem', '1.15'],
        '3xl': ['63.96rem', '1.15'],
        '4xl': ['90.44rem', '1.15'],
        '5xl': ['127.88rem', '1.15'],
        '6xl': ['180.82rem', '1.15'],
      },
      fontFamily: {
        tanEnigma: ['var(--font-TanEnigma)', 'serif'],
        zenOldMincho: ['var(--font-ZenOldMincho)', 'serif'],
      },
      spacing: {
        xs: '4rem',
        sm: '8rem',
        md: '16rem',
        lg: '24rem',
        xl: '32rem',
        '2xl': '64rem',
        '3xl': '80rem',
        '4xl': '112rem',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        section: '64rem repeat(13, minmax(0, 1fr)) 64rem',
        mobileSection: '16rem repeat(13, minmax(0, 1fr)) 16rem',
      },
      gridTemplateRows: {
        '13': 'repeat(13, minmax(0, 1fr))',
        section: '64rem repeat(13, minmax(0, 1fr)) 64rem',
      },
      backgroundImage: {
        'gradient-white-yellow': 'var(--liner-gradient-white-yellow)',
        'gradient-white-red': 'var(--liner-gradient-white-red)',
        'gradient-green': 'var(--liner-gradient-green)',
        'gradient-cover-main': 'var(--liner-gradient-cover-main)',
      },
      dropShadow: {
        'gallery': '3px 4px 6px rgba(0, 0, 0, 0.45)',
        'case-number': '3px 3px 4px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        sparkleGrow: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
        sparkleSpin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: { transform: 'rotate(180deg)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: 'calc(100vw / 375)' },
        '@media (min-width: 560px)': {
          html: { fontSize: 'calc(100vw / 600)' },
        },
        '@media (min-width: 768px)': {
          html: { fontSize: 'calc(100vw / 1440)' },
        },
        '@media (min-width: 1600px)': {
          html: { fontSize: 'calc(100vw / 1600)' },
        },
      });
    }),
  ],
};
export default config;
