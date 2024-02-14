const environment = process.env.NODE_ENV ||= "development";

/** @type {import('next').NextConfig} */
let nextConfig = {};
if (environment === "production") {
    nextConfig = {...nextConfig, output: "export", images: {unoptimized: true}}
}

export default nextConfig;
