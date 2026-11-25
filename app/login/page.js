"use client";

import { useState } from "react";
import { Michroma } from "next/font/google";
import { 
  Menu, X, ArrowRight, CheckCircle2, Mail, Phone, MapPin, 
  Sparkles, Layers, Palette, Monitor, Send, ArrowUpRight 
} from "lucide-react";

const michroma = Michroma({ 
  subsets: ["latin"], 
  weight: ["400"],
  display: "swap",
});

export default function LenonStudioLanding() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Portofolio dibuat lebih selektif (sedikit gambar, fokus pada tipografi & teks)
  const portfolioItems = [
    { id: 1, title: "FinTech Nusantara Rebranding", category: "Branding", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80" },
    { id: 2, title: "SaaS Enterprise Dashboard Web", category: "Web", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" },
  ];

  const filteredProjects = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className={`${michroma.className} min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-black selection:text-white antialiased overflow-x-hidden text-xs md:text-sm`}>
      
      {/* 1. NAVBAR MINIMALIS */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#home" className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase hover:opacity-75 transition-opacity">
            LENON <span className="text-slate-400 font-normal">STUDIO</span>
          </a>

          <button 
            onClick={() => setDrawerOpen(true)} 
            className="p-3 rounded-2xl bg-slate-100 hover:bg-black hover:text-white text-slate-900 transition-all duration-300 cursor-pointer shadow-2xs group"
            aria-label="Open Menu"
          >
            <Menu size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </header>

      {/* SIDE-DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            onClick={() => setDrawerOpen(false)} 
            className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-300"
          />

          <aside className="relative w-[85%] sm:w-[400px] md:w-[460px] bg-white h-full shadow-2xl border-l border-slate-200/80 p-7 md:p-10 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-end pb-4">
                <button 
                  onClick={() => setDrawerOpen(false)} 
                  className="p-3 rounded-2xl bg-slate-100 hover:bg-black hover:text-white text-slate-800 transition-all duration-200 cursor-pointer group"
                  aria-label="Close Menu"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              <nav className="mt-4 space-y-2">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Portfolio", href: "#portfolio" },
                  { label: "Process", href: "#process" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    onClick={() => setDrawerOpen(false)}
                    className="group flex items-center justify-between py-3.5 px-4 rounded-2xl text-sm md:text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-black transition-all"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item.label}</span>
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-4">
              <a 
                href="#contact" 
                onClick={() => setDrawerOpen(false)}
                className="w-full bg-black text-white py-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition shadow-md tracking-wider uppercase"
              >
                Get in Touch <ArrowRight size={14} />
              </a>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Jombang, Indonesia</span>
                <a href="/login" className="font-bold text-slate-700 hover:text-black transition-colors underline">
                  Studio OS →
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section id="home" className="min-h-[100svh] pt-32 pb-16 max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-[0.05em] uppercase leading-[1.2] text-slate-900 max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-700">
          LENON STUDIO
        </h1>

        <p className="mt-8 text-[clamp(0.85rem,1.1vw,1.1rem)] text-slate-600 max-w-2xl leading-[1.8] tracking-wide animate-in fade-in slide-in-from-bottom-7 duration-1000">
          We craft deeply thoughtful brand identities, intuitive UI/UX interfaces, and modern web ecosystems—blending local creative roots in Jombang with global design standards.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-9 duration-1000">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto min-h-[48px] bg-black text-white px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md flex items-center justify-center gap-2"
          >
            Explore Works <ArrowRight size={16} />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto min-h-[48px] bg-white border border-slate-300 text-slate-900 px-8 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 hover:border-black transition-all duration-200 shadow-2xs flex items-center justify-center"
          >
            Let's Talk
          </a>
        </div>
      </section>

      {/* 3. ABOUT SECTION (FOUNDED 2026) */}
      <section id="about" className="py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">ABOUT US</p>
            <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-tight text-slate-900 leading-[1.3]">
              Creativity Rooted in Strategy & Precision.
            </h2>
            <p className="mt-6 text-[clamp(0.85rem,1vw,1rem)] text-slate-600 leading-[1.8]">
              Established in 2026 in Jombang, East Java, Lenon Studio is a freshly launched creative powerhouse built by passionate designers and digital engineers. We blend bold local aesthetics with world-class digital execution to help forward-thinking brands stand out.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900">2026</h4>
                <p className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-wider">Founded Year</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900">Jombang</h4>
                <p className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-wider">Studio Base</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Philosophy</span>
              <p className="text-sm leading-relaxed text-slate-700">
                "Design is not just what it looks like and feels like. Design is how it works through clean code and meaningful user experiences."
              </p>
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-900">
                <span>LENON STUDIO CORE</span>
                <span>EST. 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">OUR EXPERTISE</p>
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-tight text-slate-900">Professional Services</h2>
          <p className="mt-3 text-slate-600 text-xs md:text-sm">End-to-end solutions to strengthen your brand presence in the digital era.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Palette, title: "Brand Identity", desc: "Building iconic logos, visual guidelines, and memorable brand characters with distinct positioning." },
            { icon: Monitor, title: "UI/UX Design", desc: "Designing intuitive, aesthetic, and user-centric web and mobile interfaces focused on engagement." },
            { icon: Layers, title: "Web Development", desc: "Developing fast, responsive, and SEO-friendly modern websites using cutting-edge technology stacks." },
            { icon: Sparkles, title: "Creative Direction", desc: "Art direction, visual content strategy, and creative marketing campaign production for enterprises." },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:border-black transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION (MINIMAL GAMBAR, FOKUS TEKS) */}
      <section id="portfolio" className="py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">FEATURED WORKS</p>
              <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-tight text-slate-900">Selected Portfolio</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Branding", "Web"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeFilter === cat ? "bg-black text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-50 aspect-video shadow-xs cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">{project.category}</span>
                  <h3 className="text-sm md:text-base font-bold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section id="process" className="py-24 max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">HOW WE WORK</p>
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-tight text-slate-900">4 Simple Steps</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Brief & Discovery", desc: "Understanding your vision, business goals, and requirements." },
            { step: "02", title: "Research & Strategy", desc: "Analyzing market competition and targeted creative concepts." },
            { step: "03", title: "Design Execution", desc: "Developing creative solutions through rigorous iterations." },
            { step: "04", title: "Delivery & Launch", desc: "Handing over complete digital assets ready for deployment." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <span className="text-2xl font-bold text-slate-300 mb-4 block">{item.step}</span>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-[clamp(1.4rem,3vw,2.4rem)] font-bold tracking-tight">Ready to Start Your Project?</h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">Let's turn your brilliant ideas into world-class digital assets.</p>
          </div>
          <a 
            href="#contact" 
            className="min-h-[48px] bg-white text-black px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-all shadow-lg shrink-0 flex items-center justify-center"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-24 max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">GET IN TOUCH</p>
            <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-tight text-slate-900">Contact Us</h2>
            <p className="mt-4 text-slate-600 text-xs md:text-sm leading-relaxed">
              Have questions or want to collaborate? Send us a message via the form or reach out directly through our studio channels.
            </p>

            <div className="mt-8 space-y-4 text-xs md:text-sm">
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-black shrink-0"><Mail size={18} /></div>
                hello@lenonstudio.com
              </div>
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-black shrink-0"><Phone size={18} /></div>
                +62 812-3456-7890 (WhatsApp)
              </div>
              <div className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-black shrink-0"><MapPin size={18} /></div>
                Jombang, East Java, Indonesia
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-3">
                <CheckCircle2 size={48} className="mx-auto text-emerald-600" />
                <h3 className="text-base md:text-lg font-bold text-slate-900">Message Sent!</h3>
                <p className="text-xs text-slate-500">Thank you for reaching out. Our Jombang team will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Full Name</label>
                  <input type="text" required placeholder="Enter your name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs md:text-sm focus:bg-white focus:outline-none focus:border-black transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Active Email</label>
                  <input type="email" required placeholder="name@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs md:text-sm focus:bg-white focus:outline-none focus:border-black transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Service Type</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs md:text-sm focus:bg-white focus:outline-none focus:border-black transition">
                    <option>Brand Identity</option>
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                    <option>Creative Direction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Message Details</label>
                  <textarea rows={4} required placeholder="Tell us about your project..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs md:text-sm focus:bg-white focus:outline-none focus:border-black transition"></textarea>
                </div>
                <button type="submit" className="w-full min-h-[48px] bg-black text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer">
                  <Send size={14} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-white border-t border-slate-200/80 py-12">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase">LENON STUDIO</h3>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">© 2026 Lenon Studio Jombang. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600 uppercase tracking-wider">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Dribbble</a>
          </div>
        </div>
      </footer>

    </div>
  );
}