/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#C9ABB1',
          light: '#F5EBED',
          dark: '#8A7075',
        },
        secondary: {
          DEFAULT: '#4F3530',
          light: '#F0F0F0',
          dark: '#E0E0E0',
        },
        accent: {
          DEFAULT: '#FFB74D',
          light: '#FFD95B',
          dark: '#FF9800',
        },
        error: '#CF6679',
      },
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translate(-50%, calc(-50% + 10px))",
            opacity: "0",
          },
          "100%": {
            transform: "translate(-50%, -50%)",
            opacity: "1",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translate(-50%, -50%)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(-50%, calc(-50% + 10px))",
            opacity: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.2s ease-out",
        "slide-down": "slide-down 0.2s ease-in",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-in",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
