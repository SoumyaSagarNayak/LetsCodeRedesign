import React, { useState, useEffect } from 'react';

export default function Hero() {
  const terminalStrings = [
    "✓ Priya cracked JP Morgan — CTC ₹20 LPA",
    "✓ Amit placed at Amazon — Batch 2025",
    "✓ Sneha placed at Goldman Sachs — CTC ₹23 LPA",
    "✓ Kartik cracked Flipkart SWE — CTC ₹32 LPA"
  ];

  const [stringIndex, setStringIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentString = terminalStrings[stringIndex];

    if (!isDeleting) {
      // Typing
      if (typedText.length < currentString.length) {
        timer = setTimeout(() => {
          setTypedText(currentString.substring(0, typedText.length + 1));
        }, 52); // 52ms typing speed
      } else {
        // Pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200); // 2200ms pause
      }
    } else {
      // Deleting
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(currentString.substring(0, typedText.length - 1));
        }, 28); // 28ms delete speed
      } else {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % terminalStrings.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, stringIndex]);

  return (
    <section className="relative min-h-screen w-full bg-[#0A0F1E] bg-grid-pattern bg-grid-48 flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-12 overflow-hidden">
      {/* Absolute Radial Glow Blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-violet/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/30 bg-violet/15 backdrop-blur-sm mb-6 animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan inline-block animate-pulse-dot"></span>
          <span className="text-xs md:text-sm font-semibold tracking-wide text-cyan2">
            Trusted by 1,00,000+ Engineers · Always Free
          </span>
        </div>

        {/* H1 Title */}
        <h1 className="font-display text-[2.2rem] md:text-[3.2rem] lg:text-[4.5rem] leading-[1.1] font-bold text-white tracking-[-0.02em] max-w-3xl mb-6">
          Your shortcut to cracking the <span className="text-violet2 bg-clip-text">dream job</span>
        </h1>

        {/* Subtext */}
        <p className="font-body text-sm md:text-lg text-muted max-w-2xl mb-8 leading-relaxed">
          8 AI career tools, 1,000+ interview resources, company-wise PYQs, mock interviews, and a 1 lakh+ community — all free, all in one place.
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16 font-body">
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

        {/* Terminal Window Card */}
        <div className="w-full max-w-lg bg-card rounded-xl border border-border shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden mb-16 text-left self-center">
          {/* Mac Bar */}
          <div className="bg-[#0B0F1B] px-4 py-3 flex items-center justify-between border-b border-border/40">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] inline-block"></span>
            </div>
            <span className="text-[11px] font-mono text-muted/60">bash</span>
            <div className="w-12"></div> {/* Spacer */}
          </div>
          {/* Terminal Content */}
          <div className="p-5 font-mono text-[12px] md:text-[13px] leading-relaxed text-[#A9B1D6]">
            <div>
              <span className="text-violet">letscode@prep:~$ </span>
              <span className="text-[#9ECE6A]">✓ Ananya cracked Google SWE — CTC ₹42 LPA</span>
            </div>
            <div className="mt-1.5">
              <span className="text-violet">letscode@prep:~$ </span>
              <span className="text-[#9ECE6A]">✓ Rohan placed at Microsoft — Batch 2025</span>
            </div>
            <div className="mt-1.5 flex items-start">
              <span className="text-violet shrink-0">letscode@prep:~$&nbsp;</span>
              <div className="inline-block text-cyan">
                {typedText}
                <span className="w-1.5 h-4.5 bg-cyan inline-block align-middle ml-0.5 cursor-blink"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl border-t border-border/40 pt-10 px-4">
          <div className="flex flex-col items-center">
            <span className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-violet2">
              1,00,000+
            </span>
            <span className="text-xs md:text-sm text-muted mt-1 font-body">Engineers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-cyan">
              8 Free
            </span>
            <span className="text-xs md:text-sm text-muted mt-1 font-body">AI Tools</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-green">
              35+
            </span>
            <span className="text-xs md:text-sm text-muted mt-1 font-body">Interview Topics</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-amber">
              25+
            </span>
            <span className="text-xs md:text-sm text-muted mt-1 font-body">Company Guides</span>
          </div>
        </div>
      </div>
    </section>
  );
}
