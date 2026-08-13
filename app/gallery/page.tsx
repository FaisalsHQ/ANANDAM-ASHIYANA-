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

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Gallery Page');
  const [activeTab, setActiveTab] = useState<'all' | 'site' | 'amenities' | 'location'>('all');

  const openModal = (src = 'Gallery Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const galleryItems = [
    {
      title: "Gated Entrance Arch & Security Gate",
      category: "site",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      caption: "Grand double-height gated entrance arch with 24x7 security barrier and visitor check-in post."
    },
    {
      title: "24-Metre Wide Main Approach Sector Road",
      category: "site",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      caption: "Paved 24m wide entrance road connecting Sector 36 arterial roads directly to the township."
    },
    {
      title: "Modern Clubhouse & Swimming Pool Render",
      category: "amenities",
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      caption: "Architectural concept for the resident clubhouse, outdoor pool, and fitness center."
    },
    {
      title: "Central Landscaped Greens & Jogging Track",
      category: "amenities",
      img: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80",
      caption: "Lush green central park with tree-lined walking tracks and children playground setup."
    },
    {
      title: "Plot Demarcation & Internal 9m Streets",
      category: "site",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      caption: "On-site plot demarcation pillars and underground drainage line laying in progress."
    },
    {
      title: "Reliance MET & Surrounding Industrial Hub",
      category: "location",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      caption: "Nearby Reliance MET industrial smart city driving high housing demand in Jhajjar."
    },
    {
      title: "Commercial Retail Market Pocket",
      category: "amenities",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      caption: "Integrated daily-need shopping retail complex planned near the main gate."
    },
    {
      title: "AIIMS Badsa & Medical Ecosystem Nearby",
      category: "location",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      caption: "Proximity to premier healthcare centers like AIIMS NCI Badsa campus (25 mins)."
    }
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Project Gallery & Site Photos' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Visual Inspection & Renders
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Anandam Ashiyana Site Gallery & Concept Visuals
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Browse on-site development updates, road infrastructure, central parks, clubhouse renders, and surrounding landmark connectivity.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Photos & Renders' },
              { id: 'site', label: 'On-Site Development' },
              { id: 'amenities', label: 'Clubhouse & Parks' },
              { id: 'location', label: 'Surrounding Landmarks' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1B1814] text-[#B08D4F]'
                    : 'bg-[#F7F1E8] text-[#3F3A33] hover:bg-[#EFE6D8] border border-[#D9C7A8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                onClick={() => openModal(`Gallery: ${item.title}`)}
              >
                <div className="relative h-52 overflow-hidden bg-[#24201A]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 bg-[#B08D4F] text-[#1B1814] font-bold text-[11px] uppercase tracking-wider rounded-md shadow">
                      View HD Photo
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-serif text-sm font-bold text-[#1B1814]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A39A8B] leading-normal">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Gallery Page Form"
            headline="Request On-Site Video Tour on WhatsApp"
            subheadline="Get live ground drone video footage & fresh site photo updates."
            buttonText="Send Me On-Site Video"
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="gallery" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="gallery" />
      <Footer />
    </div>
  );
}
