module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true, // Disable image optimization to fix Netlify build issues
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./styles/variables.scss";`,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
}

