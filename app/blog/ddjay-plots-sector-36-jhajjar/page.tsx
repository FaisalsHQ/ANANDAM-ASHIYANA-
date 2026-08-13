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
import { RERA_NUMBER } from '@/lib/constants';

export default function DDJAYBlogPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Blog: DDJAY Sector 36');

  const openModal = (src = 'Blog: DDJAY Sector 36') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="article" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/blog' },
          { label: 'DDJAY Plots in Sector 36 Jhajjar' },
        ]}
      />

      {/* Article Header */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <div className="flex items-center gap-3 text-xs text-[#B08D4F] font-bold uppercase tracking-widest">
            <span>Policy & Housing Guide</span>
            <span>•</span>
            <span>August 08, 2026</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Why DDJAY Affordable Plots in Sector 36 Jhajjar Are the Top Choice for Land Buyers
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] leading-relaxed">
            Discover how Haryana's Deen Dayal Jan Awas Yojana policy protects buyers with legal title security, bank loan availability, and flexible Stilt+4 construction rights.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-3xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Understanding the Rise of DDJAY Townships in Haryana
            </h2>
            <p>
              Buying residential land in Delhi NCR has historically carried risks associated with unauthorized colonies, missing approvals, or delayed infrastructure. The Government of Haryana addressed this challenge by enacting the <strong>Deen Dayal Jan Awas Yojana (DDJAY)</strong> policy.
            </p>
            <p>
              Under DDJAY, private developers are granted licenses to build high-density, gated platted developments with mandated civic amenities—including 24m wide entrance roads, 9m internal paved streets, stormwater drains, daily retail pockets, and central green parks.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Why Sector 36 Jhajjar is the Perfect DDJAY Hub
            </h2>
            <p>
              Sector 36 Jhajjar offers a sweet spot for real estate growth. Positioned right on the edge of the expanding Jhajjar urban master plan, it provides easy access to the Railway Station, Secretariat, Reliance MET industrial corridor, and KMP Expressway.
            </p>
            <p>
              Projects like <strong>Anandam Ashiyana</strong> (HRERA No. {RERA_NUMBER}) exemplify the DDJAY vision—combining gated security and modern clubhouse facilities with affordable land pricing starting under ₹45 Lakh.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Top 4 Reasons Buyers Prefer DDJAY Plots over High-Rise Flats
            </h2>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li><strong>100% Freehold Ownership:</strong> You own the land beneath your feet, not just a floating air space in a high-rise.</li>
              <li><strong>Zero Maintenance Burden:</strong> Independent plot owners avoid heavy ₹5,000–10,000 monthly maintenance levies associated with multi-story complexes.</li>
              <li><strong>High Rental Yields:</strong> Constructing independent floors allows plot owners to rent out individual levels to professionals working in nearby industrial hubs.</li>
              <li><strong>Bank Financing Ease:</strong> Because DDJAY projects hold clear DTCP licenses, leading nationalized and private banks readily approve up to 70-80% plot loans.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Blog: DDJAY Sector 36 Form"
            headline="Get DDJAY Policy Guide & Plot List"
            subheadline="Receive government policy details & available plot inventory on WhatsApp."
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
