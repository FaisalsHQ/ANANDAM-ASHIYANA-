'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';
import {
  SITE_ADDRESS,
  CONSULTANT_PHONE,
  CONSULTANT_EMAIL,
  DISCLAIMER_SHORT,
  getWhatsAppLink,
  PAGE_WA_MESSAGES,
} from '@/lib/constants';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Contact Page');

  const openModal = (src = 'Contact Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Contact RERA Consultant Team' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Authorized RERA Real Estate Consultant
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Contact Us — Anandam Ashiyana Sector 36 Jhajjar
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Get in touch with our expert property advisors for current plot availability, price breakdown, bank loan coordination, and free site visit scheduling.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
                Reach Out Directly
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
                Consultant Office & Site Location
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <span className="text-xl">📍</span>
                <h3 className="font-serif text-base font-bold text-[#1B1814]">Site Address</h3>
                <p>{SITE_ADDRESS}</p>
              </div>

              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <span className="text-xl">📞</span>
                <h3 className="font-serif text-base font-bold text-[#1B1814]">Phone / WhatsApp Inquiry</h3>
                <p>
                  Call / WhatsApp: <a href={`tel:${CONSULTANT_PHONE}`} className="font-bold text-[#8C6A2F] hover:underline">{CONSULTANT_PHONE}</a>
                </p>
                <p className="text-xs text-[#A39A8B]">Timings: 9:00 AM – 8:00 PM (Mon - Sun)</p>
              </div>

              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <span className="text-xl">✉️</span>
                <h3 className="font-serif text-base font-bold text-[#1B1814]">Email Inquiry</h3>
                <p>
                  Write to us: <a href={`mailto:${CONSULTANT_EMAIL}`} className="font-bold text-[#8C6A2F]">{CONSULTANT_EMAIL}</a>
                </p>
              </div>
            </div>

            {/* Disclaimer box */}
            <div className="p-4 bg-[#24201A] text-[#D9C7A8] border border-[#3F3A33] rounded-xl text-xs leading-relaxed space-y-1">
              <span className="text-[#B08D4F] font-bold block">Important Disclaimer:</span>
              <p>{DISCLAIMER_SHORT}</p>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6 bg-[#1B1814] p-6 rounded-2xl text-[#FFFcf7] border border-[#3F3A33] shadow-xl h-fit">
            <LeadForm
              source="Contact Page Form"
              headline="Send Us an Inquiry"
              subheadline="Enter your details below and our site advisor will contact you within 15 minutes."
              buttonText="Submit Inquiry Now"
            />
          </div>
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="contact" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="contact" />
      <Footer />
    </div>
  );
}
