const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      width: {
        18: "4.5rem",
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        wave: {
          "20%": { transform: "rotate(-8deg)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "0%, 65%, 100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out 0s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C0C0C0",
          "primary-focus": "#C0C0C0",
          "primary-content": "#000",
          secondary: colors.blue[400],
          "secondary-focus": colors.blue[600],
          "secondary-content": colors.slate[400],
          accent: "#000",
          "accent-focus": "#000",
          "accent-content": colors.slate[200],
          neutral: colors.slate[600],
          "neutral-focus": colors.slate[700],
          "neutral-content": colors.slate[200],
          "base-100": "#000",
          "base-200": "#16161d",
          "base-300": "#708090",
          "base-content": colors.slate[200],
          info: colors.emerald[400],
          success: colors.green[600],
          warning: "#C70039",
          error: colors.rose[500],
        },
      },
    ],
  },
};
