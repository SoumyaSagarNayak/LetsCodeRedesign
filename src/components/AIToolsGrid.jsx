import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, Search, Play, Plus } from 'lucide-react';

export default function AIToolsGrid() {
  // Widget 1: Score Simulator
  const [scoreVal, setScoreVal] = useState(65);
  const [scoreState, setScoreState] = useState('UNAUDITED'); // UNAUDITED, AUDITING, COMPLETE
  const [scoreList, setScoreList] = useState([
    '• Resume margins and structure check: Pending',
    '• Keyword density matching: Pending',
    '• LinkedIn profile completeness: Pending'
  ]);

  const runScoreAudit = () => {
    if (scoreState === 'AUDITING') return;
    setScoreState('AUDITING');
    let progress = 65;
    const interval = setInterval(() => {
      progress += 3;
      if (progress >= 88) {
        clearInterval(interval);
        setScoreVal(88);
        setScoreState('COMPLETE');
        setScoreList([
          '✓ LaTeX template structure matches core recruiter systems.',
          '✓ Keyword density is optimal for Software Engineer roles.',
          '✓ Suggested: Add GitHub contribution metrics to resume header.'
        ]);
      } else {
        setScoreVal(progress);
      }
    }, 45);
  };

  // Widget 2: Mock Interview topic selector
  const [activeTopic, setActiveTopic] = useState('DSA');
  const interviewQuestions = {
    DSA: { q: 'Write a function to detect a cycle in a singly linked list in O(N) time.', stat: 'Medium · 72% success' },
    React: { q: 'Explain the difference between useMemo and useCallback hook hooks.', stat: 'Easy · 85% success' },
    DBMS: { q: 'Write an SQL query to retrieve the second highest salary from Employee table.', stat: 'Hard · 45% success' },
    SystemDesign: { q: 'Design an URL shortener like Bitly (requirements: scaling to 10M requests).', stat: 'Hard · 32% success' }
  };

  // Widget 3: Job Finder Mock Search
  const [jobQuery, setJobQuery] = useState('');
  const [scannedJobs, setScannedJobs] = useState([]);
  const [isScanningJobs, setIsScanningJobs] = useState(false);

  const handleJobScan = (e) => {
    e.preventDefault();
    if (!jobQuery) return;
    setIsScanningJobs(true);
    setScannedJobs([]);
    setTimeout(() => {
      setIsScanningJobs(false);
      const query = jobQuery.toLowerCase();
      if (query.includes('front') || query.includes('react')) {
        setScannedJobs([
          { role: 'React Developer', company: 'Google', match: '94% fit', url: 'https://www.lets-code.co.in/jobs/' },
          { role: 'Frontend Engineer', company: 'Amazon', match: '88% fit', url: 'https://www.lets-code.co.in/jobs/' }
        ]);
      } else if (query.includes('back') || query.includes('node') || query.includes('system')) {
        setScannedJobs([
          { role: 'Backend Engineer (SDE-1)', company: 'Goldman Sachs', match: '91% fit', url: 'https://www.lets-code.co.in/jobs/' },
          { role: 'Systems Engineer', company: 'Microsoft', match: '83% fit', url: 'https://www.lets-code.co.in/jobs/' }
        ]);
      } else {
        setScannedJobs([
          { role: 'Software Developer (SDE-1)', company: 'TCS NQT', match: '95% fit', url: 'https://www.lets-code.co.in/jobs/' },
          { role: 'Associate Software Engineer', company: 'Infosys', match: '89% fit', url: 'https://www.lets-code.co.in/jobs/' }
        ]);
      }
    }, 800);
  };

  // Widget 4: Job Tracker Kanban Mock
  const [pipeline, setPipeline] = useState([
    { id: 1, role: 'Google SWE', stage: 'Applied' },
    { id: 2, role: 'Amazon FE', stage: 'Interview' },
  ]);
  const addPipelineItem = () => {
    const names = ['Goldman SWE', 'Microsoft FE', 'Flipkart SDE', 'Wipro Associate'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const newItem = { id: Date.now(), role: randomName, stage: 'Applied' };
    setPipeline([...pipeline, newItem]);
  };

  // Widget 5: GitHub Reviewer
  const [ghUser, setGhUser] = useState('');
  const [ghLog, setGhLog] = useState('');
  const [ghScore, setGhScore] = useState(null);
  const [isGhLoading, setIsGhLoading] = useState(false);

  const reviewGitHub = (e) => {
    e.preventDefault();
    if (!ghUser) return;
    setIsGhLoading(true);
    setGhScore(null);
    setGhLog('letscode-git-engine: connecting to github api...\n');
    
    setTimeout(() => {
      setGhLog(prev => prev + `✓ connected to username: ${ghUser}\nreviewing repository structures...\n`);
    }, 400);

    setTimeout(() => {
      setGhLog(prev => prev + `✓ found 12 public repositories\n✓ checking README profiles...\n`);
    }, 850);

    setTimeout(() => {
      setGhLog(prev => prev + `✓ analyzed commits timeline\ncomputing portfolio audit score...\n`);
    }, 1300);

    setTimeout(() => {
      setIsGhLoading(false);
      setGhScore(84);
      setGhLog(prev => prev + `✓ analysis complete: 84 / 100\n- Strength: High contribution density in past 3 months.\n- Suggestion: Add clear setup steps in main repo READMEs.`);
    }, 1800);
  };

  return (
    <section id="ai-tools" className="bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-3">
          ⚡ Interactive Playground
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          Interactive AI Toolkit
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-md mb-16 leading-relaxed">
          Test-drive our core placement tools below before routing to the official dashboards.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full mb-16 font-mono text-left items-stretch">
          
          {/* Card 1: Job Ready Score Simulator (col-span-4) */}
          <div className="md:col-span-4 bg-surface-card border border-hairline rounded-none p-6 flex flex-col justify-between gap-6 hover:border-white transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">🎯 JOB READY SCORE SIMULATOR</span>
                <span className="text-[9px] text-[#5fa657] uppercase tracking-widest font-bold">100 pt score</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                {/* Score Dial */}
                <div className="relative w-28 h-28 rounded-none border border-hairline flex flex-col items-center justify-center bg-black shrink-0">
                  <span className="text-3xl font-display font-normal text-white">{scoreVal}</span>
                  <span className="text-[8px] text-muted-color uppercase tracking-wider mt-0.5">audit rating</span>
                </div>
                <div className="flex-1 text-[11px] leading-relaxed text-body-color flex flex-col gap-1">
                  {scoreList.map((line, idx) => (
                    <div key={idx} className={line.startsWith('✓') ? 'text-[#5fa657]' : 'text-muted-color'}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button
              onClick={runScoreAudit}
              disabled={scoreState === 'AUDITING'}
              className="w-full sm:w-auto bg-transparent border border-white hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-[2px] transition-all duration-200 focus:outline-none flex items-center justify-center gap-2"
            >
              <span>{scoreState === 'AUDITING' ? 'Analyzing Resume...' : 'Simulate Resume Audit'}</span>
              <Play size={10} className="fill-current" />
            </button>
          </div>

          {/* Card 2: Mock Interview topic selector (col-span-2) */}
          <div className="md:col-span-2 bg-surface-card border border-hairline rounded-none p-6 flex flex-col justify-between gap-5 hover:border-white transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">🧠 MOCK INTERVIEW CHIPS</span>
                <span className="text-[9px] text-muted-color uppercase tracking-widest">35+ topics</span>
              </div>
              
              {/* Topic Select Chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.keys(interviewQuestions).map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setActiveTopic(topic)}
                    className={`px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider rounded-none border ${
                      activeTopic === topic
                        ? 'border-white bg-surface-soft text-white'
                        : 'border-hairline text-muted-color hover:border-white/50'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              {/* Rendered Question */}
              <div className="bg-black border border-hairline rounded-none p-3.5 text-left min-h-[90px] flex flex-col justify-between">
                <p className="font-serif text-xs text-body-color leading-relaxed">
                  "{interviewQuestions[activeTopic].q}"
                </p>
                <span className="text-[8px] text-muted-color uppercase tracking-wider block mt-3">
                  {interviewQuestions[activeTopic].stat}
                </span>
              </div>
            </div>

            <a
              href="https://www.lets-code.co.in/dashboard/mocktest/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-wider text-muted-color hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Launch Mock Test</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Card 3: AI Job Finder Mock Search (col-span-3) */}
          <div className="md:col-span-3 bg-surface-card border border-hairline rounded-none p-6 flex flex-col justify-between gap-5 hover:border-white transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">🔍 AI JOB FINDER ENGINE</span>
                <span className="text-[9px] text-muted-color uppercase tracking-widest">scan matching jobs</span>
              </div>

              {/* Search Form */}
              <form onSubmit={handleJobScan} className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={jobQuery}
                  onChange={(e) => setJobQuery(e.target.value)}
                  placeholder="Type 'frontend', 'backend'..."
                  className="flex-1 bg-black border border-hairline focus:border-white px-3 py-2 text-xs text-white placeholder-muted-soft outline-none rounded-none"
                />
                <button
                  type="submit"
                  className="px-3 bg-transparent border border-white hover:bg-white hover:text-black text-white rounded-none flex items-center justify-center"
                >
                  <Search size={12} />
                </button>
              </form>

              {/* Results console */}
              <div className="bg-black border border-hairline rounded-none p-3 text-left min-h-[92px] flex flex-col gap-2 justify-center">
                {isScanningJobs ? (
                  <div className="text-[10px] text-muted-color animate-pulse uppercase tracking-wider text-center">
                    scanning live opportunities boards...
                  </div>
                ) : scannedJobs.length > 0 ? (
                  scannedJobs.map((job) => (
                    <div key={job.role} className="flex items-center justify-between border-b border-hairline/40 last:border-0 pb-1.5 last:pb-0">
                      <div className="text-left">
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider block">{job.role}</span>
                        <span className="text-[9px] text-muted-color uppercase tracking-wide">{job.company}</span>
                      </div>
                      <span className="text-[9px] border border-hairline px-2 py-0.5 text-white uppercase tracking-wider shrink-0">{job.match}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-[10px] text-muted-soft uppercase tracking-wider text-center">
                    Enter query to match open roles.
                  </span>
                )}
              </div>
            </div>

            <a
              href="https://www.lets-code.co.in/dashboard/job-finder/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-wider text-muted-color hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Finder Dashboard</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Card 4: GitHub Username Reviewer (col-span-3) */}
          <div className="md:col-span-3 bg-surface-card border border-hairline rounded-none p-6 flex flex-col justify-between gap-5 hover:border-white transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">🐙 GITHUB PROFILE AUDITOR</span>
                {ghScore && <span className="text-[10px] text-[#5fa657] font-bold uppercase tracking-wider">Score: {ghScore}</span>}
              </div>

              {/* Input block */}
              <form onSubmit={reviewGitHub} className="flex gap-2 mb-4">
                <input
                  type="text"
                  required
                  value={ghUser}
                  onChange={(e) => setGhUser(e.target.value)}
                  placeholder="Enter GitHub handle..."
                  className="flex-1 bg-black border border-hairline focus:border-white px-3 py-2 text-xs text-white placeholder-muted-soft outline-none rounded-none"
                />
                <button
                  type="submit"
                  disabled={isGhLoading}
                  className="px-4 py-2 bg-transparent border border-white hover:bg-white hover:text-black text-white text-[10px] uppercase tracking-wider font-semibold rounded-none disabled:opacity-50"
                >
                  {isGhLoading ? 'Scanning...' : 'Audit'}
                </button>
              </form>

              {/* Output screen */}
              <div className="bg-black border border-hairline rounded-none p-3.5 text-left h-[92px] overflow-y-auto font-mono text-[9px] leading-relaxed text-body-color whitespace-pre-line">
                {ghLog || 'Enter username to query portfolio commits.'}
              </div>
            </div>

            <a
              href="https://www.lets-code.co.in/dashboard/github-optimizer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-wider text-muted-color hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>GitHub Optimizer Tool</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Card 5: Job Tracker Kanban Widget (col-span-3) */}
          <div className="md:col-span-3 bg-surface-card border border-hairline rounded-none p-6 flex flex-col justify-between gap-5 hover:border-white transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">📊 PIPELINE TRACKER KANBAN</span>
                <button
                  onClick={addPipelineItem}
                  className="flex items-center gap-1 text-[9px] border border-hairline px-2 py-0.5 hover:border-white text-white uppercase tracking-wider font-bold"
                >
                  <Plus size={8} /> Add Mock
                </button>
              </div>

              {/* Kanban columns */}
              <div className="grid grid-cols-2 gap-3 min-h-[105px]">
                {/* Applied Col */}
                <div className="bg-black border border-hairline p-2 flex flex-col gap-1.5">
                  <span className="text-[8px] text-muted-color uppercase tracking-wider border-b border-hairline pb-1 mb-1 block">Applied ({pipeline.filter(i => i.stage === 'Applied').length})</span>
                  {pipeline.filter(i => i.stage === 'Applied').map((item) => (
                    <div key={item.id} className="bg-surface-card p-1.5 border border-hairline text-[9px] text-white flex items-center justify-between group/k">
                      <span className="line-clamp-1 uppercase tracking-wide">{item.role}</span>
                      <button
                        onClick={() => {
                          setPipeline(pipeline.map(i => i.id === item.id ? { ...i, stage: 'Interview' } : i));
                        }}
                        className="text-muted-color hover:text-white font-bold"
                        title="Move to Interview"
                      >
                        →
                      </button>
                    </div>
                  ))}
                </div>

                {/* Interview Col */}
                <div className="bg-black border border-hairline p-2 flex flex-col gap-1.5">
                  <span className="text-[8px] text-muted-color uppercase tracking-wider border-b border-hairline pb-1 mb-1 block">Interview ({pipeline.filter(i => i.stage === 'Interview').length})</span>
                  {pipeline.filter(i => i.stage === 'Interview').map((item) => (
                    <div key={item.id} className="bg-surface-card p-1.5 border border-hairline text-[9px] text-[#5fa657] flex items-center justify-between">
                      <span className="line-clamp-1 uppercase tracking-wide">{item.role}</span>
                      <button
                        onClick={() => {
                          setPipeline(pipeline.filter(i => i.id !== item.id));
                        }}
                        className="text-muted-color hover:text-white"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://www.lets-code.co.in/dashboard/tracker/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-wider text-muted-color hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Kanban Board</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Card 6: AI Resume Studio & LinkedIn checklist (col-span-3) */}
          <div className="md:col-span-3 bg-surface-card border border-hairline rounded-none p-6 flex flex-col justify-between gap-5 hover:border-white transition-all duration-300">
            <div>
              <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">📄 RESUME & LINKEDIN AUDIT MATRIX</span>
                <span className="text-[9px] text-muted-color uppercase tracking-widest">ready factors</span>
              </div>
              
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'LaTeX markup compliance', check: true },
                  { label: 'Recruiter discovery SEO keywords', check: true },
                  { label: 'Quantitative impact statistics mapping', check: true },
                  { label: 'GitHub portfolio contribution index', check: false }
                ].map((factor) => (
                  <div key={factor.label} className="flex items-center justify-between text-[10px] uppercase tracking-wider border-b border-hairline/40 pb-1.5 last:border-0 last:pb-0">
                    <span className="text-body-color line-clamp-1">{factor.label}</span>
                    <span className={factor.check ? 'text-[#5fa657] font-bold' : 'text-[#d4a017] font-bold'}>
                      {factor.check ? '✓ READY' : '• AUDIT REQUIRED'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.lets-code.co.in/dashboard/optimizeresume/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-wider text-muted-color hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Resume Studio</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.lets-code.co.in/dashboard/optimiselinkedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-wider text-muted-color hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn Tool</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

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
