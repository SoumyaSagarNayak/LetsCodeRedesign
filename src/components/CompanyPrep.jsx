import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function CompanyPrep() {
  const companies = [
    { name: 'Google', color: '#4285F4', initial: 'G', borderClass: 'border-[#4285F4]/30 hover:border-[#4285F4]', href: 'https://www.lets-code.co.in/prepare/google/' },
    { name: 'Amazon', color: '#FF9900', initial: 'a', borderClass: 'border-[#FF9900]/30 hover:border-[#FF9900]', href: 'https://www.lets-code.co.in/prepare/amazon/' },
    { name: 'Microsoft', color: '#00A4EF', initial: 'M', borderClass: 'border-[#00A4EF]/30 hover:border-[#00A4EF]', href: 'https://www.lets-code.co.in/prepare/microsoft/' },
    { name: 'Goldman Sachs', color: '#0053D6', initial: 'GS', borderClass: 'border-[#0053D6]/30 hover:border-[#0053D6]', href: 'https://www.lets-code.co.in/prepare/goldman-sachs/' },
    { name: 'TCS', color: '#7C3AED', initial: 'T', borderClass: 'border-[#7C3AED]/30 hover:border-[#7C3AED]', href: 'https://www.lets-code.co.in/prepare/tcs/' },
    { name: 'Infosys', color: '#007CC3', initial: 'i', borderClass: 'border-[#007CC3]/30 hover:border-[#007CC3]', href: 'https://www.lets-code.co.in/prepare/infosys/' },
    { name: 'Wipro', color: '#9B59B6', initial: 'W', borderClass: 'border-[#9B59B6]/30 hover:border-[#9B59B6]', href: 'https://www.lets-code.co.in/prepare/wipro/' },
    { name: 'Deloitte', color: '#86BC25', initial: 'D', borderClass: 'border-[#86BC25]/30 hover:border-[#86BC25]', href: 'https://www.lets-code.co.in/prepare/deloitte/' },
    { name: 'JP Morgan', color: '#003087', initial: 'JP', borderClass: 'border-[#003087]/30 hover:border-[#003087]', href: 'https://www.lets-code.co.in/prepare/jp-morgan/' },
    { name: 'Flipkart', color: '#FC6D26', initial: 'F', borderClass: 'border-[#FC6D26]/30 hover:border-[#FC6D26]', href: 'https://www.lets-code.co.in/prepare/flipkart/' },
    { name: 'Razorpay', color: '#00B140', initial: 'R', borderClass: 'border-[#00B140]/30 hover:border-[#00B140]', href: 'https://www.lets-code.co.in/prepare/' },
    { name: 'Swiggy', color: '#EB4C60', initial: 'S', borderClass: 'border-[#EB4C60]/30 hover:border-[#EB4C60]', href: 'https://www.lets-code.co.in/prepare/' },
    { name: 'Uber', color: '#F0F4FF', initial: 'U', borderClass: 'border-[#F0F4FF]/20 hover:border-[#F0F4FF]', href: 'https://www.lets-code.co.in/prepare/' },
  ];

  const resumeTemplates = [
    { name: 'Classic', color: 'bg-blue-500' },
    { name: 'Executive', color: 'bg-slate-700' },
    { name: 'Clean', color: 'bg-slate-300' },
    { name: 'Sigma', color: 'bg-green' },
    { name: 'Harvard', color: 'bg-red-600' },
    { name: 'Creative', color: 'bg-violet' },
  ];

  const tags = ['ATS-Optimised', 'Live Preview', 'PDF Download', 'Free'];

  return (
    <section id="companies" className="bg-[#0F172A] py-24 px-6 md:px-12 w-full overflow-hidden border-b border-border/20">
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
        <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl font-body mb-24">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal flex items-center justify-between gap-3 bg-card px-[18px] py-2.5 rounded-xl cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(124,58,237,0.15)] border ${company.borderClass} group no-underline`}
            >
              {/* Colored Initials Icon */}
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center font-display font-bold text-xs text-white uppercase shadow-sm"
                style={{ backgroundColor: company.color }}
              >
                {company.initial}
              </div>
              <span className="text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors duration-200">
                {company.name}
              </span>
              <ChevronRight size={14} className="text-muted group-hover:text-white transition-colors duration-200" />
            </a>
          ))}

          {/* View All Chip */}
          <a 
            href="https://www.lets-code.co.in/prepare/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex items-center gap-2 bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 border border-[#7C3AED]/40 hover:border-violet2 px-[18px] py-2.5 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group no-underline"
          >
            <span className="text-sm font-bold text-violet2 group-hover:text-white transition-colors duration-200">
              View All 25+ Company Guides
            </span>
            <ChevronRight size={14} className="text-violet2 group-hover:text-white transition-colors duration-200" />
          </a>
        </div>

        {/* Build an ATS-Ready Resume in Minutes Section */}
        <div className="reveal w-full max-w-5xl bg-card border border-border/80 rounded-2xl p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-body text-left">
          {/* Left Column: Info & badging */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tag Badge */}
            <div className="px-3.5 py-1.5 rounded-full border border-violet/25 bg-violet/10 text-cyan text-xs font-bold uppercase tracking-wider mb-5">
              📝 6 Free Resume Templates
            </div>
            
            <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-[2.2rem] text-white tracking-tight leading-tight mb-5">
              Build an ATS-Ready Resume in Minutes
            </h3>
            
            <p className="text-sm md:text-base text-muted mb-8 leading-relaxed">
              6 ATS-friendly templates — Classic, Campus, Sigma, Harvard and more. Fill in your details with live preview and download a PDF with clickable links instantly.
            </p>

            {/* Badges/Tags Row */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-card2 border border-border/60 text-[#F0F4FF] font-semibold text-xs transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href="https://www.lets-code.co.in/dashboard/optimizeresume/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet to-violet2 hover:from-violet2 hover:to-violet text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan no-underline"
            >
              <span>Create Resume Now</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Column: Visual Layout of the 6 templates */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3 w-full max-w-sm mx-auto select-none pointer-events-none">
            {resumeTemplates.map((tpl) => (
              <div
                key={tpl.name}
                className="bg-card2 border border-border/60 rounded-xl p-3 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden h-[120px] group-hover:scale-102 transition-transform duration-200"
              >
                {/* Colored Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${tpl.color}`} />
                
                {/* Mini Layout representation */}
                <div className="flex flex-col gap-1 w-full mt-2">
                  <div className="h-1.5 w-1/2 bg-slate-500 rounded-sm mx-auto"></div>
                  <div className="h-1 w-3/4 bg-slate-600 rounded-sm mx-auto"></div>
                  <div className="h-1 w-2/3 bg-slate-600 rounded-sm mx-auto"></div>
                </div>

                <span className="text-[10px] text-muted font-bold tracking-wide uppercase mt-auto">
                  {tpl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
