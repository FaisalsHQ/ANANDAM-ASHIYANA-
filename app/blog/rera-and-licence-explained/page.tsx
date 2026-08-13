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
import { RERA_NUMBER, LICENCE_NUMBER, RERA_URL } from '@/lib/constants';

export default function RERABlogPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Blog: Legal & RERA');

  const openModal = (src = 'Blog: Legal & RERA') => {
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
          { label: 'RERA & DTCP Licence Explained' },
        ]}
      />

      {/* Article Header */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <div className="flex items-center gap-3 text-xs text-[#B08D4F] font-bold uppercase tracking-widest">
            <span>Legal & Regulatory Compliance</span>
            <span>•</span>
            <span>August 01, 2026</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            DTCP Licence 79 of 2025 & HRERA Registration Explained for Anandam Ashiyana
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] leading-relaxed">
            A comprehensive legal guide for plot buyers decoding DTCP Licence No. 79 of 2025 and HRERA Registration No. {RERA_NUMBER}.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-3xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl text-xs space-y-2">
            <h3 className="font-serif font-bold text-[#1B1814]">Verified Government Approvals Checklist:</h3>
            <p><strong>DTCP Licence Number:</strong> Licence No. 79 of 2025 (Granted by Town & Country Planning Haryana)</p>
            <p><strong>HRERA Registration Number:</strong> {RERA_NUMBER}</p>
            <p><strong>Total Approved Area:</strong> 12.4625 Acres (184 Residential Plots)</p>
            <p><strong>Public Verification Portal:</strong> <a href={RERA_URL} target="_blank" rel="noopener noreferrer" className="text-[#8C6A2F] underline">haryanarera.gov.in</a></p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              What Does DTCP Licence No. 79 of 2025 Guarantee to Buyers?
            </h2>
            <p>
              A DTCP licence issued by the Director General of Town & Country Planning Haryana signifies that the land parcel has undergone rigorous title verification, zoning compliance, environmental clearance, and master plan alignment.
            </p>
            <p>
              For <strong>Anandam Ashiyana</strong>, Licence No. 79 of 2025 guarantees that the 12.4625-acre layout conforms to all DDJAY statutory mandates, including 24m wide entrance road access, internal 9m streets, commercial shopping space allocations, and public utility reserves.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              How HRERA Registration Protects Your Investment
            </h2>
            <p>
              Under the Real Estate (Regulation and Development) Act 2016, projects registered with HRERA Panchkula (Registration No. {RERA_NUMBER}) operate under strict buyer protection rules:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Dedicated Escrow Account:</strong> 70% of funds collected from plot buyers must be maintained in a separate project bank account dedicated exclusively to site development.</li>
              <li><strong>Timely Completion Mandate:</strong> The developer must complete site infrastructure and offer possession within the HRERA committed timeline.</li>
              <li><strong>Standard Builder Buyer Agreement:</strong> Pre-approved agreement terms prevent arbitrary price hikes or unilateral changes to layout plans.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              How to Verify HRERA Online
            </h2>
            <p>
              Buyers can easily verify the project credentials by visiting <a href={RERA_URL} target="_blank" rel="noopener noreferrer" className="text-[#8C6A2F] underline font-bold">haryanarera.gov.in</a>, navigating to the "Registered Projects" tab, and searching for <strong>HRERA-PKL-JJR-750-2025</strong> or selecting "Jhajjar" district.
            </p>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Blog: Legal RERA Form"
            headline="Request HRERA Certificate PDF"
            subheadline="Get official DTCP licence copy & approved layout map sent on WhatsApp."
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
