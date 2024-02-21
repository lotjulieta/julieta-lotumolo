/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        dark: "#1a202c",
        futuristic: "#00ffaa",
        white: "#ffffff",
      },
      fontFamily: {
        roboto: ["Roboto condensed"],
      }
    },
  },
  plugins: ["@tailwindcss/typography"],
};

