"use client";

import { useState, useEffect } from "react";
import {
  X,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight as ArrowRightIcon,
  ArrowUp,
  ArrowLeft,
  CheckCircle2,
  Layers,
} from "lucide-react";

export default function LenonStudioLanding() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeFading, setWelcomeFading] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Intro Welcome Screen
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setWelcomeFading(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Observer Scroll Global
  useEffect(() => {
    if (activeCaseStudy) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-played");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCaseStudy]);

  const portfolioItems = [
    {
      id: 1,
      slug: "fintech-startup-platform",
      title: "FINTECH STARTUP PLATFORM",
      desc: "A bold web ecosystem covering user dashboards, financial analytics, and secure transactions.",
      category: "Web System",
      client: "FinTech Nusantara",
      year: "2026",
      liveUrl: "https://example.com",
      overview:
        "FinTech Nusantara needed a complete overhaul of their web banking and analytics dashboard to serve institutional and retail investors across Southeast Asia with zero latency.",
      challenge:
        "Legacy interfaces suffered from high drop-off rates during onboarding and cluttered financial reporting charts that confused everyday users.",
      solution:
        "We engineered a high-contrast, modular design system with real-time portfolio telemetry, simplified 3-step KYC onboarding, and institutional-grade typography.",
      deliverables: [
        "Full UI/UX Design System",
        "Next.js Web Dashboard",
        "Real-time Chart Components",
        "Responsive Mobile Web",
      ],
      metrics: [
        { label: "User Onboarding Speed", value: "+64%" },
        { label: "Daily Active Retention", value: "91.4%" },
        { label: "Page Load Performance", value: "0.7s" },
      ],
      previewScreens: [
        {
          title: "01 / Executive Financial Overview",
          caption: "Clean balance visualization, cashflow velocity, and instant transfer widgets.",
        },
        {
          title: "02 / Multi-Currency Asset Vault",
          caption: "Automated currency conversion and audit-ready transaction history.",
        },
      ],
    },
    {
      id: 2,
      slug: "modular-enterprise-dashboard",
      title: "MODULAR ENTERPRISE DASHBOARD",
      desc: "A flexible UI/UX system with workflow diagrams, analytics blocks and clear operational sections.",
      category: "UI/UX Design",
      client: "Enterprise Corp",
      year: "2026",
      liveUrl: "https://example.com",
      overview:
        "An end-to-end operational command center built for Enterprise Corp to unify supply chain tracking, team KPIs, and automated approval pipelines.",
      challenge:
        "Managers had to switch across 6 disconnected internal tools daily, causing reporting delays and operational blind spots.",
      solution:
        "We consolidated all workflows into a single grid-based workspace with customizable widget blocks, keyboard-first navigation, and instant status alerts.",
      deliverables: [
        "Enterprise Component Library",
        "Interactive Workflow Builder",
        "Role-Based Access Views",
        "Dark & Light Mode Tokens",
      ],
      metrics: [
        { label: "Operational Efficiency", value: "+48%" },
        { label: "Internal Tool Consolidation", value: "6 → 1" },
        { label: "Team Adoption Rate", value: "98%" },
      ],
      previewScreens: [
        {
          title: "01 / Live Operations Grid",
          caption: "Real-time node monitoring and automated bottleneck detection.",
        },
        {
          title: "02 / Modular Report Generator",
          caption: "One-click executive PDF & CSV exports with custom metrics.",
        },
      ],
    },
    {
      id: 3,
      slug: "luxury-ecommerce-store",
      title: "LUXURY E-COMMERCE STORE",
      desc: "An immersive digital experience and sleek web interface crafted for high-end fashion branding.",
      category: "Web Design",
      client: "Luxe Label",
      year: "2026",
      liveUrl: "https://example.com",
      overview:
        "A flagship digital storefront for Luxe Label that translates editorial fashion lookbooks into a frictionless global shopping experience.",
      challenge:
        "Standard e-commerce templates diluted the brand's exclusivity and failed to showcase garment craftsmanship on mobile screens.",
      solution:
        "We crafted an editorial-first storefront with full-bleed lookbook transitions, minimalist product detail drawers, and a 1-page express checkout.",
      deliverables: [
        "Bespoke Storefront UI/UX",
        "Editorial Lookbook Engine",
        "Express Checkout Flow",
        "Global Currency & Shipping",
      ],
      metrics: [
        { label: "Checkout Conversion", value: "+39%" },
        { label: "Average Order Value", value: "+27%" },
        { label: "Mobile Session Time", value: "4m 18s" },
      ],
      previewScreens: [
        {
          title: "01 / Seasonal Editorial Hero",
          caption: "Monochrome typography paired with high-impact garment presentation.",
        },
        {
          title: "02 / Seamless Bag & Checkout",
          caption: "Slide-over bag drawer with instant size guide and express payment.",
        },
      ],
    },
    {
      id: 4,
      slug: "strategic-brand-system-2026",
      title: "STRATEGIC BRAND SYSTEM 2026",
      desc: "A comprehensive digital identity and design system for modern creative portfolios.",
      category: "Brand & Web",
      client: "Kopi Artisan",
      year: "2026",
      liveUrl: "https://example.com",
      overview:
        "Complete brand architecture and digital presence for Kopi Artisan, elevating local East Java specialty coffee roasters to international retail.",
      challenge:
        "Kopi Artisan needed a cohesive visual language that honored local heritage while appealing to modern specialty coffee buyers worldwide.",
      solution:
        "We developed a bold geometric identity, tactile packaging guidelines, and a fast direct-to-consumer web platform for wholesale & retail orders.",
      deliverables: [
        "Visual Identity & Logo System",
        "Packaging & Print Guidelines",
        "B2B & Retail Web Platform",
        "Brand Book Documentation",
      ],
      metrics: [
        { label: "Wholesale Inquiries", value: "+115%" },
        { label: "Retail Brand Recall", value: "3.2x" },
        { label: "Direct Online Sales", value: "+72%" },
      ],
      previewScreens: [
        {
          title: "01 / Brand Identity & Typography",
          caption: "Strict grid proportions, custom packaging stamps, and tonal palette.",
        },
        {
          title: "02 / Direct Roastery Storefront",
          caption: "Interactive bean origin selector and subscription ordering flow.",
        },
      ],
    },
  ];

  const openCaseStudy = (project) => {
    setActiveCaseStudy(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeCaseStudy = () => {
    setActiveCaseStudy(null);
    setTimeout(() => {
      const portfolioEl = document.getElementById("portfolio");
      if (portfolioEl) {
        portfolioEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950 font-jakarta antialiased selection:bg-black selection:text-white overflow-x-hidden scroll-smooth relative">
      {/* FLOATING Vercel BADGE */}
      <a
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-neutral-950/90 hover:bg-neutral-950 text-white border border-neutral-800 px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2 text-[10px] font-michroma transition-all duration-300 hover:scale-105"
        aria-label="Powered by Vercel"
      >
        <svg
          className="w-3 h-3 fill-current text-white shrink-0"
          viewBox="0 0 116 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M57.5 0L115 100H0L57.5 0Z" />
        </svg>
        <span className="tracking-wider font-semibold">
          Powered by Vercel
        </span>
      </a>

      {/* INTRO WELCOME SCREEN */}
      {showWelcome && (
        <div
          className={`fixed inset-0 z-50 bg-neutral-950 flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${
            welcomeFading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="w-full text-center px-4 overflow-hidden">
            <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.45em] uppercase text-neutral-400 font-michroma animate-welcome-left">
              WELCOME TO
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl md:text-6xl font-black tracking-[0.25em] uppercase text-white font-michroma animate-welcome-right">
              LENON STUDIO
            </h2>
          </div>
        </div>
      )}

      {/* GLOBAL STYLES & ANIMATIONS */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Michroma&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

        html {
          scroll-behavior: smooth;
        }
        .font-michroma {
          font-family: "Michroma", sans-serif;
        }
        .font-jakarta {
          font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont,
            sans-serif;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: clamp(8px, 0.9vw, 12px);
          max-width: 100%;
        }

        .section-kicker::before {
          content: "";
          display: inline-block;
          width: 0;
          height: 0;
          border-top: clamp(4px, 0.42vw, 5px) solid transparent;
          border-bottom: clamp(4px, 0.42vw, 5px) solid transparent;
          border-left: clamp(8px, 0.78vw, 10px) solid currentColor;
          flex: 0 0 auto;
          opacity: 0.85;
        }

        @media (max-width: 380px) {
          .section-kicker {
            gap: 8px;
          }

          .section-kicker::before {
            border-top-width: 4px;
            border-bottom-width: 4px;
            border-left-width: 8px;
          }
        }

        @keyframes fullSlideFromLeft {
          0% {
            opacity: 0;
            transform: translate3d(-45vw, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes fullSlideFromRight {
          0% {
            opacity: 0;
            transform: translate3d(45vw, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-welcome-left {
          will-change: transform, opacity;
          animation: fullSlideFromLeft 1.1s cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        .animate-welcome-right {
          will-change: transform, opacity;
          animation: fullSlideFromRight 1.1s cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        @keyframes revealUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 22px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translate3d(0, 22px, 0);
          will-change: transform, opacity;
        }

        .animate-on-scroll.anim-played {
          animation: revealUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-init {
          opacity: 0;
          will-change: transform, opacity;
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 2.05s forwards;
        }

        @keyframes ticker {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-ticker {
          display: flex;
          width: max-content;
          animation: ticker 38s linear infinite;
          animation-play-state: running;
          will-change: transform;
        }

        /* Desktop: pause while the pointer is over the moving ticker. */
        @media (hover: hover) and (pointer: fine) {
          .animate-ticker:hover {
            animation-play-state: paused;
          }
        }

        /* Touch devices: pause while the user presses the ticker. */
        .animate-ticker:active {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ticker {
            animation-duration: 90s;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/85 backdrop-blur-lg border-b border-neutral-200/80">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <button
            onClick={() => {
              setActiveCaseStudy(null);
              scrollToTop();
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="font-michroma font-black tracking-wider text-base sm:text-lg uppercase text-neutral-950">
              LENON
            </span>
          </button>

          <div className="flex items-center gap-3">
            {activeCaseStudy && (
              <button
                onClick={closeCaseStudy}
                className="px-4 h-11 border border-neutral-300 bg-white hover:bg-neutral-950 hover:text-white hover:border-neutral-950 text-xs font-michroma font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft size={15} />
                <span className="hidden sm:inline">Back to Works</span>
              </button>
            )}

            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open Navigation"
              className="w-12 h-11 bg-neutral-950 text-white hover:bg-neutral-800 transition-all duration-300 cursor-pointer active:scale-95 flex flex-col items-end justify-center gap-[5px] px-3.5 group"
            >
              <span className="w-5 h-[2px] bg-white transition-all duration-300 group-hover:w-4" />
              <span className="w-3.5 h-[2px] bg-white transition-all duration-300 group-hover:w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* SIDE DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-neutral-950/50 backdrop-blur-xs transition-opacity"
          />
          <aside className="relative w-[88%] sm:w-[380px] bg-white h-full shadow-2xl border-l border-neutral-200 p-8 sm:p-10 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300 text-neutral-950">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                <span className="font-michroma font-black tracking-wider text-sm uppercase text-neutral-950">
                  LENON
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close Navigation"
                  className="p-2.5 bg-neutral-100 hover:bg-neutral-950 hover:text-white text-neutral-950 cursor-pointer transition active:scale-95"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="mt-8 space-y-1.5 font-michroma text-xs">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Portfolio",
                  "Process",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    onClick={() => {
                      setActiveCaseStudy(null);
                      setDrawerOpen(false);
                    }}
                    className="flex items-center justify-between py-4 px-4 font-bold text-neutral-900 hover:bg-neutral-950 hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group"
                  >
                    <span className="transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 will-change-transform">
                      {item}
                    </span>
                    <div className="w-5 h-5 relative flex items-center justify-center">
                      <ArrowUpRight
                        size={16}
                        className="absolute text-neutral-400 transform-gpu transition-[transform,opacity,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0 will-change-transform"
                      />
                      <ArrowRightIcon
                        size={16}
                        className="absolute text-white transform-gpu transition-[transform,opacity,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-5 translate-y-5 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 will-change-transform"
                      />
                    </div>
                  </a>
                ))}
              </nav>
            </div>
            <div className="pt-6 border-t border-neutral-200 space-y-4">
              <a
                href="#contact"
                onClick={() => {
                  setActiveCaseStudy(null);
                  setDrawerOpen(false);
                }}
                className="w-full bg-neutral-950 text-white py-4 text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wider font-michroma hover:bg-neutral-800 transition active:scale-95 group"
              >
                <span>Start a Project</span>
                <div className="w-4 h-4 relative flex items-center justify-center">
                  <ArrowUpRight
                    size={15}
                    className="absolute transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                  />
                  <ArrowRightIcon
                    size={15}
                    className="absolute transition-all duration-300 -translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </div>
              </a>
              <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
                <span>Jombang, East Java</span>
                <a
                  href="/login"
                  className="font-semibold text-neutral-950 hover:underline"
                >
                  Studio OS →
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* CASE STUDY VIEW */}
      {activeCaseStudy ? (
        <main className="pt-32 pb-24 bg-white text-neutral-950 animate-in fade-in duration-300">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
            <button
              onClick={closeCaseStudy}
              className="inline-flex items-center gap-2.5 text-xs font-bold font-michroma uppercase tracking-wider text-neutral-500 hover:text-neutral-950 transition mb-10 cursor-pointer group"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>Back to All Projects</span>
            </button>

            <div className="border-b border-neutral-200 pb-12 mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-bold px-3.5 py-1.5 bg-neutral-950 text-white uppercase tracking-wider font-michroma">
                  {activeCaseStudy.category}
                </span>
                <span className="text-xs font-bold px-3.5 py-1.5 border border-neutral-300 text-neutral-700 uppercase tracking-wider font-michroma">
                  COMPLETED • {activeCaseStudy.year}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-michroma tracking-tight text-neutral-950 leading-tight mb-6">
                {activeCaseStudy.title}
              </h1>

              <p className="text-base sm:text-xl text-neutral-600 max-w-3xl leading-relaxed">
                {activeCaseStudy.overview}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-neutral-200 font-michroma text-xs">
                <div>
                  <span className="text-neutral-400 block mb-1.5">CLIENT</span>
                  <span className="font-bold text-neutral-950">
                    {activeCaseStudy.client}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 block mb-1.5">YEAR</span>
                  <span className="font-bold text-neutral-950">
                    {activeCaseStudy.year}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 block mb-1.5">STATUS</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Delivered
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 block mb-1.5">PREVIEW</span>
                  <a
                    href={activeCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-neutral-950 underline inline-flex items-center gap-1 hover:opacity-70"
                  >
                    <span>Live Result</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 font-michroma mb-6">
                CLIENT IMPACT &amp; RESULTS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 border border-neutral-200">
                {activeCaseStudy.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className={`p-8 bg-neutral-50 ${
                      idx !== 2 ? "border-b sm:border-b-0 sm:border-r border-neutral-200" : ""
                    }`}
                  >
                    <span className="text-3xl sm:text-4xl font-black font-michroma text-neutral-950 block mb-2">
                      {metric.value}
                    </span>
                    <span className="text-xs font-michroma uppercase tracking-wider text-neutral-500">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 space-y-8">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 font-michroma">
                FINAL DELIVERABLE SHOWCASE
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeCaseStudy.previewScreens.map((screen, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-200 bg-neutral-950 text-white p-8 sm:p-10 flex flex-col justify-between min-h-[280px] group"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-8">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                      </div>
                      <span className="text-[10px] font-michroma text-neutral-500 uppercase">
                        {activeCaseStudy.client}
                      </span>
                    </div>

                    <div className="my-auto py-4">
                      <Layers size={28} className="text-neutral-500 mb-4" />
                      <h3 className="text-lg sm:text-xl font-black font-michroma text-white mb-2">
                        {screen.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {screen.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-neutral-200">
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h3 className="text-sm font-black font-michroma uppercase tracking-wider text-neutral-950 mb-3">
                    01. The Challenge
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {activeCaseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-black font-michroma uppercase tracking-wider text-neutral-950 mb-3">
                    02. Our Solution
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {activeCaseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-950 text-white p-8 sm:p-10">
                <h3 className="text-xs font-bold font-michroma uppercase tracking-[0.2em] text-neutral-400 mb-6">
                  COMPLETED DELIVERABLES
                </h3>
                <ul className="space-y-4">
                  {activeCaseStudy.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs sm:text-sm font-michroma text-white border-b border-neutral-800 pb-3.5 last:border-b-0 last:pb-0"
                    >
                      <CheckCircle2 size={16} className="text-white shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col gap-3">
                  <a
                    href="#contact"
                    onClick={closeCaseStudy}
                    className="w-full bg-white text-neutral-950 py-3.5 px-5 text-xs font-bold font-michroma uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-200 transition"
                  >
                    <span>Build Similar Project</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* LANDING PAGE UTAMA */
        <>
          {/* 1. HERO SECTION */}
          <section
            id="home"
            className="pt-36 sm:pt-44 pb-20 md:pt-48 md:pb-32 max-w-[1180px] mx-auto px-6 sm:px-10 flex flex-col items-center text-center bg-white text-neutral-950"
          >
            <div className="w-full max-w-[300px] sm:max-w-[520px] md:max-w-[740px] flex flex-col hero-init select-none">
              <div className="w-full flex justify-start">
                <h1 className="text-[clamp(2.1rem,6.0vw,5.2rem)] font-black tracking-[0.22em] uppercase font-michroma leading-none bg-gradient-to-r from-neutral-400 via-neutral-800 to-neutral-950 bg-clip-text text-transparent pb-1">
                  LENON
                </h1>
              </div>
              <div className="w-full flex justify-start pl-[33%] sm:pl-[34.5%] md:pl-[35.5%] mt-3 sm:mt-4 md:mt-5">
                <h2 className="text-[clamp(2.1rem,6.0vw,5.2rem)] font-black tracking-[0.22em] uppercase font-michroma leading-none bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-400 bg-clip-text text-transparent pb-1">
                  STUDIO
                </h2>
              </div>
            </div>

            <p
              className="mt-10 sm:mt-12 text-sm sm:text-base md:text-xl text-neutral-600 max-w-2xl leading-relaxed font-normal hero-init"
              style={{ animationDelay: "2.2s" }}
            >
              We craft deeply thoughtful brand identities, intuitive UI/UX
              interfaces, and modern web ecosystems—blending local creative
              roots in Jombang with global design standards.
            </p>

            <div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto hero-init"
              style={{ animationDelay: "2.35s" }}
            >
              <a
                href="#portfolio"
                className="w-full sm:w-auto bg-neutral-950 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all active:scale-95 duration-200 flex items-center justify-center gap-3 font-michroma shadow-lg shadow-neutral-950/15 group"
              >
                <span>Explore Works</span>
                <div className="w-4 h-4 relative flex items-center justify-center">
                  <ArrowUpRight
                    size={16}
                    className="absolute transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                  />
                  <ArrowRightIcon
                    size={16}
                    className="absolute transition-all duration-300 -translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </div>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto bg-white border border-neutral-300 text-neutral-950 px-8 py-4 text-xs font-bold uppercase tracking-wider hover:border-neutral-950 hover:bg-neutral-50 transition-all active:scale-95 duration-200 flex items-center justify-center font-michroma"
              >
                Let&apos;s Talk
              </a>
            </div>
          </section>

          {/* 2. ABOUT SECTION */}
          <section
            id="about"
            className="py-24 sm:py-32 md:py-36 bg-neutral-950 text-white w-full overflow-hidden"
          >
            <div className="max-w-[1180px] mx-auto px-6 sm:px-10 w-full space-y-12 sm:space-y-16">
              <div className="max-w-3xl text-left space-y-5 sm:space-y-6 animate-on-scroll">
                <p className="section-kicker text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 font-michroma pb-1">
                  ABOUT STUDIO
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-[42px] font-black tracking-tight text-white font-michroma leading-[1.2]">
                  Creativity Rooted in Strategy &amp; Precision.
                </h2>
                <p className="text-neutral-400 leading-relaxed text-sm sm:text-lg pt-2">
                  Lenon Studio is a digital creative powerhouse based in Jombang,
                  East Java. Established in 2026, we focus on delivering
                  world-class brand identities, modern web engineering, and
                  memorable digital experiences built to scale globally.
                </p>
              </div>

              <div className="w-full space-y-1 text-left animate-on-scroll delay-100">
                <div className="flex items-center justify-between py-4 sm:py-5 border-b border-neutral-800/85">
                  <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider font-michroma">
                    Established
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white font-michroma">
                    2026
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 sm:py-5 border-b border-neutral-800/85">
                  <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider font-michroma">
                    Headquarters
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white font-michroma">
                    Jombang, Indonesia
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 sm:py-5 border-b border-neutral-800/85">
                  <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider font-michroma">
                    Discipline
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white font-michroma">
                    Brand &amp; Web Systems
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. ANIMASI BERJALAN MURNI */}
          <section className="py-8 bg-neutral-950 w-full overflow-hidden border-t border-neutral-800/60">
            <div className="w-full border-t border-b border-neutral-200 py-5 bg-white overflow-hidden flex whitespace-nowrap select-none shadow-md">
              <div className="animate-ticker flex items-center gap-10 sm:gap-14 text-neutral-950 font-michroma text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">
                {[
                  "STRATEGIC DIGITAL DESIGN",
                  "•",
                  "MODERN WEB ENGINEERING",
                  "•",
                  "GLOBAL STANDARDS",
                  "•",
                  "LOCAL ROOTS IN JOMBANG",
                  "•",
                  "SEAMLESS USER EXPERIENCE",
                  "•",
                  "SCALABLE ARCHITECTURE",
                  "•",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-10 sm:gap-14 text-neutral-950"
                  >
                    {item}
                  </span>
                ))}
                {[
                  "STRATEGIC DIGITAL DESIGN",
                  "•",
                  "MODERN WEB ENGINEERING",
                  "•",
                  "GLOBAL STANDARDS",
                  "•",
                  "LOCAL ROOTS IN JOMBANG",
                  "•",
                  "SEAMLESS USER EXPERIENCE",
                  "•",
                  "SCALABLE ARCHITECTURE",
                  "•",
                ].map((item, idx) => (
                  <span
                    key={`dup-${idx}`}
                    className="flex items-center gap-10 sm:gap-14 text-neutral-950"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 4. CORE EXPERTISE / SERVICES */}
          <section
            id="services"
            className="py-24 sm:py-32 md:py-36 bg-neutral-950 text-white w-full border-t border-neutral-800/60"
          >
            <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
              <div className="mb-12 sm:mb-16 animate-on-scroll">
                <p className="section-kicker text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold mb-4 font-michroma">
                  WHAT WE DO
                </p>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-michroma">
                    CORE EXPERTISE
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                    Specialized digital services engineered to transform your
                    brand presence, web architecture, and user conversion rates.
                  </p>
                </div>
              </div>

              <div className="border-t border-b border-neutral-800 bg-neutral-950 animate-on-scroll delay-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      num: "(01)",
                      desc: "Comprehensive UI/UX research and intuitive wireframing for web & mobile applications.",
                    },
                    {
                      num: "(02)",
                      desc: "High-performance frontend engineering using modern frameworks and clean, scalable code.",
                    },
                    {
                      num: "(03)",
                      desc: "Scalable design systems and component libraries to unify your digital product brand.",
                    },
                    {
                      num: "(04)",
                      desc: "Strategic brand identity development, typography curation, and visual asset guidelines.",
                    },
                    {
                      num: "(05)",
                      desc: "Advanced performance optimization, SEO structuring, and lightning-fast speed delivery.",
                    },
                    {
                      num: "(06)",
                      desc: "End-to-end digital consultation, maintenance, and continuous product iteration support.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-6 sm:p-8 lg:p-10 border-neutral-800 flex flex-col justify-between hover:bg-neutral-900/50 transition-all duration-300 group
                        border-b
                        ${idx === 5 ? "border-b-0" : ""}
                        ${idx % 2 === 0 ? "sm:border-r" : "sm:border-r-0"}
                        ${idx < 4 ? "sm:border-b" : "sm:border-b-0"}
                        ${idx % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}
                        ${idx < 3 ? "lg:border-b" : "lg:border-b-0"}
                      `}
                    >
                      <div>
                        <span className="text-xs font-bold text-neutral-500 font-michroma block mb-6">
                          {item.num}
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed group-hover:text-white transition-colors">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. FEATURED WORKS / PORTFOLIO */}
          <section
            id="portfolio"
            className="py-24 sm:py-32 md:py-36 bg-white text-neutral-950 w-full"
          >
            <div className="max-w-[1180px] mx-auto px-6 sm:px-10 w-full">
              <div className="mb-12 sm:mb-16 animate-on-scroll">
                <p className="section-kicker text-xs uppercase tracking-[0.25em] text-neutral-500 font-bold mb-4 font-michroma">
                  SELECTED WORK
                </p>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 font-michroma mb-4">
                  PORTFOLIO
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base max-w-md leading-relaxed">
                  Click any project below to inspect the completed client
                  deliverables, design showcase, and measurable results.
                </p>
              </div>

              <div className="border-t border-neutral-200 animate-on-scroll delay-100">
                {portfolioItems.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => openCaseStudy(project)}
                    className="p-6 sm:p-10 border-b border-neutral-200 bg-white hover:bg-neutral-950 text-neutral-950 hover:text-white transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-4 mb-8 sm:mb-10">
                      <span className="text-xs font-bold font-michroma text-neutral-400 group-hover:text-neutral-400 transition-colors">
                        {project.year}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] sm:text-[11px] font-bold px-3 py-1.5 uppercase tracking-wider font-michroma bg-neutral-100 border border-neutral-200 text-neutral-800 group-hover:bg-neutral-800 group-hover:border-neutral-700 group-hover:text-neutral-200 transition-colors">
                          {project.category}
                        </span>
                        <div className="w-10 h-10 sm:w-11 sm:h-11 border border-neutral-300 text-neutral-950 group-hover:bg-white group-hover:text-neutral-950 group-hover:border-white flex items-center justify-center shrink-0 transition-all duration-300 relative overflow-hidden">
                          <ArrowUpRight
                            size={18}
                            className="absolute transition-all duration-300 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0"
                          />
                          <ArrowRightIcon
                            size={18}
                            className="absolute transition-all duration-300 -translate-x-6 translate-y-6 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="transition-transform duration-300 ease-out group-hover:translate-x-2 sm:group-hover:translate-x-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-michroma mb-2 sm:mb-3 tracking-tight text-neutral-950 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. WORKFLOW SECTION */}
          <section
            id="process"
            className="py-24 sm:py-32 md:py-36 bg-neutral-950 text-white w-full border-t border-neutral-800/60"
          >
            <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
              <div className="mb-12 sm:mb-16 animate-on-scroll">
                <p className="section-kicker text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold mb-4 font-michroma">
                  WORKFLOW
                </p>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-michroma">
                    How We Collaborate
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                    A streamlined, transparent partnership framework designed to
                    take your digital product from concept to market success.
                  </p>
                </div>
              </div>

              <div className="border-t border-b border-neutral-800 animate-on-scroll delay-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      step: "01",
                      title: "Discovery",
                      desc: "Deep dive into your brand vision, goals, and target audience requirements.",
                    },
                    {
                      step: "02",
                      title: "Strategy",
                      desc: "Structuring concepts, wireframes, and creative visual directions.",
                    },
                    {
                      step: "03",
                      title: "Execution",
                      desc: "Crafting precise design systems and writing clean, scalable code.",
                    },
                    {
                      step: "04",
                      title: "Launch",
                      desc: "Final testing, deployment handoff, and ongoing digital support.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-8 sm:p-10 border-neutral-800 bg-neutral-950 hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between group ${
                        idx !== 3 ? "lg:border-r" : ""
                      } ${idx > 0 ? "border-t sm:border-t-0" : ""}`}
                    >
                      <div>
                        <span className="text-xs font-bold text-neutral-500 font-michroma block mb-8">
                          STEP {item.step}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-3 font-michroma">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 7. STUDIO STATS SECTION */}
          <section className="py-20 sm:py-28 bg-neutral-950 text-white w-full border-t border-neutral-800/80">
            <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
              <div className="border border-neutral-800 bg-neutral-900/30 animate-on-scroll">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      value: "2026",
                      label: "Studio founded year",
                    },
                    {
                      value: "04+",
                      label: "Core digital systems",
                    },
                    {
                      value: "06",
                      label: "Specialized disciplines",
                    },
                    {
                      value: "Global",
                      label: "Client standard delivery",
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className={`p-8 sm:p-10 border-neutral-800 flex flex-col justify-between transition-colors hover:bg-neutral-900/80 ${
                        idx !== 3 ? "lg:border-r" : ""
                      } ${idx > 0 ? "border-t sm:border-t-0 lg:border-t-0" : ""}`}
                    >
                      <span className="text-3xl sm:text-4xl font-black font-michroma text-white tracking-wider mb-4 block">
                        {stat.value}
                      </span>
                      <span className="text-xs text-neutral-400 font-michroma uppercase tracking-widest leading-relaxed">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 8. CONTACT SECTION */}
          <section
            id="contact"
            className="py-28 sm:py-36 md:py-40 bg-white text-neutral-950 w-full border-t border-neutral-200"
          >
            <div className="max-w-[1180px] mx-auto px-6 sm:px-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-on-scroll">
                <div className="lg:col-span-6 space-y-6">
                  <span className="section-kicker text-xs sm:text-sm font-bold tracking-[0.25em] text-neutral-500 uppercase font-michroma block">
                    CONTACT
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 font-michroma leading-none">
                    Let&apos;s Build Together.
                  </h2>
                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md">
                    Have a project in mind? Feel free to reach out via email or
                    other channels.
                  </p>
                </div>

                <div className="lg:col-span-6 space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 items-center">
                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <Mail
                          size={22}
                          className="text-neutral-950 mt-1 shrink-0"
                        />
                        <div>
                          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-michroma block mb-1.5">
                            EMAIL
                          </span>
                          <a
                            href="mailto:hello@lenonstudio.com"
                            className="text-sm sm:text-base font-bold text-neutral-950 hover:underline"
                          >
                            hello@lenonstudio.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone
                          size={22}
                          className="text-neutral-950 mt-1 shrink-0"
                        />
                        <div>
                          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-michroma block mb-1.5">
                            TELEPHONE
                          </span>
                          <span className="text-sm sm:text-base font-bold text-neutral-950 block">
                            +62 812-3456-7890
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin
                          size={22}
                          className="text-neutral-950 mt-1 shrink-0"
                        />
                        <div>
                          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-michroma block mb-1.5">
                            ADDRESS
                          </span>
                          <span className="text-sm sm:text-base font-bold text-neutral-950 block leading-relaxed">
                            Jl. Melati Dalam No. 45, Jombang, East Java
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:justify-end">
                      <a
                        href="mailto:hello@lenonstudio.com"
                        className="bg-neutral-950 hover:bg-neutral-800 text-white px-6 py-4 text-xs font-bold uppercase tracking-wider font-michroma transition-all duration-300 flex items-center gap-3 shadow-lg active:scale-95 group cursor-pointer relative overflow-hidden"
                      >
                        <span>Send Message</span>
                        <div className="w-4 h-4 relative flex items-center justify-center">
                          <ArrowUpRight
                            size={15}
                            className="absolute transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                          />
                          <ArrowRightIcon
                            size={15}
                            className="absolute transition-all duration-300 -translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-white border-t border-neutral-200 py-10 text-neutral-950 w-full">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left w-full">
          <div>
            <div className="inline-flex items-center">
              <span className="font-michroma font-black tracking-wider text-sm uppercase text-neutral-950">
                LENON
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-2.5">
              © 2026 Lenon Studio Jombang. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6 text-xs font-semibold text-neutral-600 font-michroma">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-950 transition"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-950 transition"
              >
                LinkedIn
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 w-11 h-11 border border-neutral-300 text-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center bg-white group"
            >
              <ArrowUp
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}