import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative w-full bg-black py-28 px-6 md:px-12 overflow-hidden border-b border-hairline">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-6">
          🌟 Free to join · No credit card required
        </div>

        {/* Heading */}
        <h2 className="font-display text-[2rem] md:text-[3.2rem] lg:text-[4rem] leading-[1.1] font-normal text-white uppercase tracking-[4px] max-w-3xl mb-6">
          Start your placement prep today
        </h2>

        {/* Subtext */}
        <p className="font-serif text-base md:text-lg text-body-color max-w-xl mb-10 leading-relaxed">
          Crack off-campus placement tests, build recruiter-friendly resumes, optimize your online presence, and join a tribe of active engineering learners.
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-mono">
          <a
            href="https://www.lets-code.co.in/dashboard/job-ready-score/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent border border-white text-white hover:bg-white hover:text-black px-7 py-3 rounded-full font-normal text-xs uppercase tracking-[2.5px] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white no-underline"
          >
            <span>Check Job Ready Score — Free</span>
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://www.lets-code.co.in/dashboard/mocktest/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-hairline hover:border-white bg-transparent text-white px-7 py-3 rounded-full font-normal text-xs uppercase tracking-[2.5px] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white no-underline"
          >
            <span>Start Mock Interview</span>
          </a>
        </div>
      </div>
    </section>
  );
}
