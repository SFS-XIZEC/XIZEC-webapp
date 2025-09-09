/** @type {import('tailwindcss').Config} */
// import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        textcolor: "var(--textcolor)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};

// export default config;
