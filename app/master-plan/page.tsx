'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';
import {
  PROJECT_AREA,
  TOTAL_PLOTS,
  COMMERCIAL_AREA,
  ROAD_WIDTHS,
  getWhatsAppLink,
  PAGE_WA_MESSAGES,
  BLUR_DATA_URL,
} from '@/lib/constants';

export default function MasterPlanPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Master Plan Page');

  const openModal = (src = 'Master Plan Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Master Plan & Approved Layout' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            12.4625-Acre Approved Site Layout
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Master Plan & Approved Layout
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Architectural organization of 184 residential plots, 24m wide sector roads, 9m internal streets, daily retail pocket, and central greens.
          </p>
        </div>
      </section>

      {/* Locked Layout Preview Section with Blur Overlay */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              DTCP Haryana Approved Map
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#1B1814] mt-1">
              Township Layout & Plot Demarcation
            </h2>
            <p className="text-xs text-[#3F3A33] mt-1">
              Unlock the high-resolution approved layout map and available plot numbers on WhatsApp.
            </p>
          </div>

          {/* Blur/Lock Interactive Box */}
          <div className="relative bg-[#24201A] border border-[#3F3A33] rounded-2xl overflow-hidden p-4 shadow-2xl">
            {/* Blurred Visual Background */}
            <div className="relative w-full h-[380px] rounded-xl overflow-hidden filter blur-md opacity-40 select-none pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80"
                alt="Anandam Ashiyana Master Plan Map"
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover"
              />
            </div>

            {/* Lock Overlay Form */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-[#1B1814]/80 backdrop-blur-sm">
              <div className="max-w-md w-full space-y-4">
                <div className="w-12 h-12 bg-[#B08D4F]/20 text-[#B08D4F] border border-[#B08D4F]/40 rounded-full flex items-center justify-center mx-auto text-xl">
                  🔒
                </div>
                <h3 className="font-serif text-xl font-bold text-[#FFFcf7]">
                  Unlock Official Layout PDF & Plot Map
                </h3>
                <p className="text-xs text-[#D9C7A8]">
                  Enter your details below to receive the high-resolution DTCP approved layout map with available plot numbers directly on WhatsApp.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => openModal('Unlock Layout Button')}
                    className="w-full py-3 px-6 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all cursor-pointer"
                  >
                    Send Layout Map on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Layout Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs text-[#3F3A33]">
            <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
              <h4 className="font-serif text-base font-bold text-[#1B1814]">🛣️ Road Hierarchy</h4>
              <p>
                Grand 24-metre wide main entrance approach road connecting to Sector 36 arterial roads, supplemented by 9-metre wide internal paved sector streets.
              </p>
            </div>
            <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
              <h4 className="font-serif text-base font-bold text-[#1B1814]">🏪 Commercial Pocket</h4>
              <p>
                Integrated 1,515.77 sq. yd. commercial retail space situated near the main entrance for everyday convenience and grocery shopping.
              </p>
            </div>
            <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
              <h4 className="font-serif text-base font-bold text-[#1B1814]">🌳 Green Infrastructure</h4>
              <p>
                Thoughtfully distributed park zones, jogging tracks, temple zone, and central clubhouse facilities catering to healthy community living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Read a Plot Number & Site Visit Tips */}
      <section className="py-12 bg-[#EFE6D8] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-xs text-[#3F3A33] leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              How to Evaluate a Plot Number on the Layout
            </h2>
            <p>
              When reviewing the Anandam Ashiyana master plan layout map, keep the following evaluation criteria in mind:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <li className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-lg">
                <strong>Facing Direction:</strong> East and North facing plots are frequently sought after for Vastu compliance and natural lighting.
              </li>
              <li className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-lg">
                <strong>Road Width Frontage:</strong> Plots situated on 9m internal roads provide quiet residential privacy, while 24m road plots offer wide views.
              </li>
              <li className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-lg">
                <strong>Park / Corner Premium:</strong> Two-side open corner plots provide enhanced ventilation and additional architectural design flexibility.
              </li>
              <li className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-lg">
                <strong>Proximity to Amenities:</strong> Evaluate distance to the clubhouse, parks, temple zone, and daily commercial shops.
              </li>
            </ul>
          </div>

          <div className="p-5 bg-[#24201A] text-[#FFFcf7] border border-[#3F3A33] rounded-xl space-y-2">
            <h3 className="font-serif text-base font-bold text-[#B08D4F]">
              📌 Site Visit Checklist
            </h3>
            <p className="text-xs text-[#D9C7A8]">
              When visiting Sector 36 Jhajjar for a physical site inspection:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-xs text-[#A39A8B]">
              <li>Verify ground demarcations and pillar numbers against the approved layout map.</li>
              <li>Inspect 24m approach road connectivity from Chuchakwas Road.</li>
              <li>Check boundary wall progress and gated security entry setup.</li>
              <li>Discuss current plot availability and booking terms with our RERA consultant team.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Master Plan Form"
            headline="Get Layout PDF on WhatsApp"
            subheadline="Receive official approved layout map with plot numbers in 2 minutes."
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="masterPlan" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="masterPlan" />
      <Footer />
    </div>
  );
}
