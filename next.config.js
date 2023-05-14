const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n,
	webpack: config => {
		config.module.rules.push({
			test: /\.glsl/,
			type: "asset/source",
		});
		return config;
	},
};

module.exports = nextConfig;
