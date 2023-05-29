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
        'gradient-135': 'linear-gradient(65deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'xl': '0 3px 60px -15px rgba(171, 213, 244, 0.3)',
      }
    },
  },
  plugins: [
    require('tailwind-typewriter')({
        wordsets: {
            info: {
                words: ['Track your data.', 'Share it with your doctor.', 'Improve your global health.'],
                repeat: -1,
                writeSpeed: 0.1,
                pauseBetween: 1
            }
        }
    })
  ],
}
