/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/src/assets/background_skin.png')",
      },
    },
  },
  plugins: [],
};
