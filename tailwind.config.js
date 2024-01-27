/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px'
      },
      colors: {
        primary: {
          darkBlueIntro: 'hsl(217, 28%, 15%)',
          darkBlueMain: 'hsl(218, 28%, 13%)',
          darkBlueFooter: 'hsl(216, 53%, 9%)',
          darkBlueTestimonials: 'hsl(219, 30%, 18%)',
        },
        accent: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
          lightRed: 'hsl(0, 100%, 63%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        bodyCopy: '14px',
      },
    },
  },
  plugins: [],
}

