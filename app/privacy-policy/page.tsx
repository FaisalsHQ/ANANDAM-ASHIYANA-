'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';
import { CONSULTANT_EMAIL, CONSULTANT_PHONE } from '@/lib/constants';

export default function PrivacyPolicyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Privacy Policy');

  const openModal = (src = 'Privacy Policy') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <h1 className="font-serif text-3xl font-bold text-[#1B1814]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#A39A8B]">Last Updated: August 2026</p>

          <p>
            This Privacy Policy describes how our authorized real estate consultancy platform ("we", "us", "our") collects, uses, and safeguards personal information submitted by users ("you", "your") visiting our website for Anandam Ashiyana, Sector 36, Jhajjar.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            1. Information We Collect
          </h2>
          <p>
            When you submit an inquiry, request a call back, or book a site visit on our website, we collect personal contact information including your Full Name, Mobile Phone Number, Email Address, and preferred plot requirements.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>To respond to your specific plot price, size, or layout inquiries.</li>
            <li>To send you requested brochure PDFs, cost sheets, and layout maps via WhatsApp, SMS, or Email.</li>
            <li>To coordinate free site visit pickup and schedule appointments with our site advisors.</li>
            <li>To inform you about fresh inventory releases, phase launches, or price revisions.</li>
          </ul>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            3. Data Protection & Non-Sharing Commitment
          </h2>
          <p>
            We respect your privacy. We do not sell, rent, or trade your personal contact details to unauthorized third-party telemarketers or external agencies. Your information is strictly accessed by our internal authorized sales and customer service advisors.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            4. Communication Opt-Out
          </h2>
          <p>
            If you wish to stop receiving updates or WhatsApp communications from our team, you can opt out at any time by replying "STOP" on WhatsApp or sending an email to {CONSULTANT_EMAIL} or calling {CONSULTANT_PHONE}.
          </p>

          <h2 className="font-serif text-lg font-bold text-[#1B1814] pt-2">
            5. Cookies and Analytics
          </h2>
          <p>
            Our website uses standard website analytics tools and essential browser storage to optimize user browsing experience, monitor site performance, and improve navigation.
          </p>
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="privacy" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="privacy" />
      <Footer />
    </div>
  );
}
