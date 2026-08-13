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
import InfrastructureChart from '@/components/InfrastructureChart';
import {
  SITE_NAME,
  DEVELOPER_NAME,
  DEVELOPER_URL,
  RERA_NUMBER,
  RERA_DATE,
  RERA_URL,
  LICENCE_NUMBER,
  PROJECT_LOCATION,
  SCHEME_NAME,
  PROJECT_AREA,
  TOTAL_PLOTS,
  PLOT_SIZES,
  STARTING_PRICE,
  COMMERCIAL_AREA,
  ROAD_WIDTHS,
  EXPECTED_POSSESSION,
  IDENTITY_DISCLAIMER,
  getWhatsAppLink,
  PAGE_WA_MESSAGES,
} from '@/lib/constants';

export default function ProjectOverviewPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Project Overview Page');

  const openModal = (src = 'Project Overview Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Project Overview' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            12.46-Acre DDJAY Plotted Township
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Project Overview — Sector 36 Jhajjar
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Detailed breakdown of master planning, developer credentials, DDJAY policy framework, and lifestyle amenities.
          </p>
        </div>
      </section>

      {/* Main Narrative Content */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          {/* Identity Notice */}
          <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl text-xs text-[#1B1814]">
            <strong>Consultant Note:</strong> {IDENTITY_DISCLAIMER}
          </div>

          {/* Section 1: What is Anandam Ashiyana */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              What Is Anandam Ashiyana?
            </h2>
            <p>
              <strong>Anandam Ashiyana</strong> is an approved 12.4625-acre gated residential plotted colony situated in <strong>Sector 36, Jhajjar (Village Talao growth belt), Haryana</strong>. Conceived to fulfill the aspirations of families seeking independent living in a planned environment, the project merges low-density horizontal space with club-class urban infrastructure.
            </p>
            <p>
              With a total of <strong>184 residential plot units</strong>, Anandam Ashiyana caters to diverse budget tiers through plot sizes starting from approximately 72 sq. yd. up to 179 sq. yd. (with market highlight inventories ranging around 97 to 178 sq. yd.). The entire layout is structured around wide 24-metre approach roads and 9-metre internal streets, ensuring seamless vehicular access and pleasant pedestrian walkways.
            </p>
          </div>

          {/* Section 2: Developer Profile */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              About the Developer — Prish Realty Pvt. Ltd. (Prish Group)
            </h2>
            <p>
              <strong>Prish Realty Pvt. Ltd.</strong> (Prish Group) is a reputed real estate development organization operating out of Gurugram, Haryana (Corporate Office: Unit No.407, 4th Floor, Tower-4, DLF Corporate Greens, Sector-74-A, Gurugram). Built on the core values of integrity, quality execution, affordability, and community building, Prish Group focuses on developing sustainable residential communities that deliver long-term value to buyers.
            </p>
            <p>
              Anandam Ashiyana represents Prish Group’s flagship DDJAY plotted initiative in the Jhajjar growth corridor, designed to meet strict Haryana DTCP quality benchmarks.
            </p>
          </div>

          {/* Section 3: Approvals Table */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Official Approvals & Regulatory Sanctions
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-[#D9C7A8] rounded-xl overflow-hidden">
                <thead className="bg-[#1B1814] text-[#FFFcf7] font-serif uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3">Parameter</th>
                    <th className="p-3">Official Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9C7A8] bg-[#F7F1E8]">
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Project Name</td>
                    <td className="p-3">Anandam Ashiyana</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Promoter / Developer</td>
                    <td className="p-3">{DEVELOPER_NAME}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Haryana RERA No.</td>
                    <td className="p-3"><a href={RERA_URL} target="_blank" rel="noopener noreferrer" className="text-[#B08D4F] font-bold underline">{RERA_NUMBER}</a> (Dated {RERA_DATE})</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">DTCP Haryana Licence</td>
                    <td className="p-3">{LICENCE_NUMBER}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Governing Policy</td>
                    <td className="p-3">Deen Dayal Jan Awas Yojana (DDJAY Affordable Plotted Scheme)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Total Site Area</td>
                    <td className="p-3">{PROJECT_AREA}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Total Residential Plots</td>
                    <td className="p-3">{TOTAL_PLOTS}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Daily-Need Commercial</td>
                    <td className="p-3">{COMMERCIAL_AREA}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Road Infrastructure</td>
                    <td className="p-3">{ROAD_WIDTHS}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1B1814]">Indicative Possession</td>
                    <td className="p-3">{EXPECTED_POSSESSION}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* D3 Township Infrastructure Allocation Chart */}
            <div className="pt-4">
              <InfrastructureChart />
            </div>
          </div>

          {/* Section 4: DDJAY Framework Explained */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Understanding the DDJAY Policy Advantage
            </h2>
            <p>
              The <strong>Deen Dayal Jan Awas Yojana (DDJAY)</strong> is an encouraging policy initiative by the Government of Haryana aimed at developing high-density, affordable residential plotted colonies across tier-2 and tier-3 towns.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-1">
                <h4 className="font-bold text-xs text-[#1B1814]">Freehold Plot Registry</h4>
                <p className="text-xs text-[#3F3A33]">Complete freehold ownership of land with clear title transfer upon possession and registry.</p>
              </div>
              <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-1">
                <h4 className="font-bold text-xs text-[#1B1814]">Stilt + Floor Construction</h4>
                <p className="text-xs text-[#3F3A33]">Allows construction of multiple independent floors as per approved building bylaws.</p>
              </div>
              <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-1">
                <h4 className="font-bold text-xs text-[#1B1814]">Lower Maintenance Burden</h4>
                <p className="text-xs text-[#3F3A33]">Significantly lower recurring monthly maintenance costs compared to high-rise apartments.</p>
              </div>
              <div className="p-4 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-1">
                <h4 className="font-bold text-xs text-[#1B1814]">Bank Loan Approvals</h4>
                <p className="text-xs text-[#3F3A33]">RERA-approved status facilitates plot purchase and construction home loans from leading national banks.</p>
              </div>
            </div>
          </div>

          {/* Section 5: Who Should Buy vs Who Should Wait */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Who Should Buy vs. Who Should Wait
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-[#2F4A3A]/10 border border-[#2F4A3A]/40 rounded-xl space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#2F4A3A]">
                  ✅ Ideal Buyers for Anandam Ashiyana
                </h3>
                <ul className="space-y-2 text-xs text-[#3F3A33] list-disc list-inside">
                  <li><strong>First-time homebuyers</strong> seeking affordable land ownership under ₹50 Lakh near Gurgaon.</li>
                  <li><strong>Custom villa builders</strong> who prefer designing their independent home rather than living in congested apartments.</li>
                  <li><strong>Long-term investors (3-5 yr horizon)</strong> eyeing the industrial growth around Reliance MET & Kharkhoda.</li>
                  <li><strong>Local Jhajjar & Bahadurgarh upgraders</strong> seeking a gated township with security & clubhouse.</li>
                </ul>
              </div>

              <div className="p-5 bg-[#B42318]/10 border border-[#B42318]/40 rounded-xl space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#B42318]">
                  ⏳ Who Should Wait or Re-evaluate
                </h3>
                <ul className="space-y-2 text-xs text-[#3F3A33] list-disc list-inside">
                  <li><strong>Immediate move-in seekers</strong> needing a ready-to-shift apartment next month.</li>
                  <li><strong>Pure short-term flippers</strong> expecting guaranteed 2x returns within 6 months.</li>
                  <li><strong>High-rise apartment enthusiasts</strong> who prefer full high-rise tower maintenance services.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Honesty Box */}
          <div className="p-6 bg-[#24201A] text-[#FFFcf7] border border-[#3F3A33] rounded-2xl space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#B08D4F]">
              🔍 Consultant Transparency & Risk Disclaimer
            </h3>
            <p className="text-xs text-[#D9C7A8] leading-relaxed">
              Anandam Ashiyana is a newly launched project with expected possession targeted around September 2027. Real estate investments involve market dynamics and development timelines. We strongly recommend visiting the physical land parcel in Sector 36 Jhajjar, inspecting plot demarcations, and reading official RERA documents on <strong>haryanarera.gov.in</strong> before placing a booking token.
            </p>
          </div>

          {/* Related Links */}
          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold text-[#B08D4F]">
            <Link href="/price-payment-plan" className="underline hover:text-[#1B1814]">View Price & Payment Plan →</Link>
            <Link href="/master-plan" className="underline hover:text-[#1B1814]">Explore Master Plan & Layout →</Link>
            <Link href="/location" className="underline hover:text-[#1B1814]">Check Location Connectivity →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm source="Project Overview Bottom Form" headline="Get Verified Layout Map & Price Sheet" />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="home" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="home" />
      <Footer />
    </div>
  );
}
