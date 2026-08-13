'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';

export default function BlogIndexPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Blog Index Page');

  const openModal = (src = 'Blog Index Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const blogPosts = [
    {
      slug: 'anandam-ashiyana-review',
      title: 'Anandam Ashiyana Sector 36 Jhajjar Review: Price, Layout & Location Analysis',
      excerpt: 'An unbiased comprehensive review of Anandam Ashiyana DDJAY plots in Jhajjar, analyzing HRERA approval HRERA-PKL-JJR-750-2025, location connectivity, plot sizes, and price appreciation potential.',
      date: 'August 10, 2026',
      readTime: '6 min read',
      category: 'Project Review'
    },
    {
      slug: 'ddjay-plots-sector-36-jhajjar',
      title: 'Why DDJAY Affordable Plots in Sector 36 Jhajjar Are the Top Choice for Land Buyers',
      excerpt: 'Explore how Deen Dayal Jan Awas Yojana (DDJAY) in Jhajjar empowers homebuyers with 100% legal freehold land registry, Stilt+4 construction permissions, and high rental demand.',
      date: 'August 08, 2026',
      readTime: '5 min read',
      category: 'Policy & DDJAY'
    },
    {
      slug: 'anandam-ashiyana-vs-gurgaon-plots',
      title: 'Anandam Ashiyana Jhajjar vs Gurgaon Plots: Detailed Cost & ROI Comparison',
      excerpt: 'Comparing land ownership in Sector 36 Jhajjar starting at ₹48.43 Lakh* versus micro-markets in Gurgaon demanding ₹2 Cr+. Why smart land investors are choosing Jhajjar growth corridor.',
      date: 'August 05, 2026',
      readTime: '7 min read',
      category: 'Investment Strategy'
    },
    {
      slug: 'rera-and-licence-explained',
      title: 'DTCP Licence 79 of 2025 & HRERA Registration Explained for Anandam Ashiyana',
      excerpt: 'A complete buyer guide decoding DTCP Licence No. 79 of 2025 and HRERA No. HRERA-PKL-JJR-750-2025. What legal guarantees and buyer protections exist for plot allotment.',
      date: 'August 01, 2026',
      readTime: '5 min read',
      category: 'Legal & RERA'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Blog & Real Estate News' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Market Insights & Legal Analysis
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Jhajjar — Real Estate Insights & News
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            In-depth project reviews, DDJAY policy breakdown, Jhajjar infrastructure updates, and smart land investment guides.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#A39A8B]">
                    <span className="px-2.5 py-1 bg-[#1B1814] text-[#B08D4F] font-bold rounded-md uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>{post.date} • {post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#1B1814] hover:text-[#8C6A2F] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-[#3F3A33] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#B08D4F] hover:text-[#8C6A2F] uppercase tracking-wider gap-1"
                  >
                    <span>Read Full Article</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Blog Index Form"
            headline="Subscribe to Jhajjar Real Estate Updates"
            subheadline="Get fresh market reports, price revision alerts & layout releases on WhatsApp."
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="blog" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="blog" />
      <Footer />
    </div>
  );
}
