/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint:{
        ignoreDuringBuilds: true,
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'files.stripe.com'
            }
        ],
    }
};

export default nextConfig;

