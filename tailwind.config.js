/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["PP Neue Montreal", "sans-serif"],
      },
      colors: {
        mustard: "#DFE154",
        black: "#080808",
        white: "#D7D7D7",
        muted: {
          mustard: "#C7CA12",
        },
      },
    },
  },
  plugins: [],
};
