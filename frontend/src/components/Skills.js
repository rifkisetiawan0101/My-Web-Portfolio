import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { skills } from '../data/data';

const Skills = () => {
    return (
        <Section id="skills" className="bg-slate-900/30">
            <SectionTitle title="My Tech Warehouse" subtitle="Technology I'm good at" />
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="w-36 h-24 flex flex-col items-center justify-center bg-slate-700/50 p-4 rounded-lg transition-transform hover:scale-110 hover:bg-slate-600/50"
                    >
                        <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="h-10 w-10 object-contain" 
                        />
                        <p className="mt-2 text-sm text-slate-300">{skill.name}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;