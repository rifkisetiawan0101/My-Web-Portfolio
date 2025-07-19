import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Educations from './components/Educations';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import MouseTrail from './components/MouseTrail';

function App() {
    useEffect(() => {
        document.title = "Rifki Setiawan - Full-Stack Developer & Game Developer Portfolio";
    }, []);

    return (
        <div className="text-slate-300">
            <ParticleBackground />
            <MouseTrail />
            <Header />
            <div className="relative z-10">
                <Header />
                <main>
                    <Home />
                    <Skills />
                    <Projects />
                    <Educations />
                    <Achievements />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;