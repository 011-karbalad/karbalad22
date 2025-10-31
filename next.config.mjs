/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export in ./out for static hosting
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
