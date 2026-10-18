import type { NextConfig } from 'next'

// Static export for GitHub Pages: every route becomes an HTML file in out/.
// trailingSlash makes /it/ resolve to /it/index.html on Pages.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
