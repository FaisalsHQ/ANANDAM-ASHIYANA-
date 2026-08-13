import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/project-overview',
    '/price-payment-plan',
    '/master-plan',
    '/amenities',
    '/location',
    '/ddjay-guide',
    '/why-jhajjar',
    '/gallery',
    '/site-visit',
    '/faq',
    '/blog',
    '/blog/anandam-ashiyana-review',
    '/blog/ddjay-plots-sector-36-jhajjar',
    '/blog/anandam-ashiyana-vs-gurgaon-plots',
    '/blog/rera-and-licence-explained',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ];

  const now = new Date().toISOString();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/blog') ? 0.7 : 0.8,
  }));
}
