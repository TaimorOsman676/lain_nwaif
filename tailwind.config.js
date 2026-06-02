/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFCC00",       // Premium Mustard Corporate Yellow
          yellowDark: "#E6B800",   // Darker shade for hovers
          yellowLight: "#FFF5CC",  // Soft gold backdrop tint
          bg: "#FAFAFA",           // Ultra-Light Elegant Base Background
          bgLight: "#F4F5F7",      // Secondary soft gray
          card: "#FFFFFF",         // Pure White Cards
          slate: "#2D3748",        // Deep Slate/Charcoal text
          muted: "#4A5568",        // Soft secondary gray
          light: "#A0AEC0",        // Border and line gray
        }
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 4px 20px rgba(0, 0, 0, 0.02)",
        gold: "0 8px 24px rgba(255, 204, 0, 0.12)",
      },
      borderRadius: {
        premium: "8px",
      }
    },
  },
  plugins: [],
}
