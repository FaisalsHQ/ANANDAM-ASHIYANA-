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
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('FAQ Page');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const openModal = (src = 'FAQ Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="faq" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Frequently Asked Questions (FAQ)' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Transparent Answers for Home Buyers
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Frequently Asked Questions — Anandam Ashiyana Jhajjar
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Find immediate answers regarding RERA approvals, DTCP licensing, plot sizes, pricing, bank loans, and site visits in Sector 36, Jhajjar.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#1B1814]">
                      {item.q}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#1B1814] text-[#B08D4F] flex items-center justify-center font-bold text-xs shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#3F3A33] leading-relaxed border-t border-[#D9C7A8]/50 bg-[#FFFcf7]/50">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ask Unanswered Question Banner */}
          <div className="p-6 bg-[#24201A] text-[#FFFcf7] rounded-2xl border border-[#3F3A33] text-center space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#B08D4F]">
              Have a Specific Legal or Loan Question Not Answered Here?
            </h3>
            <p className="text-xs text-[#D9C7A8] max-w-xl mx-auto">
              Our dedicated RERA consultant team is available to assist you with customized payment plan calculations, bank eligibility documents, and site visit arrangements.
            </p>
            <button
              onClick={() => openModal('FAQ Ask Question Button')}
              className="px-6 py-3 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all cursor-pointer"
            >
              Ask Our RERA Consultant
            </button>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="FAQ Page Form"
            headline="Request Comprehensive Project Brochure"
            subheadline="Get complete FAQ handbook & DTCP approved layout map on WhatsApp."
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="faq" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="faq" />
      <Footer />
    </div>
  );
}
