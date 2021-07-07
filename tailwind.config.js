module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    darkMode: false,
    theme: {
        fontFamily: {
          'serif': ['Arvo', 'serif']
        },
        extend: {
          spacing: {
            '112.5': '450px',
            '137.5': '550px'
          }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
