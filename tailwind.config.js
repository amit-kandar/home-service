/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': "#2F5FAD",
        'custom-green': "#00cf3f"
      }
    },
  },
  plugins: [],
}

