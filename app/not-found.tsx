'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#1B1814] flex flex-col font-sans">
      <Header />

      <section className="py-20 bg-[#1B1814] text-[#FFFcf7] flex-1 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <span className="text-4xl font-serif font-bold text-[#B08D4F]">404</span>
          <h1 className="font-serif text-2xl font-bold">Page Not Found</h1>
          <p className="text-xs text-[#D9C7A8]">
            The page or property link you are looking for might have been moved or updated.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-block px-6 py-2.5 bg-[#B08D4F] hover:bg-[#D9C7A8] text-[#1B1814] font-bold text-xs uppercase tracking-wider rounded-md transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
