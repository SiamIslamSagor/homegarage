/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
      },
      boxShadow: {
        glow: "0 0 15px rgba(0,123,255,0.5)",
        "glow-hover": "0 0 25px rgba(0,123,255,0.6)",
      },
    },
  },
  plugins: [],
};
