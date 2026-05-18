import React from 'react';
import useInView from '../hooks/useInView';

const groups = [
  {
    label: 'Frontend',
    icon: '🖥️',
    color: '#22d3ee',
    skills: [
      { name: 'React.js', pct: 85 },
      { name: 'HTML & CSS', pct: 92 },
      { name: 'JavaScript', pct: 83 },
      { name: 'Tailwind CSS', pct: 80 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js', pct: 78 },
      { name: 'Express.js', pct: 76 },
      { name: 'MongoDB', pct: 73 },
      { name: 'MySQL', pct: 75 },
      { name: 'REST APIs', pct: 81 },
    ],
  },
  {
    label: 'Tools',
    icon: '🛠️',
    color: '#f59e0b',
    skills: [
      { name: 'Git & GitHub', pct: 86 },
      { name: 'JWT / Auth', pct: 74 },
      { name: 'Postman', pct: 60 },
    ],
  },
];

const badges = ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Git','GitHub', 'Postman', 'JWT', 'REST API', 'Context API', 'npm'];

function SkillBar({ name, pct, color, inView, delay }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="font-dm text-sm text-slate-300 font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: inView ? `${pct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 10px ${color}44`,
            transition: `width 1.3s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 relative"
      style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-cyan-400" />
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Skills</span>
            <span className="w-6 h-px bg-cyan-400" />
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white mb-4">
            Tech I <span className="grad-text">Work With</span>
          </h2>
          <p className="font-dm text-slate-400 text-base max-w-md mx-auto font-light">
            My toolkit for building modern, full-stack web applications from scratch.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {groups.map((g, gi) => (
            <div
              key={g.label}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 card-hover"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease ${gi * 120}ms`,
              }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${g.color}15` }}
                >
                  {g.icon}
                </div>
                <div>
                  <div className="font-syne font-bold text-base" style={{ color: g.color }}>{g.label}</div>
                  <div className="font-mono text-[9px] text-slate-600 tracking-widest uppercase">{g.skills.length} skills</div>
                </div>
              </div>

              {g.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  pct={s.pct}
                  color={g.color}
                  inView={inView}
                  delay={gi * 100 + si * 130}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Badge cloud */}
        <div
          className="text-center"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.4s' }}
        >
          <div className="font-mono text-[10px] text-slate-600 tracking-[3px] uppercase mb-5">All Technologies</div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {badges.map((b, i) => (
              <span
                key={b}
                className="font-mono text-xs px-4 py-2 rounded-full border border-white/[0.07] text-slate-500 bg-white/[0.03] cursor-default transition-all duration-250 hover:border-cyan-400/30 hover:text-cyan-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
