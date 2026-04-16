/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          forest: '#344b33',
          sand: '#b78d6a',
          stone: '#c5ae96',
          sage: '#7f886e',
          moss: '#4a5d3e',
          clay: '#a07d5c',
          warm: '#d4bfa8',
        },
      },
    },
  },
  plugins: [],
};