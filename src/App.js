import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Educations from './components/Educations';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-slate-900 text-slate-300">
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
    );
}

export default App;