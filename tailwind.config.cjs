/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        'primary': '#38b5e6',      // brand-blue
        'secondary': '#44c39f',    // brand-green
        'brand-red': '#d72c1e',
        'brand-orange': '#ff6921',
        'brand-purple': '#939bd0', // from CSS files
        'brand-gray': '#6c757d',   // common gray tone
      }
    },
  },
  plugins: [],
}