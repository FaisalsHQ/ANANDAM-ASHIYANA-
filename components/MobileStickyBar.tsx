'use client';

import React from 'react';
import { PHONE_TEL, getWhatsAppLink, PAGE_WA_MESSAGES } from '@/lib/constants';

interface MobileStickyBarProps {
  onOpenLeadModal?: (source?: string) => void;
  pageKey?: string;
}

export default function MobileStickyBar({ onOpenLeadModal, pageKey = 'home' }: MobileStickyBarProps) {
  const message = PAGE_WA_MESSAGES[pageKey] || PAGE_WA_MESSAGES.home;
  const waUrl = getWhatsAppLink(message);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#181512] border-t border-[#3F3A33] px-2 py-2 flex items-center justify-between gap-1.5 shadow-2xl">
      {/* Call Button */}
      <a
        href={PHONE_TEL}
        className="flex-1 py-2.5 px-2 bg-[#2F4A3A] text-[#FFFcf7] rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 bg-[#25D366] text-white rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-all text-center"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.982 9.982 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.037-5.176-2.922-7.062A9.92 9.92 0 0012.012 2z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Get Price Button */}
      <button
        onClick={() => onOpenLeadModal?.('Mobile Sticky Bottom Bar')}
        className="flex-1 py-2.5 px-2 bg-[#B08D4F] text-[#1B1814] rounded-lg font-bold text-xs uppercase tracking-wider text-center active:scale-95 transition-all cursor-pointer"
      >
        <span>Get Price</span>
      </button>
    </div>
  );
}
