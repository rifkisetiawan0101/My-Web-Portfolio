import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/data';

const Contact = () => {
    return (
        <Section id="contact" className="bg-slate-900/30">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Contact Me</h2>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto">I am currently looking for internship opportunities and am open to new challenges. If you have any questions or just want to say hello, my inbox is always open.</p>
                <a href={`mailto:${personalInfo.email}`} className="mt-8 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-md hover:bg-indigo-700 transition-all transform hover:scale-105 inline-block">Send Message</a>
            </div>
        </Section>
    );
};

export default Contact;