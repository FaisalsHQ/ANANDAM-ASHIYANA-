'use client';

import React from 'react';
import { PHONE_DISPLAY, PHONE_TEL, getWhatsAppLink, PAGE_WA_MESSAGES } from '@/lib/constants';

interface MobileStickyBarProps {
  onOpenLeadModal?: (source?: string) => void;
  pageKey?: string;
}

export default function MobileStickyBar({ onOpenLeadModal, pageKey = 'home' }: MobileStickyBarProps) {
  const message = PAGE_WA_MESSAGES[pageKey] || PAGE_WA_MESSAGES.home;
  const waUrl = getWhatsAppLink(message);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#181512] border-t border-[#3F3A33] shadow-2xl">
      {/* Top Direct Line Bar */}
      <div className="bg-[#24201A] border-b border-[#3F3A33] px-3 py-1 flex items-center justify-between text-[11px] font-bold text-[#D9C7A8]">
        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#B08D4F]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          RERA Verified Helpline
        </span>
        <a href={PHONE_TEL} className="text-[#25D366] hover:underline font-mono text-xs flex items-center gap-1 font-extrabold">
          <span>📞</span> {PHONE_DISPLAY}
        </a>
      </div>

      {/* Primary CTA Action Buttons */}
      <div className="p-2 flex items-center justify-between gap-1.5">
        {/* Direct Call Button */}
        <a
          href={PHONE_TEL}
          className="flex-1 py-2 px-2 bg-[#2F4A3A] hover:bg-[#1E3328] text-[#FFFcf7] rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center shadow-md border border-[#2F4A3A]"
        >
          <svg className="w-4 h-4 fill-current shrink-0 text-[#25D366]" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <div className="flex flex-col items-start leading-tight text-left">
            <span className="text-[11px] font-extrabold">Call Now</span>
            <span className="text-[9px] text-[#D9C7A8] font-normal">{PHONE_DISPLAY}</span>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center shadow-md"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.982 9.982 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.037-5.176-2.922-7.062A9.92 9.92 0 0012.012 2z" />
          </svg>
          <div className="flex flex-col items-start leading-tight text-left">
            <span className="text-[11px] font-extrabold">WhatsApp</span>
            <span className="text-[9px] text-emerald-100 font-normal">Instant Chat</span>
          </div>
        </a>

        {/* Get Price Button */}
        <button
          onClick={() => onOpenLeadModal?.('Mobile Sticky Bottom Bar')}
          className="py-2.5 px-3 bg-[#B08D4F] hover:bg-[#8C6A2F] text-[#1B1814] rounded-xl font-bold text-xs uppercase tracking-wider text-center active:scale-95 transition-all cursor-pointer shadow-md flex items-center justify-center"
        >
          <span>Get Price</span>
        </button>
      </div>
    </div>
  );
}

