import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowUpRight, ArrowRight } from 'lucide-react';

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
      if (typedText.length < currentString.length) {
        timer = setTimeout(() => {
          setTypedText(currentString.substring(0, typedText.length + 1));
        }, 52);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(currentString.substring(0, typedText.length - 1));
        }, 28);
      } else {
        isDeleting === true && setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % terminalStrings.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, stringIndex]);

  const socialLinks = [
    {
      name: 'WhatsApp',
      color: 'hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30',
      textColor: 'text-[#25D366]',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 .057zm12.008-1.928c1.782.001 3.548-.48 5.097-1.392l.366-.217 3.791.993-.997-3.717.234-.374c.998-1.597 1.526-3.456 1.524-5.372C22.073 6.43 17.552 1.91 12.016 1.91c-2.684 0-5.207 1.047-7.104 2.945C3.016 6.753 1.97 9.275 1.97 11.956c.003 5.539 4.52 10.05 10.05 10.051zm5.51-7.632c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.174.2-.35.225-.65.075-1.02-.519-1.794-1.002-2.502-2.218-.19-.328.19-.305.545-1.01.074-.15.038-.282-.018-.382-.056-.1-.477-1.15-.654-1.575-.172-.415-.371-.358-.51-.365-.13-.006-.277-.008-.424-.008-.147 0-.387.056-.59.277-.204.223-.778.76-.778 1.854 0 1.095.795 2.153.905 2.302.11.15 1.565 2.39 3.79 3.352.53.228.943.364 1.267.467.532.17 1.016.146 1.397.089.426-.064 1.77-.723 2.02-1.42.25-.697.25-1.294.175-1.42-.075-.125-.275-.201-.575-.351z"/>
        </svg>
      ),
      href: 'https://whatsapp.com/channel/0029Va9IblC7dmecjzkkn811',
    },
    {
      name: 'Telegram',
      color: 'hover:text-[#26A5E4] hover:bg-[#26A5E4]/10 hover:border-[#26A5E4]/30',
      textColor: 'text-[#26A5E4]',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.61l-1.9 8.97c-.14.64-.52.8-.1.53l-2.9-2.14-1.4 1.35c-.15.15-.28.27-.57.27l.2-2.9 5.3-4.8c.23-.2-.05-.31-.35-.11L10.3 12.7 7.5 11.8c-.6-.2-.6-.6.13-.88l10.9-4.2c.5-.18.94.12.73.89z"/>
        </svg>
      ),
      href: 'https://t.me/offcampusjobsupdatess',
    },
    {
      name: 'LinkedIn',
      color: 'hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:border-[#0077B5]/30',
      textColor: 'text-[#0077B5]',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
        </svg>
      ),
      href: 'https://www.linkedin.com/company/lets-code-forever/',
    },
    {
      name: 'YouTube',
      color: 'hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30',
      textColor: 'text-[#FF0000]',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.387.51A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.475 20.455 12 20.455 12 20.455s7.524 0 9.387-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: 'https://www.youtube.com/@letscodewithavinash',
    },
    {
      name: 'Instagram',
      color: 'hover:text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30',
      textColor: 'text-[#E1306C]',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
      href: 'https://www.instagram.com/lets__code/',
    },
    {
      name: 'Discord',
      color: 'hover:text-[#5865F2] hover:bg-[#5865F2]/10 hover:border-[#5865F2]/30',
      textColor: 'text-[#5865F2]',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
        </svg>
      ),
      href: 'https://discord.gg/XRBheB9QF9',
    },
  ];

  const toolsList = [
    { name: 'Job Ready Score', desc: '100 pt score', color: 'bg-amber', border: 'border-amber/30', emoji: '🎯', href: 'https://www.lets-code.co.in/dashboard/job-ready-score/' },
    { name: 'Mock Interview', desc: '35+ topics', color: 'bg-violet', border: 'border-violet/30', emoji: '🧠', href: 'https://www.lets-code.co.in/dashboard/mocktest/' },
    { name: 'AI Resume Studio', desc: '95% ATS pass rate', color: 'bg-green', border: 'border-green/30', emoji: '📄', href: 'https://www.lets-code.co.in/dashboard/optimizeresume/' },
    { name: 'LinkedIn Optimizer', desc: '3.5x more views', color: 'bg-cyan2', border: 'border-cyan2/30', emoji: '💼', href: 'https://www.lets-code.co.in/dashboard/optimiselinkedin/' },
    { name: 'AI Job Finder', desc: 'Should I Apply? Engine', color: 'bg-[#0053D6]', border: 'border-[#0053D6]/30', emoji: '🔍', href: 'https://www.lets-code.co.in/dashboard/job-finder/' },
    { name: 'Cover Letter AI', desc: '8-10 keywords', color: 'bg-fuchsia-500', border: 'border-fuchsia-500/30', emoji: '✉️', href: 'https://www.lets-code.co.in/dashboard/cover-letter/' },
    { name: 'Job Tracker', desc: 'Kanban + List view', color: 'bg-emerald-500', border: 'border-emerald-500/30', emoji: '📊', href: 'https://www.lets-code.co.in/dashboard/tracker/' },
    { name: 'GitHub Optimizer', desc: '100 pt score', color: 'bg-slate-400', border: 'border-slate-500/30', emoji: '🐙', href: 'https://www.lets-code.co.in/dashboard/github-optimizer/' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#0A0F1E] bg-grid-pattern bg-grid-48 flex flex-col items-center justify-center pt-28 pb-20 px-6 md:px-12 overflow-hidden border-b border-border/20">
      {/* Absolute Radial Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-violet/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Core Triggers */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/30 bg-violet/15 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan inline-block animate-pulse-dot"></span>
            <span className="text-xs md:text-sm font-semibold tracking-wide text-cyan2">
              Trusted by 1,00,000+ Engineers · Always Free
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="font-display text-[2.2rem] md:text-[3.2rem] lg:text-[4.2rem] leading-[1.08] font-bold text-white tracking-[-0.02em] mb-6">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan2 to-violet2 text-glow">Land Your Dream Tech Job</span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-sm md:text-base text-muted max-w-xl mb-8 leading-relaxed">
            8 free AI career tools, 1000+ interview resources, company prep guides, job tracker, and a community of 1 lakh+ engineers — all free, all in one place.
          </p>

          {/* Terminal Window Card (Vibrant and Compact) */}
          <div className="w-full max-w-lg bg-card/90 backdrop-blur-md rounded-xl border border-border/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden mb-8">
            <div className="bg-[#0B0F1B]/95 px-4 py-2.5 flex items-center justify-between border-b border-border/40">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block"></span>
              </div>
              <span className="text-[10px] font-mono text-muted/50">bash terminal</span>
              <div className="w-8"></div>
            </div>
            <div className="p-4 font-mono text-[11px] md:text-[12px] leading-relaxed text-[#A9B1D6]">
              <div>
                <span className="text-violet">letscode@prep:~$ </span>
                <span className="text-[#9ECE6A]">✓ Ananya cracked Google SWE — CTC ₹42 LPA</span>
              </div>
              <div className="mt-1 flex items-start">
                <span className="text-violet shrink-0">letscode@prep:~$&nbsp;</span>
                <div className="inline-block text-cyan">
                  {typedText}
                  <span className="w-1.5 h-4 bg-cyan inline-block align-middle ml-0.5 cursor-blink"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8 font-body">
            <a
              href="#ai-tools"
              className="flex items-center justify-center gap-2 bg-[#00B140] hover:bg-[#00B140]/90 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(0,177,64,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan"
            >
              <span>Check Job Ready Score — Free</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#ai-tools"
              className="flex items-center justify-center gap-2 border border-white/35 hover:border-white bg-transparent hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet"
            >
              <span>Start Mock Interview</span>
            </a>
          </div>

          {/* Social Links Row (Vibrant brand colors) */}
          <div className="flex items-center gap-3 mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`w-9 h-9 rounded-lg bg-card border border-border/80 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 text-muted ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl font-body">
            <div className="bg-card/75 border border-border/60 p-3.5 rounded-xl flex flex-col items-start">
              <span className="font-display font-bold text-xl md:text-2xl text-violet2">
                1,00,000+
              </span>
              <span className="text-[10px] text-muted font-medium uppercase tracking-wider mt-1">Engineers</span>
            </div>
            <div className="bg-card/75 border border-border/60 p-3.5 rounded-xl flex flex-col items-start">
              <span className="font-display font-bold text-xl md:text-2xl text-cyan">
                8 Free
              </span>
              <span className="text-[10px] text-muted font-medium uppercase tracking-wider mt-1">AI Tools</span>
            </div>
            <div className="bg-card/75 border border-border/60 p-3.5 rounded-xl flex flex-col items-start">
              <span className="font-display font-bold text-xl md:text-2xl text-green">
                35+
              </span>
              <span className="text-[10px] text-muted font-medium uppercase tracking-wider mt-1">Topics</span>
            </div>
            <div className="bg-card/75 border border-border/60 p-3.5 rounded-xl flex flex-col items-start">
              <span className="font-display font-bold text-xl md:text-2xl text-amber">
                25+
              </span>
              <span className="text-[10px] text-muted font-medium uppercase tracking-wider mt-1">Guides</span>
            </div>
          </div>
        </div>

        {/* Right Column: 8 Free AI Career Tools Sidebar (Vibrant & High Fidelity) */}
        <div className="lg:col-span-5 w-full font-body">
          <div className="bg-[#131C30]/90 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col gap-4">
            {/* Sidebar Title */}
            <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-1">
              <span className="text-[11px] font-bold text-muted uppercase tracking-widest">
                8 Free AI Career Tools
              </span>
              <span className="text-[10px] font-bold text-cyan bg-cyan/10 border border-cyan/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                Free Access
              </span>
            </div>

            {/* List of 8 tools */}
            <div className="flex flex-col gap-2.5">
              {toolsList.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-card hover:bg-card2 border border-border/40 hover:border-violet/60 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    {/* Emoji Box */}
                    <div className="w-9 h-9 rounded-lg bg-card2 border border-border/40 flex items-center justify-center text-lg shadow-sm">
                      {tool.emoji}
                    </div>
                    {/* Info */}
                    <div className="text-left">
                      <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-cyan transition-colors duration-200">
                        {tool.name}
                      </h3>
                      <p className="text-[10px] text-muted font-mono mt-0.5">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-muted group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>

            {/* Footer Action Button */}
            <a
              href="#ai-tools"
              className="w-full mt-2 bg-gradient-to-r from-cyan/90 to-cyan2/90 hover:from-cyan hover:to-cyan2 text-navy py-3 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-violet"
            >
              <span>Open AI Toolkit</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
