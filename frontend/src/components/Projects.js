import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { projects } from '../data/data';
import { Github, ArrowRight, ChevronUp, ChevronDown, Gamepad2, Code, BrainCircuit, ExternalLink } from 'lucide-react';

const ProjectMedia = ({ image, videoUrl, isHovering }) => {
    const videoRef = useRef(null);

    const getYouTubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(videoUrl);

    // useEffect untuk mengubah src video saat isHovering berubah
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

const Projects = () => {
    const [showOther, setShowOther] = useState(false);

    const ProjectCardFeatured = ({ project }) => {
        const [isHovering, setIsHovering] = useState(false);

        return (
            <div 
                className="mb-16 group" 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-800/50 p-8 rounded-lg transition-transform duration-300 transform group-hover:scale-105">
                    <div className="w-full aspect-video rounded-md shadow-lg overflow-hidden">
                        <ProjectMedia 
                            image={project.image} 
                            videoUrl={project.links.trailer} 
                            isHovering={isHovering}
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 my-4">
                            {project.tags.map(tag => <span key={tag} className="bg-indigo-600/20 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>)}
                        </div>
                        <h4 className="font-semibold text-white mt-6 mb-2">Project Overview</h4>
                        <p className="text-slate-400">{project.overview}</p>
                        <h4 className="font-semibold text-white mt-6 mb-2">My Contributions</h4>
                        <ul className="list-disc list-inside text-slate-400 space-y-1">
                            {project.contributions.map(item => <li key={item}>{item}</li>)}
                        </ul>
                        <div className="mt-6 flex items-center gap-4 text-sm">
                            {project.links.itch && <a href={project.links.itch} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-medium">View on Itch.io</a>}
                            {project.links.trailer && <a href={project.links.trailer} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-medium">Watch Trailer</a>}
                            {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1">Play Demo <ExternalLink size={14} /></a>}
                            {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1">See Documentation <Github size={14} /></a>}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ProjectCardGrid = ({ project, index }) => { // Menerima 'index' untuk delay
        const [isHovering, setIsHovering] = useState(false);

        return (
            <div 
                className="bg-slate-800 rounded-lg overflow-hidden group transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="w-full aspect-video">
                    <ProjectMedia 
                        image={project.image} 
                        videoUrl={project.link} 
                        isHovering={isHovering}
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => <span key={tag} className="bg-slate-700 text-slate-300 text-xs font-medium px-2 py-1 rounded">{tag}</span>)}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-medium inline-flex items-center gap-2 group-hover:text-indigo-300">
                        See Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        );
    };

    return (
        <Section id="projects">
            <SectionTitle title="Projects" subtitle="An exhibition of my passion and expertise." />
            <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><Gamepad2 className="text-indigo-400" /> Game Developer</h3>
                {projects.game.map((p, i) => <ProjectCardFeatured key={i} project={p} />)}
            </div>
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><Code className="text-indigo-400" /> Fullstack Developer</h3>
                {projects.fullstack.map((p, i) => <ProjectCardFeatured key={i} project={p} />)}
            </div>
            <div className="mt-16">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3"><BrainCircuit className="text-indigo-400" /> Other Projects</h3>
                    <button 
                        onClick={() => setShowOther(!showOther)} 
                        className={`
                            bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-500 
                            transition-all inline-flex items-center gap-2
                            transform hover:scale-110
                            ${showOther 
                                ? 'animate-[bounce-subtle_2s_ease-in-out_infinite]' 
                                : 'animate-[breathing-bezier_3s_infinite]'
                            }
                        `}
                    >
                        {showOther ? 'Hide Other Projects' : 'Show Other Projects'} 
                        {showOther ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                </div>

                <div className={`
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
                    transition-all duration-700 ease-in-out
                    ${showOther ? 'opacity-100 max-h-[1000px] mt-8' : 'opacity-0 max-h-0 overflow-hidden'}
                `}>
                    {projects.other.map((p, i) => (
                        <ProjectCardGrid key={i} project={p} index={i} /> // Mengirim 'index'
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default Projects;