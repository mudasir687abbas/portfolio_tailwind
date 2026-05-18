import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const internships = [
 {
    role: 'Web Development Intern',
    company: 'Digital Empowerment Network',
    duration: '15-Jul-2025 – 02-Sept-2025',
    type: 'Remote',
    color: '#f59e0b',
    desc: 'Developed 5 projects hands-on projects, ensuring responsiveness,user-friendly interactive interfaces ',
    achievements: [
      'learned frontend skills',
      'API integration',
      'Implemented simple animations & transitions',
      'Ensured responsive, user-friendly and interactive interfaces',
    ],
    stack: ['HTML', 'CSS(flex,Grid)','Media Queries', 'JavaScript'],
  },
];

export default function Internships() {
  const [ref, inView] = useInView();
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="internships" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-amber-400" />
            <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">Experience</span>
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white">
            My <span className="grad-text">Internships</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {internships.map((item, i) => (
            <div
              key={item.company}
              className="group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease ${i * 120}ms`,
              }}
            >
              <div
                className="relative bg-white/[0.03] border rounded-2xl p-6 cursor-pointer transition-all duration-300"
                style={{
                  borderColor: expanded === i ? `${item.color}30` : 'rgba(255,255,255,0.06)',
                  boxShadow: expanded === i ? `0 0 40px ${item.color}10` : 'none',
                }}
                onClick={() => setExpanded(expanded === i ? -1 : i)}
              >
                {/* Color accent top */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full transition-opacity duration-300"
                  style={{ background: item.color, opacity: expanded === i ? 1 : 0 }}
                />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] px-2.5 py-1 rounded-full mb-3 border"
                      style={{ color: item.color, borderColor: `${item.color}25`, background: `${item.color}10` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                      {item.type}
                    </div>
                    <h3 className="font-syne font-bold text-base text-white leading-tight">{item.role}</h3>
                    <p className="font-mono text-xs mt-1" style={{ color: item.color }}>{item.company}</p>
                  </div>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/[0.05] flex items-center justify-center text-slate-400 text-sm transition-transform duration-300" style={{ transform: expanded === i ? 'rotate(180deg)' : 'rotate(0)' }}>
                    ↓
                  </div>
                </div>

                <div className="font-mono text-[10px] text-slate-500 tracking-widest mb-4">{item.duration}</div>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.stack.map(t => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-500">{t}</span>
                  ))}
                </div>

                {/* Expandable section */}
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: expanded === i ? '400px' : '0' }}
                >
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="font-dm text-sm text-slate-400 leading-relaxed mb-4 font-light">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.achievements.map(a => (
                        <li key={a} className="flex items-start gap-2.5 font-dm text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]" style={{ background: item.color }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
