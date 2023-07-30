/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#303030",
        primary_text: "#ffffff",
        link_color: "#2997ff",
        secondary_text: "#112B53",
        boarder: "#91A2BC",
        therd_text: "#B4B1B1",
        submit_button : "#DADADA",
        submit_text : "#125490",
      },
      backgroundPosition: {
        'parallax': 'center top',
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
    },
    fontFamily: {
      primary: ["poppins"],
      secondary: ['PT Sans']
    },
    fontSize: {
      titile: [
        "1.75rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ]
    },
    height: {
      hero: "44rem",
    },
    maxWidth: {
      layout: "1366px"
    },
    borderWidth: {
      arrow: '0.5px',
    },
    borderRadius: {
      none: '0',
      default: '1rem',
    },
    opacity: {
      default: '.60',
    },
  },
  plugins: [],
};