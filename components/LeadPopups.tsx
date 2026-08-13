'use client';

import React, { useState, useEffect } from 'react';
import LeadForm from './LeadForm';
import { RERA_NUMBER, DEVELOPER_NAME, getWhatsAppLink } from '@/lib/constants';

interface LeadPopupsProps {
  manualModalOpen?: boolean;
  manualModalSource?: string;
  onCloseManualModal?: () => void;
}

export default function LeadPopups({
  manualModalOpen = false,
  manualModalSource = 'Manual Trigger',
  onCloseManualModal,
}: LeadPopupsProps) {
  const [entryModalOpen, setEntryModalOpen] = useState(false);
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [showSlimTopBar, setShowSlimTopBar] = useState(false);

  useEffect(() => {
    // Check if lead already submitted
    const isSubmitted = typeof window !== 'undefined' && localStorage.getItem('aa_lead_submitted') === '1';
    if (isSubmitted) return;

    const popupShown = typeof window !== 'undefined' && sessionStorage.getItem('aa_popup_shown') === '1';
    const exitShown = typeof window !== 'undefined' && sessionStorage.getItem('aa_exit_shown') === '1';

    // 1. Timed trigger (12 seconds)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('aa_popup_shown') && !localStorage.getItem('aa_lead_submitted')) {
        setEntryModalOpen(true);
        sessionStorage.setItem('aa_popup_shown', '1');
      }
    }, 12000);

    // 2. Scroll trigger (40% for entry modal, 60% for top bar)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent >= 40 && !sessionStorage.getItem('aa_popup_shown') && !localStorage.getItem('aa_lead_submitted')) {
        setEntryModalOpen(true);
        sessionStorage.setItem('aa_popup_shown', '1');
      }

      if (scrollPercent >= 60) {
        setShowSlimTopBar(true);
      } else {
        setShowSlimTopBar(false);
      }
    };

    // 3. Exit Intent trigger (Mouse leave top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 10 &&
        !sessionStorage.getItem('aa_exit_shown') &&
        !localStorage.getItem('aa_lead_submitted') &&
        !entryModalOpen
      ) {
        setExitModalOpen(true);
        sessionStorage.setItem('aa_exit_shown', '1');
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [entryModalOpen]);

  // Handle Close triggers
  const closeEntryModal = () => {
    setEntryModalOpen(false);
  };

  const closeExitModal = () => {
    setExitModalOpen(false);
  };

  const activeManual = manualModalOpen;

  return (
    <>
      {/* 1. Slim Top Bar on 60% Scroll */}
      {showSlimTopBar && !entryModalOpen && !exitModalOpen && !activeManual && (
        <div className="fixed top-12 left-0 right-0 z-30 bg-[#2F4A3A] text-[#FFFcf7] py-2 px-4 shadow-lg border-b border-[#B08D4F]/40 flex items-center justify-between gap-3 text-xs animate-in slide-in-from-top duration-300">
          <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <span>
              💡 Want the latest Anandam Ashiyana size-wise price list & payment plan?
            </span>
            <a
              href={getWhatsAppLink('Hi, I want the latest price list and availability list for Anandam Ashiyana.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded text-[11px] uppercase tracking-wider flex items-center gap-1"
            >
              Get on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* 2. Entry Modal / Manual Modal */}
      {(entryModalOpen || activeManual) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-[#181512] border border-[#3F3A33] rounded-2xl p-2 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                closeEntryModal();
                if (onCloseManualModal) onCloseManualModal();
              }}
              className="absolute top-3 right-3 z-10 p-2 text-[#A39A8B] hover:text-[#FFFcf7] bg-[#24201A] rounded-full focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="p-2 sm:p-4">
              <div className="mb-3 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B08D4F]">
                  RERA: {RERA_NUMBER} · Developer: {DEVELOPER_NAME}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFcf7] mt-1">
                  Anandam Ashiyana — Booking Open
                </h3>
                <p className="text-xs text-[#D9C7A8] mt-1">
                  Get today's plot availability, price list & payment plan directly on WhatsApp in 2 minutes.
                </p>
              </div>

              <LeadForm
                source={activeManual ? manualModalSource : 'Entry Timed/Scroll Popup'}
                compact={true}
                onSuccess={() => {
                  closeEntryModal();
                  if (onCloseManualModal) onCloseManualModal();
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. Exit Intent Modal */}
      {exitModalOpen && !entryModalOpen && !activeManual && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-[#24201A] border border-[#B08D4F] rounded-2xl p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeExitModal}
              className="absolute top-3 right-3 z-10 p-2 text-[#A39A8B] hover:text-[#FFFcf7] bg-[#181512] rounded-full focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="p-2 sm:p-4">
              <div className="mb-3 text-center">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#B08D4F]/20 text-[#B08D4F] text-[10px] font-bold uppercase tracking-wider mb-1">
                  Wait — Don't Miss Current Inventory
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFcf7]">
                  Limited DDJAY Freehold Plots
                </h3>
                <p className="text-xs text-[#D9C7A8] mt-1">
                  Share your WhatsApp to get the latest size-wise availability before you leave Sector 36, Jhajjar.
                </p>
              </div>

              <LeadForm
                source="Exit Intent Popup"
                headline=""
                subheadline=""
                buttonText="Get Inventory on WhatsApp"
                compact={true}
                onSuccess={closeExitModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
