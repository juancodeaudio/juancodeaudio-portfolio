import type { Config } from 'tailwindcss'

const config: Config = {
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
        primary: "#0891b2",
        danger: "#be123c",
        error: "#be123c"
      },
      backgroundImage: {
        'landing-bg': "url('/images/landing-bg.jpeg')",
      }
    },
  },
  plugins: [],
  safelist: [
    'text-dark'
  ]
}
export default config
