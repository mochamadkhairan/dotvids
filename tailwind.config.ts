import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        accent: ["Lexend", "sans-serif"],
      },
      colors: {
        slate: {
          950: "#0f172a",
          900: "#0f1729",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
