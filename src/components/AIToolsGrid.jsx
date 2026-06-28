import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function AIToolsGrid() {
  const tools = [
    {
      id: 1,
      title: 'Job Ready Score',
      emoji: '🎯',
      badge: 'NEW',
      badgeColor: 'border-hairline text-muted-color',
      topBarColor: 'bg-white',
      borderColor: 'border-hairline hover:border-white',
      glowShadow: 'hover:shadow-none',
      textColor: 'text-muted-color group-hover:text-white',
      description: 'Brutally honest AI score on your resume, LinkedIn & GitHub — with a personalised 90-day action plan.',
      stat: '100 pt score',
      actionText: 'Check Score',
      colSpan: 'md:col-span-2',
      href: 'https://www.lets-code.co.in/dashboard/job-ready-score/',
    },
    {
      id: 2,
      title: 'Mock Interview',
      emoji: '🧠',
      badge: 'HOT',
      badgeColor: 'border-hairline text-muted-color',
      topBarColor: 'bg-white',
      borderColor: 'border-hairline hover:border-white',
      glowShadow: 'hover:shadow-none',
      textColor: 'text-muted-color group-hover:text-white',
      description: 'AI-generated MCQ tests across 35+ topics — DSA, CS fundamentals, aptitude & more.',
      stat: '35+ topics',
      actionText: 'Start Test',
      colSpan: 'col-span-1',
      href: 'https://www.lets-code.co.in/dashboard/mocktest/',
    },
    {
      id: 3,
      title: 'AI Resume Studio',
      emoji: '📄',
      badge: 'AI Powered',
      badgeColor: 'border-hairline text-muted-color',
      topBarColor: 'bg-white',
      borderColor: 'border-hairline hover:border-white',
      glowShadow: 'hover:shadow-none',
      textColor: 'text-muted-color group-hover:text-white',
      description: 'Score, edit & AI-improve your resume in one flow — download as PDF or DOC.',
      stat: '95% ATS pass rate',
      actionText: 'Analyse Resume',
      colSpan: 'col-span-1',
      href: 'https://www.lets-code.co.in/dashboard/optimizeresume/',
    },
    {
      id: 4,
      title: 'LinkedIn Optimizer',
      emoji: '💼',
      badge: 'AI Powered',
      badgeColor: 'border-hairline text-muted-color',
      topBarColor: 'bg-white',
      borderColor: 'border-hairline hover:border-white',
      glowShadow: 'hover:shadow-none',
      textColor: 'text-muted-color group-hover:text-white',
      description: 'AI suggestions to improve headline, summary & skills so recruiters find you first.',
      stat: '3.5x more views',
      actionText: 'Optimize Profile',
      colSpan: 'col-span-1',
      href: 'https://www.lets-code.co.in/dashboard/optimiselinkedin/',
    },
    {
      id: 5,
      title: 'AI Job Finder',
      emoji: '🔍',
      badge: 'NEW',
      badgeColor: 'border-hairline text-muted-color',
      topBarColor: 'bg-white',
      borderColor: 'border-hairline hover:border-white',
      glowShadow: 'hover:shadow-none',
      textColor: 'text-muted-color group-hover:text-white',
      description: 'AI searches 5+ live job boards, scores every job by fit, and tells you whether to apply.',
      stat: 'Should I Apply? Engine',
      actionText: 'Find Jobs',
      colSpan: 'col-span-1',
      href: 'https://www.lets-code.co.in/dashboard/job-finder/',
    },
    {
      id: 6,
      title: 'Cover Letter AI',
      emoji: '✉️',
      badge: 'NEW',
      badgeColor: 'border-hairline text-muted-color',
      topBarColor: 'bg-white',
      borderColor: 'border-hairline hover:border-white',
      glowShadow: 'hover:shadow-none',
      textColor: 'text-muted-color group-hover:text-white',
      description: 'Paste resume & JD — AI writes an ATS-optimised cover letter with keywords in seconds.',
      stat: '8–10 keywords',
      actionText: 'Generate Now',
      colSpan: 'col-span-1',
      href: 'https://www.lets-code.co.in/dashboard/cover-letter/',
    },
    {
      id: 7,
      title: 'Job Tracker',
      emoji: '📊',
      badge: 'Free',
      badgeColor: 'border-hairline text-muted-color',
      topBarColor: 'bg-white',
      borderColor: 'border-hairline hover:border-white',
      glowShadow: 'hover:shadow-none',
      textColor: 'text-muted-color group-hover:text-white',
      description: 'Track every application in one Kanban board — status updates, interview prep links, and share-experience prompts.',
      stat: 'Kanban + List view',
      actionText: 'Track Applications',
      colSpan: 'col-span-1',
      href: 'https://www.lets-code.co.in/dashboard/tracker/',
    },
    {
      id: 8,
      title: 'GitHub Optimizer',
      emoji: '🐙',
      badge: 'NEW',
      badgeColor: 'border-hairline text-muted-color',
      topBarColor: 'bg-white',
      borderColor: 'border-hairline hover:border-white',
      glowShadow: 'hover:shadow-none',
      textColor: 'text-muted-color group-hover:text-white',
      description: 'Full AI review of any GitHub username — profile score, README feedback, repo analysis, strengths, weaknesses.',
      stat: '100 pt score',
      actionText: 'Analyze Profile',
      colSpan: 'col-span-1',
      href: 'https://www.lets-code.co.in/dashboard/github-optimizer/',
    },
  ];

  return (
    <section id="ai-tools" className="bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-3">
          ⚡ AI-Powered · Always Free
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          Prepare Smarter, Get Hired Faster
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-md mb-16 leading-relaxed">
          Eight free tools built to crack placements — resume builder, mock tests, ATS scanner, job finder, cover letter, job tracker and more.
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16 font-mono">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`reveal relative bg-surface-card border rounded-none p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${tool.borderColor} ${tool.colSpan}`}
            >
              <div>
                {/* Header: Emoji & Badge */}
                <div className="flex items-center justify-between mb-6 pt-1">
                  <div className="w-8 h-8 rounded-none bg-black border border-hairline flex items-center justify-center text-sm shadow-none">
                    {tool.emoji}
                  </div>
                  <span className={`text-[9px] font-normal tracking-widest px-2 py-0.5 rounded-none border uppercase ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Name & Desc */}
                <h3 className="font-display font-normal text-lg uppercase text-white tracking-[1.5px] mb-2 group-hover:text-ice-blue transition-colors duration-200">
                  {tool.title}
                </h3>
                <p className="font-serif text-xs text-body-color mb-6 leading-relaxed normal-case tracking-normal">
                  {tool.description}
                </p>
              </div>

              {/* Footer: Stat & Action */}
              <div className="flex items-center justify-between border-t border-hairline pt-4 mt-auto">
                <span className="font-mono text-[9px] text-muted-color uppercase tracking-wider">
                  {tool.stat}
                </span>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 text-[10px] font-normal transition-colors duration-200 uppercase tracking-wider ${tool.textColor}`}
                >
                  <span>{tool.actionText}</span>
                  <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <a
          href="https://www.lets-code.co.in/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-8 py-3.5 rounded-full font-normal text-xs uppercase tracking-[2.5px] transition-all duration-200 flex items-center gap-2 focus:outline-none font-mono"
        >
          <span>Open Full AI Toolkit</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
