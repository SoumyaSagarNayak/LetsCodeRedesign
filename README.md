# Let's Code — Placement Prep Platform Redesign

This repository contains a high-fidelity frontend redesign of [Let's Code](https://www.lets-code.co.in/), a free placement preparation platform designed for Indian engineering students to learn coding, practice mock tests, optimize profiles, and find matched developer jobs.

---

## 🎯 Redesign Goals & Visual Upgrades

The goal of this project is to take the core content of the original website and wrap it in a premium, responsive, developer-centric interface. Key visual enhancements include:

* **Austere Monochrome Canvas**: Pure black background (`#000000`), flat cards (`#141414`), and detail panels (`#0d0d0d`) bounded by quiet 1px hairline dividers (`#262626`). There are no glowing gradients, drop shadows, or decorative elements. The desaturated ice-blue (`#c3d9f3`) is the single accent color reserved exclusively for text links.
* **The Triple Font Trinity**:
  * **Saira Condensed**: Uppercase display headings (H1, H2, H3) with wide tracking (2.5px to 6px) to convey engineered structure.
  * **Cormorant Garamond**: A literary, slow-reading serif face used for all running body paragraphs, quotes, and descriptions.
  * **JetBrains Mono**: A precision monospace face used for button text, navigation items, metrics, and dates.
* **Aesthetic Geometry Rules**: Corner rounding is set to `0px` (`rounded-none`) across all cards, containers, inputs, and visual elements. Corner rounding is set to `rounded-full` **exclusively for buttons**.
* **Responsive Layouts**: Completely built for viewports from 375px (mobile) through 768px (tablets), 1280px (laptops), and 1440px (desktop monitors).

---

## 🌟 Section-by-Section Architecture

The landing page features a modular structure divided into 12 responsive sections:

1. **Navbar** ([Navbar.jsx](file:///d:/projects/letscoderedesign/src/components/Navbar.jsx)): Transparent header over solid black with a bottom hairline divider. Spaced uppercase wordmark (`LET'S CODE`), monospace links, and outline buttons (`rounded-full`).
2. **Hero Section** ([Hero.jsx](file:///d:/projects/letscoderedesign/src/components/Hero.jsx)): Split layout featuring uppercase Display titles and an interactive **System Configurator** that updates spec sheet details and metrics on a mock catalog card in real-time.
3. **The Placement Pipeline** ([JourneySteps.jsx](file:///d:/projects/letscoderedesign/src/components/JourneySteps.jsx)): Refactors standard roadmap cards into a vertical timeline spec table with large display stage numbers (`01`-`05`).
4. **Interactive Bento Grid** ([AIToolsGrid.jsx](file:///d:/projects/letscoderedesign/src/components/AIToolsGrid.jsx)): Features custom micro-widgets for hands-on interaction:
   * **Job Ready Score Simulator**: Counts up on audit trigger and prints completed checklists.
   * **Mock Interview Chip Questions**: Click topics (DSA, React, DBMS) to load coding questions.
   * **AI Job Finder Scanner**: Search input that returns matched position listings.
   * **GitHub Profile Auditor**: Simulates username reviews via console log streams.
   * **Kanban board**: Interactive tracker lanes.
5. **Company Prep Spec Dashboard** ([CompanyPrep.jsx](file:///d:/projects/letscoderedesign/src/components/CompanyPrep.jsx)): Dual-panel layout where selecting a target company updates its average packages, interview rounds, and sample assessment question.
6. **Resume Style Customizer** ([CompanyPrep.jsx](file:///d:/projects/letscoderedesign/src/components/CompanyPrep.jsx)): Live visual mock resume sheet that changes layout margins, alignments, and lines count based on template selection.
7. **AI Job Finder Preview** ([JobFinderPreview.jsx](file:///d:/projects/letscoderedesign/src/components/JobFinderPreview.jsx)): Real-time job cards styling with match fit score tags.
8. **Study Material Resources** ([Resources.jsx](file:///d:/projects/letscoderedesign/src/components/Resources.jsx)): A clean index of study guides, roadmaps, and cheat sheets in serif format with desaturated ice-blue hover actions.
9. **Testimonials Magazine Slider** ([Testimonials.jsx](file:///d:/projects/letscoderedesign/src/components/Testimonials.jsx)): Slide deck layout displaying a single massive quote in Cormorant Garamond serif with slide indicators (`01 / 03`).
10. **Tech Communities** ([Communities.jsx](file:///d:/projects/letscoderedesign/src/components/Communities.jsx)): Thematic Discord channels indicating total member counts.
11. **Call-To-Action Banner** ([CTABanner.jsx](file:///d:/projects/letscoderedesign/src/components/CTABanner.jsx)): Minimal pre-footer centered band with outline CTAs.
12. **Site Footer** ([Footer.jsx](file:///d:/projects/letscoderedesign/src/components/Footer.jsx)): Spaced directories and a large faded brand logo at the bottom center.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3 & PostCSS 8
- **Icons**: Lucide React & Inline SVGs
- **Package Manager**: npm

---

## 📖 Associated Guides

- **Workspace File Structure**: [structure.txt](file:///d:/projects/letscoderedesign/structure.txt)
- **Deployment, Running, & Troubleshooting Guide**: [user_guide.txt](file:///d:/projects/letscoderedesign/user_guide.txt)
- **Design System Token Specs**: [design.md](file:///d:/projects/letscoderedesign/design.md)

---

## 🚀 Quick Start Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   # Server runs on: http://localhost:5173/
   ```

3. **Build for Production**:
   ```bash
   npm run build
   # Compiled assets placed in: dist/
   ```
