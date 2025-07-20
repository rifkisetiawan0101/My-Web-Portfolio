import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/data';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "Skills", "Projects", "Education", "Achievements", "Contact"];
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.toLowerCase()));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, targetId) => {
        e.preventDefault(); // Mencegah perpindahan instan (teleport)
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        setIsOpen(false);
    };

    return (
        <header className="bg-slate-900/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-white font-bold text-xl">{personalInfo.name}</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((item) => (
                                <a 
                                    key={item} 
                                    href={`#${item.toLowerCase()}`} 
                                    onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                                    className={`
                                        px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}
                                    `}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white">
                            <span className="sr-only">Open menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div 
                className={`
                    md:hidden overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? 'max-h-96' : 'max-h-0'}
                `}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                            className={`
                                block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}
                            `}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;