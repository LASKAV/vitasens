/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'vs-gray': '#D9D9D9',
      tiffany: {
        light: '#46D0D0',
        DEFAULT: '#4ABCBC',
        dark: '#247B7B',
        darkest: '#0D5C63',
      },
    },
    extend: {},
  },
  plugins: [],
};
