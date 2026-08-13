'use client';

import React, { useState, useTransition } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';
import LeadPopups from '@/components/LeadPopups';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyBar from '@/components/MobileStickyBar';
import JsonLd from '@/components/JsonLd';
import { FAQ_ITEMS } from '@/lib/constants';

interface GroundingSource {
  title: string;
  uri: string;
}

export default function FAQPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('FAQ Page');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Search & Grounding State
  const [searchQuery, setSearchQuery] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [aiSources, setAiSources] = useState<GroundingSource[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const openModal = (src = 'FAQ Page') => {
    setModalSource(src);
    setModalOpen(true);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Real-time FAQ filter
  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
  });

  // Perform AI Search Grounding call
  const handleAiSearch = async (queryToSearch?: string) => {
    const q = queryToSearch || searchQuery;
    if (!q.trim()) return;

    setAiLoading(true);
    setAiError(null);

    try {
      const res = await fetch('/api/faq-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        setAiError(data.error || 'Unable to retrieve AI search snippet.');
      } else {
        setAiAnswer(data.answer);
        setAiSources(data.sources || []);
      }
    } catch (err) {
      console.error(err);
      setAiError('Connection error. Please try again.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setAiAnswer(null);
    setAiSources([]);
    setAiError(null);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <JsonLd type="faq" faqData={FAQ_ITEMS} />
      <Header onOpenLeadModal={openModal} />
      <Breadcrumb items={[{ label: 'Frequently Asked Questions (FAQ)' }]} />

      {/* Hero */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08D4F]">
            Transparent Answers for Home Buyers
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Frequently Asked Questions — Anandam Ashiyana Jhajjar
          </h1>
          <p className="text-xs sm:text-sm text-[#D9C7A8] max-w-2xl mx-auto leading-relaxed">
            Find immediate answers regarding RERA approvals, DTCP licensing, plot sizes, pricing, bank loans, and site visits in Sector 36, Jhajjar.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-12 bg-[#FFFcf7] border-b border-[#D9C7A8]">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Real-time Search Filter Bar & AI Grounding Action */}
          <div className="p-6 bg-[#F7F1E8] border border-[#D9C7A8] rounded-2xl shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C6A2F]">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search FAQ or type a question (e.g., RERA number, plot sizes, road width)..."
                  value={searchQuery}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSearchQuery(val);
                    if (!val) {
                      setAiAnswer(null);
                      setAiSources([]);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAiSearch();
                    }
                  }}
                  className="w-full pl-10 pr-10 py-3 bg-[#FFFcf7] border border-[#D9C7A8] rounded-xl text-xs sm:text-sm text-[#1B1814] placeholder-[#8C6A2F]/60 focus:outline-none focus:border-[#B08D4F] transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-[#3F3A33] hover:text-[#1B1814] cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                onClick={() => handleAiSearch()}
                disabled={aiLoading || !searchQuery.trim()}
                className="px-5 py-3 bg-[#1B1814] hover:bg-[#24201A] text-[#B08D4F] font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {aiLoading ? (
                  <>
                    <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-[#B08D4F] border-t-transparent" />
                    <span>Searching Web...</span>
                  </>
                ) : (
                  <>
                    <span>Ask AI Grounding</span>
                    <span>✨</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Topic Search Chips */}
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="text-[#3F3A33] font-semibold">Quick Filters:</span>
              {[
                'RERA Approval',
                'Plot Sizes',
                'DDJAY Scheme',
                'Sector 36 Jhajjar',
                'Bank Loan',
                'Possession Date',
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setSearchQuery(chip);
                    handleAiSearch(chip);
                  }}
                  className="px-2.5 py-1 bg-[#FFFcf7] hover:bg-[#B08D4F] hover:text-[#1B1814] border border-[#D9C7A8] rounded-full text-[#3F3A33] font-medium transition-all cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* AI Search Grounding Result Card */}
          {(aiLoading || aiAnswer || aiError) && (
            <div className="p-6 bg-[#24201A] text-[#FFFcf7] border border-[#B08D4F] rounded-2xl shadow-xl space-y-3 animate-fade-in">
              <div className="flex items-center justify-between border-b border-[#3F3A33] pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#B08D4F] text-[#1B1814] font-bold text-[10px] uppercase tracking-wider rounded shadow-xs">
                    Search Grounded Snippet
                  </span>
                  <span className="text-xs text-[#D9C7A8] font-medium">
                    Google Search Verified AI Output
                  </span>
                </div>
                <button
                  onClick={() => {
                    setAiAnswer(null);
                    setAiSources([]);
                    setAiError(null);
                  }}
                  className="text-xs text-[#A39A8B] hover:text-[#FFFcf7] cursor-pointer"
                >
                  Dismiss ✕
                </button>
              </div>

              {aiLoading && (
                <div className="py-6 text-center space-y-2">
                  <span className="animate-spin inline-block rounded-full h-6 w-6 border-2 border-[#B08D4F] border-t-transparent" />
                  <p className="text-xs text-[#D9C7A8]">
                    Querying search grounding & verified real estate records for &quot;{searchQuery}&quot;...
                  </p>
                </div>
              )}

              {aiError && (
                <div className="p-3 bg-[#B42318]/20 border border-[#B42318] text-xs text-[#FFFcf7] rounded-lg">
                  {aiError}
                </div>
              )}

              {aiAnswer && !aiLoading && (
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-[#EFE6D8] leading-relaxed">
                    {aiAnswer}
                  </p>

                  {/* Grounding Sources */}
                  {aiSources.length > 0 && (
                    <div className="pt-2 border-t border-[#3F3A33] space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#B08D4F] tracking-wider block">
                        Verified Sources & Grounding Links:
                      </span>
                      <ul className="flex flex-wrap gap-2 text-[11px]">
                        {aiSources.map((source, idx) => (
                          <li key={idx}>
                            <a
                              href={source.uri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 bg-[#181512] hover:bg-[#3F3A33] border border-[#3F3A33] rounded text-[#B08D4F] underline inline-flex items-center gap-1 transition-colors"
                            >
                              <span>{source.title || 'Source Reference'}</span>
                              <span className="text-[9px]">↗</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Real-time Filtered FAQ List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-[#8C6A2F] uppercase tracking-wider">
                Showing {filteredFaqs.length} of {FAQ_ITEMS.length} Questions
              </span>
              {searchQuery && (
                <span className="text-xs text-[#3F3A33]">
                  Filtering for &quot;<strong>{searchQuery}</strong>&quot;
                </span>
              )}
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl space-y-3">
                <span className="text-3xl">🔍</span>
                <h4 className="font-serif text-base font-bold text-[#1B1814]">
                  No matching FAQ items found for &quot;{searchQuery}&quot;
                </h4>
                <p className="text-xs text-[#3F3A33] max-w-md mx-auto">
                  Try asking our AI Search Grounding tool above or reach out directly to our RERA consultant on WhatsApp.
                </p>
                <button
                  onClick={() => handleAiSearch()}
                  className="px-4 py-2 bg-[#B08D4F] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg shadow cursor-pointer"
                >
                  Run AI Search Grounding
                </button>
              </div>
            ) : (
              filteredFaqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#F7F1E8] border border-[#D9C7A8] rounded-xl overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-[#EFE6D8]/60 transition-colors"
                    >
                      <span className="font-serif text-sm sm:text-base font-bold text-[#1B1814]">
                        {item.q}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[#1B1814] text-[#B08D4F] flex items-center justify-center font-bold text-xs shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-2 text-xs sm:text-sm text-[#3F3A33] leading-relaxed border-t border-[#D9C7A8]/50 bg-[#FFFcf7]/70">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Ask Unanswered Question Banner */}
          <div className="p-6 bg-[#24201A] text-[#FFFcf7] rounded-2xl border border-[#3F3A33] text-center space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#B08D4F]">
              Have a Specific Legal or Loan Question Not Answered Here?
            </h3>
            <p className="text-xs text-[#D9C7A8] max-w-xl mx-auto">
              Our dedicated RERA consultant team is available to assist you with customized payment plan calculations, bank eligibility documents, and site visit arrangements.
            </p>
            <button
              onClick={() => openModal('FAQ Ask Question Button')}
              className="px-6 py-3 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all cursor-pointer"
            >
              Ask Our RERA Consultant
            </button>
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-12 bg-[#1B1814] text-[#FFFcf7]">
        <div className="max-w-xl mx-auto px-4">
          <LeadForm
            source="FAQ Page Form"
            headline="Request Comprehensive Project Brochure"
            subheadline="Get complete FAQ handbook & DTCP approved layout map on WhatsApp."
          />
        </div>
      </section>

      <LeadPopups manualModalOpen={modalOpen} manualModalSource={modalSource} onCloseManualModal={() => setModalOpen(false)} />
      <FloatingWhatsApp pageKey="faq" />
      <MobileStickyBar onOpenLeadModal={openModal} pageKey="faq" />
      <Footer />
    </div>
  );
}
