/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07090c",
          900: "#0b0e12",
          800: "#11151b",
          700: "#1a2029",
          600: "#2a323e",
        },
        accent: {
          DEFAULT: "#3ee6a8",
          soft: "#3ee6a81a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};
