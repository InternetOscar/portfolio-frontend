/** @type {import('next').NextConfig} */

const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "portfolio-backend-scph.onrender.com",
			},
			{
				protocol: "https",
				hostname: "bookshop.ge",
			},
			{
				protocol: "https",
				hostname: "m.media-amazon.com",
			},
			{
				protocol: "https",
				hostname: "encrypted-tbn0.gstatic.com",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
	},
};

module.exports = nextConfig;
