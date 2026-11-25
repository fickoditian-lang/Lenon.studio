'use client';

import React, { useState } from 'react';
import { 
  ArrowUp, 
  Menu, 
  X, 
  ArrowRight, 
  Code, 
  Layers, 
  Palette, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Instagram,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

export default function LenonStudioLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-white selection:text-neutral-950">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-[1188px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-michroma font-black tracking-wider text-xl uppercase">
            LENON STUDIO
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition rounded-full"
            >
              Let's Talk
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-neutral-900 border border-neutral-800 text-white rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-neutral-900 px-6 py-6 flex flex-col gap-4">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white text-lg font-medium"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white text-lg font-medium"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white text-lg font-medium"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white text-lg font-medium"
            >
              Contact
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 bg-white text-neutral-950 font-medium rounded-full"
            >
              Let's Talk
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-[1188px] mx-auto px-6 py-20 md:py-32 flex flex-col items-start gap-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-mono text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Digital Agency & Brand Architecture
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]">
          Architecting High-Performance Digital Experiences.
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light">
          We combine cutting-edge frontend engineering with uncompromising brand strategy to build scalable products for ambitious companies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-white text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition flex items-center justify-center gap-2 group"
          >
            Explore Works
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-neutral-800 text-white font-medium rounded-full hover:bg-neutral-900 transition flex items-center justify-center"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* SERVICES / FEATURES GRID (DENGAN PERBAIKAN BORDER MOBILE) */}
      <section id="services" className="max-w-[1188px] mx-auto px-6 py-20 border-t border-neutral-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">(01) Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Engineered for Excellence.</h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm md:text-base">
            From modern web frameworks to meticulous brand systems, we deliver end-to-end digital solutions.
          </p>
        </div>

        {/* Grid Card dengan Border Mobile & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:border-t md:border-b md:border-neutral-900">
          
          {/* Item 02 */}
          <div className="border border-neutral-800 md:border-0 md:border-l md:border-neutral-900 p-8 flex flex-col justify-between gap-12 bg-neutral-900/20 md:bg-transparent rounded-xl md:rounded-none">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-500">(02)</span>
                <Code className="text-neutral-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Frontend Engineering</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                High-performance frontend engineering using modern frameworks, React, Next.js, and clean, scalable code.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-500">
              React / Next.js / Tailwind
            </div>
          </div>

          {/* Item 03 */}
          <div className="border border-neutral-800 md:border-0 md:border-l md:border-neutral-900 p-8 flex flex-col justify-between gap-12 bg-neutral-900/20 md:bg-transparent rounded-xl md:rounded-none">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-500">(03)</span>
                <Layers className="text-neutral-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Design Systems</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Scalable design systems and component libraries to unify your digital product brand across platforms.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-500">
              UI/UX / Tokens / Figma
            </div>
          </div>

          {/* Item 04 */}
          <div className="border border-neutral-800 md:border-0 md:border-l md:border-neutral-900 p-8 flex flex-col justify-between gap-12 bg-neutral-900/20 md:bg-transparent rounded-xl md:rounded-none">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-500">(04)</span>
                <Palette className="text-neutral-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Architecture</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Strategic brand identity development, typography curation, and visual asset guidelines.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-500">
              Identity / Guidelines / Strategy
            </div>
          </div>

        </div>

        {/* Grid bawah (05 & 06) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:border-b md:border-neutral-900 mt-6 md:mt-0">
          
          {/* Item 05 */}
          <div className="border border-neutral-800 md:border-0 md:border-l md:border-neutral-900 p-8 flex flex-col justify-between gap-12 bg-neutral-900/20 md:bg-transparent rounded-xl md:rounded-none">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-500">(05)</span>
                <Cpu className="text-neutral-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance & SEO</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Advanced performance optimization, SEO structuring, and lightning-fast speed delivery.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-500">
              Optimization / Core Web Vitals
            </div>
          </div>

          {/* Item 06 */}
          <div className="border border-neutral-800 md:border-0 md:border-l md:border-neutral-900 p-8 flex flex-col justify-between gap-12 bg-neutral-900/20 md:bg-transparent rounded-xl md:rounded-none">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-500">(06)</span>
                <ShieldCheck className="text-neutral-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation & Support</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                End-to-end digital consultation, maintenance, and continuous product iteration support.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-500">
              Advisory / Maintenance / Support
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-[1188px] mx-auto px-6 py-20 border-t border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">(About Studio)</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Built in Jombang, East Java. Delivering Worldwide.</h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Lenon Studio is an independent digital agency focused on crafting high-end digital solutions. We believe in minimalist design, robust engineering, and attention to every single pixel.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-900">
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-neutral-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">Next.js</div>
                <div className="text-sm text-neutral-400">Core Technology</div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl">
            <h3 className="text-lg font-bold mb-4 font-mono text-neutral-300">&gt; Our Philosophy</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              "Simplicity is the ultimate sophistication." We strip away the unnecessary noise to let your product's core value shine brightly.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every line of code and every design element is structured to ensure maximum speed, accessibility, and visual appeal.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-[1188px] mx-auto px-6 py-20 border-t border-neutral-900">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">(Selected Works)</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">Featured Projects.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition">
            <div className="h-64 bg-neutral-900 rounded-xl mb-6 flex items-center justify-center border border-neutral-800">
              <span className="font-mono text-neutral-600 text-sm">Project Preview 01</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-neutral-200 transition">Aura Enterprise Platform</h3>
                <p className="text-neutral-400 text-sm">Fintech & Dashboard Architecture</p>
              </div>
              <span className="p-3 bg-neutral-900 border border-neutral-800 rounded-full group-hover:bg-white group-hover:text-neutral-950 transition">
                <ArrowRight size={18} />
              </span>
            </div>
          </div>

          <div className="group bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition">
            <div className="h-64 bg-neutral-900 rounded-xl mb-6 flex items-center justify-center border border-neutral-800">
              <span className="font-mono text-neutral-600 text-sm">Project Preview 02</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-neutral-200 transition">Vortex Minimalist Brand</h3>
                <p className="text-neutral-400 text-sm">E-Commerce & Brand System</p>
              </div>
              <span className="p-3 bg-neutral-900 border border-neutral-800 rounded-full group-hover:bg-white group-hover:text-neutral-950 transition">
                <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-[1188px] mx-auto px-6 py-20 border-t border-neutral-900">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">(Get In Touch)</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let's build something exceptional together.</h2>
          <p className="text-neutral-400 mb-8">
            Have a project in mind or want to collaborate? Drop us a message and let's discuss your vision.
          </p>
          <a 
            href="mailto:contact@lenon.studio" 
            className="inline-block px-8 py-4 bg-white text-neutral-950 font-medium rounded-full hover:bg-neutral-200 transition text-lg"
          >
            contact@lenon.studio
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-16 mt-20">
        <div className="max-w-[1188px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-michroma font-black tracking-wider text-lg uppercase text-white block mb-2">
              LENON STUDIO
            </span>
            <p className="text-xs text-neutral-400 font-jakarta">
              Digital Agency &amp; Brand Architecture • Jombang, East Java
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950 transition">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950 transition">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950 transition">
              GitHub
            </a>
          </div>

          <div>
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-11 h-11 border border-neutral-800 bg-neutral-900 hover:bg-white hover:text-neutral-950 transition flex items-center justify-center rounded-full group"
            >
              <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
        
        <div className="max-w-[1188px] mx-auto px-6 pt-10 mt-10 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© 2026 Lenon Studio. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Crafted with precision &amp; Next.js</p>
        </div>
      </footer>

    </div>
  );
}