'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getWhatsAppLink, SITE_DOMAIN } from '@/lib/constants';

interface LeadFormProps {
  source: string;
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export default function LeadForm({
  source,
  headline = "Get Today's Availability & Price List",
  subheadline = "Official layout, size-wise rates and payment plan sent on WhatsApp in 2 minutes.",
  buttonText = "Send Details on WhatsApp",
  compact = false,
  onSuccess,
}: LeadFormProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [plotSize, setPlotSize] = useState('');
  const [consent, setConsent] = useState(true);
  const [honeypot, setHoneypot] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent rejection for bot spam

    // Validations
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    if (!consent) {
      setErrorMsg('Please accept the consent terms to proceed');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    const formattedPhone = cleanPhone.length === 10 ? `+91${cleanPhone}` : `+${cleanPhone}`;
    const payload = {
      name: fullName.trim(),
      phone: formattedPhone,
      email: email.trim(),
      plotSize: plotSize || 'Not specified',
      source: source || 'Inline Form',
      page: pathname || '/',
      timestamp: new Date().toISOString(),
      utm: {},
    };

    try {
      // Store in localStorage as backup
      localStorage.setItem('aa_lead_submitted', '1');
      localStorage.setItem('aa_last_lead', JSON.stringify(payload));

      // Post to backend API route
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch((err) => console.log('Lead API background post:', err));

      setLoading(false);
      setSuccess(true);

      // Build WhatsApp message
      const waMsg = `Hi, I am ${payload.name}. I submitted a lead on ${SITE_DOMAIN} (${payload.source}) for Anandam Ashiyana, Sector 36 Jhajjar. Phone: ${payload.phone}, Email: ${payload.email}, Plot Size Interest: ${payload.plotSize}. Please share today's available inventory, price list & payment plan.`;
      const waUrl = getWhatsAppLink(waMsg);

      // Trigger callback if provided
      if (onSuccess) {
        onSuccess();
      }

      // Open WhatsApp in new window & redirect to thank you page
      setTimeout(() => {
        window.open(waUrl, '_blank');
        router.push('/thank-you');
      }, 800);
    } catch (err) {
      setLoading(false);
      setErrorMsg('Something went wrong. Please try contacting via WhatsApp directly.');
    }
  };

  if (success) {
    return (
      <div className="bg-[#2F4A3A]/20 border border-[#25D366]/40 p-6 rounded-xl text-center space-y-3">
        <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto text-xl font-bold">
          ✓
        </div>
        <h4 className="font-serif text-lg font-bold text-[#FFFcf7]">Thank You, {fullName}!</h4>
        <p className="text-xs text-[#EFE6D8] leading-relaxed">
          Opening WhatsApp with your request... If WhatsApp didn't open automatically, click below:
        </p>
        <a
          href={getWhatsAppLink(`Hi, I am ${fullName}. Please send Anandam Ashiyana plot availability & price list.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 bg-[#25D366] text-white font-bold text-xs rounded-lg uppercase tracking-wider shadow hover:opacity-90 transition-all"
        >
          Open WhatsApp Chat Now
        </a>
      </div>
    );
  }

  return (
    <div className={`bg-[#24201A] border border-[#3F3A33] rounded-2xl ${compact ? 'p-4' : 'p-6'} shadow-2xl text-[#FFFcf7]`}>
      {headline && (
        <div className="mb-4">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFFcf7] leading-snug">
            {headline}
          </h3>
          {subheadline && (
            <p className="text-xs text-[#D9C7A8] mt-1 leading-relaxed">
              {subheadline}
            </p>
          )}
        </div>
      )}

      {errorMsg && (
        <div className="mb-4 p-2.5 bg-[#B42318]/20 border border-[#B42318] text-[#FFFcf7] text-xs rounded-md">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Honeypot field for bot protection */}
        <input
          type="text"
          name="website_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="block text-xs font-medium text-[#D9C7A8] mb-1">
            Full Name <span className="text-[#B42318]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rajesh Sharma"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#181512] border border-[#3F3A33] rounded-lg text-sm text-[#FFFcf7] placeholder-[#A39A8B] focus:outline-none focus:border-[#B08D4F] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#D9C7A8] mb-1">
            WhatsApp Number <span className="text-[#B42318]">*</span>
          </label>
          <div className="flex gap-2">
            <span className="px-3 py-2.5 bg-[#181512] border border-[#3F3A33] rounded-lg text-xs text-[#D9C7A8] font-medium flex items-center">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              required
              placeholder="10-digit mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#181512] border border-[#3F3A33] rounded-lg text-sm text-[#FFFcf7] placeholder-[#A39A8B] focus:outline-none focus:border-[#B08D4F] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#D9C7A8] mb-1">
            Email Address <span className="text-[#B42318]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="e.g. rajesh@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#181512] border border-[#3F3A33] rounded-lg text-sm text-[#FFFcf7] placeholder-[#A39A8B] focus:outline-none focus:border-[#B08D4F] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#D9C7A8] mb-1">
            Plot Size Interest (Optional)
          </label>
          <select
            value={plotSize}
            onChange={(e) => setPlotSize(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#181512] border border-[#3F3A33] rounded-lg text-xs text-[#FFFcf7] focus:outline-none focus:border-[#B08D4F] transition-colors"
          >
            <option value="">Select Plot Size Preference</option>
            <option value="72 - 100 sq. yd.">72 – 100 sq. yd. (Compact)</option>
            <option value="100 - 140 sq. yd.">100 – 140 sq. yd. (Mid-size)</option>
            <option value="140 - 179 sq. yd.">140 – 179 sq. yd. (Large)</option>
            <option value="Not sure / Need Advice">Not sure / Need Advice</option>
          </select>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1 flex items-start gap-2 text-[11px] text-[#A39A8B]">
          <input
            type="checkbox"
            id={`consent-${source}`}
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 rounded border-[#3F3A33] bg-[#181512] text-[#B08D4F] focus:ring-0 cursor-pointer"
          />
          <label htmlFor={`consent-${source}`} className="cursor-pointer leading-tight">
            I agree to be contacted via WhatsApp, call and email about Anandam Ashiyana. I understand this is an independent consultant site, not the official developer.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-[#1B1814] border-t-transparent"></span>
          ) : (
            <>
              <span>{buttonText}</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.982 9.982 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.037-5.176-2.922-7.062A9.92 9.92 0 0012.012 2z" />
              </svg>
            </>
          )}
        </button>

        <p className="text-[10px] text-[#A39A8B] text-center italic">
          🔒 100% Privacy Protected · No Spam Guarantee · RERA Verified
        </p>
      </form>
    </div>
  );
}
