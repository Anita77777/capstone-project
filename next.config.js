/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['unsplash.com', 'books.google.com'],
	},
};

module.exports = nextConfig;
