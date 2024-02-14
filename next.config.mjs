const environment = process.env.NODE_ENV ||= "development";

/** @type {import('next').NextConfig} */
const nextConfig = {};
if (environment === "production") {
    nextConfig["output"] = "export";
    nextConfig["images"]["unoptimized"] = true;
}

export default nextConfig;
