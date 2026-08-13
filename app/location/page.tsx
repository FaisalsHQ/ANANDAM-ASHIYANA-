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
import { getWhatsAppLink, PAGE_WA_MESSAGES } from '@/lib/constants';

export default function LocationPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Location Page');

  const openModal = (src = 'Location Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const distanceMatrix = [
    { destination: "Pratapgarh Farms & Resorts", distance: "~2 mins", category: "Leisure & Tourism" },
    { destination: "Jhajjar Railway Station", distance: "~2 mins", category: "Transit" },
    { destination: "Jhajjar City Center / Market", distance: "~3 mins", category: "Civic & Retail" },
    { destination: "Mini Secretariat, Jhajjar", distance: "~5 mins", category: "Government Administration" },
    { destination: "Jhajjar Bus Stand", distance: "~5 mins", category: "Public Transit" },
    { destination: "Reliance MET Industrial Hub", distance: "~20 mins", category: "Employment Magnet" },
    { destination: "XLRI Management Campus", distance: "~20 mins", category: "Higher Education" },
    { destination: "AIIMS National Cancer Institute (Badsa)", distance: "~25 mins", category: "World-Class Healthcare" },
    { destination: "IIT Delhi Extension Campus (Badsa)", distance: "~25 mins", category: "Premier Education" },
    { destination: "SGT University & Medical Hospital", distance: "~25 mins", category: "Education & Care" },
    { destination: "Indospace Industrial Park (Loharheri)", distance: "~30 mins", category: "Industrial Corridor" },
    { destination: "IMT Kharkhoda (Maruti Suzuki Hub)", distance: "~30 mins", category: "Auto & Manufacturing Hub" },
    { destination: "Dwarka Expressway (Gurgaon Border)", distance: "~40 mins", category: "Expressway Access" },
    { destination: "Gurugram Cyber Hub / MG Road", distance: "~45 mins", category: "Corporate Employment" },
    { destination: "IGI Airport, New Delhi (T3)", distance: "~60 mins", category: "International Transit" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Location & Connectivity' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Sector 36, Jhajjar Growth Corridor
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Location — Sector 36 Jhajjar Connectivity
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Situated on the Chuchakwas / Talao belt, balancing serene township living with rapid connectivity to Gurgaon, Reliance MET, and AIIMS NCI Badsa.
          </p>
        </div>
      </section>

      {/* Location Thesis & Narrative */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Strategic Sector 36 Location Advantage
            </h2>
            <p>
              <strong>Sector 36, Jhajjar</strong> is emerging as one of the most promising residential micro-markets in the western National Capital Region (NCR). Positioned adjacent to the established Jhajjar city center, Sector 36 benefits from direct access to major state highways connecting Chuchakwas, Rohtak, Badli, Bahadurgarh, and Gurugram.
            </p>
            <p>
              The area's strategic importance is driven by massive public and private infrastructure investments, including the 8,000+ acre <strong>Reliance Model Economic Township (MET)</strong>, the <strong>AIIMS National Cancer Institute campus at Badsa</strong>, and the rapid expansion of industrial clusters in nearby IMT Kharkhoda and Manesar.
            </p>
          </div>

          {/* Official Distance Table */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Official Key Distance & Driving Time Matrix
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-[#D9C7A8] rounded-xl overflow-hidden">
                <thead className="bg-[#1B1814] text-[#FFFcf7] font-serif uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3">Key Landmark / Hub</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Approx. Drive Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9C7A8] bg-[#F7F1E8]">
                  {distanceMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#EFE6D8]">
                      <td className="p-3 font-bold text-[#1B1814]">{item.destination}</td>
                      <td className="p-3 text-[#A39A8B]">{item.category}</td>
                      <td className="p-3 font-bold text-[#8C6A2F]">{item.distance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Employment Magnets Deep-Dive */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Nearby Employment & Institutional Anchors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <h3 className="font-serif text-base font-bold text-[#1B1814]">
                  🏭 Reliance MET & Industrial Hubs
                </h3>
                <p>
                  Located just 20 minutes away, Reliance MET is a smart industrial city hosting global manufacturing giants like Panasonic, Denso, Tsuzuki, and Nihon Kohden. Thousands of engineers and managers drive continuous housing demand in Sector 36.
                </p>
              </div>

              <div className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <h3 className="font-serif text-base font-bold text-[#1B1814]">
                  🏥 AIIMS NCI & Education Hubs
                </h3>
                <p>
                  The AIIMS National Cancer Institute at Badsa (25 mins) and the XLRI & IIT Delhi extension campuses form a major healthcare and educational ecosystem, attracting doctors, researchers, and academic professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Box */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#1B1814]">
              Google Map Location — Sector 36, Jhajjar
            </h2>
            <div className="bg-[#24201A] p-2 border border-[#3F3A33] rounded-2xl shadow-xl">
              <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
                <iframe
                  title="Anandam Ashiyana Location Map Sector 36 Jhajjar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.822998782928!2d76.6508!3d28.5992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d641151e60000%3A0x6a00000000000000!2sJhajjar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Directions to Site */}
          <div className="p-6 bg-[#2F4A3A]/10 border border-[#2F4A3A]/40 rounded-2xl space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#2F4A3A]">
              🚗 How to Reach Anandam Ashiyana for a Site Visit
            </h3>
            <ul className="space-y-2 text-xs text-[#3F3A33] list-disc list-inside">
              <li><strong>From Gurugram / Cyber City:</strong> Take the Gurgaon-Farrukhnagar-Jhajjar Road or KMP Expressway exit toward Jhajjar. Proceed toward Sector 36 Chuchakwas Road (~45 mins).</li>
              <li><strong>From Delhi / Dwarka Expressway:</strong> Drive via Najafgarh-Jhajjar Road or Badli Road straight toward Jhajjar city Secretariat (~40-50 mins).</li>
              <li><strong>From Bahadurgarh:</strong> Take the Bahadurgarh-Jhajjar State Highway straight to Sector 36 (~25 mins).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Location Page Form"
            headline="Book Free Site Visit Pickup"
            subheadline="We will share exact GPS location pin & schedule your site tour on WhatsApp."
            buttonText="Book Site Visit Now"
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="location" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="location" />
      <Footer />
    </div>
  );
}
