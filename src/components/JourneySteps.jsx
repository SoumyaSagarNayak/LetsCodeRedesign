import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function JourneySteps() {
  const steps = [
    {
      number: '01',
      emoji: '📚',
      title: 'Learn',
      description: 'DSA roadmaps, system design, DevOps & ML guides',
      bottomColor: 'border-[#00E5FF]',
      href: 'https://www.lets-code.co.in/articles/roadmap/',
    },
    {
      number: '02',
      emoji: '🧪',
      title: 'Practice',
      description: 'Mock interviews, company PYQs & DSA challenges',
      bottomColor: 'border-[#9D5CFF]',
      href: 'https://www.lets-code.co.in/dashboard/mocktest/',
    },
    {
      number: '03',
      emoji: '🤖',
      title: 'Optimize',
      description: 'AI tools for resume, LinkedIn & job ready score',
      bottomColor: 'border-[#F59E0B]',
      href: 'https://www.lets-code.co.in/dashboard/',
    },
    {
      number: '04',
      emoji: '🌐',
      title: 'Connect',
      description: '16+ tech & city communities on Discord',
      bottomColor: 'border-[#10B981]',
      href: 'https://discord.gg/XRBheB9QF9',
    },
    {
      number: '05',
      emoji: '💼',
      title: 'Get Hired',
      description: 'Job alerts, startup opps & interview experiences',
      bottomColor: 'border-[#E1306C]',
      href: 'https://www.lets-code.co.in/jobs/',
    },
  ];

  return (
    <section id="learn" className="relative bg-[#0F172A] py-20 px-6 md:px-12 w-full overflow-hidden border-b border-border/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-semibold uppercase tracking-wider mb-3">
          ⚡ Your Placement Roadmap
        </div>

        {/* Section Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.6rem] text-center font-bold text-white tracking-tight mb-4">
          From Student to Employed
        </h2>
        <p className="font-body text-sm md:text-base text-muted text-center max-w-lg mb-16 leading-relaxed">
          Every stage of your placement journey — covered in one platform.
        </p>

        {/* Steps container */}
        <div className="relative w-full">
          {/* Horizontal Line for Desktop */}
          <div 
            className="absolute top-[50%] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-violet via-cyan to-transparent hidden lg:block -z-10" 
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full font-body">
            {steps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <a 
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal relative flex-1 w-full lg:max-w-[200px] min-h-[170px] bg-card hover:bg-card2 border border-border/80 hover:border-violet/60 rounded-xl p-5 flex flex-col items-start text-left group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(124,58,237,0.15)] overflow-hidden border-b-4 ${step.bottomColor}`}
                >
                  {/* Backdrop Faded Number */}
                  <span className="absolute top-2 right-4 font-display font-extrabold text-3xl text-muted/15 select-none pointer-events-none group-hover:text-muted/25 transition-all">
                    {step.number}
                  </span>

                  {/* Icon Circle */}
                  <div className="w-10 h-10 rounded-xl bg-card2 border border-border/40 flex items-center justify-center text-lg shadow-sm">
                    {step.emoji}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base text-white mt-5 group-hover:text-cyan transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] md:text-xs text-muted mt-2 leading-relaxed max-w-[170px]">
                    {step.description}
                  </p>
                </a>

                {/* Chevron connector (visible on desktop only, between items) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-muted/65 select-none shrink-0 z-10 w-6 h-6 rounded-full bg-card border border-border/60">
                    <ChevronRight size={14} className="text-muted/80 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
