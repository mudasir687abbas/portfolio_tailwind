import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const projects = [
  {
    emoji: '🌐', title: 'Portfolio', type: 'Frontend', color: '#8b5cf6',
    desc: 'Personal portfolio with glassmorphism, animated skill bars, scroll animations, and full responsiveness.',
    tags: ['React','TailwindCss','Framer Motion'],
    sourceCode:'https://github.com/mudasir687abbas/portfolio_tailwind.git',
    liveDemo:'https://portfolio-tailwind-dun.vercel.app/'
  },
  {
    emoji: '📊', title: 'To Do List', type: 'Frontend', color: '#f59e0b',
    desc: 'featrued with crud operations and their action confirmation with animations.',
    tags: ['ReactJs','CSS(animations)',,'React-Icons','LocalStorge'],
    sourceCode:'https://github.com/mudasir687abbas/todolist.git',
    liveDemo:'https://todolist-delta-indol.vercel.app'
  },
  {
    emoji: '📊', title: 'Crud App', type: 'Full Stack', color: '#f59e0b',
    desc: 'featrued with crud operations using mongoDB atlas.',
    tags: ['ReactJs','CSS','NodeJs','ExpressJs','MongoDB Atlas'],
    sourceCode:'#',
    liveDemo:'#'
  },
  {
      emoji: '🔐', title: 'Auth Login Logut Portal', type: 'Full Stack', color: '#22d3ee',
      desc: 'Developed with Full-stack auth portal system and featured with simple usser dashboard, JWT, bcrypt, protected routes.',
      tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Express'],
      sourceCode:'https://github.com/mudasir687abbas/simple_signin_signup_portal.git',
      liveDemo:'https://simple-signin-signup-portal-fronten.vercel.app/'
    },
  {
    emoji: '✅', title:'Tic Tac Toe Game', type: 'Frontend', color: '#10b981',
    desc: 'Featured with landing page with progress, tokken customization, winner and drawn detection, reset game with animations',
    tags: ['ReactJs','CSS(animations)'],
    sourceCode:'https://github.com/mudasir687abbas/mtictactoe_game.git',
    liveDemo:'https://github.com/mudasir687abbas/mtictactoe_game.git'
  },
  
];

const FILTERS = ['All', 'Full Stack', 'Frontend'];

export default function Projects() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState('All');

  const shown = active === 'All' ? projects : projects.filter(p => p.type === active);

  return (
    <section id="projects" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-60 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Portfolio</span>
            </div>
            <h2 className="font-syne font-black text-4xl md:text-5xl text-white">
              My <span className="grad-text">Projects</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-full p-1.5 self-start sm:self-auto">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-dm text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  active === f ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((p, i) => (
            <div
              key={p.title}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 card-hover overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease ${i * 80}ms`,
              }}
            >
              {/* Top color line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: p.color }}
              />

              {/* Card top row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${p.color}12` }}
                >
                  {p.emoji}
                </div>
                <div className="flex gap-2">    
                  <a href={p.liveDemo} target='_blank' className='text-white hidden md:flex items-center gap-2 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 font-dm font-bold text-sm px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300'>Live Demo</a>
                <a href={p.sourceCode}target='_blank'className='text-white hidden md:flex items-center gap-2 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 font-dm font-bold text-sm px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300'>Source Code</a>
                </div>
        
              </div>

              {/* Type */}
              <div className="font-mono text-[10px] tracking-widest uppercase mb-1.5" style={{ color: p.color }}>{p.type}</div>
              <h3 className="font-syne font-bold text-lg text-white mb-2">{p.title}</h3>
              <p className="font-dm text-sm text-slate-400 leading-relaxed mb-4 font-light">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
