/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      fonSize: {
        xs:"10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        '2Xl': "20px",
        '3Xl': "24px",
        '4Xl': "48px",
      },
      colors: {
        lightWhite: "#F7F7F7",
      },
      // backgroundImage: {
      //   bgImage: "url('./images/section-green-img.png')",
      // }
      fontWeight: {
        sm: '300',
        md: '400',
        lg: '500',
        xl: '600',
        '2xl': '700',
        '3xl':'800',
      },
      lineHeight: {
        sm: '21px',
        md:'56px',
      }
    },
  },
  plugins: [],
}

