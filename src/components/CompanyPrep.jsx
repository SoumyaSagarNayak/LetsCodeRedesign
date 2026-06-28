import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CompanyPrep() {
  const companies = [
    { name: 'Google', color: '#4285F4', initial: 'G' },
    { name: 'Amazon', color: '#FF9900', initial: 'a' },
    { name: 'Microsoft', color: '#00A4EF', initial: 'M' },
    { name: 'Goldman Sachs', color: '#0053D6', initial: 'GS' },
    { name: 'TCS', color: '#6DB33F', initial: 'T' },
    { name: 'Infosys', color: '#007CC3', initial: 'i' },
    { name: 'Wipro', color: '#9B59B6', initial: 'W' },
    { name: 'JP Morgan', color: '#003087', initial: 'JP' },
    { name: 'NVIDIA', color: '#76B900', initial: 'N' },
    { name: 'Meta', color: '#1877F2', initial: 'm' },
    { name: 'Flipkart', color: '#FC6D26', initial: 'F' },
    { name: 'Razorpay', color: '#00B140', initial: 'R' },
    { name: 'Swiggy', color: '#EB4C60', initial: 'S' },
    { name: 'Uber', color: '#000000', initial: 'U' }, // Let's use black or #FF6900
  ];

  return (
    <section id="companies" className="bg-[#0F172A] py-20 px-6 md:px-12 w-full overflow-hidden border-t border-border/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-semibold uppercase tracking-wider mb-3">
          💼 Company-Specific Preparation
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.6rem] text-center font-bold text-white tracking-tight mb-4">
          Prepare for Any Company
        </h2>
        <p className="font-body text-sm md:text-base text-muted text-center max-w-2xl mb-12 leading-relaxed">
          One page per company — PYQs, real interview experiences, open jobs, and AI prep tools, all in one place.
        </p>

        {/* Chips Container */}
        <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl font-body">
          {companies.map((company) => (
            <div
              key={company.name}
              className="reveal flex items-center justify-between gap-3 bg-card hover:bg-card2 border border-border/80 hover:border-violet/60 px-[18px] py-2.5 rounded-xl cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(124,58,237,0.15)] group"
            >
              {/* Colored Initials Icon */}
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center font-display font-bold text-xs text-white uppercase shadow-sm"
                style={{ backgroundColor: company.color }}
              >
                {company.initial}
              </div>
              <span className="text-sm font-semibold text-white group-hover:text-cyan transition-colors duration-200">
                {company.name}
              </span>
              <ChevronRight size={14} className="text-muted group-hover:text-white transition-colors duration-200" />
            </div>
          ))}

          {/* View All Chip */}
          <div className="reveal flex items-center gap-2 bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 border border-[#7C3AED]/30 px-[18px] py-2.5 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group">
            <span className="text-sm font-bold text-violet2 group-hover:text-white transition-colors duration-200">
              View All 25+ Guides
            </span>
            <ChevronRight size={14} className="text-violet2 group-hover:text-white transition-colors duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
