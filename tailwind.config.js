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
        description: "#999999",
        link_color: "#2997ff",
        secondary_text: "#112B53",
        boarder: "#0065D3",
        therd_text: "#B4B1B1",
        submit_button : "#DADADA",
        submit_text : "#125490",
        input_bg : "#454545",
      },
      backgroundPosition: {
        'parallax': 'center top',
      },
    },
    screens: {
      sm: "320px",
      md: "600px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      secondary: ['Alata', 'sans-serif']
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
      title_mobile: [
        "1.5rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      paragraph: [
        "0.85rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      hireme: [
        "1.75rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      hero_title: [
        "2.5rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      input_icon: [
        "1.3rem",
        {
          lineHeight: "4rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      input_icon_mobile: [
        "2rem",
        {
          lineHeight: "4rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      project_name: [
        "1.5rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      project_type: [
        "0.8rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
    },
    maxWidth: {
      layout: "1366px",
      heder_logo : "10rem"
    },
    borderWidth: {
      arrow: '0.5px',
      project: '3px',
      project_mobile: '1px',
      '0': '0',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    height: {
      project: '30rem',
      project_mobile: '15rem',
      hero: "50rem",
      full: "100%",
    },
  },
  plugins: [],
};