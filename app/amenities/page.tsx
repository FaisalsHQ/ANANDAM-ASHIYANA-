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
import {
  IconClubhouse,
  IconSwimmingPool,
  IconLawnTennis,
  IconYogaZone,
  IconCricketNet,
  IconToddlerPlay,
  IconGatedCommunity,
  IconTempleZone,
  IconMultipurposeGarden,
  IconSquashCourt,
  IconCardRoom,
  IconTableTennis,
  IconIndoorGym,
  IconSurveillance,
  IconDailyShops,
  IconOutdoorGames
} from '@/components/AmenityIcons';

export default function AmenitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Amenities Page');

  const openModal = (src = 'Amenities Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const amenityGroups = [
    {
      category: 'Health, Wellness & Recreation',
      items: [
        {
          icon: <IconSwimmingPool className="w-8 h-8" color="#E6C687" />,
          title: 'Modern Swimming Pool',
          desc: 'A sparkling resort-style outdoor swimming pool equipped with a separate kids splash pool, sun loungers, changing rooms, and temperature regulation for refreshing family leisure.'
        },
        {
          icon: <IconIndoorGym className="w-8 h-8" color="#E6C687" />,
          title: 'Indoor Gymnasium',
          desc: 'Fully equipped fitness center featuring cardiovascular machines, strength training equipment, free weights, and air-conditioned workout spaces for health-conscious residents.'
        },
        {
          icon: <IconYogaZone className="w-8 h-8" color="#E6C687" />,
          title: 'Peaceful Yoga Zone',
          desc: 'Dedicated open-air yoga and meditation lawn surrounded by lush greenery and aromatic plants, providing a tranquil environment for morning mindfulness and stretching.'
        },
        {
          icon: <IconLawnTennis className="w-8 h-8" color="#E6C687" />,
          title: 'Lawn Tennis Court',
          desc: 'Synthetic-surface outdoor lawn tennis court built to official dimensions with night floodlighting, enabling competitive matches and evening recreational play.'
        }
      ]
    },
    {
      category: 'Outdoor Sports & Children Play',
      items: [
        {
          icon: <IconCricketNet className="w-8 h-8" color="#E6C687" />,
          title: 'Cricket Practice Net',
          desc: 'Dedicated cricket practice net with pitch matting and protective netting, allowing youth and sports enthusiasts to hone their batting and bowling skills safely.'
        },
        {
          icon: <IconToddlerPlay className="w-8 h-8" color="#E6C687" />,
          title: 'Toddler Play Area',
          desc: 'Safe, soft-cushioned children play park equipped with modern swings, slides, climbing frames, and bench seating for supervising parents.'
        },
        {
          icon: <IconSquashCourt className="w-8 h-8" color="#E6C687" />,
          title: 'Squash Court',
          desc: 'Glass-backed indoor squash court designed for fast-paced racket sport action, providing an intense indoor workout regardless of weather conditions.'
        },
        {
          icon: <IconTableTennis className="w-8 h-8" color="#E6C687" />,
          title: 'Table Tennis Room',
          desc: 'Indoor table tennis and games room with tournament-standard tables, ideal for indoor matches, friendly tournaments, and social gatherings.'
        }
      ]
    },
    {
      category: 'Community & Social Hubs',
      items: [
        {
          icon: <IconClubhouse className="w-8 h-8" color="#E6C687" />,
          title: 'Multi-Purpose Clubhouse',
          desc: 'Architecturally designed grand clubhouse serving as the social epicenter of the township, featuring event halls, lounge seating, and community celebration spaces.'
        },
        {
          icon: <IconTempleZone className="w-8 h-8" color="#E6C687" />,
          title: 'Temple Zone & Vastu',
          desc: 'A serene, Vastu-compliant dedicated temple complex within the township boundary, fostering spiritual solace and traditional festival celebrations.'
        },
        {
          icon: <IconMultipurposeGarden className="w-8 h-8" color="#E6C687" />,
          title: 'Multipurpose Garden',
          desc: 'Expansive landscaped central green lawn suitable for community events, morning walks, seasonal flower displays, and evening social gatherings.'
        },
        {
          icon: <IconCardRoom className="w-8 h-8" color="#E6C687" />,
          title: 'Card Room & Indoor Lounge',
          desc: 'Air-conditioned senior citizens lounge and card room providing a comfortable indoor retreat for table games, reading, and neighborly bonding.'
        }
      ]
    },
    {
      category: 'Safety, Security & Daily Convenience',
      items: [
        {
          icon: <IconGatedCommunity className="w-8 h-8" color="#E6C687" />,
          title: 'Gated Perimeter Security',
          desc: 'Fully walled gated community boundary with guarded access gates, electronic boom barriers, visitor verification logs, and 24x7 security personnel.'
        },
        {
          icon: <IconSurveillance className="w-8 h-8" color="#E6C687" />,
          title: 'CCTV Camera Surveillance',
          desc: 'High-definition CCTV camera network monitoring main entry gates, 24m approach roads, internal sector streets, and public park zones.'
        },
        {
          icon: <IconDailyShops className="w-8 h-8" color="#E6C687" />,
          title: 'Daily-Need Retail Shops',
          desc: 'Integrated 1,515.77 sq. yd. commercial shopping complex inside the campus for everyday groceries, dairy, medical supplies, and personal services.'
        },
        {
          icon: <IconOutdoorGames className="w-8 h-8" color="#E6C687" />,
          title: 'Outdoor Games Area',
          desc: 'Open multi-sports courts for badminton, volleyball, and casual outdoor activities in a safe gated township.'
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
      <section className="py-16 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-6xl mx-auto px-4 space-y-14">
          {amenityGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#D9C7A8] pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B08D4F]"></span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1814]">
                  {group.category}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl flex items-start gap-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <div className="p-3.5 bg-[#2A3B2A] border border-[#3F3A33] rounded-xl text-[#E6C687] shrink-0 shadow-inner group-hover:bg-[#1E2B1E] transition-colors">
                      {item.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#1B1814] group-hover:text-[#2F4A3A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A433A] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
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
