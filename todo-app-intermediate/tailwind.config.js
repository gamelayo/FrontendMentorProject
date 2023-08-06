/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        card: "var(--card-bg)",
      },
      textColor: {
        primary: "var(--text-color)",
        info: "var( --check-color)",
      },
      boxShadowColor: {
        primary: "var(--shadow-color)",
      },
    },
  },
  plugins: [],
};
