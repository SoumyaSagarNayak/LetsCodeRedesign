import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function JourneySteps() {
  const steps = [
    {
      number: '01',
      title: 'Learn',
      description: 'Acquire structural software engineering expertise through curated DSA paths, database structures, system design matrices, and DevOps configurations.',
      href: 'https://www.lets-code.co.in/articles/roadmap/',
      specs: ['Structured study roadmaps', 'CS fundamentals sheets', 'System design architectures']
    },
    {
      number: '02',
      title: 'Practice',
      description: 'Engage with mock tests, company-wise coding assessments, and interview prep guides containing real previous year questions.',
      href: 'https://www.lets-code.co.in/dashboard/mocktest/',
      specs: ['35+ mock test modules', 'Google & Amazon PYQ sheets', 'Adaptive feedback reports']
    },
    {
      number: '03',
      title: 'Optimize',
      description: 'Calibrate your resume score, LinkedIn discoverability, and GitHub portfolio content using engineered AI audit algorithms.',
      href: 'https://www.lets-code.co.in/dashboard/',
      specs: ['LaTeX resume parsing', 'LinkedIn keyword density scan', 'GitHub profile analytics']
    },
    {
      number: '04',
      title: 'Connect',
      description: 'Gain referral opportunities and review live interview patterns inside our community of 1 lakh+ active engineering students.',
      href: 'https://discord.gg/XRBheB9QF9',
      specs: ['16+ technical subgroups', 'Peer mock session pairing', 'Referral partner networks']
    },
    {
      number: '05',
      title: 'Get Hired',
      description: 'Gain visibility into placement drives, off-campus hiring opportunities, and detailed mock interview case reviews.',
      href: 'https://www.lets-code.co.in/jobs/',
      specs: ['Live opportunity aggregator', 'Hiring referral loops', 'Alumni experiences logging']
    },
  ];

  return (
    <section id="learn" className="bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-4">
          ⚡ Pipeline Roadmap
        </div>

        {/* Section Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          The Placement Pipeline
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-md mb-20 leading-relaxed">
          Five structured stages designed to transition candidate profiles from prep study to active employment.
        </p>

        {/* Vertical Timeline Table */}
        <div className="w-full flex flex-col font-mono border-t border-hairline">
          {steps.map((step) => (
            <div
              key={step.title}
              className="reveal flex flex-col md:flex-row items-stretch justify-between py-10 border-b border-hairline gap-8 text-left group"
            >
              {/* Col 1: Stage Number */}
              <div className="flex items-start md:w-[15%] shrink-0">
                <span className="font-display font-normal text-4xl md:text-6xl text-white/10 group-hover:text-white/40 transition-colors duration-300 tracking-tight leading-none">
                  {step.number}
                </span>
              </div>

              {/* Col 2: Info & Specs */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-normal text-xl uppercase text-white tracking-[2px] mb-2 group-hover:text-ice-blue transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="font-serif text-[13px] text-body-color leading-relaxed mb-4 normal-case tracking-normal">
                    {step.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2">
                  {step.specs.map((s) => (
                    <span key={s} className="text-[9px] text-muted-color uppercase tracking-wider bg-surface-card px-2.5 py-1 border border-hairline">
                      • {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3: Execute Action */}
              <div className="flex items-center justify-start md:justify-end md:w-[25%] shrink-0 font-mono">
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-hairline hover:border-white bg-transparent text-white px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[2px] font-normal transition-all duration-200 focus:outline-none no-underline group-hover:bg-white group-hover:text-black"
                >
                  <span>Execute Step</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
