/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // The PostCSS plugin is distributed as a separate package.
    // Use the official `@tailwindcss/postcss` package here.
    '@tailwindcss/postcss': {},
    // Add `autoprefixer` if you install it later.
  },
}

export default config
