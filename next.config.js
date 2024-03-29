const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);

const config = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/page/1',
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = withTM(config);
