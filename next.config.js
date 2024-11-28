/** @type {import("next").NextConfig} */
const coreConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Add basePath if your app is not served from the root
    // basePath: '/click_to_punch_nlp',

    // Enable static file serving through the /public directory
    distDir: '.next',

    // Add asset prefix if needed
    // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : '',

    // Handle redirects if needed
    async redirects() {
        return [];
    },

    // Handle rewrites if needed
    async rewrites() {
        return [];
    },

    // Enable strict mode
    reactStrictMode: true,
};


import {withSentryConfig} from "@sentry/nextjs";

const config = withSentryConfig(coreConfig,
    {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        org: "timothy-lin",
        project: "javascript-nextjs",

        // Only print logs for uploading source maps in CI
        silent: !process.env.CI,

        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        // Upload a larger set of source maps for prettier stack traces (increases build time)
        widenClientFileUpload: true,

        // Automatically annotate React components to show their full name in breadcrumbs and session replay
        reactComponentAnnotation: {
            enabled: true,
        },

        // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
        // This can increase your server load as well as your hosting bill.
        // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
        // side errors will fail.
        tunnelRoute: "/monitoring",

        // Hides source maps from generated client bundles
        hideSourceMaps: true,

        // Automatically tree-shake Sentry logger statements to reduce bundle size
        disableLogger: true,

        // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
        // See the following for more information:
        // https://docs.sentry.io/product/crons/
        // https://vercel.com/docs/cron-jobs
        automaticVercelMonitors: true,
    });


export default config;
