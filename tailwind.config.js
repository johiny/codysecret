/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "retrored": "#F45050",
        "retroblue": "#05AE8C",
        "retroyellow" : "#FECD39",
        "retrowhite" : "#F0F0F0",
      },
      fontFamily: {
        "roboto": "Roboto, sans-serif"
      },
      keyframes: { 
        puffInTop: {
          "0%": {
            transform: "scale(2)",
            transformOrigin: "50% 0%",
            filter: "blur(4px)",
            opacity: "0",
        },
        "100%": {
          transform: "scale(1)",
          transformOrigin: "50% 0%",
          filter: "blur(0px)",
          opacity: "1",
       },
      },
    },
    animation: {
      puffInTop: 'puffInTop 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
