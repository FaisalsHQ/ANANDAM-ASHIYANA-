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

export function validateIndianMobile(phoneStr: string): boolean {
  const digits = phoneStr.replace(/\D/g, '');
  let clean = digits;
  if (digits.length === 12 && digits.startsWith('91')) {
    clean = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    clean = digits.slice(1);
  }
  return /^[6-9]\d{9}$/.test(clean);
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
  const [instantCallback, setInstantCallback] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const isPhoneValid = validateIndianMobile(phone);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = email.trim().length > 0 && emailRegex.test(email.trim());
  const isFormValid = fullName.trim().length > 0 && isPhoneValid && isEmailValid && consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent rejection for bot spam

    // Validations
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }

    if (!isPhoneValid) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number (e.g., 9876543210)');
      return;
    }

    if (!isEmailValid) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    if (!consent) {
      setErrorMsg('Please accept the consent terms to proceed');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    const cleanPhone = phone.replace(/\D/g, '');
    let finalDigits = cleanPhone;
    if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) finalDigits = cleanPhone.slice(2);
    if (cleanPhone.length === 11 && cleanPhone.startsWith('0')) finalDigits = cleanPhone.slice(1);

    const formattedPhone = `+91${finalDigits}`;
    const payload = {
      name: fullName.trim(),
      phone: formattedPhone,
      email: email.trim(),
      plotSize: plotSize || 'Not specified',
      instantCallback,
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
      const priorityPrefix = instantCallback
        ? '⚡ URGENT: Requesting a CALL-BACK WITHIN 15 MINUTES!'
        : 'General Inventory & Price Enquiry';

      const waMsg = `Hi, I am ${payload.name}. ${priorityPrefix} (${SITE_DOMAIN} - ${payload.source}). My Phone: ${payload.phone}, Email: ${payload.email}, Plot Size Preference: ${payload.plotSize}. Please share details and ${instantCallback ? 'call me back within 15 minutes.' : 'send available price sheet.'}`;
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
          Opening WhatsApp with your request... If WhatsApp didn&apos;t open automatically, click below:
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
            <span className="px-3 py-2.5 bg-[#181512] border border-[#3F3A33] rounded-lg text-xs text-[#D9C7A8] font-medium flex items-center shrink-0">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              required
              placeholder="10-digit mobile (e.g. 9876543210)"
              maxLength={13}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^\d\s-+]/g, ''))}
              className={`w-full px-3 py-2.5 bg-[#181512] border rounded-lg text-sm text-[#FFFcf7] placeholder-[#A39A8B] focus:outline-none transition-colors ${
                phone.length > 0
                  ? isPhoneValid
                    ? 'border-emerald-500/70 focus:border-emerald-500'
                    : 'border-amber-500/70 focus:border-amber-500'
                  : 'border-[#3F3A33] focus:border-[#B08D4F]'
              }`}
            />
          </div>
          {phone.length > 0 && (
            <p className={`text-[10px] mt-1 font-medium flex items-center gap-1 ${isPhoneValid ? 'text-emerald-400' : 'text-amber-400'}`}>
              {isPhoneValid ? '✓ Valid Indian 10-digit mobile number' : '⚠️ Please enter a valid 10-digit mobile starting with 6, 7, 8, or 9'}
            </p>
          )}
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

        {/* Specialized Instant Callback Toggle */}
        <div
          onClick={() => setInstantCallback(!instantCallback)}
          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
            instantCallback
              ? 'bg-[#B08D4F]/15 border-[#B08D4F] text-[#FFFcf7] shadow-md'
              : 'bg-[#181512] border-[#3F3A33] text-[#A39A8B] hover:border-[#D9C7A8]/50'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0 transition-colors ${
                instantCallback
                  ? 'bg-[#B08D4F] text-[#1B1814] font-bold'
                  : 'bg-[#24201A] text-[#A39A8B]'
              }`}
            >
              ⚡
            </span>
            <div>
              <span className="block text-xs font-bold text-[#FFFcf7]">
                Instant Call-Back (Within 15 Mins)
              </span>
              <span className="block text-[10px] text-[#D9C7A8] leading-tight">
                {instantCallback
                  ? 'Priority request flagged! We will connect with you immediately.'
                  : 'Toggle to request an urgent phone call on your mobile.'}
              </span>
            </div>
          </div>
          <div
            className={`w-10 h-5 rounded-full p-0.5 transition-colors relative shrink-0 ${
              instantCallback ? 'bg-[#B08D4F]' : 'bg-[#3F3A33]'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                instantCallback ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </div>
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
          disabled={loading || !isFormValid}
          className="w-full py-3 px-4 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
