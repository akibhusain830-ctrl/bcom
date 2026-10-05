/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#0b0c10',
        surface: '#13151b',
        surfaceElevated: '#1a1d26',
        borderMuted: '#242834',
        borderFocus: '#3b4254',
        textPrimary: '#f3f4f6',
        textSecondary: '#9ca3af',
        textMuted: '#6b7280',
        accent: '#10b981', // Clean subtle emerald
        accentMuted: '#064e3b',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
