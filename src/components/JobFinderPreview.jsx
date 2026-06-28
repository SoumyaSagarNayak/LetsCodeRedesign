import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function JobFinderPreview() {
  const bulletPoints = [
    'Scans 5+ live engineering job boards in real-time',
    'Compares job description against your resume & skills',
    'Gives you a brutally honest "Should I Apply?" fit score',
    'Highlights missing keywords & keywords to add before applying',
  ];

  const previewJobs = [
    {
      id: 1,
      role: 'Software Development Engineer I',
      company: 'Google',
      city: 'Bangalore, India',
      match: '92%',
      matchColor: 'bg-green/10 text-green border-green/30',
      logoBg: 'bg-[#4285F4]',
      logoChar: 'G',
    },
    {
      id: 2,
      role: 'Frontend Engineer (React)',
      company: 'Amazon',
      city: 'Hyderabad, India',
      match: '78%',
      matchColor: 'bg-amber/10 text-amber border-amber/30',
      logoBg: 'bg-[#FF9900]',
      logoChar: 'a',
    },
    {
      id: 3,
      role: 'Associate Support Engineer',
      company: 'Microsoft',
      city: 'Noida, India',
      match: '65%',
      matchColor: 'bg-violet/10 text-violet border-violet/30',
      logoBg: 'bg-[#00A4EF]',
      logoChar: 'M',
    },
  ];

  return (
    <section id="jobs" className="bg-[#0A0F1E] py-24 px-6 md:px-12 w-full overflow-hidden border-t border-border/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Copy */}
        <div className="reveal flex flex-col items-start font-body">
          <div className="px-3 py-1 rounded-full border border-violet/20 bg-violet/5 text-violet2 text-xs font-semibold uppercase tracking-wider mb-4">
            🔍 AI Job Finder
          </div>
          <h2 className="font-display text-2xl md:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight mb-6 text-left">
            Find matched jobs. Skip the endless scrolling.
          </h2>
          <p className="text-sm md:text-base text-muted mb-8 leading-relaxed text-left max-w-xl">
            Our AI Job Finder works behind the scenes to index open placement opportunities, score your fit score, and give you a detailed action plan.
          </p>

          <ul className="flex flex-col gap-3.5 mb-8 w-full">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-green/10 border border-green/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-green font-bold" />
                </div>
                <span className="text-sm md:text-base text-[#F0F4FF] font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <button className="bg-gradient-to-r from-violet to-violet2 hover:from-violet2 hover:to-violet text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan">
            <span>Find Matching Jobs</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Side: Visual Stack */}
        <div className="reveal flex flex-col gap-4 w-full max-w-md mx-auto font-body">
          {previewJobs.map((job) => (
            <div
              key={job.id}
              className="bg-card border border-border/80 rounded-xl p-4 flex items-center justify-between gap-4 hover:border-violet/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(124,58,237,0.15)] group"
            >
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-base text-white uppercase shadow-sm shrink-0`}
                  style={{ backgroundColor: job.logoBg }}
                >
                  {job.logoChar}
                </div>
                {/* Info */}
                <div className="text-left">
                  <h3 className="font-semibold text-sm md:text-base text-white group-hover:text-cyan transition-colors duration-200 line-clamp-1">
                    {job.role}
                  </h3>
                  <p className="text-xs text-muted mt-0.5">
                    {job.company} · {job.city}
                  </p>
                </div>
              </div>

              {/* Match Score Pill */}
              <div className={`px-2.5 py-1 text-xs font-bold rounded-lg border uppercase tracking-wider shrink-0 ${job.matchColor}`}>
                {job.match} Fit
              </div>
            </div>
          ))}

          {/* Under Note */}
          <p className="text-xs text-muted/80 italic text-center mt-2">
            + 50 more jobs matched to your resume
          </p>
        </div>
      </div>
    </section>
  );
}
