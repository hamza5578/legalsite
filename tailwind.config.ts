import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F44",
          light: "#112952",
          dark: "#060F22",
        },
        gold: {
          DEFAULT: "#C9A961",
          light: "#D9BE85",
          dark: "#A8863D",
        },
        warm: {
          50: "#FAFAF8",
          100: "#F5F4F0",
          200: "#EAE8E1",
          300: "#D5D1C6",
          400: "#B5B0A2",
          500: "#8F8A7C",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      boxShadow: {
        "gold": "0 4px 24px rgba(201, 169, 97, 0.25)",
        "navy": "0 4px 24px rgba(10, 31, 68, 0.2)",
        "card": "0 2px 16px rgba(10, 31, 68, 0.08)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A1F44 0%, #112952 60%, #0A1F44 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A961 0%, #D9BE85 100%)",
        "section-gradient": "linear-gradient(180deg, #FAFAF8 0%, #F5F4F0 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
