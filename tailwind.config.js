/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sociology1':['Gemunu Libre', 'sans-serif'],
        'sociology2':['Frank Ruhl Libre','serif'],
        'sociology3':['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}
