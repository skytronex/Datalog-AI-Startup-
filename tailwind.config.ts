import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Electric Blue
        "primary-dark": "#2563EB",
        "accent-purple": "#8B5CF6",
        "background-light": "#F3F4F6", // Light grey for light mode fallback (though design is dark-focused)
        "background-dark": "#050505", // Deep black
        "surface-dark": "#0F0F0F",
        "glass-dark": "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
