/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
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
};

module.exports = nextConfig;
