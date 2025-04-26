/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in forwards",
        "fade-in-delayed": "fadeIn 1s ease-in 0.5s forwards",
        "slide-in": "slideIn 0.5s ease-out",
        "bounce-in": "bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "subtle-zoom": "subtleZoom 20s linear infinite",
        "slide-up-fade": "slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "gradient-text": "gradientFlow 8s linear infinite",
        "ping-slow": "pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-slow": "pulseSlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blob1: "blob 7s infinite",
        blob2: "blob 8s infinite",
        blob3: "blob 9s infinite",
        float: "float 6s ease-in-out infinite",
        "scale-up": "scaleUp 0.5s ease-out forwards",
        "pattern-move": "patternMove 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        subtleZoom: {
          "0%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1.1)" },
        },
        patternMove: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0 0" },
        },
        slideUpFade: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pingSlow: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        pulseSlow: {
          "0%, 100%": {
            opacity: "0.1",
          },
          "50%": {
            opacity: "0.3",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
