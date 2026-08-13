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

export default function AmenitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Amenities Page');

  const openModal = (src = 'Amenities Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const amenityGroups = [
    {
      category: '🏊‍♂️ Health, Wellness & Recreation',
      items: [
        {
          title: 'Modern Swimming Pool',
          desc: 'A sparkling resort-style outdoor swimming pool equipped with a separate kids splash pool, sun loungers, changing rooms, and temperature regulation for refreshing family leisure.'
        },
        {
          title: 'Indoor Gymnasium',
          desc: 'Fully equipped fitness center featuring cardiovascular machines, strength training equipment, free weights, and air-conditioned workout spaces for health-conscious residents.'
        },
        {
          title: 'Peaceful Yoga Zone',
          desc: 'Dedicated open-air yoga and meditation lawn surrounded by lush greenery and aromatic plants, providing a tranquil environment for morning mindfulness and stretching.'
        },
        {
          title: 'Lawn Tennis Court',
          desc: 'Synthetic-surface outdoor lawn tennis court built to official dimensions with night floodlighting, enabling competitive matches and evening recreational play.'
        }
      ]
    },
    {
      category: '🏏 Outdoor Sports & Children Play',
      items: [
        {
          title: 'Cricket Practice Net',
          desc: 'Dedicated cricket practice net with pitch matting and protective netting, allowing youth and sports enthusiasts to hone their batting and bowling skills safely.'
        },
        {
          title: 'Toddler Play Area',
          desc: 'Safe, soft-cushioned children play park equipped with modern swings, slides, climbing frames, and bench seating for supervising parents.'
        },
        {
          title: 'Squash Court',
          desc: 'Glass-backed indoor squash court designed for fast-paced racket sport action, providing an intense indoor workout regardless of weather conditions.'
        },
        {
          title: 'Table Tennis Room',
          desc: 'Indoor table tennis and games room with tournament-standard tables, ideal for indoor matches, friendly tournaments, and social gatherings.'
        }
      ]
    },
    {
      category: '🏛️ Community & Social Hubs',
      items: [
        {
          title: 'Multi-Purpose Clubhouse',
          desc: 'Architecturally designed grand clubhouse serving as the social epicenter of the township, featuring event halls, lounge seating, and community celebration spaces.'
        },
        {
          title: 'Temple Zone',
          desc: 'A serene, Vastu-compliant dedicated temple complex within the township boundary, fostering spiritual solace and traditional festival celebrations.'
        },
        {
          title: 'Multipurpose Garden',
          desc: 'Expansive landscaped central green lawn suitable for community events, morning walks, seasonal flower displays, and evening social gatherings.'
        },
        {
          title: 'Card Room & Indoor Lounge',
          desc: 'Air-conditioned senior citizens lounge and card room providing a comfortable indoor retreat for table games, reading, and neighborly bonding.'
        }
      ]
    },
    {
      category: '🛡️ Safety, Security & Daily Convenience',
      items: [
        {
          title: 'Gated Perimeter Security',
          desc: 'Fully walled gated community boundary with guarded access gates, electronic boom barriers, visitor verification logs, and 24x7 security personnel.'
        },
        {
          title: 'CCTV Camera Surveillance',
          desc: 'High-definition CCTV camera network monitoring main entry gates, 24m approach roads, internal sector streets, and public park zones.'
        },
        {
          title: 'Daily-Need Retail Shops',
          desc: 'Integrated 1,515.77 sq. yd. commercial shopping complex inside the campus for everyday groceries, dairy, medical supplies, and personal services.'
        },
        {
          title: 'Vastu Compliant Layout',
          desc: 'Master layout and plot orientations planned in accordance with Vastu Principles to encourage positive energy flow, prosperity, and harmonious living.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Township Amenities' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Clubhouse & Gated Living
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Amenities — Clubhouse, Parks & Daily Convenience
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Curated modern facilities combining health, sports, children play, spiritual peace, and gated safety in Sector 36, Jhajjar.
          </p>
        </div>
      </section>

      {/* Main Amenities Grid */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {amenityGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1814] border-b border-[#D9C7A8] pb-2">
                {group.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2 shadow-sm">
                    <h3 className="font-serif text-base font-bold text-[#1B1814]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#3F3A33] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Site Visit CTA Banner */}
      <section className="py-12 bg-[#2F4A3A] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Experience the Township Atmosphere in Person
          </h2>
          <p className="text-xs text-[#D9C7A8] max-w-xl mx-auto leading-relaxed">
            Schedule a free guided site visit with our consultant team to inspect 24m wide roads, park boundaries, and clubhouse construction progress.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/site-visit"
              className="px-6 py-3 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all"
            >
              Book Free Site Visit
            </Link>
            <a
              href={getWhatsAppLink(PAGE_WA_MESSAGES.amenities)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center gap-2"
            >
              <span>Ask Amenities on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm source="Amenities Page Form" headline="Get Amenity Brochure & Layout" />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="amenities" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="amenities" />
      <Footer />
    </div>
  );
}
