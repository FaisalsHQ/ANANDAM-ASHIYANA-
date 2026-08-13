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
import { RERA_NUMBER, LICENCE_NUMBER, getWhatsAppLink, PAGE_WA_MESSAGES } from '@/lib/constants';

export default function DDJAYGuidePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('DDJAY Guide Page');

  const openModal = (src = 'DDJAY Guide Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'DDJAY Policy Guide' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            DTCP Haryana Housing Policy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Deen Dayal Jan Awas Yojana (DDJAY) — Complete Buyer Guide
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Understand how Haryana Government's affordable platted housing policy empowers buyers with freehold registry, stilt+4 construction rights, and higher FAR benefits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          {/* Policy Overview */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              What is Deen Dayal Jan Awas Yojana (DDJAY)?
            </h2>
            <p>
              <strong>Deen Dayal Jan Awas Yojana (DDJAY)</strong> is a flagship housing policy launched by the Department of Town and Country Planning (DTCP), Government of Haryana. Introduced to encourage planned, affordable high-density platted townships across low and medium-potential towns in Haryana, DDJAY allows private developers to create gated residential plot communities with government-sanctioned infrastructure.
            </p>
            <p>
              Unlike unauthorized colonies or unapproved agricultural land partitions, DDJAY townships undergo strict government scrutiny, ensuring 100% legal title, DTCP layout approval, RERA registration, and bank loan approvals.
            </p>
          </div>

          {/* Core Benefits Grid */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Key Buyer Advantages of DDJAY Affordable Plot Ownership
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <span className="text-xl">📜</span>
                <h3 className="font-serif text-base font-bold text-[#1B1814]">
                  1. Freehold Title & Immediate Registry
                </h3>
                <p>
                  Every plot in a DDJAY township comes with individual freehold land ownership rights, enabling hassle-free registration (registry) and mutation at the local sub-registrar office.
                </p>
              </div>

              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <span className="text-xl">🏗️</span>
                <h3 className="font-serif text-base font-bold text-[#1B1814]">
                  2. Stilt + 4 Independent Floor Permissions
                </h3>
                <p>
                  DDJAY norms permit plot owners to construct up to <strong>Stilt + 4 Independent Floors</strong> on their plot (subject to DTCP Haryana floor rules). Each floor can be registered independently with separate utility meters.
                </p>
              </div>

              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <span className="text-xl">📐</span>
                <h3 className="font-serif text-base font-bold text-[#1B1814]">
                  3. Higher FAR (Floor Area Ratio)
                </h3>
                <p>
                  Enjoy enhanced Floor Area Ratio (FAR up to 2.64) compared to standard housing schemes, maximizing your buildable covered area for spacious multi-family residential living or rental yield.
                </p>
              </div>

              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <span className="text-xl">🏦</span>
                <h3 className="font-serif text-base font-bold text-[#1B1814]">
                  4. Up to 70-80% Bank Loan Eligibility
                </h3>
                <p>
                  Because DDJAY projects are RERA-approved (HRERA No. {RERA_NUMBER}) and DTCP-licensed (Licence No. {LICENCE_NUMBER}), nationalized and private banks readily provide plot purchase and home construction loans.
                </p>
              </div>
            </div>
          </div>

          {/* DDJAY Norms vs Unauthorized Land */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              DDJAY Approved Township vs. Unauthorized Land Plots
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-[#D9C7A8] rounded-xl overflow-hidden">
                <thead className="bg-[#1B1814] text-[#FFFcf7] font-serif uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3">Feature</th>
                    <th className="p-3 bg-[#2F4A3A] text-white">Anandam Ashiyana (DDJAY Approved)</th>
                    <th className="p-3 bg-[#8C2F2F] text-white">Unauthorized / Unapproved Land</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9C7A8] bg-[#F7F1E8]">
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">DTCP Approval & Licence</td>
                    <td className="p-3 font-semibold text-[#2F4A3A]">✅ Govt Approved (Licence 79 of 2025)</td>
                    <td className="p-3 text-[#8C2F2F]">❌ Unapproved / Illegal colony risks</td>
                  </tr>
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">HRERA Registration</td>
                    <td className="p-3 font-semibold text-[#2F4A3A]">✅ Registered ({RERA_NUMBER})</td>
                    <td className="p-3 text-[#8C2F2F]">❌ No HRERA Protection</td>
                  </tr>
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">Road Infrastructure</td>
                    <td className="p-3 font-semibold text-[#2F4A3A]">✅ 24m Entrance & 9m Internal Streets</td>
                    <td className="p-3 text-[#8C2F2F]">❌ Narrow 10-15 ft unpaved alleys</td>
                  </tr>
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">Bank Loan Facility</td>
                    <td className="p-3 font-semibold text-[#2F4A3A]">✅ Available from Top Banks</td>
                    <td className="p-3 text-[#8C2F2F]">❌ No Bank Funding Available</td>
                  </tr>
                  <tr className="hover:bg-[#EFE6D8]">
                    <td className="p-3 font-bold text-[#1B1814]">Gated Amenities & Security</td>
                    <td className="p-3 font-semibold text-[#2F4A3A]">✅ Clubhouse, Parks, CCTV, Commercial</td>
                    <td className="p-3 text-[#8C2F2F]">❌ Zero Civic Facilities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Step by Step Buyer Process */}
          <div className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#1B1814]">
              Step-by-Step Plot Buying Journey in Anandam Ashiyana
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-xs text-[#3F3A33]">
              <li><strong>Site Visit & Selection:</strong> Inspect physical plot demarcations, 24m roads, and choose your preferred plot category (72 to 179 sq. yd.).</li>
              <li><strong>Application & Booking:</strong> Submit booking token along with KYC documents (Aadhaar, PAN) and application form.</li>
              <li><strong>Allotment & Builder Buyer Agreement (BBA):</strong> Receive allotment letter and sign standard DTCP-compliant agreement.</li>
              <li><strong>Development Milestones:</strong> Pay structured installments aligned with on-site infrastructural progress.</li>
              <li><strong>Possession & Conveyance Deed:</strong> Receive possession and complete land registration (Registry) at the Jhajjar Sub-Registrar office.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="DDJAY Guide Form"
            headline="Download DDJAY Policy Clarification PDF"
            subheadline="Get government circular copy & plot construction guidelines on WhatsApp."
            buttonText="Get Policy Document"
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="ddjayGuide" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="ddjayGuide" />
      <Footer />
    </div>
  );
}
