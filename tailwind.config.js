/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cred: {
          bg: "#0a0a0a",
          card: "#121212",
          cardLight: "#1a1a1a",
          border: "#262626",
          primary: "#ffffff",
          secondary: "#8a8a8a",
          muted: "#4e4e4e",
          accentTeal: "#00e5ff",
          accentPink: "#ff007f",
          accentGreen: "#00ff66",
          accentYellow: "#ffd600",
          popGreen: "#00e676",
          popBlue: "#2979ff",
          popOrange: "#ff9100",
        }
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      boxShadow: {
        'neopop-flat': '4px 4px 0px 0px #000000',
        'neopop-flat-lg': '8px 8px 0px 0px #000000',
        'neopop-flat-teal': '4px 4px 0px 0px #00e5ff',
        'neopop-flat-pink': '4px 4px 0px 0px #ff007f',
        'neopop-flat-white': '4px 4px 0px 0px #ffffff',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-neon': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
