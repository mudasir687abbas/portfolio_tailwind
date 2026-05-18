import React, { useState, useEffect } from 'react';
import myresume from '../assets/mudasirg_resume.pdf';
const links = ['Intro', 'About', 'Skills', 'Projects', 'Services', 'Internships', 'Contact'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goto = (id) => {
    setOpen(false);
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#070b0f]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-syne font-black text-xl tracking-tight group"
          >
            <span className="grad-text">Mudasir Abbas</span>
            <span className="text-white/20 group-hover:text-white/40 transition-colors">.</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-xl px-2 py-1.5">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => goto(l)}
                className={`font-dm text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${
                  active === l
                    ? 'bg-white/10 text-cyan-400'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {l}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={myresume}
              download="mudasir_abbas_mern_stack.pdf"
              onClick={() => goto('Contact')}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-600 text-black font-dm font-bold text-sm px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-[5px] p-2"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header> 

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#070b0f]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-4 transition-all duration-400 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l, i) => (
          <button
            key={l}
            onClick={() => goto(l)}
            className="font-syne font-bold text-3xl text-white hover:text-cyan-400 transition-colors"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
