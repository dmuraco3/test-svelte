/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,svelte}"
  ],
  theme: {
    fontFamily: {
      'sans': 'Montserrat, sans-serif',
      'secondary': 'Poppins, sans-serif'
    },
    extend: {
      colors: {
        'seasalt': "#f5f5f5",
        'charcoal': "#131313",
        'primary': "#4636FF",
        'secondary': '#FF07FD'
      }
    },
  },
  plugins: [],
}

