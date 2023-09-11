import type { Config } from 'tailwindcss'
const { createThemes } = require('tw-colors');

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        dark: "#1b1b1b",
        darkText: "#1b1b1b",
        light: "#f5f5f5",
      },
      backgroundImage: {
        'landing-bg': "url('/images/landing-bg.jpeg')",
      },
      fontFamily: {
        neue: ['var(--font-neue)', 'sans-serif'],
        neima: ['var(--font-neima)', 'sans-serif'],
        okine: ['var(--font-okine)', 'sans-serif'],
      }
    },
  },
  plugins: [
    createThemes({
      light:{
        'background': '#f5f5f5',
        'alt-background': '#f5f5f5',
        'foreground': '#1b1b1b',
        'primary': '#0891b2',
        'danger': '#be123c',
        'error': '#be123c'
      },
      dark:{ 
        'background': '#1b1b1b',
        'alt-background': '#1b1b1b',
        'foreground': '#f5f5f5',
        'primary': '#0891b2',
        'danger': '#be123c',
        'error': '#be123c'
      }
    })
  ],
  safelist: [
    'text-dark'
  ]
}
export default config
