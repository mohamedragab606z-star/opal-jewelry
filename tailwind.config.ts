import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111D", // primary background
        slate: "#0D1B2A", // secondary background
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CE7B",
          dark: "#A9862B",
        },
        paper: "#FFFFFF",
        mist: "#EAEAEA",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(110deg, #A9862B 20%, #F4E3A1 40%, #D4AF37 55%, #F4E3A1 70%, #A9862B 90%)",
        "radial-fade":
          "radial-gradient(120% 120% at 50% 0%, rgba(212,175,55,0.10) 0%, rgba(7,17,29,0) 60%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
