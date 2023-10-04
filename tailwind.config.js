/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      mini: "13px",
      ordinary: "15px",
      big: "34px",
    },
    borderWidth: {
      def: "1px",
    },
  },
  plugins: [],
};
