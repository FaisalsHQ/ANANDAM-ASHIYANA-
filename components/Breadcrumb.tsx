import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-[#24201A] border-b border-[#3F3A33]/50 py-2.5 px-4 text-xs text-[#A39A8B]" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-[#B08D4F] transition-colors flex items-center gap-1">
          <span>Home</span>
        </Link>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#3F3A33]">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#B08D4F] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#D9C7A8] font-medium">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
