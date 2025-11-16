/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a1929',
        'bg-medium': '#1a2332',
        'bg-light': '#0d1b2a',
        'accent-cyan': '#00d9ff',
        'accent-green': '#00ff88',
        'text-primary': '#e0f2fe',
        'text-secondary': '#7dd3fc',
        'text-tertiary': '#475569',
      },
      fontFamily: {
        header: ['JetBrains Mono', 'Space Mono', 'Courier New', 'monospace'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        terminal: '0.3em',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #0a1929 0%, #1a2332 50%, #0d1b2a 100%)',
      },
    },
  },
  plugins: [],
}
