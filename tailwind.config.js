/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#190099',
          light: '#4d33cc',
          dark: '#0f0066',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
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
            opacity: "0"
          },
          "100%": {
            transform: "translate(-50%, -50%)",
            opacity: "1"
          },
        },
        "slide-down": {
          "0%": {
            transform: "translate(-50%, -50%)",
            opacity: "1"
          },
          "100%": {
            transform: "translate(-50%, calc(-50% + 10px))",
            opacity: "0"
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.2s ease-out",
        "slide-down": "slide-down 0.2s ease-in",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-in",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
