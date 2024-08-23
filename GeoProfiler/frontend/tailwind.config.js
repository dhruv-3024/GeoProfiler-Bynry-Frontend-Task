/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-500': '#6b7280',
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "nord","forest"],
  },
  plugins: [
    require('daisyui'),
  ],
}

