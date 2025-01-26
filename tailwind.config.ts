import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blog-app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Text
        textPrimary: "#767385",
        textTertiary: "#2563eb",
        textSecondary: "#07134C",
        textLink: "#1299FB",
        // Button
        buttonHover: "#2dccfc",
        buttonActive: "#2DAAFC",
        buttonSelected: "#2d34fc",
        buttonActiveHover: "#1319b0",
        buttonCancelHover: "#db0f0f",
        buttonCancelActive: "#910a0a",
        // Background
        back: "#CAC9F3",
        backGroundHover: "#dbeafe",
        backGroundHoverBorder: "#93c5fd",
        backGroundActive: "#93c5fd",
        backGroundActiveBorder: "#1e40af",
      },
    },
  },
  plugins: [],
};
export default config;
