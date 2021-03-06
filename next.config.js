/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "en",
    localeDetection: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/curriculum",
        permanent: false,
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

module.exports = nextConfig;
