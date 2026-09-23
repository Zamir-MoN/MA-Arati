/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF7',
          100: '#FFF9EF',
          200: '#FBF4E6',
          300: '#F4E8D0',
          border: '#E7D7B8',
        },
        burgundy: {
          DEFAULT: '#7D1111',
          light: '#9E1515',
          dark: '#5C0B0B',
        },
        royal: {
          blue: '#17365D',
          navy: '#0F233D',
        },
        gold: {
          DEFAULT: '#C89B3C',
          light: '#DEB55D',
          dark: '#A47D28',
          border: '#E7D7B8',
        },
        charcoal: {
          DEFAULT: '#202020',
          muted: '#66615A',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'royal-sm': '0 2px 8px -2px rgba(125, 17, 17, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'royal': '0 10px 30px -5px rgba(125, 17, 17, 0.08), 0 4px 12px -2px rgba(200, 155, 60, 0.05)',
        'royal-lg': '0 20px 45px -10px rgba(125, 17, 17, 0.12), 0 8px 20px -4px rgba(200, 155, 60, 0.08)',
      },
    },
  },
  plugins: [],
}
