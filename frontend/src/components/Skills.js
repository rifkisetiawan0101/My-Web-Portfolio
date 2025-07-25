import React, { useState, useMemo } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { skills } from '../data/data';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
    // State untuk melacak filter yang aktif
    const [activeFilter, setActiveFilter] = useState('All');

    // Daftar grup untuk tombol filter
    const filterGroups = [
        { name: 'All', key: 'All' },
        { name: 'Game Development', key: 'game' },
        { name: 'Web Development', key: 'web' },
        { name: 'Languages', key: 'language' },
        { name: 'Other Tools', key: 'tools' },
    ];

    // Memoize hasil filter agar tidak dihitung ulang setiap render
    const filteredSkills = useMemo(() => {
        if (activeFilter === 'All') {
            return skills;
        }
        return skills.filter(skill => skill.groups.includes(activeFilter));
    }, [activeFilter]);

    return (
        <Section id="skills" className="bg-slate-900/30">
            <SectionTitle title="My Tech Warehouse" subtitle="Technology I'm good at" />
            
            {/* Bagian filter tidak ada perubahan */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                {filterGroups.map(group => (
                    <button
                        key={group.key}
                        onClick={() => setActiveFilter(group.key)}
                        className={`
                            px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                            ${activeFilter === group.key 
                                ? 'bg-indigo-600 text-white shadow-lg' 
                                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                            }
                        `}
                    >
                        {group.name}
                    </button>
                ))}
            </div>

            {/* --- PERUBAHAN 1: Mengubah flexbox menjadi grid --- */}
            <motion.div 
                layout 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-4"
            >
                <AnimatePresence>
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                            // --- PERUBAHAN 2: Menghapus w-1/6 dan h-40, diganti aspect-square ---
                            className="group relative flex flex-col items-center justify-center bg-slate-800/70 p-4 rounded-xl overflow-hidden"
                        >
                            <img 
                                src={skill.logo} 
                                alt={skill.name} 
                                // Ukuran logo disesuaikan agar lebih responsif
                                className="h-1/2 w-1/2 max-h-16 max-w-16 object-contain transition-all duration-300 group-hover:opacity-20 group-hover:scale-75" 
                            />
                            
                            <p className="mt-4 text-md font-semibold text-slate-300 text-center transition-all duration-300 group-hover:opacity-0">
                                {skill.name}
                            </p>

                            {/* Efek hover tidak ada perubahan */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-xl font-bold text-white mb-4 text-center">{skill.name}</h3>
                                <div className="text-left w-full">
                                    <div className="flex items-center justify-between text-xs mb-2">
                                        <span className="text-slate-400">TYPE:</span>
                                        <span className="bg-slate-700 text-slate-200 px-2 py-0.5 rounded-full font-medium text-right">{skill.type}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-400">ABILITY:</span>
                                        <span className="bg-white/10 text-white px-2 py-0.5 rounded-full font-medium">{skill.level}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </Section>
    );
};

export default Skills;