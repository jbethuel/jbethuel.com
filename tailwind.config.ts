import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#0D1117',
        'gray-light': '#F6F8FA',
        'gray-dark': '#151B22',
      },
    },
  },
  plugins: [],
};

export default config;
