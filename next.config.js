module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: "/news", destination: "/", permanent: false }];
  },
};
