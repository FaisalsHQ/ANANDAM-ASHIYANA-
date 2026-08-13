'use client';

import React from 'react';
import { getWhatsAppLink, PAGE_WA_MESSAGES } from '@/lib/constants';

interface FloatingWhatsAppProps {
  customMessage?: string;
  pageKey?: string;
}

export default function FloatingWhatsApp({ customMessage, pageKey = 'home' }: FloatingWhatsAppProps) {
  const message = customMessage || PAGE_WA_MESSAGES[pageKey] || PAGE_WA_MESSAGES.home;
  const link = getWhatsAppLink(message);

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 group">
      {/* Desktop Tooltip */}
      <div className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-[#181512] text-[#FFFcf7] text-xs font-semibold rounded-lg shadow-xl border border-[#3F3A33] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp — Instant Plot Details
      </div>

      {/* Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-whatsapp-pulse cursor-pointer"
      >
        <svg className="w-8 h-8 lg:w-9 lg:h-9 fill-current" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.982 9.982 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.037-5.176-2.922-7.062A9.92 9.92 0 0012.012 2z" />
        </svg>
      </a>
    </div>
  );
}
