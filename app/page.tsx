'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';
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
  PRICE_DISCLAIMER,
  PHONE_DISPLAY,
  PHONE_TEL,
  getWhatsAppLink,
  PAGE_WA_MESSAGES,
  BLUR_DATA_URL,
} from '@/lib/constants';
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

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Home Page');
  const [factsVisible, setFactsVisible] = useState(false);
  const factsRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const currentRef = factsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFactsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const openModal = (src = 'Home Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const homeFaqs = [
    {
      question: "What is Anandam Ashiyana Sector 36, Jhajjar?",
      answer: "Anandam Ashiyana is a 12.46-acre Deen Dayal Jan Awas Yojana (DDJAY) gated residential plotted colony located in Sector 36, Jhajjar, Haryana. It offers 184 freehold residential plots ranging from approx 72 to 179 sq. yd. along with internal roads, parks, a temple zone, and a clubhouse."
    },
    {
      question: "Who is the developer of Anandam Ashiyana?",
      answer: "Anandam Ashiyana is developed by Prish Realty Pvt. Ltd. (Prish Group). This website (anandamashiyana.in) is operated by an authorized, RERA-verified real estate consultant to assist buyers with verified inventory, site visits, and booking guidance. We are not the project owner."
    },
    {
      question: "Is Anandam Ashiyana RERA registered?",
      answer: `Yes, Anandam Ashiyana is officially RERA registered under HRERA registration number ${RERA_NUMBER} issued on ${RERA_DATE}. You can verify details directly on the Haryana RERA portal (haryanarera.gov.in).`
    },
    {
      question: "What is the DTCP Licence Number for Anandam Ashiyana?",
      answer: `The DTCP Haryana licence number for Anandam Ashiyana is Licence No. 79 of 2025 for affordable residential plotted colony under DDJAY policy in Village Talao / Sector 36 belt, Jhajjar.`
    },
    {
      question: "What plot sizes and starting prices are available in Anandam Ashiyana?",
      answer: `The project features approved residential plots from 72 to 179 sq. yd. Market offerings highlight sizes around 97–178 sq. yd. Indicative starting price is ${STARTING_PRICE} under a development-linked payment plan.`
    },
    {
      question: "What amenities are planned in the township?",
      answer: "The township includes a modern Clubhouse, Swimming Pool, Lawn Tennis Court, Yoga Zone, Cricket Net, Toddler's Play Area, 24x7 Security & CCTV, 1,515.77 sq. yd. Commercial Market, Temple Zone, Table Tennis, Indoor Gym, and Parks."
    },
    {
      question: "How far is Sector 36 Jhajjar from Gurgaon and Delhi NCR hubs?",
      answer: "Anandam Ashiyana is just 3 mins from Jhajjar city center, 20 mins from Reliance MET Industrial Park, 25 mins from AIIMS NCI Badsa, 40 mins from Dwarka Expressway, and approx 45 mins from Gurugram."
    },
    {
      question: "How can I book a site visit or get the official size-wise price list?",
      answer: "You can submit your Name and WhatsApp number on our site or click the WhatsApp button. Our RERA-verified consultant will share the approved layout map, latest inventory list, and coordinate a free site visit pickup."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="home" faqData={homeFaqs} />

      {/* Header */}
      <Header onOpenLeadModal={openModal} />

      {/* Hero Section */}
      <section className="relative bg-[#1B1814] text-[#FFFcf7] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#3F3A33] overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1920&q=80"
            alt="Anandam Ashiyana Plotted Township Sector 36 Jhajjar"
            fill
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1814] via-[#1B1814]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B08D4F]/20 border border-[#B08D4F]/40 text-[#D9C7A8] text-xs font-semibold tracking-wider uppercase">
              <span>📍 {SCHEME_NAME} · Sector 36, Jhajjar</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFcf7] leading-tight">
              Anandam Ashiyana — Freehold DDJAY Plots in Sector 36, Jhajjar
            </h1>

            <p className="text-sm sm:text-base text-[#D9C7A8] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PROJECT_AREA} · {TOTAL_PLOTS} ({PLOT_SIZES}) · Developed by <strong>{DEVELOPER_NAME}</strong> · RERA Registration <strong>{RERA_NUMBER}</strong> ({RERA_DATE}). Indicative price starting <strong>{STARTING_PRICE}</strong>.
            </p>

            <div className="p-3.5 bg-[#24201A] border border-[#3F3A33] rounded-xl text-xs text-[#A39A8B] leading-relaxed max-w-xl">
              <span className="text-[#B08D4F] font-semibold block mb-0.5">Consultant Advisory Notice:</span>
              Booking assistance provided by a RERA-verified consultant at anandamashiyana.in. We assist buyers with verified inventory, layout maps, and site visits — we are not the project owner.
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={getWhatsAppLink(PAGE_WA_MESSAGES.home)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-xl flex items-center gap-2 transition-all active:scale-95"
              >
                <span>Get Price on WhatsApp</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.982 9.982 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.037-5.176-2.922-7.062A9.92 9.92 0 0012.012 2z" />
                </svg>
              </a>

              <Link
                href="/site-visit"
                className="px-6 py-3.5 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xl transition-all active:scale-95"
              >
                Book Site Visit
              </Link>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] text-[#A39A8B]">
              <span className="px-2.5 py-1 bg-[#24201A] border border-[#3F3A33] rounded">✓ RERA Approved</span>
              <span className="px-2.5 py-1 bg-[#24201A] border border-[#3F3A33] rounded">✓ Licence 79 of 2025</span>
              <span className="px-2.5 py-1 bg-[#24201A] border border-[#3F3A33] rounded">✓ Gated Township</span>
              <span className="px-2.5 py-1 bg-[#24201A] border border-[#3F3A33] rounded">✓ 24m Approach Road</span>
              <span className="px-2.5 py-1 bg-[#24201A] border border-[#3F3A33] rounded">✓ Freehold Ownership</span>
            </div>
          </div>

          {/* Right Column: Hero Inline Lead Form */}
          <div className="lg:col-span-5">
            <LeadForm source="Hero Right Form" />
          </div>
        </div>
      </section>

      {/* Quick Facts Grid (10 Fact Cards) */}
      <section ref={factsRef} className="py-12 bg-[#EFE6D8] border-b border-[#D9C7A8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Verified Facts At A Glance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1814] mt-1">
              Anandam Ashiyana Key Project Details
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">Developer</span>
              <strong className="text-sm text-[#1B1814] font-serif block mt-1">Prish Group</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-100' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">Total Land Area</span>
              <strong className="text-sm text-[#1B1814] font-serif block mt-1">{PROJECT_AREA}</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-150' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">Total Plots</span>
              <strong className="text-sm text-[#1B1814] font-serif block mt-1">{TOTAL_PLOTS}</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-200' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">Plot Size Range</span>
              <strong className="text-sm text-[#1B1814] font-serif block mt-1">72 – 179 Sq. Yd.</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-250' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">Indicative Price</span>
              <strong className="text-sm text-[#B08D4F] font-serif block mt-1">{STARTING_PRICE}</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-300' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">Policy Scheme</span>
              <strong className="text-sm text-[#1B1814] font-serif block mt-1">DDJAY Haryana</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-350' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">RERA Registration</span>
              <strong className="text-xs text-[#1B1814] font-semibold block mt-1">{RERA_NUMBER}</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-400' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">DTCP Licence</span>
              <strong className="text-xs text-[#1B1814] font-semibold block mt-1">Licence 79 of 2025</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-450' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">Internal Roads</span>
              <strong className="text-sm text-[#1B1814] font-serif block mt-1">24m & 9m Wide</strong>
            </div>
            <div className={`p-4 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${factsVisible ? 'animate-card-fade delay-500' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
              <span className="text-xs text-[#3F3A33] block">Commercial Hub</span>
              <strong className="text-sm text-[#1B1814] font-serif block mt-1">{COMMERCIAL_AREA}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* About The Project (Comprehensive Narrative Copy) */}
      <section className="py-16 bg-[#F7F1E8] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-[#1B1814] leading-relaxed">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Official Overview
            </span>
            <h2 className="font-serif text-3xl font-bold mt-1 text-[#1B1814]">
              About Anandam Ashiyana — Sector 36, Jhajjar
            </h2>
            <div className="w-16 h-0.5 bg-[#B08D4F] mx-auto mt-3" />
          </div>

          <p className="text-sm sm:text-base text-[#3F3A33]">
            <strong>Anandam Ashiyana</strong> is an approved 12.4625-acre residential plotted township located strategically in <strong>Sector 36, Jhajjar (Village Talao belt), Haryana</strong>. Conceived and developed by renowned developer <strong>Prish Realty Pvt. Ltd. (Prish Group)</strong> under the Government of Haryana’s <strong>Deen Dayal Jan Awas Yojana (DDJAY)</strong> affordable housing policy, the project is designed to offer high-quality freehold residential plots combined with gated township security and lifestyle amenities.
          </p>

          <p className="text-sm sm:text-base text-[#3F3A33]">
            Featuring <strong>184 approved residential plots</strong> ranging from compact 72 sq. yd. units to spacious 179 sq. yd. parcels, Anandam Ashiyana addresses the growing demand for independent residential living near the West Delhi and Gurgaon growth corridors. The community benefits from wide 24-metre approach roads, 9-metre wide internal sector streets, manicured green parks, a dedicated temple zone, and a multi-facility clubhouse with a swimming pool, tennis court, and indoor gymnasium.
          </p>

          <p className="text-sm sm:text-base text-[#3F3A33]">
            As an authorized, RERA-verified real estate advisory service operating through <strong>anandamashiyana.in</strong>, our mission is to provide homebuyers and investors with 100% transparent information, official price lists, development updates, and seamless site visit coordination. We do not claim project ownership; all development, approvals, and legal titles are held by <strong>Prish Realty Pvt. Ltd.</strong> under Haryana RERA Registration No. <strong>{RERA_NUMBER}</strong> and DTCP Licence No. <strong>79 of 2025</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/project-overview"
              className="px-5 py-2.5 bg-[#2F4A3A] hover:bg-[#1E3328] text-[#FFFcf7] font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
            >
              Read Detailed Project Overview →
            </Link>
            <button
              onClick={() => openModal('About Section CTA')}
              className="px-5 py-2.5 bg-[#B08D4F] hover:bg-[#8C6A2F] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
            >
              Request Layout & Inventory Sheet
            </button>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-16 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Township Components
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1B1814] mt-1">
              What Anandam Ashiyana Offers
            </h2>
            <p className="text-xs text-[#3F3A33] mt-2">
              Explore residential plots, commercial convenience, and independent floor construction possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl p-6 flex flex-col justify-between shadow-sm animate-card-fade transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="space-y-3">
                <span className="px-2.5 py-1 bg-[#B08D4F]/20 text-[#8C6A2F] text-xs font-bold uppercase rounded inline-block">
                  Residential Inventory
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1B1814]">
                  Freehold Residential Plots
                </h3>
                <p className="text-xs text-[#3F3A33] leading-relaxed">
                  184 approved plot parcels ranging from 72 sq. yd. to 179 sq. yd. Build your independent dream home with stilt + floors construction options as per DTCP DDJAY bylaws.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#B08D4F]">
                  Indicative Price: {STARTING_PRICE}
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => openModal('Residential Plots Card')}
                  className="w-full py-2.5 bg-[#1B1814] hover:bg-[#2F4A3A] text-[#FFFcf7] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Get Plot Inventory
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl p-6 flex flex-col justify-between shadow-sm animate-card-fade delay-150 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="space-y-3">
                <span className="px-2.5 py-1 bg-[#2F4A3A]/20 text-[#2F4A3A] text-xs font-bold uppercase rounded inline-block">
                  Daily Convenience
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1B1814]">
                  Commercial Retail Pocket
                </h3>
                <p className="text-xs text-[#3F3A33] leading-relaxed">
                  Dedicated 1,515.77 sq. yd. commercial retail market inside the gated complex for daily grocery shops, milk booths, pharmacies, and essential service outlets.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#2F4A3A]">
                  Integrated Shopping Within Gated Campus
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/master-plan"
                  className="block w-full py-2.5 bg-[#1B1814] hover:bg-[#2F4A3A] text-[#FFFcf7] text-xs font-bold uppercase tracking-wider rounded-lg text-center transition-colors"
                >
                  View Master Layout
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl p-6 flex flex-col justify-between shadow-sm animate-card-fade delay-300 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="space-y-3">
                <span className="px-2.5 py-1 bg-[#8C6A2F]/20 text-[#8C6A2F] text-xs font-bold uppercase rounded inline-block">
                  Future Home Architecture
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1B1814]">
                  Independent Floor Living
                </h3>
                <p className="text-xs text-[#3F3A33] leading-relaxed">
                  Freedom to construct your custom multi-floor villa or rental floor floors for passive income. Subject to sanctioned building plans and DTCP Haryana regulations.
                </p>
                <div className="pt-2 text-xs font-semibold text-[#8C6A2F]">
                  Customizable Construction Flexibility
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/ddjay-guide"
                  className="block w-full py-2.5 bg-[#1B1814] hover:bg-[#2F4A3A] text-[#FFFcf7] text-xs font-bold uppercase tracking-wider rounded-lg text-center transition-colors"
                >
                  Learn DDJAY Construction Rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buyers Search This Project (6 Key Drivers) */}
      <section className="py-16 bg-[#EFE6D8] border-b border-[#D9C7A8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Investment & Living Value
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1B1814] mt-1">
              Why Buyers Choose Anandam Ashiyana
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2 animate-card-fade transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#B08D4F]/20 text-[#8C6A2F] font-bold text-lg flex items-center justify-center">
                1
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                100% Legal & RERA Approved
              </h3>
              <p className="text-xs text-[#3F3A33] leading-relaxed">
                HRERA No. {RERA_NUMBER} and DTCP Licence No. 79 of 2025 ensure complete legal title clarity, clear approvals, and bank loan accessibility.
              </p>
            </div>

            <div className="p-6 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2 animate-card-fade delay-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#2F4A3A]/20 text-[#2F4A3A] font-bold text-lg flex items-center justify-center">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                Prime Sector 36 Belt
              </h3>
              <p className="text-xs text-[#3F3A33] leading-relaxed">
                Positioned on the high-growth Chuchakwas / Sector 36 corridor, just 3 minutes from Jhajjar city center and 20 mins from Reliance MET.
              </p>
            </div>

            <div className="p-6 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2 animate-card-fade delay-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#B08D4F]/20 text-[#8C6A2F] font-bold text-lg flex items-center justify-center">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                Gated Security & Infrastructure
              </h3>
              <p className="text-xs text-[#3F3A33] leading-relaxed">
                Walled boundary, 24x7 security personnel, CCTV cameras, 24m wide approach road, and 9m wide internal paved sector streets.
              </p>
            </div>

            <div className="p-6 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2 animate-card-fade delay-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#2F4A3A]/20 text-[#2F4A3A] font-bold text-lg flex items-center justify-center">
                4
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                Clubhouse & Lifestyle Amenities
              </h3>
              <p className="text-xs text-[#3F3A33] leading-relaxed">
                Enjoy a swimming pool, lawn tennis court, indoor gym, yoga zone, cricket net, toddler&apos;s play park, and temple zone within the campus.
              </p>
            </div>

            <div className="p-6 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2 animate-card-fade delay-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#B08D4F]/20 text-[#8C6A2F] font-bold text-lg flex items-center justify-center">
                5
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                High ROI Corridor
              </h3>
              <p className="text-xs text-[#3F3A33] leading-relaxed">
                Proximity to AIIMS NCI Badsa, IIT Delhi Extension, XLRI Campus, and Reliance MET ensures strong future capital appreciation and rental demand.
              </p>
            </div>

            <div className="p-6 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl space-y-2 animate-card-fade delay-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#2F4A3A]/20 text-[#2F4A3A] font-bold text-lg flex items-center justify-center">
                6
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B1814]">
                Consultant-Assisted Buying
              </h3>
              <p className="text-xs text-[#3F3A33] leading-relaxed">
                Get impartial advice, current price comparisons, site visit logistics, and step-by-step developer documentation guidance from verified experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Teaser (Modern Plotted Township Facilities) */}
      <section className="py-16 bg-[#2A3B2A] text-[#FFFcf7] border-b border-[#3F3A33]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 text-center md:text-left">
            <div>
              <span className="px-3 py-1 bg-[#B08D4F]/20 text-[#D9C7A8] text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-2">
                Modern Plotted Township Facilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFcf7]">
                Township Amenities at Anandam Ashiyana
              </h2>
            </div>
            <Link
              href="/amenities"
              className="px-6 py-3 bg-[#B08D4F] hover:bg-[#8C6A2F] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Explore All Amenities →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 border-t border-[#D9C7A8]/20 pt-8">
            <div className="flex flex-col items-center text-center p-3 sm:border-r border-[#D9C7A8]/20 space-y-3 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFcf7]/10 flex items-center justify-center text-[#E6C687] group-hover:scale-110 transition-transform shadow-inner">
                <IconClubhouse className="w-8 h-8" color="#E6C687" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FFFcf7]">Club House</h4>
                <p className="text-[11px] text-[#D9C7A8] mt-0.5">Multi-purpose community hub</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-3 sm:border-r border-[#D9C7A8]/20 space-y-3 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFcf7]/10 flex items-center justify-center text-[#E6C687] group-hover:scale-110 transition-transform shadow-inner">
                <IconSwimmingPool className="w-8 h-8" color="#E6C687" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FFFcf7]">Swimming Pool</h4>
                <p className="text-[11px] text-[#D9C7A8] mt-0.5">Temperature regulated pool & deck</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-3 sm:border-r border-[#D9C7A8]/20 space-y-3 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFcf7]/10 flex items-center justify-center text-[#E6C687] group-hover:scale-110 transition-transform shadow-inner">
                <IconLawnTennis className="w-8 h-8" color="#E6C687" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FFFcf7]">Lawn Tennis</h4>
                <p className="text-[11px] text-[#D9C7A8] mt-0.5">Outdoor sports court</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-3 space-y-3 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFcf7]/10 flex items-center justify-center text-[#E6C687] group-hover:scale-110 transition-transform shadow-inner">
                <IconYogaZone className="w-8 h-8" color="#E6C687" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FFFcf7]">Yoga Zone</h4>
                <p className="text-[11px] text-[#D9C7A8] mt-0.5">Peaceful outdoor green lawn</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-3 sm:border-r border-[#D9C7A8]/20 space-y-3 group border-t border-[#D9C7A8]/20 pt-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFcf7]/10 flex items-center justify-center text-[#E6C687] group-hover:scale-110 transition-transform shadow-inner">
                <IconCricketNet className="w-8 h-8" color="#E6C687" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FFFcf7]">Cricket Net</h4>
                <p className="text-[11px] text-[#D9C7A8] mt-0.5">Practice net for enthusiasts</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-3 sm:border-r border-[#D9C7A8]/20 space-y-3 group border-t border-[#D9C7A8]/20 pt-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFcf7]/10 flex items-center justify-center text-[#E6C687] group-hover:scale-110 transition-transform shadow-inner">
                <IconToddlerPlay className="w-8 h-8" color="#E6C687" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FFFcf7]">Toddler Play Area</h4>
                <p className="text-[11px] text-[#D9C7A8] mt-0.5">Safe cushioned kids zone</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-3 sm:border-r border-[#D9C7A8]/20 space-y-3 group border-t border-[#D9C7A8]/20 pt-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFcf7]/10 flex items-center justify-center text-[#E6C687] group-hover:scale-110 transition-transform shadow-inner">
                <IconGatedCommunity className="w-8 h-8" color="#E6C687" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FFFcf7]">Gated Community</h4>
                <p className="text-[11px] text-[#D9C7A8] mt-0.5">Perimeter wall & security</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-3 space-y-3 group border-t border-[#D9C7A8]/20 pt-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FFFcf7]/10 flex items-center justify-center text-[#E6C687] group-hover:scale-110 transition-transform shadow-inner">
                <IconMultipurposeGarden className="w-8 h-8" color="#E6C687" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#FFFcf7]">Multipurpose Garden</h4>
                <p className="text-[11px] text-[#D9C7A8] mt-0.5">Central park & green lawn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Teaser Section */}
      <section className="py-16 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Strategic Connectivity
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1B1814]">
              Prime Location Advantage — Sector 36, Jhajjar
            </h2>
            <p className="text-xs text-[#3F3A33] leading-relaxed">
              Anandam Ashiyana is strategically located on the main growth axis of Sector 36, Jhajjar. Surrounded by key industrial corridors, premier educational institutes, and major healthcare centers.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs pt-2">
              <div className="p-3 bg-[#F7F1E8] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block font-bold">Pratapgarh Farms</strong>
                <span className="text-[#8C6A2F]">~2 mins</span>
              </div>
              <div className="p-3 bg-[#F7F1E8] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block font-bold">Jhajjar City Center</strong>
                <span className="text-[#8C6A2F]">~3 mins</span>
              </div>
              <div className="p-3 bg-[#F7F1E8] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block font-bold">Mini Secretariat</strong>
                <span className="text-[#8C6A2F]">~5 mins</span>
              </div>
              <div className="p-3 bg-[#F7F1E8] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block font-bold">Reliance MET Hub</strong>
                <span className="text-[#8C6A2F]">~20 mins</span>
              </div>
              <div className="p-3 bg-[#F7F1E8] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block font-bold">AIIMS NCI Badsa</strong>
                <span className="text-[#8C6A2F]">~25 mins</span>
              </div>
              <div className="p-3 bg-[#F7F1E8] border border-[#D9C7A8] rounded-lg">
                <strong className="text-[#1B1814] block font-bold">Gurugram Cyber Hub</strong>
                <span className="text-[#8C6A2F]">~45 mins</span>
              </div>
            </div>

            <div className="pt-2 flex gap-4">
              <Link
                href="/location"
                className="px-5 py-2.5 bg-[#B08D4F] hover:bg-[#8C6A2F] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
              >
                View Complete Distance Matrix →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#24201A] p-2 border border-[#3F3A33] rounded-2xl shadow-lg">
            <div className="relative w-full h-[320px] rounded-xl overflow-hidden">
              <iframe
                title="Anandam Ashiyana Sector 36 Jhajjar Google Map Location"
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
      </section>

      {/* Price Teaser Banner */}
      <section className="py-12 bg-[#2F4A3A] text-[#FFFcf7] border-y border-[#3F3A33]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#D9C7A8] font-semibold">
              Indicative Pricing & Payment Schedule
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFcf7]">
              Starting at {STARTING_PRICE}
            </h2>
            <p className="text-xs text-[#D9C7A8]">
              Flexible Development-Linked Payment Plan available. Request complete size-wise cost breakdown sheet.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openModal('Price Teaser Band')}
              className="px-6 py-3 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all cursor-pointer"
            >
              Request Price Sheet
            </button>
            <Link
              href="/price-payment-plan"
              className="px-6 py-3 bg-[#181512] hover:bg-[#24201A] text-[#FFFcf7] font-bold text-xs uppercase tracking-wider rounded-lg border border-[#3F3A33] transition-all"
            >
              View Price Breakdown Page
            </Link>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 bg-[#EFE6D8] border-b border-[#D9C7A8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Seamless Buyer Journey
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1B1814] mt-1">
              How We Help You Buy at Anandam Ashiyana
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-center space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#B08D4F] text-[#1B1814] font-bold text-xs flex items-center justify-center mx-auto">1</span>
              <h4 className="font-bold text-xs text-[#1B1814]">Submit Enquiry</h4>
              <p className="text-[11px] text-[#3F3A33]">Share your name & WhatsApp number</p>
            </div>

            <div className="p-5 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-center space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#B08D4F] text-[#1B1814] font-bold text-xs flex items-center justify-center mx-auto">2</span>
              <h4 className="font-bold text-xs text-[#1B1814]">Get Layout & Price</h4>
              <p className="text-[11px] text-[#3F3A33]">Receive inventory sheet on WhatsApp</p>
            </div>

            <div className="p-5 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-center space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#B08D4F] text-[#1B1814] font-bold text-xs flex items-center justify-center mx-auto">3</span>
              <h4 className="font-bold text-xs text-[#1B1814]">Guided Site Visit</h4>
              <p className="text-[11px] text-[#3F3A33]">Inspect plot boundaries & road width</p>
            </div>

            <div className="p-5 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-center space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#B08D4F] text-[#1B1814] font-bold text-xs flex items-center justify-center mx-auto">4</span>
              <h4 className="font-bold text-xs text-[#1B1814]">Document Guidance</h4>
              <p className="text-[11px] text-[#3F3A33]">RERA & payment terms assistance</p>
            </div>

            <div className="p-5 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-center space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#B08D4F] text-[#1B1814] font-bold text-xs flex items-center justify-center mx-auto">5</span>
              <h4 className="font-bold text-xs text-[#1B1814]">Developer Booking</h4>
              <p className="text-[11px] text-[#3F3A33]">Direct token submission to Prish Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Sources Box (Google E-E-A-T Trust) */}
      <section className="py-12 bg-[#F7F1E8] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#24201A] text-[#FFFcf7] border border-[#3F3A33] p-6 rounded-2xl shadow-md space-y-4">
            <div className="flex items-center gap-2 text-[#B08D4F] text-xs font-bold uppercase tracking-wider">
              <span>🏛️ Verification & Official Developer Sources</span>
            </div>
            <p className="text-xs text-[#D9C7A8] leading-relaxed">
              We encourage all buyers to verify project credentials directly with government portals and official promoter literature. Anandam Ashiyana is fully approved under Haryana DTCP and HRERA guidelines.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={RERA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#181512] hover:bg-[#3F3A33] text-[#B08D4F] border border-[#3F3A33] rounded-lg text-xs font-semibold transition-colors"
              >
                Verify HRERA Registration ({RERA_NUMBER}) →
              </a>
              <a
                href={DEVELOPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#181512] hover:bg-[#3F3A33] text-[#D9C7A8] border border-[#3F3A33] rounded-lg text-xs font-semibold transition-colors"
              >
                Visit Official Prish Group Developer Page →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Home FAQs Accordion Section */}
      <section className="py-16 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1B1814] mt-1">
              Anandam Ashiyana FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className="p-5 bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-2">
                <h3 className="font-serif text-base font-bold text-[#1B1814]">
                  Q: {faq.question}
                </h3>
                <p className="text-xs text-[#3F3A33] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-block px-6 py-3 bg-[#1B1814] hover:bg-[#2F4A3A] text-[#FFFcf7] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              View All 25+ Comprehensive FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA & Final Form */}
      <section className="py-16 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
              Ready to Explore Plot Availability?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFcf7]">
              Book Your Site Visit or Request Size-Wise Rates Today
            </h2>
            <p className="text-xs sm:text-sm text-[#D9C7A8] leading-relaxed">
              Connect with our RERA-verified consultant team for instant WhatsApp assistance, layout PDF map delivery, and free site visit arrangement.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs text-[#A39A8B]">
              <span>📞 Direct Line: <a href={PHONE_TEL} className="text-[#25D366] font-bold">{PHONE_DISPLAY}</a></span>
              <span>✉️ Email: <a href="mailto:hello@anandamashiyana.in" className="text-[#B08D4F] underline">hello@anandamashiyana.in</a></span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <LeadForm source="Bottom CTA Form" />
          </div>
        </div>
      </section>

      {/* Global Popups & Action Bars */}
      <LeadPopups
        manualModalOpen={modalOpen}
        manualModalSource={modalSource}
        onCloseManualModal={() => setModalOpen(false)}
      />
      <FloatingWhatsApp pageKey="home" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="home" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
