/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        secondary: '#991b1b',
        sidebar: {
          bg: '#991b1b',
          text: '#ffffff',
          hover: '#7f1d1d',
        },
        card: {
          border: '#dc2626',
        },
        button: {
          bg: '#dc2626',
          hover: '#b91c1c',
        },
      },
    },
  },
  plugins: [],
}
