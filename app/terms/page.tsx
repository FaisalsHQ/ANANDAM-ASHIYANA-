'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';

export default function TermsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Terms Page');

  const openModal = (src = 'Terms Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <h1 className="font-serif text-3xl font-bold text-[#1B1814]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#A39A8B]">Last Updated: August 2026</p>

          <p>
            Welcome to our authorized real estate informational platform for <strong>Anandam Ashiyana, Sector 36, Jhajjar</strong>. By browsing this website or submitting an inquiry form, you agree to comply with and be bound by the following Terms & Conditions.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            1. Informational & Advisory Purpose
          </h2>
          <p>
            This website is operated by an authorized real estate consultant for information, lead generation, and customer advisory purposes. It provides details regarding DTCP Licence No. 79 of 2025 and HRERA No. HRERA-PKL-JJR-750-2025. All layout maps, price lists, and amenities renders are illustrative representations meant to guide prospective plot buyers.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            2. Price & Availability Revisions
          </h2>
          <p>
            All plot prices, PLC charges, government levies, and payment milestone structures are subject to change as per developer releases and DTCP regulations. Final allotment terms, plot dimensions, and pricing are subject to execution of the official Builder Buyer Agreement (BBA).
          </p>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            3. Intellectual Property & Brand Names
          </h2>
          <p>
            Project names, logos, trademarks, and statutory licenses belong to their respective registered legal owners. This website uses these identifiers strictly for informational context to represent the project accurately to end-use buyers.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            4. Limitation of Liability
          </h2>
          <p>
            While we strive to maintain accurate, up-to-date project information, users are advised to verify original DTCP approvals, HRERA registration details, and site physical boundaries independently before entering into financial agreements.
          </p>
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="terms" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="terms" />
      <Footer />
    </div>
  );
}
