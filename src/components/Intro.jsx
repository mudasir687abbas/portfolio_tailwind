import React, { useState, useEffect } from 'react';
import img from '../assets/mudasir_photo.jpg';
const roles = ['MERN Stack Developer', 'React.js Specialist', 'Node.js Engineer', 'JavaScript Engineer', 'Core Java with DSA'];

export default function Intro() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => { setText(p => p + current[charIdx]); setCharIdx(c => c + 1); }, 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setText(p => p.slice(0, -1)); setCharIdx(c => c - 1); }, 38);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(r => (r + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, roleIdx]);

  return (
    <section id="intro" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background orbs */}
      <div className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-80px] left-[-60px] w-[420px] h-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-slow" />
              <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">Available for work</span>
            </div>

            {/* Name */}
            <p className="font-dm text-slate-400 text-lg mb-2 font-light">Hey, I'm 👋</p>
            <h1
              className="hero-title font-syne font-black leading-none mb-5"
              style={{ fontSize: '76px', letterSpacing: '-3px', color: '#e2e8f0' }}
            >
              Mudasir<br />
              <span className="grad-text">Abbas</span>
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center gap-2 mb-6 min-h-[38px]">
              <span className="font-mono text-xs text-slate-500 tracking-widest">{'>'}</span>
              <span className="font-syne font-bold text-xl grad-text">{text}</span>
              <span className="w-[3px] h-6 bg-cyan-400 rounded-sm animate-blink" />
            </div>

            <p className="font-dm text-slate-400 text-base leading-relaxed max-w-[480px] mb-10 font-light">
              A passionate MERN Stack Developer from <span className="text-white font-medium">Karachi, Pakistan</span>.
              I build fast, modern web apps with clean code, polished UIs, and scalable full stack apps.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-dm font-bold text-sm px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-black hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Hire Me →
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-dm font-medium text-sm px-7 py-3 rounded-full border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-white transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              {[
                { num: '2+', label: 'Year Exp' },
                { num: '6+', label: 'Projects' },
                { num: '1', label: 'Internships' },
              ].map(({ num, label }) => (
                <div key={label} className="relative pr-8 last:pr-0 last:after:hidden after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-8 after:bg-white/10">
                  <div className="font-syne font-black text-3xl grad-text leading-none">{num}</div>
                  <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Decorative Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[380px] h-[380px]">
              {/* Spinning rings */}
              <div className="absolute inset-0 rounded-full border border-white/[0.05] animate-spin-slower" />
              <div className="absolute inset-8 rounded-full border border-cyan-400/10 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-violet-500/10 animate-spin-slower" />

              {/* Center block */}
              <div className="w-55 h-55 overflow-hidden absolute inset-[80px] rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.07] flex flex-col items-center justify-center animate-float backdrop-blur-sm">
                <img className='w-full h-full object-cover object-top hover:scale-120  transition duration-1500' src={img} alt="myphoto"/>
              </div>

              {/* Floating chips */}
              {[
                { label: '⚡ React', top: '5%', left: '-8%', color: 'cyan' },
                { label: '🛢 MongoDB', top: '5%', right: '-8%', color: 'violet' },
                { label: '🟢 Node.js', bottom: '5%', left: '-8%', color: 'violet' },
                { label: '🔥 Express', bottom: '5%', right: '-8%', color: 'amber' },
              ].map((chip, i) => (
                <div
                  key={i}
                  className="absolute font-mono text-[10px] px-3 py-1.5 rounded-full border backdrop-blur-sm animate-float"
                  style={{
                    top: chip.top, bottom: chip.bottom, left: chip.left, right: chip.right,
                    animationDelay: `${i * 0.7}s`,
                    background: 'rgba(7,11,15,0.85)',
                    borderColor: chip.color === 'cyan' ? 'rgba(34,211,238,0.2)' : chip.color === 'violet' ? 'rgba(139,92,246,0.2)' : 'rgba(245,158,11,0.2)',
                    color: chip.color === 'cyan' ? '#22d3ee' : chip.color === 'violet' ? '#8b5cf6' : '#f59e0b',
                  }}
                >
                  {chip.label}
                </div>
              ))}

              {/* Glow dot */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400 animate-pulse-slow glow-cyan" />
              <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-violet-500 animate-pulse-slow glow-violet" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-600" />
        <span className="font-mono text-[9px] text-slate-600 tracking-[3px] uppercase">scroll</span>
      </div>
    </section>
  );
}
