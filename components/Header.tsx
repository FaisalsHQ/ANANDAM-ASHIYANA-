'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE_NAME, getWhatsAppLink } from '@/lib/constants';

interface HeaderProps {
  onOpenLeadModal?: (source?: string) => void;
}

export default function Header({ onOpenLeadModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '/project-overview' },
    { name: 'Price & Plan', href: '/price-payment-plan' },
    { name: 'Master Plan', href: '/master-plan' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Location', href: '/location' },
    { name: 'DDJAY Guide', href: '/ddjay-guide' },
    { name: 'Why Jhajjar', href: '/why-jhajjar' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Site Visit', href: '/site-visit' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      <nav
        className={`w-full bg-[#1B1814]/95 backdrop-blur-md border-b border-[#3F3A33]/40 text-[#FFFcf7] transition-all duration-300 ${
          isScrolled ? 'py-2.5 shadow-xl' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif tracking-widest text-lg sm:text-xl font-bold text-[#FFFcf7] group-hover:text-[#B08D4F] transition-colors">
              ANANDAM ASHIYANA
            </span>
            <span className="text-[10px] tracking-wider text-[#D9C7A8] font-medium uppercase">
              Sector 36 · Jhajjar · DDJAY
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-x-5 text-xs font-medium text-[#EFE6D8]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#B08D4F] transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink('Hi, I want to check latest plot availability & price list for Anandam Ashiyana.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 transition-all border border-[#25D366]/30"
              title="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.982 9.982 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.037-5.176-2.922-7.062A9.92 9.92 0 0012.012 2z" />
              </svg>
            </a>

            <button
              onClick={() => onOpenLeadModal?.('Header CTA')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B1814] bg-[#B08D4F] hover:bg-[#D9C7A8] rounded-md transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Get Price
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#EFE6D8] hover:text-[#B08D4F] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#181512] border-t border-[#3F3A33]/60 px-4 py-4 space-y-2">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded bg-[#2F4A3A]/30 text-[#EFE6D8] hover:bg-[#B08D4F] hover:text-[#1B1814] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[#3F3A33]/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal?.('Mobile Header CTA');
                }}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-[#B08D4F] text-[#1B1814] rounded-md text-center"
              >
                Get Price List & Payment Plan
              </button>
              <a
                href={getWhatsAppLink('Hi, I am contacting via mobile menu on anandamashiyana.in to request price and site visit details.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white rounded-md text-center flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
