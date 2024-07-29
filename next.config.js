module.exports = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_API_LINK: process.env.NEXT_PUBLIC_API_LINK,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
