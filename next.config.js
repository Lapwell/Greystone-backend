// /** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


//This solves the "module 'fs' not found: cant resolve" error
// const nextConfig = {
//     reactStrictMode: true,
//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           fs: false,
//         },
//       };
//       return config;
//     },
//   };

//   module.exports = nextConfig;
