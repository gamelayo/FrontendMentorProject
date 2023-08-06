/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "intro-desktop": "url('/src/images/bg-intro-desktop.svg')",
        "intro-mobile": "url('/src/images/bg-intro-mobile.svg')",
      },
    },
  },
  plugins: [],
};
