/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#C1B538",
          200: "#D2C649",
          300: "#E3D75A",
          400: "#F4E86B",
          500: "#F5F979",
          600: "#F6FA8A",
          700: "#F7FB9B",
          800: "#F8FCAC",
          900: "#F9FDBD",
        },
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
