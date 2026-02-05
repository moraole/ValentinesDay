/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                script: ['Dancing Script', 'cursive'],
                elegant: ['Playfair Display', 'serif'],
                body: ['Nunito', 'sans-serif'],
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
                    foreground: 'hsl(var(--primary-foreground))',
                    light: 'hsl(var(--primary-light))',
                    dark: 'hsl(var(--primary-dark))'
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
                valentine: {
                    rose: 'hsl(var(--valentine-rose))',
                    blush: 'hsl(var(--valentine-blush))',
                    cream: 'hsl(var(--valentine-cream))',
                    peach: 'hsl(var(--valentine-peach))',
                    deep: 'hsl(var(--valentine-deep))',
                    gold: 'hsl(var(--valentine-gold))'
                },
                heart: {
                    pink: 'hsl(var(--heart-pink))',
                    red: 'hsl(var(--heart-red))'
                },
                dog: {
                    brown: 'hsl(var(--dog-brown))',
                    light: 'hsl(var(--dog-light))',
                    nose: 'hsl(var(--dog-nose))'
                },
                cat: {
                    black: 'hsl(var(--cat-black))',
                    gray: 'hsl(var(--cat-gray))',
                    eyes: 'hsl(var(--cat-eyes))'
                },
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'heartbeat': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '25%': { transform: 'scale(1.1)' },
                    '50%': { transform: 'scale(1)' },
                    '75%': { transform: 'scale(1.15)' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'wiggle': {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'wiggle': 'wiggle 0.5s ease-in-out infinite'
            },
            boxShadow: {
                'valentine': '0 4px 20px -4px hsl(350 50% 70% / 0.25)',
                'heart': '0 8px 30px -8px hsl(350 70% 60% / 0.4)',
                'glow': '0 0 40px hsl(350 80% 75% / 0.3)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
