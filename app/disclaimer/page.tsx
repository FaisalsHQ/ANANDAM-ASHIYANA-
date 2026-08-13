'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';
import {
  PRICE_DISCLAIMER,
  IDENTITY_DISCLAIMER,
  RERA_NUMBER,
  LICENCE_NUMBER,
  RERA_URL,
} from '@/lib/constants';

export default function DisclaimerPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Disclaimer Page');

  const openModal = (src = 'Disclaimer Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Disclaimer & Legal Notice' }]} />

      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <h1 className="font-serif text-3xl font-bold text-[#1B1814]">
            Mandatory Real Estate Disclaimer
          </h1>

          <div className="p-5 bg-[#24201A] text-[#FFFcf7] border border-[#3F3A33] rounded-2xl space-y-3">
            <h2 className="font-serif text-lg font-bold text-[#B08D4F]">
              1. Identity & Representation Clarification
            </h2>
            <p className="text-xs text-[#D9C7A8] leading-relaxed">
              {IDENTITY_DISCLAIMER}
            </p>
          </div>

          <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl space-y-3">
            <h2 className="font-serif text-lg font-bold text-[#1B1814]">
              2. Price, Size & Payment Schedule Disclaimer
            </h2>
            <p className="text-xs text-[#3F3A33] leading-relaxed">
              {PRICE_DISCLAIMER}
            </p>
          </div>

          <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl space-y-3">
            <h2 className="font-serif text-lg font-bold text-[#1B1814]">
              3. Statutory HRERA & DTCP Details
            </h2>
            <p className="text-xs text-[#3F3A33] leading-relaxed">
              Project Registration Number: <strong>{RERA_NUMBER}</strong> (HRERA Panchkula). DTCP Haryana Licence Number: <strong>{LICENCE_NUMBER}</strong>. Approved Layout Area: 12.4625 Acres (184 Residential Plots in Sector 36, Jhajjar, Haryana).
            </p>
            <p className="text-xs text-[#8C6A2F]">
              Official Haryana RERA Portal: <a href={RERA_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold">haryanarera.gov.in</a>
            </p>
          </div>
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="disclaimer" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="disclaimer" />
      <Footer />
    </div>
  );
}
