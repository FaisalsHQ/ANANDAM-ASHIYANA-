'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';
import {
  STARTING_PRICE,
  PRICE_DISCLAIMER,
  IDENTITY_DISCLAIMER,
  RERA_NUMBER,
  LICENCE_NUMBER,
  RATE_SILVER,
  RATE_GOLD,
  RATE_PLATINUM,
  getWhatsAppLink,
} from '@/lib/constants';

export default function PricePaymentPlanPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('Price Page');
  const [activeTab, setActiveTab] = useState<'all' | 'silver' | 'gold' | 'platinum'>('all');

  const openModal = (src = 'Price Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const plotMatrix = [
    { size: '179.37', silver: '₹89,08,590', gold: '₹92,67,330', platinum: '₹99,84,810' },
    { size: '178.32', silver: '₹88,56,441', gold: '₹92,13,081', platinum: '₹99,26,361' },
    { size: '177.438', silver: '₹88,12,636', gold: '₹91,67,512', platinum: '₹98,77,264' },
    { size: '113.129', silver: '₹56,18,665', gold: '₹58,44,923', platinum: '₹62,97,439' },
    { size: '98.67', silver: '₹49,00,544', gold: '₹50,97,884', platinum: '₹54,92,564' },
    { size: '97.52', silver: '₹48,43,428', gold: '₹50,38,468', platinum: '₹54,28,548' },
  ];

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="page" />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Price List & Payment Plan' }]} />

      {/* Main Hero Header */}
      <section className="py-10 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-3">
          <span className="px-3 py-1 bg-[#B08D4F]/20 text-[#D9C7A8] text-xs font-bold uppercase tracking-widest rounded-full inline-block">
            Official Developer Offer Sheet & Cost Structure
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Anandam Ashiyana Price List & Payment Modes
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-3xl mx-auto leading-relaxed">
            Starting at <strong className="text-[#FFFcf7]">{STARTING_PRICE}</strong> ({RATE_SILVER}/sq. yd. onwards). All base rates include EDC & IDC charges. Choose between Down Payment (80:20), 50:50 Plan, or Construction Linked Plan (CLP).
          </p>
        </div>
      </section>

      {/* Disclaimers Bar */}
      <section className="py-4 bg-[#24201A] text-[#FFFcf7] border-b border-[#3F3A33]">
        <div className="max-w-5xl mx-auto px-4 text-xs space-y-1.5">
          <p className="text-[#B08D4F] font-semibold flex items-center gap-1.5">
            <span>⚠️</span> Mandatory Price & Offer Note:
          </p>
          <p className="text-[#D9C7A8] leading-relaxed text-[11px] sm:text-xs">
            PLC (Prime Location Charges) extra as applicable. Premium may vary depending upon plot location, demand & availability. Prices include EDC & IDC charges.
          </p>
        </div>
      </section>

      {/* Available Plot Sizes Bar */}
      <section className="py-6 bg-[#2F4A3A] text-[#FFFcf7] shadow-inner">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFFcf7]/10 text-2xl flex items-center justify-center">
                🏡
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#FFFcf7]">Available Plot Sizes</h3>
                <p className="text-xs text-[#D9C7A8]">Approved DDJAY Freehold Residential Plot Parcels</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold">
              {['179.37 Sq. Yds.', '178.32 Sq. Yds.', '177.438 Sq. Yds.', '113.129 Sq. Yds.', '98.67 Sq. Yds.', '97.52 Sq. Yds.'].map((size, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-[#FFFcf7]/15 border border-[#FFFcf7]/20 rounded-lg text-[#FFFcf7] backdrop-blur-sm">
                  • {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT MODES COMPARISON SECTION */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Payment Schedules & Structures
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1814]">
              Choose Your Payment Mode
            </h2>
            <p className="text-xs sm:text-sm text-[#3F3A33] max-w-2xl mx-auto">
              Select from three payment options designed for cash buyers, balanced milestone investors, or bank loan customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* OPTION 1: DOWN PAYMENT PLAN (DPP 80:20) */}
            <div className="bg-[#F7F1E8] border-2 border-[#D9C7A8] rounded-2xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all">
              <div className="p-5 bg-[#2A3B2A] text-[#FFFcf7] flex items-center justify-between border-b border-[#3F3A33]">
                <div>
                  <span className="px-2.5 py-0.5 bg-[#B08D4F] text-[#1B1814] text-[10px] font-extrabold uppercase rounded tracking-wider">
                    OPTION 1
                  </span>
                  <h3 className="font-serif text-lg font-bold mt-1 text-[#FFFcf7]">DOWN PAYMENT PLAN (DPP 80:20)</h3>
                  <p className="text-[11px] text-[#D9C7A8]">Silver Offer Rate</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#B08D4F] text-[#1B1814] font-serif font-black text-lg flex items-center justify-center shadow-md">
                  2
                </div>
              </div>

              <div className="p-6 space-y-6 flex-1">
                {/* Rate Header */}
                <div className="p-4 bg-[#2F4A3A]/10 border border-[#2F4A3A]/30 rounded-xl text-center space-y-1">
                  <span className="text-[11px] text-[#A39A8B] uppercase font-bold tracking-wider">RATE PER SQ. YARD</span>
                  <div className="text-2xl font-extrabold text-[#2F4A3A] font-serif">{RATE_SILVER}</div>
                  <span className="text-[10px] text-[#8C6A2F] font-semibold">Includes EDC & IDC Charges</span>
                </div>

                {/* Payment Schedule */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1814] border-b border-[#D9C7A8] pb-1">
                    PAYMENT SCHEDULE
                  </h4>
                  <ul className="space-y-2.5 text-xs text-[#3F3A33]">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">☑</span>
                      <span><strong className="text-[#1B1814]">10%</strong> At The Time Of Booking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">☑</span>
                      <span><strong className="text-[#1B1814]">70%</strong> Within 15 Days Of Allotment Or At The Time Of BBA Execution (Whichever Is Earlier)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">☑</span>
                      <span><strong className="text-[#1B1814]">20%</strong> At The Time Of Offer Letter For Possession</span>
                    </li>
                  </ul>
                </div>

                {/* Highlights */}
                <div className="pt-3 border-t border-[#D9C7A8] space-y-1.5 text-xs text-[#2F4A3A] font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span>✔</span> Best Price
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>✔</span> Suitable For Investors & Cash Buyers
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#EFE6D8] border-t border-[#D9C7A8]">
                <button
                  onClick={() => openModal('Option 1 - DPP 80:20')}
                  className="w-full py-2.5 bg-[#2F4A3A] hover:bg-[#1B1814] text-[#FFFcf7] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Select Silver Plan
                </button>
              </div>
            </div>

            {/* OPTION 2: 50:50 PAYMENT PLAN */}
            <div className="bg-[#F7F1E8] border-2 border-[#B08D4F] rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all relative transform lg:-translate-y-2">
              <div className="absolute top-0 right-0 bg-[#B08D4F] text-[#1B1814] text-[9px] font-black uppercase px-3 py-1 rounded-bl-lg tracking-widest z-10">
                MOST POPULAR
              </div>
              <div className="p-5 bg-[#8C6A2F] text-[#FFFcf7] flex items-center justify-between border-b border-[#3F3A33]">
                <div>
                  <span className="px-2.5 py-0.5 bg-[#FFFcf7] text-[#8C6A2F] text-[10px] font-extrabold uppercase rounded tracking-wider">
                    OPTION 2
                  </span>
                  <h3 className="font-serif text-lg font-bold mt-1 text-[#FFFcf7]">50:50 PAYMENT PLAN</h3>
                  <p className="text-[11px] text-[#F7F1E8]">Gold Offer Rate</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FFFcf7] text-[#8C6A2F] font-serif font-black text-lg flex items-center justify-center shadow-md">
                  1
                </div>
              </div>

              <div className="p-6 space-y-6 flex-1">
                {/* Rate Header */}
                <div className="p-4 bg-[#B08D4F]/15 border border-[#B08D4F]/40 rounded-xl text-center space-y-1">
                  <span className="text-[11px] text-[#A39A8B] uppercase font-bold tracking-wider">RATE PER SQ. YARD</span>
                  <div className="text-2xl font-extrabold text-[#8C6A2F] font-serif">{RATE_GOLD}</div>
                  <span className="text-[10px] text-[#8C6A2F] font-semibold">Includes EDC & IDC Charges</span>
                </div>

                {/* Payment Schedule */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1814] border-b border-[#D9C7A8] pb-1">
                    PAYMENT SCHEDULE
                  </h4>
                  <ul className="space-y-2.5 text-xs text-[#3F3A33]">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">☑</span>
                      <span><strong className="text-[#1B1814]">10%</strong> At The Time Of Booking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">☑</span>
                      <span><strong className="text-[#1B1814]">40%</strong> Within 30 Days Of Allotment Or At The Time Of BBA Execution (Whichever Is Earlier)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">☑</span>
                      <span><strong className="text-[#1B1814]">40%</strong> At The Time Of Application Of OC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">☑</span>
                      <span><strong className="text-[#1B1814]">10%</strong> At The Time Of Offer Letter For Possession</span>
                    </li>
                  </ul>
                </div>

                {/* Highlights */}
                <div className="pt-3 border-t border-[#D9C7A8] space-y-1.5 text-xs text-[#8C6A2F] font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span>✔</span> Balanced Payment Structure
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>✔</span> Suitable For End Users & Investors
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#EFE6D8] border-t border-[#D9C7A8]">
                <button
                  onClick={() => openModal('Option 2 - 50:50 Plan')}
                  className="w-full py-2.5 bg-[#8C6A2F] hover:bg-[#1B1814] text-[#FFFcf7] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Select Gold Plan
                </button>
              </div>
            </div>

            {/* OPTION 3: CONSTRUCTION LINKED PLAN (CLP) */}
            <div className="bg-[#F7F1E8] border-2 border-[#D9C7A8] rounded-2xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all">
              <div className="p-5 bg-[#1B1814] text-[#FFFcf7] flex items-center justify-between border-b border-[#3F3A33]">
                <div>
                  <span className="px-2.5 py-0.5 bg-[#B08D4F] text-[#1B1814] text-[10px] font-extrabold uppercase rounded tracking-wider">
                    OPTION 3
                  </span>
                  <h3 className="font-serif text-lg font-bold mt-1 text-[#FFFcf7]">CONSTRUCTION LINKED PLAN (CLP)</h3>
                  <p className="text-[11px] text-[#D9C7A8]">Platinum Offer Rate</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#3F3A33] text-[#FFFcf7] font-serif font-black text-lg flex items-center justify-center shadow-md">
                  💎
                </div>
              </div>

              <div className="p-6 space-y-6 flex-1">
                {/* Rate Header */}
                <div className="p-4 bg-[#1B1814]/10 border border-[#1B1814]/30 rounded-xl text-center space-y-1">
                  <span className="text-[11px] text-[#A39A8B] uppercase font-bold tracking-wider">RATE PER SQ. YARD</span>
                  <div className="text-2xl font-extrabold text-[#1B1814] font-serif">{RATE_PLATINUM}</div>
                  <span className="text-[10px] text-[#8C6A2F] font-semibold">Includes EDC & IDC Charges</span>
                </div>

                {/* Payment Schedule */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1814] border-b border-[#D9C7A8] pb-1">
                    PAYMENT SCHEDULE
                  </h4>
                  <ul className="space-y-2 text-[11px] sm:text-xs text-[#3F3A33]">
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span><strong>10%</strong> At The Time Of Booking</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span>BBA To Be Executed Within 30 Days</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span><strong>10%</strong> On Commencement Of Levelling Work</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span><strong>15%</strong> On Commencement Of Sewage / Drainage Work</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span><strong>10%</strong> On Commencement Of Water Connection To Plots</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span><strong>15%</strong> On Commencement Of Laying Of Internal Roads</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span><strong>15%</strong> On Commencement Of Street Lighting Work</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span><strong>15%</strong> On Commencement Of Landscape Work</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">☑</span> <span><strong>10%</strong> At The Time Of Offer Letter For Possession</span></li>
                  </ul>
                </div>

                {/* Bank Loan Banner */}
                <div className="p-3 bg-[#EFE6D8] border border-[#D9C7A8] rounded-xl text-center space-y-1">
                  <span className="text-xs font-bold text-[#1B1814] block">🏛️ BANK LOAN CLP OPTION ALSO AVAILABLE</span>
                  <p className="text-[10px] text-[#3F3A33]">Lowest Initial Investment • Ideal For Bank Loan Customers</p>
                </div>
              </div>

              <div className="p-4 bg-[#EFE6D8] border-t border-[#D9C7A8]">
                <button
                  onClick={() => openModal('Option 3 - CLP Plan')}
                  className="w-full py-2.5 bg-[#1B1814] hover:bg-[#2F4A3A] text-[#FFFcf7] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  Select Platinum CLP Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PLOT PRICE MATRIX TABLE */}
      <section className="py-12 bg-[#F7F1E8] border-b border-[#D9C7A8]">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A2F]">
              Size-Wise Total Cost Breakdown
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1814]">
              Plot Size & Offer Price Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#3F3A33] max-w-2xl mx-auto">
              Total plot pricing calculated across Silver Offer ({RATE_SILVER}/sq. yd.), Gold Offer ({RATE_GOLD}/sq. yd.), and Platinum Offer ({RATE_PLATINUM}/sq. yd.). All rates include EDC & IDC.
            </p>
          </div>

          {/* Desktop Matrix Table */}
          <div className="overflow-x-auto shadow-md rounded-2xl border border-[#D9C7A8] bg-[#FFFcf7]">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#1B1814] text-[#FFFcf7] uppercase font-serif text-[11px] tracking-wider">
                  <th className="p-4 border-b border-[#3F3A33]">Plot Size (Sq. Yds.)</th>
                  <th className="p-4 border-b border-[#3F3A33] bg-[#2A3B2A] text-[#FFFcf7]">
                    Silver Offer ({RATE_SILVER}/sq. yd.)
                  </th>
                  <th className="p-4 border-b border-[#3F3A33] bg-[#8C6A2F] text-[#FFFcf7]">
                    Gold Offer ({RATE_GOLD}/sq. yd.)
                  </th>
                  <th className="p-4 border-b border-[#3F3A33] bg-[#24201A] text-[#FFFcf7]">
                    Platinum Offer ({RATE_PLATINUM}/sq. yd.)
                  </th>
                  <th className="p-4 border-b border-[#3F3A33] text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9C7A8] text-[#1B1814] font-medium">
                {plotMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#F7F1E8] transition-colors">
                    <td className="p-4 font-bold text-sm text-[#1B1814] flex items-center gap-2">
                      <span className="text-[#B08D4F]">★</span>
                      <span>{item.size} Sq. Yds.</span>
                    </td>
                    <td className="p-4 text-sm font-bold text-[#2F4A3A] bg-[#2F4A3A]/5">
                      {item.silver}
                    </td>
                    <td className="p-4 text-sm font-bold text-[#8C6A2F] bg-[#B08D4F]/10">
                      {item.gold}
                    </td>
                    <td className="p-4 text-sm font-bold text-[#1B1814] bg-[#1B1814]/5">
                      {item.platinum}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => openModal(`Plot ${item.size} Sq. Yd.`)}
                        className="px-3 py-1.5 bg-[#B08D4F] hover:bg-[#1B1814] text-[#1B1814] hover:text-[#FFFcf7] text-[11px] font-bold uppercase rounded-lg transition-colors cursor-pointer"
                      >
                        Check Availability
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Note Banner */}
          <div className="p-5 bg-[#24201A] text-[#FFFcf7] border border-[#3F3A33] rounded-2xl text-center space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-bold text-[#D9C7A8]">
              📌 PLC (PRIME LOCATION CHARGES) EXTRA AS APPLICABLE • PREMIUM MAY VARY DEPENDING UPON PLOT LOCATION, DEMAND & AVAILABILITY
            </p>
            <p className="text-xs text-[#A39A8B]">
              * Government taxes, registration charges, stamp duty, and electric/water connection charges extra at possession as per actuals.
            </p>
          </div>
        </div>
      </section>

      {/* BANK LOAN & RERA ASSISTANCE SECTION */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="p-6 bg-[#2F4A3A]/10 border border-[#2F4A3A]/30 rounded-2xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2F4A3A]">
                  Bank Approved Township
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1814]">
                  Plot Purchase & Home Construction Loan Eligibility
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#2F4A3A] text-white text-xs font-bold rounded-lg uppercase">
                100% Verified Title
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#3F3A33] leading-relaxed">
              Anandam Ashiyana is officially licensed under DTCP Haryana <strong>{LICENCE_NUMBER}</strong> and registered with Haryana Real Estate Regulatory Authority Panchkula under <strong>{RERA_NUMBER}</strong>. Buyers can apply for plot purchase and home construction loans from leading nationalized and private banks (ICICI Bank, HDFC Bank, SBI, PNB Housing, Axis Bank) subject to individual eligibility.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-center font-bold text-[#1B1814]">
                🏛️ Loan Sanction Assistance
              </div>
              <div className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-center font-bold text-[#1B1814]">
                📜 Clean & Marketable Title
              </div>
              <div className="p-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-center font-bold text-[#1B1814]">
                📑 Complete Registry Permission
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="Price Page Bottom Form"
            headline="Request Official Cost Sheet & Availability"
            subheadline="Get today's exact unit-wise quote and payment schedule breakdown on WhatsApp."
            buttonText="Get Official Price List on WhatsApp"
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="price" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="price" />
      <Footer />
    </div>
  );
}
