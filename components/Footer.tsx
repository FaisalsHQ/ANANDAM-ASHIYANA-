import React from 'react';
import Link from 'next/link';
import {
  SITE_NAME,
  SITE_DOMAIN,
  DEVELOPER_NAME,
  DEVELOPER_URL,
  RERA_NUMBER,
  RERA_DATE,
  RERA_URL,
  LICENCE_NUMBER,
  EMAILS,
  PHONE_DISPLAY,
  PHONE_TEL,
  IDENTITY_DISCLAIMER,
  PRICE_DISCLAIMER,
  getWhatsAppLink,
} from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181512] text-[#D9C7A8] pt-14 pb-20 lg:pb-12 border-t border-[#3F3A33]/60 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Identity & Legal Disclaimer Box */}
        <div className="bg-[#24201A] border border-[#3F3A33] rounded-xl p-5 mb-10 text-xs leading-relaxed text-[#EFE6D8]">
          <p className="font-semibold text-[#B08D4F] mb-1 uppercase tracking-wider text-[11px]">
            Important Legal & Trust Disclosure
          </p>
          <p className="mb-2">{IDENTITY_DISCLAIMER}</p>
          <p className="text-[#A39A8B]">{PRICE_DISCLAIMER}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About & Identity */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#FFFcf7] tracking-wider">
              ANANDAM ASHIYANA
            </h3>
            <p className="text-xs text-[#A39A8B] leading-relaxed">
              Anandam Ashiyana is a 12.46-acre Deen Dayal Jan Awas Yojana (DDJAY) gated residential plotted colony developed by Prish Realty Pvt. Ltd. (Prish Group) in Sector 36, Jhajjar.
            </p>
            <div className="text-xs space-y-1 text-[#EFE6D8]">
              <p><strong>RERA No:</strong> <a href={RERA_URL} target="_blank" rel="noopener noreferrer" className="text-[#B08D4F] hover:underline">{RERA_NUMBER}</a> ({RERA_DATE})</p>
              <p><strong>Licence No:</strong> {LICENCE_NUMBER}</p>
              <p><strong>Scheme:</strong> DDJAY Haryana</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
              Explore Project
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/project-overview" className="hover:text-[#FFFcf7] transition-colors">Project Overview</Link></li>
              <li><Link href="/price-payment-plan" className="hover:text-[#FFFcf7] transition-colors">Price List & Payment Plan</Link></li>
              <li><Link href="/master-plan" className="hover:text-[#FFFcf7] transition-colors">Master Plan & Layout</Link></li>
              <li><Link href="/amenities" className="hover:text-[#FFFcf7] transition-colors">Township Amenities</Link></li>
              <li><Link href="/location" className="hover:text-[#FFFcf7] transition-colors">Location & Connectivity</Link></li>
              <li><Link href="/ddjay-guide" className="hover:text-[#FFFcf7] transition-colors">DDJAY Policy Guide</Link></li>
              <li><Link href="/why-jhajjar" className="hover:text-[#FFFcf7] transition-colors">Why Invest in Sector 36 Jhajjar</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FFFcf7] transition-colors">Image Gallery</Link></li>
            </ul>
          </div>

          {/* Col 3: Assistance & Articles */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
              Helpful Guides & Buyer Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/site-visit" className="hover:text-[#FFFcf7] transition-colors">Book Free Site Visit</Link></li>
              <li><Link href="/faq" className="hover:text-[#FFFcf7] transition-colors">Exhaustive FAQs (25+ Questions)</Link></li>
              <li><Link href="/blog" className="hover:text-[#FFFcf7] transition-colors">Buyer Blog & Reviews</Link></li>
              <li><Link href="/blog/anandam-ashiyana-review" className="hover:text-[#FFFcf7] transition-colors">2026 Anandam Ashiyana Review</Link></li>
              <li><Link href="/blog/anandam-ashiyana-vs-gurgaon-plots" className="hover:text-[#FFFcf7] transition-colors">Jhajjar vs Gurgaon Plot Prices</Link></li>
              <li><Link href="/blog/rera-and-licence-explained" className="hover:text-[#FFFcf7] transition-colors">RERA Verification Guide</Link></li>
              <li><Link href="/about" className="hover:text-[#FFFcf7] transition-colors">About Our Consultant Role</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFFcf7] transition-colors">Contact RERA Consultant</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacts & Official References */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
              Get In Touch
            </h4>
            <div className="space-y-2 text-xs">
              <p>
                <span className="text-[#A39A8B] block">Email Enquiries:</span>
                <a href={`mailto:${EMAILS.primary}`} className="text-[#FFFcf7] hover:underline block">{EMAILS.primary}</a>
                <a href={`mailto:${EMAILS.secondary}`} className="text-[#FFFcf7] hover:underline block">{EMAILS.secondary}</a>
              </p>
              <p>
                <span className="text-[#A39A8B] block">Direct WhatsApp & Helpline:</span>
                <a href={PHONE_TEL} className="text-[#25D366] font-semibold hover:underline block">{PHONE_DISPLAY}</a>
              </p>
              <p className="pt-2 text-[11px] text-[#A39A8B]">
                Operating Hours: Mon–Sun 9:30 AM – 7:30 PM IST
              </p>
            </div>

            <div className="pt-3 border-t border-[#3F3A33]/50 text-xs space-y-1">
              <span className="text-[#A39A8B] block font-medium">Official Links:</span>
              <a href={DEVELOPER_URL} target="_blank" rel="noopener noreferrer" className="text-[#B08D4F] hover:underline block">
                Prish Group Official Page →
              </a>
              <a href={RERA_URL} target="_blank" rel="noopener noreferrer" className="text-[#B08D4F] hover:underline block">
                Haryana RERA Portal (hrera.gov.in) →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-[#3F3A33] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A39A8B] text-center md:text-left">
          <p>
            © {currentYear} {SITE_DOMAIN} — Marketing microsite operated by RERA-verified real estate consultant. All trademarks, project names and IP belong to Prish Realty Pvt. Ltd.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="hover:text-[#FFFcf7]">Privacy Policy</Link><span>·</span>
            <Link href="/terms" className="hover:text-[#FFFcf7]">Terms of Service</Link><span>·</span>
            <Link href="/disclaimer" className="hover:text-[#FFFcf7]">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
