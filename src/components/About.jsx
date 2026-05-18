import React from 'react';
import useInView from '../hooks/useInView';
import myresume from '../assets/mudasirg_resume.pdf';
const facts = [
  { icon: '🎓', label: 'Education', value: 'BS Information Technology(continue)' },
  { icon: '📍', label: 'Based in', value: 'Karachi, Pakistan' },
  { icon: '🗣️', label: 'Languages', value: 'Urdu & English' },
  { icon: '🎯', label: 'Focus', value: 'MERN Stack' },
  { icon: '🚀', label: 'Status', value: 'Open to Work' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} className="py-28 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Visual Card */}
          <div
            className="relative"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.1s' }}
          >
            {/* Card stack */}
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-3xl rotate-6 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 to-amber-500/10 rounded-3xl -rotate-3" />
              <div className="relative bg-[#0d1219] border border-white/[0.07] rounded-3xl p-8 z-10">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-syne font-black text-3xl text-black mb-6">
                  MA
                </div>
                <h3 className="font-syne font-bold text-2xl text-white mb-1">Mudasir Abbas</h3>
                <p className="font-mono text-xs text-cyan-400 tracking-widest mb-5">MERN Stack Developer</p>
                <p className="font-dm text-sm text-slate-400 leading-relaxed">
                  Building digital experiences with clean code and modern aesthetics. Passionate about crafting
                  web apps that are both functional and beautiful.
                </p>

                {/* Mini badges */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {['ReactJS','Tailwindcss', 'NodeJS','MySQL', 'MongoDB', 'Express'].map(t => (
                    <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-400">{t}</span>
                  ))}
                </div>

                {/* Bottom availability bar */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                  <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Floating code snippet */}
            <div className="absolute -bottom-11 -right-4 bg-[#0d1219] border border-white/[0.07] rounded-xl p-3 font-mono text-[10px] animate-float hidden sm:block">
              <span className="text-violet-400">const</span>{' '}
              <span className="text-cyan-300">dev</span>{' '}
              <span className="text-white/50">=</span>{' '}
              <span className="text-amber-400">'mudasir-abbass'</span>
            </div>
          </div>

          {/* Right - Text + Facts */}
          <div
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.25s' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">About Me</span>
            </div>
            <h2 className="font-syne font-black text-4xl md:text-5xl text-white leading-tight mb-6">
              Crafting Digital<br /><span className="grad-text">Experiences</span>
            </h2>

            <p className="font-dm text-slate-400 text-base leading-relaxed mb-4 font-light">
              I'm a MERN Stack Developer from Karachi with a deep love for building clean, performant web applications.
              I handle everything from sleek React frontends to robust Node.js backends.
            </p>
            <p className="font-dm text-slate-400 text-base leading-relaxed mb-8 font-light">
              My focus is writing maintainable code, implementing smooth UI interactions, and delivering projects that
              actually work well for real users. I'm always pushing my skills forward and exploring better approaches.
            </p>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {facts.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 card-hover group"
                >
                  <span className="text-xl">{icon}</span>
                  <div>
                    <div className="font-mono text-[9px] text-slate-600 tracking-widest uppercase">{label}</div>
                    <div className="font-dm text-sm text-slate-300 font-medium mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-dm font-bold text-sm px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-black hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Let's Talk
              </button>
              <a
                href={myresume}
                download="mudasir_abbas_mern_stack.pdf"
                className="font-dm font-medium text-sm px-6 py-2.5 rounded-full border border-white/10 text-slate-300 hover:border-white/20 hover:text-white transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
