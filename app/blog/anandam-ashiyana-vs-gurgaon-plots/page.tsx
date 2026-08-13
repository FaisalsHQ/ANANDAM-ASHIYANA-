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
import { STARTING_PRICE } from '@/lib/constants';

export default function CompareBlogPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Blog: Anandam Ashiyana vs Gurgaon');

  const openModal = (src = 'Blog: Anandam Ashiyana vs Gurgaon') => {
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
          { label: 'Anandam Ashiyana vs Gurgaon Plots' },
        ]}
      />

      {/* Article Header */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <div className="flex items-center gap-3 text-xs text-[#B08D4F] font-bold uppercase tracking-widest">
            <span>Investment Analysis</span>
            <span>•</span>
            <span>August 05, 2026</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Jhajjar vs Gurgaon Plots: Detailed Cost & ROI Comparison
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] leading-relaxed">
            Why smart land investors are choosing Sector 36 Jhajjar (starting at {STARTING_PRICE}) over saturated Gurgaon micro-markets demanding ₹2 Cr+ for comparable plot sizes.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-3xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              The Capital Outlay Dilemma in NCR Real Estate
            </h2>
            <p>
              Over the past 5 years, residential land rates along Dwarka Expressway, Sohna Road, and New Gurgaon have crossed ₹1.5 Lakh to ₹2.5 Lakh per square yard. For an average family or investor, purchasing a standard 100–150 sq. yd. plot in Gurgaon requires an upfront investment of ₹1.8 Cr to ₹3 Cr, excluding stamp duty and construction costs.
            </p>
            <p>
              In contrast, <strong>Anandam Ashiyana in Sector 36, Jhajjar</strong> offers DTCP-licensed DDJAY plots starting at <strong>{STARTING_PRICE}</strong> (~₹43.77 Lakh onwards), situated just 45 minutes from Cyber City Gurugram.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Side-by-Side Comparison Matrix
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-[#D9C7A8] rounded-xl overflow-hidden">
                <thead className="bg-[#1B1814] text-[#FFFcf7] font-serif uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3">Parameter</th>
                    <th className="p-3 bg-[#2F4A3A] text-white">Anandam Ashiyana (Jhajjar)</th>
                    <th className="p-3 bg-[#3F3A33] text-white">Gurgaon DDJAY / Platted Sector</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9C7A8] bg-[#F7F1E8]">
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">Starting Ticket Size</td>
                    <td className="p-3 font-bold text-[#2F4A3A]">₹43.77 Lakh* onwards</td>
                    <td className="p-3 text-[#3F3A33]">₹1.8 Cr – ₹3.5 Cr+</td>
                  </tr>
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">Drive to Cyber City</td>
                    <td className="p-3 font-semibold text-[#2F4A3A]">~45 Minutes via KMP / Highway</td>
                    <td className="p-3 text-[#3F3A33]">~30–45 Minutes (Traffic dependent)</td>
                  </tr>
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">Growth Horizon (3-5 Yrs)</td>
                    <td className="p-3 font-semibold text-[#2F4A3A]">High potential (Initial growth phase)</td>
                    <td className="p-3 text-[#3F3A33]">Moderate (Mature market)</td>
                  </tr>
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">Nearby Job Anchors</td>
                    <td className="p-3 font-semibold text-[#2F4A3A]">Reliance MET, AIIMS Badsa, IMT Kharkhoda</td>
                    <td className="p-3 text-[#3F3A33]">DLF Cyber City, Udyog Vihar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Conclusion: Why Smart Money is Pivoting to Jhajjar
            </h2>
            <p>
              While Gurgaon offers established corporate density, its high entry price limits room for rapid percentage capital appreciation. Jhajjar Sector 36 offers an early-entry window into an industrial power belt anchored by Reliance MET and Maruti Suzuki's plant at Kharkhoda—delivering higher ROI potential for initial land investors.
            </p>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Blog: Compare Form"
            headline="Request Cost Comparison Analysis"
            subheadline="Get detailed investment calculation sheet & site visit booking on WhatsApp."
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
