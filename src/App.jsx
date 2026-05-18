import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b0f] text-slate-200 overflow-x-hidden">
      <Header />
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Internships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
