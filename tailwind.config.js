/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#222831',
      secondary: '#00ADB5',
      border: 'rgba(238, 238, 238, 10%)',
      color1: '#EEEEEE',
      color2: 'rgba(238, 238, 238, 75%)',
      color3: 'rgba(238, 238, 238, 50%)',
      button: 'rgba(57, 62, 70, 75%)',
      button2: '#393E46',
      card: 'rgba(57, 62, 70, 50%)',
      error: '#dc2626',
      white: '#fff',
      black: '#000',
      overlay: 'rgba(34, 40, 49, 0.21)'
    }
  },
  plugins: [],
}
