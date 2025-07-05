import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { achievements } from '../data/data';

const Achievements = () => {
    return (
        <Section id="achievements">
            <SectionTitle title="Prestation & Certificate" subtitle="Recognition for my hard work and dedication." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((item, index) => (
                    <div key={index} className="bg-slate-800 p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2">
                        <img src={item.logo} alt="Institution Logo" className="h-32 mx-auto my-4 object-contain" />
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;