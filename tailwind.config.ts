import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wobbleOnce: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wobbleOnce: 'wobbleOnce 0.5s ease-in-out 1',
      },
    
      boxShadow: {
        'custom': '0px 1.85px 3.15px 0px #00000001, 0px 8.15px 6.52px 0px #00000002, 0px 20px 13px 0px #00000003, 0px 38.52px 25.48px 0px #00000003, 0px 64.81px 46.85px 0px #00000004, 0px 100px 80px 0px #00000005',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
