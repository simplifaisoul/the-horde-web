/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'horde-blue': '#00f0ff', // Neon blue inspired/Placeholder
                'horde-text': '#ffffff',
            },
            boxShadow: {
                'neon': '0 0 5px theme("colors.horde-blue"), 0 0 20px theme("colors.horde-blue")',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'pulse-slow': 'pulse 3s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
