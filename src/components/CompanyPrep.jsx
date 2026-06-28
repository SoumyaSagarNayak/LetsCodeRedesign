import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function CompanyPrep() {
  const companies = [
    { name: 'Google', color: '#4285F4', initial: 'G', href: 'https://www.lets-code.co.in/prepare/google/' },
    { name: 'Amazon', color: '#FF9900', initial: 'a', href: 'https://www.lets-code.co.in/prepare/amazon/' },
    { name: 'Microsoft', color: '#00A4EF', initial: 'M', href: 'https://www.lets-code.co.in/prepare/microsoft/' },
    { name: 'Goldman Sachs', color: '#0053D6', initial: 'GS', href: 'https://www.lets-code.co.in/prepare/goldman-sachs/' },
    { name: 'TCS', color: '#7C3AED', initial: 'T', href: 'https://www.lets-code.co.in/prepare/tcs/' },
    { name: 'Infosys', color: '#007CC3', initial: 'i', href: 'https://www.lets-code.co.in/prepare/infosys/' },
    { name: 'Wipro', color: '#9B59B6', initial: 'W', href: 'https://www.lets-code.co.in/prepare/wipro/' },
    { name: 'Deloitte', color: '#86BC25', initial: 'D', href: 'https://www.lets-code.co.in/prepare/deloitte/' },
    { name: 'JP Morgan', color: '#003087', initial: 'JP', href: 'https://www.lets-code.co.in/prepare/jp-morgan/' },
    { name: 'Flipkart', color: '#FC6D26', initial: 'F', href: 'https://www.lets-code.co.in/prepare/flipkart/' },
    { name: 'Razorpay', color: '#00B140', initial: 'R', href: 'https://www.lets-code.co.in/prepare/' },
    { name: 'Swiggy', color: '#EB4C60', initial: 'S', href: 'https://www.lets-code.co.in/prepare/' },
    { name: 'Uber', color: '#F0F4FF', initial: 'U', href: 'https://www.lets-code.co.in/prepare/' },
  ];

  const resumeTemplates = [
    { name: 'Classic' },
    { name: 'Executive' },
    { name: 'Clean' },
    { name: 'Sigma' },
    { name: 'Harvard' },
    { name: 'Creative' },
  ];

  const tags = ['ATS-Optimised', 'Live Preview', 'PDF Download', 'Free'];

  return (
    <section id="companies" className="bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-3">
          💼 Company-Specific Preparation
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          Prepare for Any Company
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-lg mb-12 leading-relaxed">
          One page per company — PYQs, real interview experiences, open jobs, and AI prep tools, all in one place.
        </p>

        {/* Chips Container */}
        <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl font-mono mb-24">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal flex items-center justify-between gap-3 bg-transparent px-[18px] py-2.5 rounded-none cursor-pointer border border-hairline hover:border-white transition-all duration-200 hover:-translate-y-0.5 group no-underline"
            >
              {/* Initials Icon (Machined and clean) */}
              <div
                className="w-5 h-5 rounded-none flex items-center justify-center font-display font-normal text-[10px] text-white uppercase"
                style={{ backgroundColor: company.color }}
              >
                {company.initial}
              </div>
              <span className="text-xs font-normal text-white group-hover:text-ice-blue transition-colors duration-200 uppercase tracking-wider">
                {company.name}
              </span>
              <ChevronRight size={12} className="text-muted-color group-hover:text-white transition-colors duration-200" />
            </a>
          ))}

          {/* View All Chip */}
          <a 
            href="https://www.lets-code.co.in/prepare/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex items-center gap-2 bg-transparent border border-hairline hover:border-white px-[18px] py-2.5 rounded-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group no-underline"
          >
            <span className="text-xs font-normal text-muted-color group-hover:text-white transition-colors duration-200 uppercase tracking-wider">
              View All 25+ Company Guides
            </span>
            <ChevronRight size={12} className="text-muted-color group-hover:text-white transition-colors duration-200" />
          </a>
        </div>

        {/* Build an ATS-Ready Resume in Minutes Section */}
        <div className="reveal w-full max-w-5xl bg-surface-card border border-hairline rounded-none p-8 lg:p-12 shadow-none grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column: Info & badging */}
          <div className="lg:col-span-7 flex flex-col items-start font-mono">
            {/* Tag Badge */}
            <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color text-[10px] font-normal uppercase tracking-wider mb-5">
              📝 6 Free Resume Templates
            </div>
            
            <h3 className="font-display font-normal text-2xl md:text-3xl lg:text-[2.2rem] text-white uppercase tracking-[2px] leading-tight mb-5">
              Build an ATS-Ready Resume in Minutes
            </h3>
            
            <p className="font-serif text-sm md:text-base text-body-color mb-8 leading-relaxed normal-case tracking-normal">
              6 ATS-friendly templates — Classic, Campus, Sigma, Harvard and more. Fill in your details with live preview and download a PDF with clickable links instantly.
            </p>

            {/* Badges/Tags Row */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-none border border-hairline bg-black text-muted-color font-normal text-[9px] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href="https://www.lets-code.co.in/dashboard/optimizeresume/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-7 py-3.5 rounded-full font-normal text-xs uppercase tracking-[2.5px] transition-all duration-200 flex items-center gap-2 focus:outline-none no-underline"
            >
              <span>Create Resume Now</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Column: Visual Layout of the 6 templates */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-3 w-full max-w-sm mx-auto select-none pointer-events-none font-mono">
            {resumeTemplates.map((tpl) => (
              <div
                key={tpl.name}
                className="bg-surface-soft border border-hairline rounded-none p-3 flex flex-col justify-between items-center text-center shadow-none relative overflow-hidden h-[120px]"
              >
                {/* Colored Top Bar replaced by clean white hairline */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40" />
                
                {/* Mini Layout representation */}
                <div className="flex flex-col gap-1 w-full mt-2">
                  <div className="h-1 w-1/2 bg-hairline-strong rounded-none mx-auto"></div>
                  <div className="h-0.5 w-3/4 bg-hairline-strong rounded-none mx-auto"></div>
                  <div className="h-0.5 w-2/3 bg-hairline-strong rounded-none mx-auto"></div>
                </div>

                <span className="text-[9px] text-muted-color font-normal tracking-wider uppercase mt-auto">
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
