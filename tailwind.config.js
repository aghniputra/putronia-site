/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        navbar: '7%',
      },
      padding: {
        '96': '384px',
        '42': '168px'
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
        Inter: ["Inter"]
      },
      fontSize: {
        Title: '5.625rem',
        Subtitle: '2.5rem',
        Heading1: ['1.25rem', {letterSpacing:'0.25rem'}],
        Heading2: '1.25rem',
        Menu: ['0.75rem', {letterSpacing:'0.315rem'}],
        Body: '0.875rem',
        Backtext: ['15rem', {letterSpacing:'-1.05rem'}]
      },
      backgroundImage: {
        'icy-blue': "url('/public/images/background.png')"
      },
      backgroundSize: {
        default: '100% 100vw',
      },
      colors: {
        'primary-blue': '#27506E',
        'neutral-black': '#000000',
        'ice-blue': '#88B3C7'
      },
      gap: {
        '-2': '-0.5rem',
        '74' : '9.25rem',
        '18' : '4.5rem'
      },
      borderRadius: {
        '20' : '1.25rem'
      },
    },
  },
  plugins: [
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
  })
  ],
}

