/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min':'641px','max':'768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min':'1025px','max':'1440px'},
      // => @media (min-width: 1024px) { ... }
      
    },
  },
  plugins: [],
}