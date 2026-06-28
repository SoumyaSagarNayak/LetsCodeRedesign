import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function JourneySteps() {
  const steps = [
    {
      number: '01',
      emoji: '📚',
      title: 'Learn',
      description: 'DSA roadmaps, system design, DevOps & ML guides',
      href: 'https://www.lets-code.co.in/articles/roadmap/',
    },
    {
      number: '02',
      emoji: '🧪',
      title: 'Practice',
      description: 'Mock interviews, company PYQs & DSA challenges',
      href: 'https://www.lets-code.co.in/dashboard/mocktest/',
    },
    {
      number: '03',
      emoji: '🤖',
      title: 'Optimize',
      description: 'AI tools for resume, LinkedIn & job ready score',
      href: 'https://www.lets-code.co.in/dashboard/',
    },
    {
      number: '04',
      emoji: '🌐',
      title: 'Connect',
      description: '16+ tech & city communities on Discord',
      href: 'https://discord.gg/XRBheB9QF9',
    },
    {
      number: '05',
      emoji: '💼',
      title: 'Get Hired',
      description: 'Job alerts, startup opps & interview experiences',
      href: 'https://www.lets-code.co.in/jobs/',
    },
  ];

  return (
    <section id="learn" className="relative bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-4">
          ⚡ Your Placement Roadmap
        </div>

        {/* Section Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          From Student to Employed
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-md mb-16 leading-relaxed">
          Every stage of your placement journey — covered in one platform.
        </p>

        {/* Steps container */}
        <div className="relative w-full">
          {/* Horizontal Line for Desktop */}
          <div 
            className="absolute top-[50%] left-[5%] right-[5%] h-[1px] bg-hairline hidden lg:block -z-10" 
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full font-serif">
            {steps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <a 
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal relative flex-1 w-full lg:max-w-[200px] min-h-[175px] bg-surface-card hover:bg-surface-soft border border-hairline hover:border-white rounded-none p-5 flex flex-col items-start text-left group transition-all duration-300 hover:-translate-y-1 shadow-none overflow-hidden"
                >
                  {/* Backdrop Faded Number */}
                  <span className="absolute top-3 right-4 font-mono font-normal text-xs text-muted-color/30 select-none pointer-events-none group-hover:text-white transition-all uppercase tracking-wider">
                    {step.number}
                  </span>

                  {/* Icon Square */}
                  <div className="w-8 h-8 rounded-none border border-hairline flex items-center justify-center text-sm bg-black">
                    {step.emoji}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-normal text-lg uppercase text-white tracking-[1.5px] mt-5 group-hover:text-ice-blue transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-body-color mt-2 leading-relaxed max-w-[170px]">
                    {step.description}
                  </p>
                </a>

                {/* Chevron connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-muted-color select-none shrink-0 z-10 w-6 h-6 rounded-full bg-black border border-hairline">
                    <ChevronRight size={12} className="text-muted-color/80" />
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
