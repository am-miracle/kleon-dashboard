module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#6418C3',
        'accent1': '#5ECFFF',
        'accent2': '#E328AF',
        'primarySoft': '#F6EEFF',
        'accent1Soft': '#DFEDF2',
        'accent2Soft': '#FFCFF2',
        'white': '#FFFFFF',
        'black': '#202020',
        'grey2': '#C2C2C2',
        'grey3': '#F5F5F5',
        'main': '#F9F9F9',
      },
      fontFamily: {
        'cairo': ['Cairo', 'san-serif'],
        'open': ['Open-sans', 'san-serif']
      },
      boxShadow: {
        'shadow1': '0px 4px 4px rgba(0, 0, 0, 0.04);',
        'shadow2': '0px 4px 8px rgba(0, 0, 0, 0.12);',
        'shadow3': '0px 1px 28px rgba(0, 0, 0, 0.12);',
        'shadow4': '#18px 4px 35px rgba(0, 0, 0, 0.02)'
      }
    },
  },
  plugins: [],
}
