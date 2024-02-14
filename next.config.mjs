const environment = process.env.NODE_ENV || "development";

/** @type {import('next').NextConfig} */
const nextConfig = environment === "production" ? {output: "export"} : {};

export default nextConfig;
