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

export default function WhyJhajjarPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Why Jhajjar Page');

  const openModal = (src = 'Why Jhajjar Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Why Sector 36 Jhajjar' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            NCR Real Estate Growth Corridor
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Why Invest in Sector 36, Jhajjar? Growth Drivers & ROI Potential
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Discover why Jhajjar is transforming from a quiet district headquarters into a high-yield industrial, educational, and residential investment hot-spot in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          {/* Executive Summary */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              The Shift Toward Western NCR Growth Corridors
            </h2>
            <p>
              Over the last decade, land prices in core Gurgaon and Dwarka Expressway micro-markets have escalated to levels beyond the reach of end-users and smart land investors seeking double-digit capital appreciation. As a result, capital flows are rapidly pivoting toward strategic peripheral belts equipped with world-class industrial hubs and expressways.
            </p>
            <p>
              <strong>Sector 36, Jhajjar</strong> stands at the forefront of this regional shift. Located just 45 minutes from Gurgaon Cyber Hub, Jhajjar combines affordable entry price points (starting from ₹43.77 Lakh* onwards) with government-backed infrastructure catalysts.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Four Pillars Driving Real Estate Growth in Jhajjar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-3">
                <span className="text-2xl">🏭</span>
                <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                  1. Industrial Expansion — Reliance MET & IMT Kharkhoda
                </h3>
                <p>
                  The presence of the 8,000+ acre Reliance MET Smart City and the nearby Maruti Suzuki plant at IMT Kharkhoda (~30 mins) is bringing billions in FDI and tens of thousands of skilled jobs. Executives, engineers, and workforce managers require modern gated housing in nearby Sector 36.
                </p>
              </div>

              <div className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-3">
                <span className="text-2xl">🏥</span>
                <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                  2. Institutional Ecosystem — AIIMS NCI Badsa & XLRI
                </h3>
                <p>
                  Jhajjar hosts premier national institutions including the AIIMS National Cancer Institute Badsa campus, IIT Delhi Extension, and XLRI Management institute. This high-income professional workforce fuels continuous rental demand and long-term capital appreciation.
                </p>
              </div>

              <div className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-3">
                <span className="text-2xl">🛣️</span>
                <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                  3. Seamless Regional Expressway Connectivity
                </h3>
                <p>
                  Direct access to Kundli-Manesar-Palwal (KMP) Expressway, National Highway 334B, and the proposed Orbital Rail Corridor positions Jhajjar as a major transit node connecting Delhi, Gurgaon, Rohtak, and Rewari.
                </p>
              </div>

              <div className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-3">
                <span className="text-2xl">📈</span>
                <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                  4. Unmatched Entry Value & Rental Yield
                </h3>
                <p>
                  Unlike high-rise apartments burdened with heavy maintenance costs, owning a DDJAY freehold plot allows buyers to construct multi-story rental floors or luxury independent villas, securing tangible land ownership with minimal recurring overheads.
                </p>
              </div>
            </div>
          </div>

          {/* Investment ROI Comparison */}
          <div className="p-6 bg-[#2F4A3A]/10 border border-[#2F4A3A]/40 rounded-2xl space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#2F4A3A]">
              💡 Smart Investor Insight: Land vs. High-Rise Apartments
            </h3>
            <p className="text-xs text-[#3F3A33] leading-relaxed">
              Real estate wealth in Delhi NCR has historically been created through land ownership. High-rise apartment structures depreciate over a 30-year lifecycle while incurring ₹5,000–10,000 monthly maintenance. Conversely, <strong>freehold land in a DTCP approved township</strong> appreciates exponentially over time as the surrounding city infrastructure matures.
            </p>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Why Jhajjar Form"
            headline="Download Jhajjar Real Estate Growth Report"
            subheadline="Get detailed micro-market pricing trends, rental yields & infrastructure updates."
            buttonText="Get Investment Report"
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="whyJhajjar" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="whyJhajjar" />
      <Footer />
    </div>
  );
}
