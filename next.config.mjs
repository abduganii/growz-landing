import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configuration options can go here
  images: {
    domains:["growz-dev-files.s3.eu-central-1.amazonaws.com",'agromart-agronom.s3.eu-central-1.amazonaws.com'],
    unoptimized: true, // Отключает оптимизацию изображений
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default withNextIntl(nextConfig);