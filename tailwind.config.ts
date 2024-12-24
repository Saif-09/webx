import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	"compilerOptions": {
		"target": "ES2015",
		// ... other options ...
	},
	theme: {
		extend: {
			keyframes: {
				pulse: {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.15' },
				  },
				wobbleOnce: {
					'0%, 100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(5deg)'
					},
					'50%': {
						transform: 'rotate(-5deg)'
					},
					'75%': {
						transform: 'rotate(3deg)'
					}
				}
			},
			animation: {
				wobbleOnce: 'wobbleOnce 0.5s ease-in-out 1',
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			boxShadow: {
				custom: '0px 1.85px 3.15px 0px #00000001, 0px 8.15px 6.52px 0px #00000002, 0px 20px 13px 0px #00000003, 0px 38.52px 25.48px 0px #00000003, 0px 64.81px 46.85px 0px #00000004, 0px 100px 80px 0px #00000005'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
