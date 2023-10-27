/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/country-search",
                permanent: true,
            },
        ];
    },
};

module.exports = {
    experimental: {
        serverActions: true,
    },
};

module.exports = {
    reactStrictMode: true,

    images: {
        domains: ["res.cloudinary.com"],
    },
};

module.exports = {
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "http://localhost:3001/:path*",
            },
        ];
    },
};
