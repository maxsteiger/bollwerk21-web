/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#38b5e6", // brand-blue as primary
        "primary-dark": "#2a9ac8", // darker shade for hover states
        secondary: "#44c39f", // brand-green
        accent: "#d72c1e", // brand-red for accents/calls to action
        highlight: "#ff6921", // brand-orange for highlights
        subtle: "#939bd0", // brand-purple for subtle elements
        gray: "#6c757d", // brand-gray
        "gray-light": "#f8f9fa", // light background
        "gray-dark": "#343a40", // dark text
      },
      fontFamily: {
        sans: ["Assistant", "sans-serif"],
        serif: ["Minion Pro", "serif"],
      },
      spacing: {
        section: "4rem", // Standard section spacing
        element: "1.5rem", // Standard element spacing
      },
    },
  },
  plugins: [],
};
