import React from 'react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Roadmaps',
      emoji: '🗺️',
      links: [
        { label: 'DSA Roadmap', href: 'https://www.lets-code.co.in/articles/roadmap/' },
        { label: 'System Design Roadmap', href: 'https://www.lets-code.co.in/articles/roadmap/' },
        { label: 'DevOps Roadmap', href: 'https://www.lets-code.co.in/articles/roadmap/' },
      ],
    },
    {
      title: 'Interview Questions',
      emoji: '💬',
      links: [
        { label: 'JavaScript Questions', href: 'https://www.lets-code.co.in/explore/' },
        { label: 'OOPs Concepts', href: 'https://www.lets-code.co.in/explore/' },
        { label: 'DBMS & SQL Questions', href: 'https://www.lets-code.co.in/explore/' },
      ],
    },
    {
      title: 'Company PYQs',
      emoji: '📋',
      links: [
        { label: 'Google PYQs', href: 'https://www.lets-code.co.in/previousyearcodingquestion/google-previous-year-coding-questions/' },
        { label: 'Amazon PYQs', href: 'https://www.lets-code.co.in/prepare/amazon/' },
        { label: 'TCS NQT PYQs', href: 'https://www.lets-code.co.in/previousyearcodingquestion/tcspyq/' },
      ],
    },
    {
      title: '100 Days DSA',
      emoji: '🏆',
      links: [
        { label: 'Register for Challenge', href: 'https://www.lets-code.co.in/dashboard/' },
        { label: 'View Daily Challenges', href: 'https://www.lets-code.co.in/dashboard/' },
        { label: 'DSA Leaderboard', href: 'https://www.lets-code.co.in/contests/' },
      ],
    },
    {
      title: 'Interview Experiences',
      emoji: '📖',
      links: [
        { label: 'Read Experiences', href: 'https://www.lets-code.co.in/interview-experience/' },
        { label: 'Share Your Experience', href: 'https://www.lets-code.co.in/interview-experience/' },
        { label: 'Salary Insights', href: 'https://docs.google.com/document/d/145uqZ3cyKJKAuAsbGSbXfWwWokaUhz_zHACpaDYmdlA/edit?usp=sharing' },
      ],
    },
    {
      title: 'Placement Kit',
      emoji: '🎒',
      links: [
        { label: 'Resume Templates', href: 'https://www.lets-code.co.in/dashboard/optimizeresume/' },
        { label: 'Cold Email Templates', href: 'https://docs.google.com/document/d/145uqZ3cyKJKAuAsbGSbXfWwWokaUhz_zHACpaDYmdlA/edit?usp=sharing' },
        { label: 'Final Year Project Ideas', href: 'https://www.lets-code.co.in/blogs/' },
      ],
    },
  ];

  return (
    <section id="resources" className="bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-3">
          📚 Preparation Resources
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          Curated Placement Study Material
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-md mb-16 leading-relaxed">
          1000+ interactive placement preparation guides, documents, and sheets completely free of cost.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {resourceCategories.map((category) => (
            <div
              key={category.title}
              className="reveal bg-surface-card border border-hairline rounded-none p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white group"
            >
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-8 h-8 rounded-none border border-hairline bg-black flex items-center justify-center text-sm shadow-none">
                  {category.emoji}
                </div>
                <h3 className="font-display font-normal text-lg uppercase text-white tracking-[1.5px] group-hover:text-ice-blue transition-colors duration-200">
                  {category.title}
                </h3>
              </div>

              {/* Links List */}
              <ul className="flex flex-col gap-3 font-serif">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm font-normal text-muted-color hover:text-ice-blue transition-colors duration-200"
                    >
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1 shrink-0 text-muted-color/60 text-xs">
                        →
                      </span>
                      <span className="line-clamp-1">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
