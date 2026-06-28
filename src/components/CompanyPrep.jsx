import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Check } from 'lucide-react';

export default function CompanyPrep() {
  const companies = [
    {
      name: 'Google',
      color: '#4285F4',
      initial: 'G',
      href: 'https://www.lets-code.co.in/prepare/google/',
      package: '18 - 45 LPA',
      rounds: '2 Coding + 1 System Design + 1 Googlyness',
      sampleQ: 'Given a binary tree, find the maximum path sum between any two nodes.'
    },
    {
      name: 'Amazon',
      color: '#FF9900',
      initial: 'a',
      href: 'https://www.lets-code.co.in/prepare/amazon/',
      package: '16 - 36 LPA',
      rounds: '1 Online Assessment + 2 Technical DSA + 1 Bar Raiser',
      sampleQ: 'Find the lowest common ancestor in a Binary Search Tree.'
    },
    {
      name: 'Microsoft',
      color: '#00A4EF',
      initial: 'M',
      href: 'https://www.lets-code.co.in/prepare/microsoft/',
      package: '15 - 40 LPA',
      rounds: '1 Coding Test + 2 DSA Interviews + 1 Architecture Review',
      sampleQ: 'Implement a LRU (Least Recently Used) cache with O(1) operations.'
    },
    {
      name: 'Goldman Sachs',
      color: '#0053D6',
      initial: 'GS',
      href: 'https://www.lets-code.co.in/prepare/goldman-sachs/',
      package: '12 - 24 LPA',
      rounds: '1 CoderPad Round + 2 Technical Interviews + 1 System Integration',
      sampleQ: 'Find the first non-repeating character in a stream of characters.'
    },
    {
      name: 'TCS',
      color: '#7C3AED',
      initial: 'T',
      href: 'https://www.lets-code.co.in/prepare/tcs/',
      package: '3.5 - 12 LPA',
      rounds: '1 TCS NQT Test + 1 Technical DSA + 1 HR / Managerial',
      sampleQ: 'Write a program to verify if a given number is a strong number.'
    },
    {
      name: 'Infosys',
      color: '#007CC3',
      initial: 'i',
      href: 'https://www.lets-code.co.in/prepare/infosys/',
      package: '3.6 - 10 LPA',
      rounds: '1 InfyTQ Test + 1 Technical Round + 1 Behavioral / HR',
      sampleQ: 'Check if two strings are anagrams of each other.'
    },
    {
      name: 'Wipro',
      color: '#9B59B6',
      initial: 'W',
      href: 'https://www.lets-code.co.in/prepare/wipro/',
      package: '3.5 - 8 LPA',
      rounds: '1 Elite/Turbo test + 1 Technical Interview + 1 HR',
      sampleQ: 'Remove duplicates from a sorted array in-place.'
    },
    {
      name: 'Deloitte',
      color: '#86BC25',
      initial: 'D',
      href: 'https://www.lets-code.co.in/prepare/deloitte/',
      package: '4.5 - 11 LPA',
      rounds: '1 Aptitude Test + 1 Case Study Round + 1 Technical Interview',
      sampleQ: 'Find all pairs of integer arrays whose sum is equal to a given number.'
    },
    {
      name: 'JP Morgan',
      color: '#003087',
      initial: 'JP',
      href: 'https://www.lets-code.co.in/prepare/jp-morgan/',
      package: '14 - 22 LPA',
      rounds: '1 Coding Test + 2 Technical interviews + 1 Fit Round',
      sampleQ: 'Design a high-frequency trading ledger memory registry.'
    },
    {
      name: 'Flipkart',
      color: '#FC6D26',
      initial: 'F',
      href: 'https://www.lets-code.co.in/prepare/flipkart/',
      package: '18 - 32 LPA',
      rounds: '1 Machine Coding + 2 DSA Rounds + 1 Hiring Manager',
      sampleQ: 'Design and code a distributed queue configuration in 90 minutes.'
    }
  ];

  const resumeTemplates = [
    { name: 'Classic', padding: 'p-4', alignment: 'text-left', style: 'serif font-normal', lines: 3 },
    { name: 'Executive', padding: 'p-6', alignment: 'text-center', style: 'mono uppercase tracking-wide', lines: 2 },
    { name: 'Clean', padding: 'p-5', alignment: 'text-left', style: 'serif italic', lines: 4 },
    { name: 'Sigma', padding: 'p-4', alignment: 'text-right', style: 'mono tracking-wider', lines: 3 },
    { name: 'Harvard', padding: 'p-7', alignment: 'text-left', style: 'serif font-bold', lines: 3 },
    { name: 'Creative', padding: 'p-4', alignment: 'text-center', style: 'serif italic tracking-wide', lines: 5 },
  ];

  const [activeCompanyIdx, setActiveCompanyIdx] = useState(0);
  const activeCompany = companies[activeCompanyIdx];

  const [activeTemplateIdx, setActiveTemplateIdx] = useState(0);
  const activeTemplate = resumeTemplates[activeTemplateIdx];

  const tags = ['ATS-Optimised', 'Live Preview', 'PDF Download', 'Free'];

  return (
    <section id="companies" className="bg-black py-28 px-6 md:px-12 w-full overflow-hidden border-b border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color font-mono text-[10px] uppercase tracking-[2px] mb-3">
          💼 Company Prep & Resume Studio
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-4xl lg:text-[2.5rem] text-center font-normal text-white uppercase tracking-[3px] mb-4">
          Interactive Preparation Matrix
        </h2>
        <p className="font-serif text-base text-body-color text-center max-w-lg mb-16 leading-relaxed">
          Select target companies to configure study specs, and customize template layouts in real-time.
        </p>

        {/* Dual Panel Company specifications */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono mb-28">
          
          {/* Left panel: Company List */}
          <div className="lg:col-span-5 border border-hairline bg-surface-card p-4 h-[350px] overflow-y-auto flex flex-col gap-1.5 scrollbar-thin">
            <span className="text-[9px] text-muted-color uppercase tracking-wider border-b border-hairline pb-2 mb-2 block text-left">SELECT TARGET COMPANY</span>
            {companies.map((company, idx) => (
              <button
                key={company.name}
                onClick={() => setActiveCompanyIdx(idx)}
                className={`flex items-center justify-between px-3 py-2 border rounded-none text-left transition-all duration-200 ${
                  activeCompanyIdx === idx
                    ? 'border-white bg-surface-soft'
                    : 'border-transparent bg-transparent hover:border-hairline/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-none flex items-center justify-center font-display font-normal text-[9px] text-white uppercase shrink-0"
                    style={{ backgroundColor: company.color }}
                  >
                    {company.initial}
                  </div>
                  <span className="text-xs text-white uppercase tracking-wider">{company.name}</span>
                </div>
                <ChevronRight size={12} className="text-muted-color" />
              </button>
            ))}
          </div>

          {/* Right panel: Company Specifications Sheet */}
          <div className="lg:col-span-7 bg-surface-card border border-hairline p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-3.5 border-b border-hairline pb-3 mb-5">
                <div
                  className="w-6 h-6 rounded-none flex items-center justify-center font-display font-normal text-xs text-white uppercase"
                  style={{ backgroundColor: activeCompany.color }}
                >
                  {activeCompany.initial}
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-[1.5px]">{activeCompany.name} GUIDES SPEC SHEET</span>
              </div>

              <div className="flex flex-col gap-4 font-mono">
                <div>
                  <span className="text-[9px] text-muted-color uppercase tracking-wider block mb-1">AVERAGE PACKAGE</span>
                  <span className="text-xs text-white uppercase tracking-wider font-semibold">{activeCompany.package}</span>
                </div>
                <div>
                  <span className="text-[9px] text-muted-color uppercase tracking-wider block mb-1">INTERVIEW PROCESS</span>
                  <span className="text-xs text-white uppercase tracking-wider font-semibold">{activeCompany.rounds}</span>
                </div>
                <div>
                  <span className="text-[9px] text-muted-color uppercase tracking-wider block mb-1.5">SAMPLE ASSESSMENT QUESTION</span>
                  <div className="bg-black border border-hairline p-3 text-[11px] font-serif text-body-color leading-relaxed normal-case tracking-normal">
                    "{activeCompany.sampleQ}"
                  </div>
                </div>
              </div>
            </div>

            <a
              href={activeCompany.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-transparent text-white border border-white hover:bg-white hover:text-black py-2.5 rounded-full font-normal text-xs uppercase tracking-[2px] transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none no-underline"
            >
              <span>Execute Prep Guide</span>
              <ArrowRight size={12} />
            </a>
          </div>

        </div>

        {/* Live Resume Customizer */}
        <div className="reveal w-full max-w-5xl bg-surface-card border border-hairline rounded-none p-8 lg:p-12 shadow-none grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Selector list */}
          <div className="lg:col-span-6 flex flex-col items-start font-mono">
            <div className="px-3.5 py-1.5 rounded-none border border-hairline bg-transparent text-muted-color text-[10px] font-normal uppercase tracking-wider mb-5">
              📝 Resume Builder Matrix
            </div>
            
            <h3 className="font-display font-normal text-2xl md:text-3xl lg:text-[2.2rem] text-white uppercase tracking-[2px] leading-tight mb-4">
              Build an ATS-Ready Resume
            </h3>
            
            <p className="font-serif text-sm text-body-color mb-6 leading-relaxed normal-case tracking-normal">
              Select configurations from our template matrix to inspect alignment presets and typography profiles.
            </p>

            {/* Template Selector Cards */}
            <div className="grid grid-cols-3 gap-2.5 w-full mb-6">
              {resumeTemplates.map((tpl, idx) => (
                <button
                  key={tpl.name}
                  onClick={() => setActiveTemplateIdx(idx)}
                  className={`p-2 border rounded-none text-center transition-all duration-200 ${
                    activeTemplateIdx === idx
                      ? 'border-white bg-surface-soft text-white font-bold'
                      : 'border-hairline text-muted-color hover:border-white/50 font-normal'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider">{tpl.name}</span>
                </button>
              ))}
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-none border border-hairline bg-black text-muted-color text-[9px] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href="https://www.lets-code.co.in/dashboard/optimizeresume/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-7 py-3.5 rounded-full font-normal text-xs uppercase tracking-[2.5px] transition-all duration-200 flex items-center gap-2 focus:outline-none no-underline"
            >
              <span>Launch Studio Editor</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Column: Live mock resume preview */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="bg-black border border-hairline rounded-none shadow-none w-full max-w-[340px] h-[330px] flex flex-col justify-between relative overflow-hidden text-left font-serif p-4 transition-all duration-300">
              
              {/* Header section updating based on style */}
              <div className={`${activeTemplate.alignment} border-b border-hairline/60 pb-2 mb-3`}>
                <h4 className={`text-white text-sm font-semibold uppercase tracking-wider font-${activeTemplate.style.includes('mono') ? 'mono' : 'display'}`}>
                  candidate name SWE
                </h4>
                <p className="text-[8px] text-muted-color uppercase tracking-wider font-mono mt-0.5">
                  you@college.edu · +91 999 999 9999
                </p>
              </div>

              {/* Body Content mapping lines count */}
              <div className={`flex flex-col gap-2.5 flex-1 ${activeTemplate.padding}`}>
                {Array.from({ length: activeTemplate.lines }).map((_, lineIdx) => (
                  <div key={lineIdx} className="flex flex-col gap-1 w-full">
                    {/* Education / Experience title */}
                    <div className="flex items-center justify-between text-[7px] text-white uppercase tracking-wider font-mono">
                      <span>Experience Section {lineIdx + 1}</span>
                      <span>2024 - Present</span>
                    </div>
                    {/* Mock Description lines */}
                    <div className="h-0.5 bg-hairline rounded-none w-full" />
                    <div className="h-0.5 bg-hairline rounded-none w-4/5" />
                  </div>
                ))}
              </div>

              {/* Bottom tag */}
              <div className="border-t border-hairline/40 pt-2 flex items-center justify-between font-mono text-[8px] text-muted-color uppercase tracking-wider">
                <span>Preset: {activeTemplate.name}</span>
                <span className="text-[#5fa657]">✓ ATS Compliant</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
