import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { education } from '../data/data';

const Education = () => {
    const EducationItem = ({ item }) => (
        <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-800 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-indigo-300 bg-indigo-600/30 rounded-full">{item.period}</time>
                <div className="text-xl font-bold text-white">{item.institution}</div>
            </div>
            <div className="flex items-top gap-4 ml-0">
                <img src={item.logo} alt={`${item.institution} logo`} className="h-12 object-contain bg-white/10 p-1 mt-1.5 rounded-md" />
                <div className="flex-1">
                    <div className="text-indigo-400 mb-1 font-semibold">{item.degree}</div>
                    <div className="text-slate-400 text-sm">{item.description}</div>
                </div>
            </div>
        </div>
    );

    return (
        <Section id="education" className="bg-slate-900/30">
            <SectionTitle title="Education" subtitle="My academic journey and formal training." />
            <div className="relative">
                {education.map((item, index) => <EducationItem key={index} item={item} />)}
            </div>
        </Section>
    );
};

export default Education;