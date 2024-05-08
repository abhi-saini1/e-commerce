/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
        domains:[
            "lh3.googleusercontent.com"
        ],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'files.stripe.com'
            }
        ]
    }
};

export default nextConfig;
