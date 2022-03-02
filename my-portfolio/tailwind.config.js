module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'warrior-blue': '#006BB6',
        'warrior-yellow': '#FDB927',
        'yellow-hover': '#FDB927',
        'warrior-slate': '#26282A',
      },
    },
  },
  plugins: [],
}
