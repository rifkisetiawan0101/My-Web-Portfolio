import React, { useState } from 'react';
import { personalInfo } from '../data/data';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "Skills", "Projects", "Education", "Contact"];

    return (
        <header className="bg-slate-900/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-white font-bold text-xl">{personalInfo.name}</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;