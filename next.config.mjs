/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old standalone pages now live as sections on the home page.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
