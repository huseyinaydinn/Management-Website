/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          hover: "#4C1D95",
          300: "#C4B5FD",
          100: "#EDE9FE",
          50: "#F5F3FF",
        },
        secondary: {
          900: "#2A4E51",
          600: "#1DB5BE",
          300: "#75E3EA",
          100: "#D5FAFC",
          50: "#ECFEFF",
        },
        body: "#dedede",
      },
    },
  },
  plugins: [],
};
