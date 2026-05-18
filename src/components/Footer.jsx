import React from 'react';

const links = ['Intro', 'About', 'Skills', 'Projects', 'Services', 'Internships', 'Contact'];
const socials = [
  { label: 'GitHub', href: 'https://www.github.com/mudasir687abbas', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mudasir687abbas', icon: '💼' },
  { label: 'Email', href: 'mailto:mudasir687abbas@gmail.com', icon: '📧' },
];

export default function Footer() {
  const goto = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.05] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-syne font-black text-2xl grad-text mb-3">Mudasir Abbas</div>
            <p className="font-dm text-sm text-slate-500 leading-relaxed font-light max-w-xs">
              MERN Stack Developer building clean, modern web experiences from Karachi, Pakistan.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">Open to Work</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="font-mono text-[10px] text-slate-600 tracking-widest uppercase mb-5">Navigation</div>
            <ul className="space-y-2.5">
              {links.map(l => (
                <li key={l}>
                  <button
                    onClick={() => goto(l)}
                    className="font-dm text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[10px] text-slate-600 tracking-widest uppercase mb-5">Get In Touch</div>
            <div className="space-y-3">
              <a href="mailto:mudasir.dev@gmail.com" className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-sm group-hover:border-cyan-500/30 transition-colors">📧</span>
                <span className="font-dm text-sm">mudasir687abbas@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-500">
                <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-sm">📍</span>
                <span className="font-dm text-sm">Karachi, Pakistan</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5 mt-5">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:-translate-y-1 transition-all duration-200 text-sm"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Mudasir Abbas. All rights reserved.
          </p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative bottom-0 right-0 mr-10 w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 hover:-translate-y-1 transition-all duration-200 text-sm"
          >
            ↑
          </button>
        </div>
          
      </div>
    </footer>
  );
}
