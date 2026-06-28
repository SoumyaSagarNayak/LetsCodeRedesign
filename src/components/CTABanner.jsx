import React from 'react';

export default function CTABanner() {
  return (
    <section className="relative w-full bg-[#0A0F1E] py-24 px-6 md:px-12 overflow-hidden border-t border-border/20">
      {/* Absolute Radial Glow Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-full border border-violet/20 bg-violet/5 text-cyan text-xs font-bold uppercase tracking-wider mb-6">
          🌟 Free to join · No credit card required
        </div>

        {/* Heading */}
        <h2 className="font-display text-[2rem] md:text-[3.2rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-[-0.02em] max-w-2xl mb-6">
          Start your placement prep <span className="text-cyan text-glow">today</span>
        </h2>

        {/* Subtext */}
        <p className="font-body text-sm md:text-lg text-muted max-w-xl mb-10 leading-relaxed">
          Crack off-campus placement tests, build recruiter-friendly resumes, optimize your online presence, and join a tribe of active engineering learners.
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-body">
          <a
            href="#ai-tools"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet to-violet2 hover:from-violet2 hover:to-violet text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-[0_0_20px_rgba(124,58,237,0.35)] hover:shadow-[0_0_30px_rgba(157,92,255,0.5)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan"
          >
            <span>🚀 Check Your Job Ready Score</span>
          </a>
          <a
            href="#ai-tools"
            className="flex items-center justify-center gap-2 border border-white/35 hover:border-white bg-transparent hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet"
          >
            <span>▶ Start Mock Interview</span>
          </a>
        </div>
      </div>
    </section>
  );
}
