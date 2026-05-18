import React from 'react';
import useInView from '../hooks/useInView';

const services = [
  {
    icon: '🖥️', color: '#22d3ee', title: 'Frontend Development',
    desc: 'Building responsive, animated, pixel-perfect UIs with React.js, Tailwind, and modern CSS.',
    features: ['React Components', 'Responsive Design', 'Animations', 'Performance Tuning'],
  },
  {
    icon: '⚙️', color: '#8b5cf6', title: 'Backend Development',
    desc: 'Scalable REST APIs and server logic using Node.js and Express.js with MongoDB.',
    features: ['REST API Design', 'JWT Auth', 'Database Integration', 'Error Handling'],
  },
  {
    icon: '🗄️', color: '#f59e0b', title: 'Database Design',
    desc: 'Efficient MongoDB schemas, relationships, and optimized queries for your app.',
    features: ['Schema Design', 'Mongoose ODM', 'Data Modeling', 'Query Optimization'],
  },
  {
    icon: '🔐', color: '#10b981', title: 'Auth & Security',
    desc: 'Secure auth flows with JWT, bcrypt, refresh tokens, and role-based access control.',
    features: ['JWT Implementation', 'Bcrypt Hashing', 'Role-Based Access', 'Secure Routes'],
  },

  {
    icon: '🚀', color: '#06b6d4', title: 'Deployment',
    desc: 'Deploying apps on modern platforms with CI/CD basics, env config, and version control.',
    features: ['Git & GitHub', 'Vercel / Netlify', 'Env Config', 'CI/CD Basics'],
  },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section
      id="services"
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
            <span className="w-6 h-px bg-violet-500" />
            <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">What I Do</span>
            <span className="w-6 h-px bg-violet-500" />
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white mb-4">
            My <span className="grad-text-2">Services</span>
          </h2>
          <p className="font-dm text-slate-400 text-base max-w-md mx-auto font-light">
            End-to-end web development — from first wireframe to production deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 overflow-hidden card-hover"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
            >
              {/* Bottom line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: s.color }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${s.color}12` }}
              >
                {s.icon}
              </div>

              <h3 className="font-syne font-bold text-lg text-white mb-2">{s.title}</h3>
              <p className="font-dm text-sm text-slate-400 leading-relaxed mb-5 font-light">{s.desc}</p>

              <ul className="space-y-2">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 font-mono text-[11px] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
