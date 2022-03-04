module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./styles/variables.scss";`,
  },
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  cleanupIDs: false
                }
              ]
            }
          }
        }
      ]
    });

    return config;
  }
}

