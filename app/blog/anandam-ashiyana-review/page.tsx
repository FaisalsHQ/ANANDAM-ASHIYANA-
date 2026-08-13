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
import { RERA_NUMBER, LICENCE_NUMBER, STARTING_PRICE } from '@/lib/constants';

export default function ReviewBlogPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Blog: Anandam Ashiyana Review');

  const openModal = (src = 'Blog: Anandam Ashiyana Review') => {
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
          { label: 'Anandam Ashiyana Review' },
        ]}
      />

      {/* Article Header */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <div className="flex items-center gap-3 text-xs text-[#B08D4F] font-bold uppercase tracking-widest">
            <span>Project Review & Analysis</span>
            <span>•</span>
            <span>August 10, 2026</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Sector 36 Jhajjar Review: Price, Layout & Location Analysis
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] leading-relaxed">
            An in-depth review evaluating HRERA approval HRERA-PKL-JJR-750-2025, plot size categories, infrastructure quality, and long-term capital growth potential.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-3xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl text-xs space-y-1">
            <span className="text-[#8C6A2F] font-bold uppercase tracking-wider block">Quick Summary Box</span>
            <p><strong>Project Name:</strong> Anandam Ashiyana (DDJAY Affordable Plots)</p>
            <p><strong>Location:</strong> Sector 36, Jhajjar, Haryana</p>
            <p><strong>HRERA Registration:</strong> {RERA_NUMBER}</p>
            <p><strong>DTCP Licence:</strong> No. {LICENCE_NUMBER}</p>
            <p><strong>Starting Price:</strong> {STARTING_PRICE} onwards</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              1. Introduction: What makes Anandam Ashiyana a key township in Jhajjar?
            </h2>
            <p>
              As real estate values across core Gurgaon and Dwarka Expressway touch peak highs, smart homebuyers and land investors are increasingly turning toward Haryana&apos;s strategic government-licensed DDJAY platted developments. <strong>Anandam Ashiyana</strong> in Sector 36, Jhajjar represents one of the most significant newly licensed affordable residential plot townships in the region.
            </p>
            <p>
              Spanning 12.4625 acres with 184 planned plots, the township is fully approved by the Department of Town & Country Planning (DTCP Haryana) under Licence No. 79 of 2025 and registered with Haryana RERA (HRERA-PKL-JJR-750-2025).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              2. Location Connectivity & Infrastructure Drivers
            </h2>
            <p>
              Situated right in Sector 36 on the Chuchakwas / Talao approach belt, Anandam Ashiyana enjoys exceptional proximity to key transit points and employment hubs:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong>2 Minutes:</strong> Jhajjar Railway Station & Pratapgarh Farms</li>
              <li><strong>3 Minutes:</strong> Main Jhajjar City Market & Bus Stand</li>
              <li><strong>20 Minutes:</strong> Reliance MET Industrial Smart City</li>
              <li><strong>25 Minutes:</strong> AIIMS National Cancer Institute (Badsa)</li>
              <li><strong>45 Minutes:</strong> Gurugram Cyber Hub via KMP Highway</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              3. Plot Sizes & Construction Permissibility
            </h2>
            <p>
              The township offers plot categories ranging from 72 sq. yd. to 179 sq. yd., designed under DDJAY guidelines. Plot owners are granted permissions to construct up to <strong>Stilt + 4 Independent Floors</strong> with independent registry rights per floor.
            </p>
            <p>
              This flexibility provides an excellent opportunity for end-users seeking custom independent home construction, as well as investors planning rental income generation from multiple floors.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              4. Pricing Verdict & Final Rating
            </h2>
            <p>
              With prices starting at <strong>{STARTING_PRICE}</strong>, Anandam Ashiyana presents a highly competitive price-to-value ratio when compared to adjacent Gurgaon corridors. Its 100% clear government licensing, gated community infrastructure, and high rental demand from nearby industrial and healthcare hubs make it a top recommendation for land buyers in 2026.
            </p>
            <div className="p-5 bg-[#2F4A3A]/10 border border-[#2F4A3A]/40 rounded-xl space-y-1 text-[#2F4A3A]">
              <h4 className="font-bold text-sm">Verdict: Highly Recommended (4.8 / 5.0)</h4>
              <p className="text-xs">Ideal for both end-users seeking peaceful gated living and investors targeting 15-20% annual land appreciation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Blog: Anandam Ashiyana Review Form"
            headline="Request Comprehensive Project Cost Sheet"
            subheadline="Get exact plot numbers, pricing breakdown, and layout map sent on WhatsApp."
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
