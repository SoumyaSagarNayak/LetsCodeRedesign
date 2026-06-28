# Let's Code — Placement Prep Platform Redesign

This repository contains a high-fidelity frontend redesign of [Let's Code](https://www.lets-code.co.in/), a free placement preparation platform designed for Indian engineering students to learn coding, practice mock tests, optimize profiles, and find matched developer jobs.

---

## 🎯 Redesign Goals & Visual Upgrades

The goal of this project is to take the core content of the original website and wrap it in a premium, responsive, developer-centric interface. Key visual enhancements include:

* **Curated Dark-Mode Theme**: Deep background tones (`#0A0F1E`, `#0F172A`) coupled with glowing accents (Violet `#7C3AED` and Neon Cyan `#00E5FF`) for an immersive experience.
* **Modern Typography**:
  * Display Headings → **Space Grotesk** (Bold, tracking-tight)
  * Body Text → **Inter** (Sleek, highly readable)
  * Terminal/Code Blocks → **JetBrains Mono**
* **Rich Visual Elements**:
  * Glassmorphism navigation bar with backdrop blur filters.
  * Radial gradient violet/cyan glow blobs and structural mesh grids.
  * Subtle card borders (`rgba(124,58,237,0.18)`) that transition on hover.
* **Responsive Layouts**: Completely built for viewports from 375px (mobile) through 768px (tablets), 1280px (laptops), and 1440px (desktop monitors).
* **Zero Cumulative Layout Shift (CLS)**: Optimized loading grids and flex chips.

---

## 🌟 Section-by-Section Architecture

The landing page features a modular structure divided into 11 responsive sections:

1. **Navbar** ([Navbar.jsx](file:///d:/projects/letscoderedesign/src/components/Navbar.jsx)): Glassmorphic header with active links, desktop login/join buttons, and a responsive slide-down mobile hamburger navigation menu.
2. **Hero Section** ([Hero.jsx](file:///d:/projects/letscoderedesign/src/components/Hero.jsx)): Combines a pulsing credential badge ("Always Free"), bold responsive headings, a bash command terminal showing success loops, and a placement stats console.
3. **Placement Roadmap** ([JourneySteps.jsx](file:///d:/projects/letscoderedesign/src/components/JourneySteps.jsx)): Outlines the student-to-employed workflow in 5 visual milestones, connected by a gradient line vector on desktop.
4. **AI Career Tools Grid** ([AIToolsGrid.jsx](file:///d:/projects/letscoderedesign/src/components/AIToolsGrid.jsx)): Showcases 8 placement utilities (Resume ATS check, LinkedIn boost, mock MCQ rooms) with colored top border bars appearing on hover.
5. **Company Prep Chips** ([CompanyPrep.jsx](file:///d:/projects/letscoderedesign/src/components/CompanyPrep.jsx)): Flex-wrapped tiles for 14 major firms (Google, Amazon, Microsoft, TCS, etc.) displaying initials inside brand-colored squares.
6. **AI Job Finder Preview** ([JobFinderPreview.jsx](file:///d:/projects/letscoderedesign/src/components/JobFinderPreview.jsx)): Features checklist bullet points alongside a visual pile of job alerts showing match fit score tags (green, amber, and violet).
7. **Study Material Resources** ([Resources.jsx](file:///d:/projects/letscoderedesign/src/components/Resources.jsx)): A 3-column matrix of placement kits, roadmaps, and cheat sheets featuring links that transition into cyan and slide on hover.
8. **Student Testimonials** ([Testimonials.jsx](file:///d:/projects/letscoderedesign/src/components/Testimonials.jsx)): Highlight boxes for successful engineering students from colleges across India.
9. **Tech Discord Communities** ([Communities.jsx](file:///d:/projects/letscoderedesign/src/components/Communities.jsx)): 8 thematic channel cards indicating total member tallies and direct action pathways.
10. **Call-To-Action Banner** ([CTABanner.jsx](file:///d:/projects/letscoderedesign/src/components/CTABanner.jsx)): Centered high-conversion closure panel with background blobs.
11. **Site Footer** ([Footer.jsx](file:///d:/projects/letscoderedesign/src/components/Footer.jsx)): 4-column directory index with custom inline SVG links for LinkedIn, YouTube, and Instagram.

---

## ⚡ Interactions & Performance Features

- **Continuous Bash Typing Loop**: Built using custom React hooks to simulate typing, backspacing, and cursor blinking for 4 student success logs at set intervals.
- **Scroll Reveal Animations**: Built with a single instance of `IntersectionObserver` in [App.jsx](file:///d:/projects/letscoderedesign/src/App.jsx) to fade and lift content boxes only when they reach 8% visibility, keeping the page clean on initial load.
- **Brand SVG Fallbacks**: Utilizes lightweight, inline vector paths for brand logos in the footer and company preparation modules to bypass package limitations.

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
