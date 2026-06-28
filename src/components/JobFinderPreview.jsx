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
      matchColor: 'border-hairline text-white',
      logoBg: 'bg-[#4285F4]',
      logoChar: 'G',
    },
    {
      id: 2,
      role: 'Frontend Engineer (React)',
      company: 'Amazon',
      city: 'Hyderabad, India',
      match: '78%',
      matchColor: 'border-hairline text-white',
      logoBg: 'bg-[#FF9900]',
      logoChar: 'a',
    },
    {
      id: 3,
      role: 'Associate Support Engineer',
      company: 'Microsoft',
      city: 'Noida, India',
      match: '65%',
      matchColor: 'border-hairline text-white',
      logoBg: 'bg-[#00A4EF]',
      logoChar: 'M',
    },
  ];

  return (
    <section id="jobs" className="bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Copy */}
        <div className="reveal flex flex-col items-start font-mono text-left">
          {/* Eyebrow */}
          <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color text-[10px] font-normal uppercase tracking-wider mb-4">
            🔍 AI Job Finder
          </div>

          <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] font-normal text-white uppercase tracking-[3px] leading-tight mb-6 text-left">
            Find matched jobs. Skip the endless scrolling.
          </h2>

          <p className="font-serif text-base text-body-color mb-8 leading-relaxed text-left max-w-xl normal-case tracking-normal">
            Our AI Job Finder works behind the scenes to index open placement opportunities, score your fit score, and give you a detailed action plan.
          </p>

          <ul className="flex flex-col gap-3.5 mb-8 w-full font-serif text-sm">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-none border border-hairline flex items-center justify-center shrink-0 mt-0.5 bg-transparent">
                  <Check size={10} className="text-white" />
                </div>
                <span className="text-body-color tracking-normal leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a 
            href="https://www.lets-code.co.in/dashboard/job-finder/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-7 py-3.5 rounded-full font-normal text-xs uppercase tracking-[2.5px] transition-all duration-200 flex items-center gap-2 focus:outline-none no-underline"
          >
            <span>Find Matching Jobs</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Right Side: Visual Stack */}
        <div className="reveal flex flex-col gap-4 w-full max-w-md mx-auto font-mono">
          {previewJobs.map((job) => (
            <a
              key={job.id}
              href="https://www.lets-code.co.in/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-card border border-hairline rounded-none p-4 flex items-center justify-between gap-4 hover:border-white transition-all duration-300 hover:-translate-y-0.5 group no-underline"
            >
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div
                  className="w-10 h-10 rounded-none flex items-center justify-center font-display font-normal text-base text-white uppercase shrink-0"
                  style={{ backgroundColor: job.logoBg }}
                >
                  {job.logoChar}
                </div>
                {/* Info */}
                <div className="text-left font-mono">
                  <h3 className="font-semibold text-xs text-white uppercase tracking-wider group-hover:text-ice-blue transition-colors duration-200 line-clamp-1">
                    {job.role}
                  </h3>
                  <p className="text-[10px] text-muted-color uppercase tracking-wider mt-0.5">
                    {job.company} · {job.city}
                  </p>
                </div>
              </div>

              {/* Match Score Pill */}
              <div className={`px-2.5 py-1 text-[9px] font-normal rounded-none border uppercase tracking-widest shrink-0 ${job.matchColor}`}>
                {job.match} Match
              </div>
            </a>
          ))}

          {/* Under Note */}
          <p className="text-xs text-muted-color/60 italic text-center mt-2 font-serif">
            + 50 more jobs matched to your resume
          </p>
        </div>
      </div>
    </section>
  );
}
