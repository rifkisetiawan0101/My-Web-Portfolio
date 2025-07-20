import React, { useState, useRef, useEffect, useMemo } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { projects } from '../data/data';
import { Github, Youtube, Gamepad2, Code, BrainCircuit, ExternalLink, X, BookText, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectMedia = ({ image, videoUrl, isHovering }) => {
    const videoRef = useRef(null);
    const getYouTubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };
    const videoId = getYouTubeId(videoUrl);

    useEffect(() => {
        if (videoId && videoRef.current) {
            if (isHovering) {
                videoRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`;
            } else {
                videoRef.current.src = '';
            }
        }
    }, [isHovering, videoId]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <img 
                src={image} 
                alt="Project Thumbnail" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovering && videoId ? 'opacity-0' : 'opacity-100'}`}
            />
            {videoId && (
                <iframe
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Project Video"
                ></iframe>
            )}
        </div>
    );
};

const ContributionModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-slate-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                        <X size={24} />
                    </button>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <h4 className="font-semibold text-indigo-400 mt-6 mb-3">My Contributions:</h4>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                        {project.contributions && project.contributions.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ProjectCard = ({ project, onOpenModal }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const overviewText = String(project.overview || ''); 
    const shortOverview = overviewText.substring(0, 100) + (overviewText.length > 100 ? '...' : '');

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
        <div 
            className="bg-slate-800/70 rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300 transform hover:scale-[1.025] hover:shadow-2xl hover:shadow-indigo-500/20"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="w-full aspect-video">
                <ProjectMedia 
                    image={project.image} 
                    videoUrl={project.links?.trailer} 
                    isHovering={isHovering}
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <span key={tag} className="bg-indigo-600/20 text-indigo-300 text-xs font-medium px-2 py-1 rounded-full">{tag}</span>)}
                </div>
                
                {overviewText && (
                    <div className="text-slate-400 text-sm mb-4 flex-grow">
                        <p className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-12 overflow-hidden'}`}>
                            {isExpanded ? overviewText : shortOverview}
                        </p>
                        {overviewText.length > 100 && (
                            <button onClick={() => setIsExpanded(!isExpanded)} className="text-indigo-400 hover:text-indigo-300 font-semibold mt-2 text-xs inline-flex items-center gap-1">
                                {isExpanded ? 'See Less' : 'See More'}
                                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                        )}
                    </div>
                )}

                <div className="mt-auto pt-4 border-t border-slate-700/50 flex flex-col gap-3">
                    {project.contributions?.length > 0 && (
                        <button 
                            onClick={() => onOpenModal(project)}
                            className="w-full text-center bg-slate-700 text-slate-200 hover:bg-slate-600 font-semibold text-sm py-2 px-4 rounded-md transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <BookText size={16} /> See Contributions
                        </button>
                    )}
                    <div className="grid grid-cols-3 gap-2 text-sm">
                        {project.links?.trailer && <a href={project.links.trailer} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-400 bg-slate-700/50 hover:bg-slate-700 p-2 rounded-md flex items-center justify-center gap-1.5 transition-colors"><Youtube size={16}/> Trailer</a>}
                        {project.links?.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-400 bg-slate-700/50 hover:bg-slate-700 p-2 rounded-md flex items-center justify-center gap-1.5 transition-colors"><Github size={16}/> Docs</a>}
                        {project.links?.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-400 bg-slate-700/50 hover:bg-slate-700 p-2 rounded-md flex items-center justify-center gap-1.5 transition-colors"><ExternalLink size={16}/> Live</a>}
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeModalProject, setActiveModalProject] = useState(null);

    const filterGroups = [
        { name: 'All', key: 'All' },
        { name: 'Fullstack Development', key: 'fullstack' },
        { name: 'Game Development', key: 'game' },
        { name: 'Other Projects', key: 'other' },
    ];

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return [...projects.fullstack, ...projects.game, ...projects.other];
        }
        return projects[activeFilter] || [];
    }, [activeFilter]);

    return (
        <Section id="projects">
            <SectionTitle title="Projects" subtitle="An exhibition of my passion and expertise." />
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                {filterGroups.map(group => (
                    <button
                        key={group.key}
                        onClick={() => setActiveFilter(group.key)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeFilter === group.key ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'}`}
                    >
                        {group.name}
                    </button>
                ))}
            </div>
            
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((p, i) => (
                        <ProjectCard key={`${activeFilter}-${p.title}-${i}`} project={p} onOpenModal={setActiveModalProject} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {activeModalProject && (
                <ContributionModal 
                    project={activeModalProject} 
                    onClose={() => setActiveModalProject(null)} 
                />
            )}
        </Section>
    );
};

export default Projects;
