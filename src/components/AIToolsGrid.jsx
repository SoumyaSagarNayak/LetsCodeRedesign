import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AIToolsGrid() {
  const tools = [
    {
      id: 1,
      title: 'Job Ready Score',
      emoji: '🎯',
      badge: 'NEW',
      badgeColor: 'bg-amber/10 text-amber border-amber/20',
      topBarColor: 'bg-amber',
      description: 'Brutally honest AI score on your resume, LinkedIn & GitHub — with a personalised 90-day action plan.',
      stat: '↗ 100 pt score',
      actionText: 'Check Score',
      colSpan: 'md:col-span-2',
    },
    {
      id: 2,
      title: 'Mock Interview',
      emoji: '🧠',
      badge: 'HOT',
      badgeColor: 'bg-violet2/10 text-violet2 border-violet2/20',
      topBarColor: 'bg-violet2',
      description: 'AI-generated MCQ tests across 35+ topics — DSA, CS fundamentals, aptitude & more.',
      stat: '↗ 35+ topics',
      actionText: 'Start Test',
      colSpan: 'col-span-1',
    },
    {
      id: 3,
      title: 'AI Resume Studio',
      emoji: '📄',
      badge: 'AI',
      badgeColor: 'bg-green/10 text-green border-green/20',
      topBarColor: 'bg-green',
      description: 'Score, edit & AI-improve your resume in one flow — download as PDF or DOC.',
      stat: '↗ 95% ATS pass rate',
      actionText: 'Analyse Resume',
      colSpan: 'col-span-1',
    },
    {
      id: 4,
      title: 'LinkedIn Optimizer',
      emoji: '💼',
      badge: 'AI',
      badgeColor: 'bg-cyan2/10 text-cyan2 border-cyan2/20',
      topBarColor: 'bg-cyan2',
      description: 'AI suggestions to improve headline, summary & skills so recruiters find you first.',
      stat: '↗ 3.5x more views',
      actionText: 'Optimize Profile',
      colSpan: 'col-span-1',
    },
    {
      id: 5,
      title: 'AI Job Finder',
      emoji: '🔍',
      badge: 'NEW',
      badgeColor: 'bg-cyan/10 text-cyan border-cyan/20',
      topBarColor: 'bg-cyan',
      description: 'AI searches 5+ live job boards, scores every job by fit, and tells you whether to apply.',
      stat: '↗ Should I Apply? Engine',
      actionText: 'Find Jobs',
      colSpan: 'col-span-1',
    },
    {
      id: 6,
      title: 'Cover Letter AI',
      emoji: '✉️',
      badge: 'NEW',
      badgeColor: 'bg-violet/10 text-violet border-violet/20',
      topBarColor: 'bg-violet',
      description: 'Paste resume & JD — AI writes an ATS-optimised cover letter with keywords in seconds.',
      stat: '↗ 8–10 keywords',
      actionText: 'Generate Now',
      colSpan: 'col-span-1',
    },
    {
      id: 7,
      title: 'Job Tracker',
      emoji: '📊',
      badge: 'FREE',
      badgeColor: 'bg-green/10 text-green border-green/20',
      topBarColor: 'bg-green',
      description: 'Track every application in one Kanban board — status updates, interview prep links, and share-experience prompts.',
      stat: '↗ Kanban + List view',
      actionText: 'Track Applications',
      colSpan: 'col-span-1',
    },
    {
      id: 8,
      title: 'GitHub Optimizer',
      emoji: '🐙',
      badge: 'NEW',
      badgeColor: 'bg-amber/10 text-amber border-amber/20',
      topBarColor: 'bg-amber',
      description: 'Full AI review of any GitHub username — profile score, README feedback, repo analysis, strengths, weaknesses.',
      stat: '↗ 100 pt score',
      actionText: 'Analyze Profile',
      colSpan: 'col-span-1',
    },
  ];

  return (
    <section id="ai-tools" className="bg-[#0A0F1E] py-24 px-6 md:px-12 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3 py-1 rounded-full border border-violet/20 bg-violet/5 text-violet2 text-xs font-semibold uppercase tracking-wider mb-3">
          ⚡ AI-Powered · Always Free
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.6rem] text-center font-bold text-white tracking-tight mb-4">
          Prepare Smarter, Get Hired Faster
        </h2>
        <p className="font-body text-sm md:text-base text-muted text-center max-w-lg mb-16 leading-relaxed">
          Eight free tools built to crack placements — resume builder, mock tests, ATS scanner, job finder, cover letter, job tracker and more.
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`reveal relative bg-card hover:bg-card2 border border-border/80 hover:border-violet2 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:box-shadow-violet-hover ${tool.colSpan}`}
            >
              {/* Top Colored Hover Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2.5px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tool.topBarColor}`}
              />

              <div>
                {/* Header: Emoji & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-card2 group-hover:bg-[#1A2540] border border-border/40 flex items-center justify-center text-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.02)]">
                    {tool.emoji}
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md border uppercase ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Name & Desc */}
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-violet2 transition-colors duration-200">
                  {tool.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-muted mb-6 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Footer: Stat & Action */}
              <div className="flex items-center justify-between border-t border-border/30 pt-4 mt-auto">
                <span className="font-mono text-[11px] md:text-xs text-cyan2 font-medium tracking-tight">
                  {tool.stat}
                </span>
                <button className="flex items-center gap-1 text-[11px] md:text-xs text-white group-hover:text-cyan font-semibold transition-colors duration-200 uppercase tracking-wider">
                  <span>{tool.actionText}</span>
                  <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="bg-gradient-to-r from-cyan/80 to-cyan2/80 hover:from-cyan hover:to-cyan2 text-navy px-8 py-3.5 rounded-xl font-bold text-base shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-violet">
          <span>Open Full AI Toolkit</span>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}
