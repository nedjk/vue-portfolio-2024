/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },

    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },

      backgroundImage: {
        explosion: 'url("/img/bg-explosion.png")',
        circles: 'url("/img/circles.png")',
        circleStar: 'url("/img/circle-star.png")',
        site: 'url("/img/site-bg.svg")',
      },

      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
