import React from 'react';
import {
  SITE_NAME,
  SITE_URL,
  EMAILS,
  PHONE_DISPLAY,
  DEVELOPER_NAME,
  RERA_NUMBER,
  PROJECT_LOCATION,
  STARTING_PRICE,
} from '@/lib/constants';

interface JsonLdProps {
  type?: 'home' | 'page' | 'faq' | 'article';
  faqData?: Array<{ question: string; answer: string }>;
  articleData?: {
    headline: string;
    description: string;
    datePublished: string;
    url: string;
  };
}

export default function JsonLd({ type = 'page', faqData, articleData }: JsonLdProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Anandam Ashiyana Consultant (anandamashiyana.in)',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/hero-banner.jpg`,
    description:
      'RERA-verified real estate consultant providing verified plot inventory, price lists, and site visit assistance for Anandam Ashiyana, Sector 36, Jhajjar. Developed by Prish Realty Pvt. Ltd.',
    telephone: '+911234567890',
    email: EMAILS.primary,
    areaServed: ['Jhajjar', 'Gurugram', 'Delhi NCR', 'Haryana'],
    priceRange: '₹43.77 Lakh - ₹85 Lakh',
  };

  const realEstateListingSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Anandam Ashiyana — Freehold DDJAY Plots in Sector 36 Jhajjar',
    description:
      'Anandam Ashiyana is a 12.46-acre DDJAY residential plotted colony by Prish Realty Pvt. Ltd. featuring 184 plots ranging from 72 to 179 sq. yd. with 24m approach roads and luxury clubhouse.',
    url: SITE_URL,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '4377000',
      priceValidationUntil: '2027-12-31',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sector 36',
      addressRegion: 'Jhajjar, Haryana',
      addressCountry: 'IN',
    },
  };

  const faqSchema =
    faqData && faqData.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  const articleSchema =
    articleData
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: articleData.headline,
          description: articleData.description,
          datePublished: articleData.datePublished,
          author: {
            '@type': 'Organization',
            name: 'Editorial Team, anandamashiyana.in',
          },
          publisher: {
            '@type': 'Organization',
            name: 'anandamashiyana.in',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleData.url,
          },
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {type === 'home' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateListingSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </>
  );
}
