import React from 'react';

export default function JourneySteps() {
  const steps = [
    {
      number: '01',
      emoji: '📚',
      title: 'Learn',
      description: 'DSA roadmaps, system design, DevOps & ML guides',
    },
    {
      number: '02',
      emoji: '🧪',
      title: 'Practice',
      description: 'Mock interviews, company PYQs & DSA challenges',
    },
    {
      number: '03',
      emoji: '🤖',
      title: 'Optimize',
      description: 'AI tools for resume, LinkedIn & job ready score',
    },
    {
      number: '04',
      emoji: '🌐',
      title: 'Connect',
      description: '16+ tech & city communities on Discord',
    },
    {
      number: '05',
      emoji: '💼',
      title: 'Get Hired',
      description: 'Job alerts, startup opps & interview experiences',
    },
  ];

  return (
    <section id="learn" className="relative bg-[#0F172A] py-20 px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-semibold uppercase tracking-wider mb-3">
          ⚡ Placement Roadmap
        </div>

        {/* Section Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.6rem] text-center font-bold text-white tracking-tight mb-4">
          From Student to Employed in 5 steps
        </h2>
        <p className="font-body text-sm md:text-base text-muted text-center max-w-lg mb-16 leading-relaxed">
          Every stage of your placement journey — covered in one free platform.
        </p>

        {/* Steps container */}
        <div className="relative w-full">
          {/* Horizontal Line for Desktop */}
          <div 
            className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-violet via-cyan to-transparent hidden lg:block -z-10" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 w-full">
            {steps.map((step, idx) => (
              <div 
                key={step.title} 
                className="reveal flex flex-col items-center text-center px-4 group"
              >
                {/* Circle Icon */}
                <div className="relative w-14 h-14 rounded-full bg-card border border-border group-hover:border-violet2 group-hover:scale-105 shadow-[0_0_15px_rgba(124,58,237,0.1)] group-hover:shadow-[0_0_25px_rgba(157,92,255,0.4)] flex items-center justify-center text-xl transition-all duration-300 ease-out z-10">
                  <span>{step.emoji}</span>
                  {/* Step counter inside or absolute */}
                  <span className="absolute -top-1 -right-1 bg-violet font-mono text-[9px] text-white w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#0F172A] font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-lg text-white mt-6 group-hover:text-cyan transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-muted mt-2 max-w-[180px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
