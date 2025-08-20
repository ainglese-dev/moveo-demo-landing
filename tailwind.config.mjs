/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'moveo': {
          'deep-blue': '#1F2A8C', // PANTONE 2748C approximation
          'bright-blue': '#4666FF', // PANTONE 2738C approximation  
          'purple': '#8A30FF', // PANTONE 274BC approximation
          'yellow': '#FFF241', // PANTONE 12-C approximation
          'secondary-purple': '#A85FF7',
          'accent-blue': '#3A50FF',
          'accent-red': '#FF564C'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'body': ['18px', '1.6'],
        'lg-body': ['20px', '1.6']
      }
    },
  },
  plugins: [],
}