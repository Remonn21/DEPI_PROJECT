/** @type {import('tailwindcss').Config} */
export default {
   darkMode: ["class"],
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         Lato: ["Lato", "sans-serif"],
         Rufina: ["Rufina", "serif"],
      },

      backgroundImage: {
         skyBlue: "linear-gradient(121.53deg, #F3F9FF 0%, #F1F0FF 100%)",
      },

      extend: {
         colors: {
            white: "#FFFFFF",
            black: "#000000",
            transparent: "transparent",

            pink: { DEFAULT: "#FB2E86" },
            red: { DEFAULT: "#FB2448" },
            yellow: { DEFAULT: "#F59E0B" },
            gray: { DEFAULT: "#4B5563" },
            green: "#22C55E",
            blue: {
               DEFAULT: "#2F1AC4",
               off: "#151875",
            },
            navyBlue: {
               DEFAULT: "#151875",
               off: "#3F509E",
            },
            Purple: {
               DEFAULT: "#7E33E0",
               off: "#9F63B5",
               pantone: "#E0D3F5",
            },
         },
         fontSize: {
            hero: [
               "clamp(2.5rem, 5vw + 1rem, 4rem)",
               { fontWeight: "700", lineHeight: "1.1" },
            ],

            h1: [
               "clamp(2.5rem, 6vw + 1rem, 4rem)",
               { fontWeight: "700", lineHeight: "1.3" },
            ],
            h2: [
               "clamp(2rem, 5vw + 1rem, 3rem)",
               { fontWeight: "700", lineHeight: "1.3" },
            ],
            h3: [
               "clamp(1.75rem, 4vw + 1rem, 2.5rem)",
               { fontWeight: "700", lineHeight: "1.3" },
            ],
            h4: [
               "clamp(1.5rem, 3vw + 1rem, 2rem)",
               { fontWeight: "700", lineHeight: "1.3" },
            ],
            h5: [
               "clamp(1.25rem, 2vw + 1rem, 1.75rem)",
               { fontWeight: "700", lineHeight: "1.3" },
            ],
            h6: [
               "clamp(1rem, 1.5vw + 1rem, 1.5rem)",
               { fontWeight: "700", lineHeight: "1.3" },
            ],

            "body-xl": [
               "clamp(1.5rem, 2.5vw + 1rem, 1.875rem)",
               {
                  fontWeight: "400",
                  lineHeight: "1.75",
               },
            ],
            "body-lg": [
               "clamp(1.25rem, 2vw + 1rem, 1.625rem)",
               {
                  fontWeight: "400",
                  lineHeight: "1.75",
               },
            ],
            "body-md": [
               "clamp(1.125rem, 1.5vw + 1rem, 1.375rem)",
               {
                  fontWeight: "400",
                  lineHeight: "1.75",
               },
            ],
            "body-sm": [
               "clamp(1rem, 1vw + 1rem, 1.125rem)",
               {
                  fontWeight: "400",
                  lineHeight: "1.75",
               },
            ],

            "small-xl": [
               "clamp(0.95rem, 1vw + 0.9rem, 1rem)",
               {
                  fontWeight: "400",
                  lineHeight: "1.6",
               },
            ],
            "small-lg": [
               "clamp(0.875rem, 1vw + 0.875rem, 0.95rem)",
               {
                  fontWeight: "400",
                  lineHeight: "1.6",
               },
            ],
            "small-md": [
               "clamp(0.8rem, 0.9vw + 0.75rem, 0.875rem)",
               {
                  fontWeight: "400",
                  lineHeight: "1.6",
               },
            ],
            "small-sm": [
               "clamp(0.75rem, 0.85vw + 0.7rem, 0.825rem)",
               {
                  fontWeight: "400",
                  lineHeight: "1.6",
               },
            ],
         },
      },

      // plugins: [],
      // extend: {
      // 	borderRadius: {
      // 		lg: 'var(--radius)',
      // 		md: 'calc(var(--radius) - 2px)',
      // 		sm: 'calc(var(--radius) - 4px)'
      // 	},
      // 	colors: {
      // 		background: 'hsl(var(--background))',
      // 		foreground: 'hsl(var(--foreground))',
      // 		card: {
      // 			DEFAULT: 'hsl(var(--card))',
      // 			foreground: 'hsl(var(--card-foreground))'
      // 		},
      // 		popover: {
      // 			DEFAULT: 'hsl(var(--popover))',
      // 			foreground: 'hsl(var(--popover-foreground))'
      // 		},
      // 		primary: {
      // 			DEFAULT: 'hsl(var(--primary))',
      // 			foreground: 'hsl(var(--primary-foreground))'
      // 		},
      // 		secondary: {
      // 			DEFAULT: 'hsl(var(--secondary))',
      // 			foreground: 'hsl(var(--secondary-foreground))'
      // 		},
      // 		muted: {
      // 			DEFAULT: 'hsl(var(--muted))',
      // 			foreground: 'hsl(var(--muted-foreground))'
      // 		},
      // 		accent: {
      // 			DEFAULT: 'hsl(var(--accent))',
      // 			foreground: 'hsl(var(--accent-foreground))'
      // 		},
      // 		destructive: {
      // 			DEFAULT: 'hsl(var(--destructive))',
      // 			foreground: 'hsl(var(--destructive-foreground))'
      // 		},
      // 		border: 'hsl(var(--border))',
      // 		input: 'hsl(var(--input))',
      // 		ring: 'hsl(var(--ring))',
      // 		chart: {
      // 			'1': 'hsl(var(--chart-1))',
      // 			'2': 'hsl(var(--chart-2))',
      // 			'3': 'hsl(var(--chart-3))',
      // 			'4': 'hsl(var(--chart-4))',
      // 			'5': 'hsl(var(--chart-5))'
      // 		}
      // 	}
      // }
   },
   plugins: [require("tailwindcss-animate"), import("@tailwindcss/line-clamp")],
};
