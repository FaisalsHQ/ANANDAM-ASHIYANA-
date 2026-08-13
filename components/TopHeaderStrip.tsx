import React from 'react';
import { RERA_NUMBER, LICENCE_NUMBER, DEVELOPER_NAME, RERA_URL, DEVELOPER_URL } from '@/lib/constants';

export default function TopHeaderStrip() {
  return (
    <div className="bg-[#181512] text-[#D9C7A8] text-xs py-2 px-4 border-b border-[#3F3A33]/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#FFFcf7]">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            Developer: <a href={DEVELOPER_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#B08D4F] transition-colors">{DEVELOPER_NAME}</a>
          </span>
          <span className="text-[#3F3A33]">|</span>
          <span>RERA: <a href={RERA_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#B08D4F] transition-colors">{RERA_NUMBER}</a></span>
          <span className="hidden sm:inline text-[#3F3A33]">|</span>
          <span className="hidden sm:inline">{LICENCE_NUMBER}</span>
        </div>
        <div className="text-[11px] text-[#A39A8B] font-medium">
          Authorised Marketing & Advisory Microsite (RERA-Verified Consultant)
        </div>
      </div>
    </div>
  );
}
