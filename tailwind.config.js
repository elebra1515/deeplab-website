/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1F33',
          light: '#122C47',
          dark: '#061424',
        },
        steel: {
          DEFAULT: '#1D4E6B',
          light: '#2E6787',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dark: '#C9852A',
        },
        paper: '#F7F5F1',
        ink: '#16202A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
