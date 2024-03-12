/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'customGreen':'#17834F',
    },
    extend: {
      listStyleImage: {
        checkmark: 'url("/img/checkmark.png")',
    },
  },
  plugins: [],
}
}

