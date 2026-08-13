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
  SITE_NAME,
  SITE_DOMAIN,
  DEVELOPER_NAME,
  DEVELOPER_URL,
  RERA_NUMBER,
  RERA_DATE,
  RERA_URL,
  LICENCE_NUMBER,
  EMAILS,
  PHONE_DISPLAY,
  IDENTITY_DISCLAIMER,
  getWhatsAppLink,
  PAGE_WA_MESSAGES,
} from '@/lib/constants';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('About Page');

  const openModal = (src = 'About Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'About Consultant Role' }]} />

      {/* Main Content Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Transparent Advisory Service
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            About anandamashiyana.in — RERA-Verified Assistance for Anandam Ashiyana
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Helping genuine homebuyers and NRI investors discover verified inventory, conduct site visits, and navigate purchasing DDJAY plots in Sector 36, Jhajjar.
          </p>
        </div>
      </section>

      {/* Core Identity & Disclosure */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <div className="p-6 bg-[#24201A] text-[#FFFcf7] border border-[#3F3A33] rounded-2xl shadow-sm space-y-3">
            <h2 className="font-serif text-lg font-bold text-[#B08D4F] uppercase tracking-wider text-xs">
              Primary Identity & Legal Disclosure
            </h2>
            <p className="text-xs leading-relaxed text-[#EFE6D8]">
              {IDENTITY_DISCLAIMER}
            </p>
            <div className="pt-2 text-[11px] text-[#A39A8B] flex flex-wrap gap-4 border-t border-[#3F3A33]">
              <span><strong>Developer:</strong> {DEVELOPER_NAME}</span>
              <span><strong>HRERA No:</strong> {RERA_NUMBER} ({RERA_DATE})</span>
              <span><strong>DTCP Licence:</strong> {LICENCE_NUMBER}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Our Role & Service Commitment
            </h2>
            <p>
              Navigating real estate purchases in emerging NCR corridors requires authentic data, verified plot availability, and impartial market clarity. <strong>anandamashiyana.in</strong> was created by an authorized, RERA-verified real estate advisory team to serve as a reliable, content-rich resource for buyers considering <strong>Anandam Ashiyana, Sector 36, Jhajjar</strong>.
            </p>
            <p>
              We bridge the gap between prospective buyers and the promoter (<strong>Prish Realty Pvt. Ltd.</strong>) by providing:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <li className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-1">
                <strong className="text-[#1B1814] block font-bold">1. Verified Inventory Checks</strong>
                <span className="text-xs">We verify current release phases, corner vs. park-facing plot availability, and size bands directly from developer records.</span>
              </li>
              <li className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-1">
                <strong className="text-[#1B1814] block font-bold">2. Free Guided Site Visits</strong>
                <span className="text-xs">We coordinate seamless site tours to inspect Sector 36 approach roads, plot demarcations, and township construction progress.</span>
              </li>
              <li className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-1">
                <strong className="text-[#1B1814] block font-bold">3. Transparent Cost Breakdowns</strong>
                <span className="text-xs">We break down basic plot rates, development-linked milestone schedules, statutory charges, and bank funding parameters.</span>
              </li>
              <li className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-1">
                <strong className="text-[#1B1814] block font-bold">4. End-to-End Documentation Support</strong>
                <span className="text-xs">We assist buyers through application form filling, RERA compliance checks, and official developer allotment procedures.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Our Strict Code of Ethics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#EFE6D8] rounded-xl text-center space-y-1">
                <span className="text-xl">🚫</span>
                <h4 className="font-bold text-xs text-[#1B1814]">No Fake Scarcity</h4>
                <p className="text-[11px] text-[#3F3A33]">We never invent false inventory shortages or use countdown timers.</p>
              </div>
              <div className="p-4 bg-[#EFE6D8] rounded-xl text-center space-y-1">
                <span className="text-xl">🏷️</span>
                <h4 className="font-bold text-xs text-[#1B1814]">No Bait Pricing</h4>
                <p className="text-[11px] text-[#3F3A33]">We quote real market rates and clearly mark all prices as indicative.</p>
              </div>
              <div className="p-4 bg-[#EFE6D8] rounded-xl text-center space-y-1">
                <span className="text-xl">🤝</span>
                <h4 className="font-bold text-xs text-[#1B1814]">No Impersonation</h4>
                <p className="text-[11px] text-[#3F3A33]">We clearly state on every page that we are consultants, not Prish Group.</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#1B1814]">
              Contact Our RERA Consultant Desk
            </h3>
            <p className="text-xs text-[#3F3A33]">
              Have questions regarding plot availability, DDJAY construction bylaws, or booking steps? Our advisory team is available 7 days a week.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#1B1814] pt-1">
              <span>📧 Primary: <a href={`mailto:${EMAILS.primary}`} className="text-[#B08D4F] underline">{EMAILS.primary}</a></span>
              <span>📧 Support: <a href={`mailto:${EMAILS.secondary}`} className="text-[#B08D4F] underline">{EMAILS.secondary}</a></span>
              <span>💬 WhatsApp: <a href={getWhatsAppLink(PAGE_WA_MESSAGES.contact)} target="_blank" rel="noopener noreferrer" className="text-[#25D366] underline">{PHONE_DISPLAY}</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm source="About Page Form" headline="Speak to a RERA Consultant" subheadline="Get verified inventory and layout map sent to your WhatsApp." />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="contact" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="contact" />
      <Footer />
    </div>
  );
}
