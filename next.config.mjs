// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

// The standalone output is useful for deployment, as it creates a self-contained
//  version of your Next.js application that can be easily deployed without 
// requiring additional dependencies.

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // output: 'export',
    // distDir: 'dist',
};
 
export default withNextIntl(nextConfig);

