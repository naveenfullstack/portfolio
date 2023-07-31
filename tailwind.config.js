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
        boarder: "#0065D3",
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
      secondary: ['Alata']
    },
    fontSize: {
      titile: [
        "1.75rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      hero_title: [
        "3rem",
        {
          lineHeight: "4rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ]
    },
    height: {
      hero: "50rem",
    },
    maxWidth: {
      layout: "1366px"
    },
    borderWidth: {
      arrow: '0.5px',
    },
    opacity: {
      default: '.60',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  plugins: [],
};