// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
// };
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    trailingSlash: true,

    images: {
        loader: "custom",
    },
};

export default nextConfig;

