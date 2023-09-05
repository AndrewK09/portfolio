import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '390px',
      },
      colors: {
        'primary-navy': '#0B0C10',
        'secondary-navy': '#1F2833',
        'primary-gray': '#C5C6C7',
        'primary-green': '#45A29E',
        'secondary-green': '#66FCF1',
      },
    },
  },
  plugins: [],
};
export default config;
