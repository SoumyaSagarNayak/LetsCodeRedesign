import React from 'react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Roadmaps',
      emoji: '🗺️',
      links: [
        { label: 'DSA Roadmap', href: '#dsa' },
        { label: 'System Design Roadmap', href: '#system-design' },
        { label: 'DevOps Roadmap', href: '#devops' },
      ],
    },
    {
      title: 'Interview Questions',
      emoji: '💬',
      links: [
        { label: 'JavaScript Questions', href: '#javascript' },
        { label: 'OOPs Concepts', href: '#oops' },
        { label: 'DBMS & SQL Questions', href: '#dbms' },
      ],
    },
    {
      title: 'Company PYQs',
      emoji: '📋',
      links: [
        { label: 'Google PYQs', href: '#google-pyqs' },
        { label: 'Amazon PYQs', href: '#amazon-pyqs' },
        { label: 'TCS NQT PYQs', href: '#tcs-pyqs' },
      ],
    },
    {
      title: '100 Days DSA',
      emoji: '🏆',
      links: [
        { label: 'Register for Challenge', href: '#dsa-register' },
        { label: 'View Daily Challenges', href: '#dsa-challenges' },
        { label: 'DSA Leaderboard', href: '#dsa-leaderboard' },
      ],
    },
    {
      title: 'Interview Experiences',
      emoji: '📖',
      links: [
        { label: 'Read Experiences', href: '#read-exp' },
        { label: 'Share Your Experience', href: '#share-exp' },
        { label: 'Salary Insights', href: '#salaries' },
      ],
    },
    {
      title: 'Placement Kit',
      emoji: '🎒',
      links: [
        { label: 'Resume Templates', href: '#resumes' },
        { label: 'Cold Email Templates', href: '#cold-emails' },
        { label: 'Final Year Project Ideas', href: '#fyp-ideas' },
      ],
    },
  ];

  return (
    <section id="learn" className="bg-[#0F172A] py-24 px-6 md:px-12 w-full overflow-hidden border-t border-border/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3 py-1 rounded-full border border-violet/20 bg-violet/5 text-violet2 text-xs font-semibold uppercase tracking-wider mb-3">
          📚 Preparation Resources
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.6rem] text-center font-bold text-white tracking-tight mb-4">
          Curated Placement Study Material
        </h2>
        <p className="font-body text-sm md:text-base text-muted text-center max-w-lg mb-16 leading-relaxed">
          1000+ interactive placement preparation guides, documents, and sheets completely free of cost.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full font-body">
          {resourceCategories.map((category) => (
            <div
              key={category.title}
              className="reveal bg-card hover:bg-card2 border border-border/80 hover:border-violet2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:box-shadow-violet-hover group"
            >
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-card2 border border-border/40 flex items-center justify-center text-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.02)]">
                  {category.emoji}
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-violet2 transition-colors duration-200">
                  {category.title}
                </h3>
              </div>

              {/* Links List */}
              <ul className="flex flex-col gap-3">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group/link flex items-center gap-2 text-sm font-semibold text-violet2 hover:text-cyan transition-colors duration-200"
                    >
                      <span className="transition-transform duration-200 group-hover/link:translate-x-1.5 shrink-0 text-base">
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
