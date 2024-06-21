/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental:{
        fallbackNodePolyfills: false,
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

