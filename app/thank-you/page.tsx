'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import { CONSULTANT_PHONE, getWhatsAppLink, PAGE_WA_MESSAGES } from '@/lib/constants';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <Header />

      <section className="py-20 bg-[#1B1814] text-[#FFFcf7] flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 bg-[#B08D4F]/20 text-[#B08D4F] border border-[#B08D4F]/40 rounded-full flex items-center justify-center mx-auto text-3xl">
            ✓
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Inquiry Received
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Thank You for Expressing Interest in Anandam Ashiyana!
          </h1>

          <p className="text-xs sm:text-sm text-[#D9C7A8] leading-relaxed max-w-lg mx-auto">
            Your inquiry has been successfully routed to our senior RERA consultant. Our site team will contact you within <strong>15 minutes</strong> with the official cost sheet and approved layout map.
          </p>

          <div className="p-5 bg-[#24201A] border border-[#3F3A33] rounded-2xl space-y-3 max-w-md mx-auto text-left">
            <h3 className="font-serif text-sm font-bold text-[#B08D4F] text-center">
              Want Instant PDF on WhatsApp?
            </h3>
            <p className="text-xs text-[#A39A8B] text-center">
              Click below to trigger instant auto-response on WhatsApp:
            </p>
            <a
              href={getWhatsAppLink(PAGE_WA_MESSAGES.thankYou)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>Get Cost Sheet on WhatsApp Now</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link
              href="/"
              className="px-6 py-2.5 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold rounded-md uppercase tracking-wider transition-all"
            >
              Return to Homepage
            </Link>
            <a
              href={`tel:${CONSULTANT_PHONE}`}
              className="px-6 py-2.5 bg-[#3F3A33] hover:bg-[#4F4940] text-white font-bold rounded-md uppercase tracking-wider transition-all"
            >
              Call {CONSULTANT_PHONE}
            </a>
          </div>
        </div>
      </section>

      <FloatingWhatsApp pageKey="thankYou" />
      <MobileStickyBar pageKey="thankYou" />
      <Footer />
    </div>
  );
}
