import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const contacts = [
  { icon: '📧', label: 'Email', href:'mailto:mudasir687abbas@gmail.com',value: 'mudasir687abbas@gmail.com', color: '#22d3ee' },
  { icon: '📍', label: 'Location',href:null, value: 'Karachi, Pakistan', color: '#8b5cf6' },
  { icon: '💼', label: 'LinkedIn',href:'https://www.linkedin/in/mudasir687abbas', value: 'linkedin.com/in/mudasir687abbas', color: '#f59e0b' },
  { icon: '🐙', label: 'GitHub',href:'https://github.com/mudasir687abbas', value: 'github.com/mudasir687abbas', color: '#10b981' },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-60 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-violet-500" />
            <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">Contact</span>
            <span className="w-6 h-px bg-violet-500" />
          </div>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white mb-4">
            Let's <span className="grad-text">Work Together</span>
          </h2>
          <p className="font-dm text-slate-400 text-base max-w-md mx-auto font-light">
            Have a project in mind? Let's build something great. I'm currently open to new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Info */}
          <div
            className="lg:col-span-2 flex flex-col gap-4"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.15s' }}
          >
            {contacts.map((c) => (
              <div
                key={c.label}
                className="hover:cursor-pointer flex items-center gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 card-hover group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${c.color}12` }}
                >
                  {c.icon}
                </div>
                <div>
                  <div className="font-mono text-[9px] text-slate-600 tracking-widest uppercase">{c.label}</div>
                  <a href={c.href} target="_blank" className="font-dm text-sm text-slate-300 mt-0.5 font-medium">{c.value}</a>
                </div>
              </div>
            ))}

            {/* Availability note */}
            <div className="bg-emerald-500/[0.07] border border-emerald-500/20 rounded-xl px-5 py-4 mt-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">Available Now</span>
              </div>
              <p className="font-dm text-xs text-slate-400 font-light">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="lg:col-span-3"
            style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.25s' }}
          >
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-syne font-bold text-xl text-white mb-2">Message Sent!</h3>
                  <p className="font-dm text-slate-400 text-sm">I'll get back to you soon, bhai!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', placeholder: 'Your Name', label: 'Name' },
                      { name: 'email', placeholder: 'your@email.com', label: 'Email', type: 'email' },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="font-mono text-[10px] text-slate-500 tracking-widest uppercase block mb-2">{f.label}</label>
                        <input
                          type={f.type || 'text'}
                          name={f.name}
                          value={form[f.name]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          required
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 font-dm text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-slate-500 tracking-widest uppercase block mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 font-dm text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] text-slate-500 tracking-widest uppercase block mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 font-dm text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-dm font-bold text-sm py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-black hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
