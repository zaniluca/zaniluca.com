/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
    localeDetection: true,
    domains: [
      {
        domain: "it.zaniluca.com",
        defaultLocale: "it",
      },
      {
        domain: "en.zaniluca.com",
        defaultLocale: "en",
      },
    ],
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
