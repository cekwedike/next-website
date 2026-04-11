/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        next: {
          background: "#080808",
          primary: "#FF0055",
          secondary: "#00E5CC",
          tertiary: "#FFD700",
          text: "#FFFFFF",
          "text-secondary": "#A0A0A0",
          card: "rgb(255 255 255 / 0.04)",
          border: "rgb(255 255 255 / 0.08)",
          footer: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
