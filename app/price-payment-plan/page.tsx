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
  STARTING_PRICE,
  PRICE_DISCLAIMER,
  IDENTITY_DISCLAIMER,
  RERA_NUMBER,
  getWhatsAppLink,
  PAGE_WA_MESSAGES,
} from '@/lib/constants';

export default function PricePaymentPlanPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Price Page');

  const openModal = (src = 'Price Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Price List & Payment Plan' }]} />

      {/* Main Hero Header */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Indicative Rates & Size Breakdown
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Price List, Plot Sizes & Payment Plan
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Starting at <strong>{STARTING_PRICE}</strong>. Explore plot size categories, development-linked milestone schedules, and bank loan eligibility.
          </p>
        </div>
      </section>

      {/* Disclaimers Bar */}
      <section className="py-6 bg-[#24201A] text-[#FFFcf7] border-b border-[#3F3A33]">
        <div className="max-w-4xl mx-auto px-4 text-xs space-y-2">
          <p className="text-[#B08D4F] font-semibold">⚠️ Mandatory Price & Identity Disclaimer:</p>
          <p className="text-[#D9C7A8] leading-relaxed">{PRICE_DISCLAIMER}</p>
          <p className="text-[#A39A8B] leading-relaxed">{IDENTITY_DISCLAIMER}</p>
        </div>
      </section>

      {/* Size & Ticket Size Table */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Illustrative Inventory Categories
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#1B1814] mt-1">
              Plot Size & Ticket Size Overview
            </h2>
            <p className="text-xs text-[#3F3A33] mt-1">
              Final quote shared upon checking exact availability and release phase.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#D9C7A8] rounded-xl overflow-hidden">
              <thead className="bg-[#1B1814] text-[#FFFcf7] font-serif uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3.5">Plot Size Category</th>
                  <th className="p-3.5">Approx. Area</th>
                  <th className="p-3.5">Indicative Ticket Price</th>
                  <th className="p-3.5">Key Suitability & Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9C7A8] bg-[#F7F1E8] text-[#3F3A33]">
                <tr className="hover:bg-[#EFE6D8]">
                  <td className="p-3.5 font-bold text-[#1B1814]">72 – 100 Sq. Yd.</td>
                  <td className="p-3.5">Compact Plot</td>
                  <td className="p-3.5 font-bold text-[#B08D4F]">₹43.77 Lakh* onwards</td>
                  <td className="p-3.5">Ideal for first-time buyers seeking affordable land ownership under ₹50 Lakh.</td>
                </tr>
                <tr className="hover:bg-[#EFE6D8]">
                  <td className="p-3.5 font-bold text-[#1B1814]">100 – 140 Sq. Yd.</td>
                  <td className="p-3.5">Mid-Size Plot</td>
                  <td className="p-3.5 font-semibold text-[#8C6A2F]">On Request (WhatsApp)</td>
                  <td className="p-3.5">Most searched family sizes for constructing spacious 3BHK independent floors.</td>
                </tr>
                <tr className="hover:bg-[#EFE6D8]">
                  <td className="p-3.5 font-bold text-[#1B1814]">140 – 179 Sq. Yd.</td>
                  <td className="p-3.5">Large / Premium</td>
                  <td className="p-3.5 font-semibold text-[#8C6A2F]">On Request (WhatsApp)</td>
                  <td className="p-3.5">Generous plot dimensions suitable for luxury independent villas or corner units.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Factors Influencing Final Price */}
          <div className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#1B1814]">
              What Factors Influence the Final Plot Rate?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3F3A33]">
              <li className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block">1. Location & Facing (PLC):</strong>
                Corner plots, park-facing units, and plots on 24m wide approach roads carry Preferential Location Charges (PLC).
              </li>
              <li className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block">2. Statutory Govt Charges:</strong>
                EDC/IDC (External/Internal Development Charges) and statutory government levies as applicable under DTCP policy.
              </li>
              <li className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block">3. Inventory Release Phase:</strong>
                Early launch phases offer introductory price advantages before future phase revisions.
              </li>
              <li className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block">4. Payment Milestone Speed:</strong>
                Flexible payment structures tailored to development-linked milestones.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment Plan Explanation */}
      <section className="py-12 bg-[#EFE6D8] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Financial Flexibility
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#1B1814] mt-1">
              Development-Linked Payment Plan (DLPP)
            </h2>
            <p className="text-xs text-[#3F3A33] mt-1">
              Pay in structured installments tied directly to site development milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-center">
            <div className="p-5 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#B08D4F] text-[#1B1814] font-bold text-xs flex items-center justify-center mx-auto">1</span>
              <h4 className="font-bold text-[#1B1814]">Booking Token & Application</h4>
              <p className="text-[#3F3A33]">Initial booking amount upon plot selection and application form submission.</p>
            </div>
            <div className="p-5 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#B08D4F] text-[#1B1814] font-bold text-xs flex items-center justify-center mx-auto">2</span>
              <h4 className="font-bold text-[#1B1814]">Development Milestones</h4>
              <p className="text-[#3F3A33]">Installments linked to boundary demarcation, internal road paving, & drainage completion.</p>
            </div>
            <div className="p-5 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#B08D4F] text-[#1B1814] font-bold text-xs flex items-center justify-center mx-auto">3</span>
              <h4 className="font-bold text-[#1B1814]">Possession & Registry</h4>
              <p className="text-[#3F3A33]">Final balance upon offer of possession and execution of conveyance deed / registry.</p>
            </div>
          </div>

          <div className="p-5 bg-[#2F4A3A]/10 border border-[#2F4A3A]/40 rounded-xl text-xs space-y-2 text-[#3F3A33]">
            <h4 className="font-bold text-[#2F4A3A]">🏦 Bank Loan & Plot Finance Eligibility</h4>
            <p>
              Since Anandam Ashiyana holds valid HRERA No. {RERA_NUMBER} and DTCP Licence No. 79 of 2025, buyers are eligible to apply for plot purchase & home construction loans from leading national banks (subject to individual credit eligibility and bank title checks). Our consultant team assists in coordinating bank approval documents.
            </p>
          </div>
        </div>
      </section>

      {/* Price Comparison Context */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-xs text-[#3F3A33] leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-[#1B1814] text-center">
            Value Comparison: Jhajjar vs. Gurgaon
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
              <h3 className="font-serif text-base font-bold text-[#1B1814]">
                🏙️ Buying in Gurgaon Micro-Markets
              </h3>
              <p>
                A standard 2BHK apartment or tiny plot in Gurgaon or Dwarka Expressway corridors typically demands ₹1.2 Cr to ₹2.5 Cr+, accompanied by heavy monthly high-rise maintenance charges.
              </p>
            </div>

            <div className="p-5 bg-[#2F4A3A]/10 border border-[#2F4A3A]/40 rounded-xl space-y-2">
              <h3 className="font-serif text-base font-bold text-[#2F4A3A]">
                🌿 Buying at Anandam Ashiyana (Sector 36 Jhajjar)
              </h3>
              <p>
                Get 100% freehold land ownership starting at ₹43.77 Lakh* onwards in a gated township with a clubhouse, 24m roads, and fast 45-minute connectivity to Gurgaon Cyber Hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Price Page Form"
            headline="Request Official Size-Wise Cost Sheet"
            subheadline="Get today's detailed price breakdown and payment plan sent on WhatsApp."
            buttonText="Send Me Latest Price List"
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="price" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="price" />
      <Footer />
    </div>
  );
}
