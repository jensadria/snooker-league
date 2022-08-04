/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      display: ["IBM Plex Sans", "sans-serif"],
      body: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
};
