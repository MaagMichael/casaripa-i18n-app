import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    output: 'standalone',
    // output: 'export',
    // distDir: 'dist',

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'maps.google.com',
          },
        ],
      },
};

export default withNextIntl(nextConfig);

// output: 'standalone':

// Creates a standalone production build that includes the Node.js server
// Produces a self-contained deployment package with server components
// Suitable for containerized deployments (Docker)
// Supports all Next.js features including API routes and server-side rendering
// Better for dynamic content and full-stack applications

// output: 'export':

// Generates static HTML/CSS/JS files (static site generation)
// Creates a purely static build without any server components
// Perfect for static hosting platforms like GitHub Pages, Netlify, Vercel
// Does not support server-side features like API routes
// Better for purely static content that doesn't need server functionality
