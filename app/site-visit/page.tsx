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
import { CONSULTANT_PHONE, getWhatsAppLink, PAGE_WA_MESSAGES } from '@/lib/constants';

export default function SiteVisitPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Site Visit Page');

  const openModal = (src = 'Site Visit Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Schedule Free Site Visit' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Guided On-Site Inspection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Schedule a Free Site Visit to Anandam Ashiyana
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Inspect plot demarcations, 24m wide entrance roads, central park boundaries, and available plot inventory with our expert site consultants in Sector 36, Jhajjar.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
                What to Expect During Your Tour
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
                A Comprehensive 45-Minute Site Tour
              </h2>
              <p>
                A site visit gives you first-hand clarity on the township location, road access, and surrounding development momentum in Sector 36 Jhajjar. Our RERA consultant team accompanies you throughout the tour to answer all questions.
              </p>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl flex gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <h4 className="font-bold text-[#1B1814] text-xs">1. Physical Plot Location Check</h4>
                  <p className="text-xs text-[#A39A8B]">Walk the exact plot boundaries, inspect Vastu facing directions, and check proximity to parks.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl flex gap-3">
                <span className="text-xl">🛣️</span>
                <div>
                  <h4 className="font-bold text-[#1B1814] text-xs">2. 24m & 9m Road Infrastructure Inspection</h4>
                  <p className="text-xs text-[#A39A8B]">Examine wide approach roads, stormwater drainage lines, and street lighting preparation.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl flex gap-3">
                <span className="text-xl">📜</span>
                <div>
                  <h4 className="font-bold text-[#1B1814] text-xs">3. Legal Document Verification On-Site</h4>
                  <p className="text-xs text-[#A39A8B]">Verify original DTCP approved layout map, HRERA registration certificate, and builder buyer agreement terms.</p>
                </div>
              </div>

              <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl flex gap-3">
                <span className="text-xl">🚗</span>
                <div>
                  <h4 className="font-bold text-[#1B1814] text-xs">4. Free Pickup & Drop Assistance</h4>
                  <p className="text-xs text-[#A39A8B]">Complimentary cab pickup available for serious buyers from Jhajjar, Bahadurgarh, or Gurgaon (upon advance request).</p>
                </div>
              </div>
            </div>

            {/* Direct Call / WA Box */}
            <div className="p-5 bg-[#1B1814] text-[#FFFcf7] rounded-2xl space-y-3 border border-[#B08D4F]/30">
              <h3 className="font-serif text-base font-bold text-[#B08D4F]">
                Prefer Direct WhatsApp Booking?
              </h3>
              <p className="text-xs text-[#D9C7A8]">
                Connect immediately with our site manager on WhatsApp or phone to pick your preferred weekend time slot.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={`tel:${CONSULTANT_PHONE}`}
                  className="px-4 py-2 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-md"
                >
                  Call {CONSULTANT_PHONE}
                </a>
                <a
                  href={getWhatsAppLink(PAGE_WA_MESSAGES.siteVisit)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-md"
                >
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Form */}
          <div className="lg:col-span-5 bg-[#1B1814] p-6 rounded-2xl text-[#FFFcf7] border border-[#3F3A33] shadow-xl h-fit">
            <LeadForm
              source="Site Visit Booking Form"
              headline="Book Your Free Site Visit"
              subheadline="Fill in your details below and our team will confirm your time slot & send GPS pin."
              buttonText="Confirm My Site Visit Slot"
            />
          </div>
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="siteVisit" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="siteVisit" />
      <Footer />
    </div>
  );
}
