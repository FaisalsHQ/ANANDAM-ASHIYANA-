import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/about.html', destination: '/about' },
      { source: '/project-overview.html', destination: '/project-overview' },
      { source: '/price-payment-plan.html', destination: '/price-payment-plan' },
      { source: '/master-plan.html', destination: '/master-plan' },
      { source: '/amenities.html', destination: '/amenities' },
      { source: '/location.html', destination: '/location' },
      { source: '/ddjay-guide.html', destination: '/ddjay-guide' },
      { source: '/why-jhajjar.html', destination: '/why-jhajjar' },
      { source: '/gallery.html', destination: '/gallery' },
      { source: '/site-visit.html', destination: '/site-visit' },
      { source: '/faq.html', destination: '/faq' },
      { source: '/blog/index.html', destination: '/blog' },
      { source: '/blog/anandam-ashiyana-review.html', destination: '/blog/anandam-ashiyana-review' },
      { source: '/blog/ddjay-plots-sector-36-jhajjar.html', destination: '/blog/ddjay-plots-sector-36-jhajjar' },
      { source: '/blog/anandam-ashiyana-vs-gurgaon-plots.html', destination: '/blog/anandam-ashiyana-vs-gurgaon-plots' },
      { source: '/blog/rera-and-licence-explained.html', destination: '/blog/rera-and-licence-explained' },
      { source: '/contact.html', destination: '/contact' },
      { source: '/privacy-policy.html', destination: '/privacy-policy' },
      { source: '/terms.html', destination: '/terms' },
      { source: '/disclaimer.html', destination: '/disclaimer' },
      { source: '/thank-you.html', destination: '/thank-you' },
    ];
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
