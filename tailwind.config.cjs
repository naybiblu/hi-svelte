/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
			'0%': { opacity: '0%' },
			'100%': { opacity: '100%' }
		},
		fadeOut: {
			'0%': { opacity: '100%' },
			'100%': { opacity: '0%' }
		},
		glow: {
			'0%': { boxShadow: '0 0 10px -10px' },
			'100%': { boxShadow: '0 0 10px 10px' }
		}
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
		fadeOut: 'fadeOut 1s ease-out',
		glow: 'glow 1s infinite'
      }
    },
    screens: {
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },
			xs: { max: '475px' }
		}
  },
  plugins: [],
}
