import React, { useState, useEffect, useCallback, useRef } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import { achievements } from '../data/data';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CertificateModal = ({ pdfUrl, onClose }) => {
    if (!pdfUrl) return null;
    const embedUrl = `${pdfUrl}#toolbar=0&navpanes=0`;
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
            onClick={onClose}
        >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 20 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-slate-800 rounded-lg shadow-xl w-full max-w-4xl h-[80vh] flex flex-col p-4 relative" 
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute -top-4 -right-4 bg-slate-700 p-2 rounded-full text-white hover:bg-slate-600 z-10"><X size={24} /></button>
                <iframe src={embedUrl} className="w-full h-full border-0 rounded-md" title="Certificate Preview"></iframe>
            </motion.div>
        </motion.div>
    );
};


const Achievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activePdfUrl, setActivePdfUrl] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [direction, setDirection] = useState(1);
    
    const [containerHeight, setContainerHeight] = useState('auto');
    const slideRef = useRef(null);

    useEffect(() => {
        const getItemsPerPage = () => {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        };

        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        // Atur tinggi container saat komponen dimuat dan saat ukuran window berubah
        const timer = setTimeout(() => {
            if (slideRef.current) {
                setContainerHeight(slideRef.current.scrollHeight);
            }
        }, 100); // Beri waktu render

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    // Update tinggi container setiap kali slide berubah
    useEffect(() => {
        const timer = setTimeout(() => {
            if (slideRef.current) {
                setContainerHeight(slideRef.current.scrollHeight);
            }
        }, 100); // Penyesuaian cepat saat konten berubah
    }, [currentIndex, itemsPerPage]);

    const totalPages = Math.ceil(achievements.length / itemsPerPage);

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
    }, [totalPages]);


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [handleNext]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    };

    const currentAchievements = achievements.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    return (
        <Section id="achievements">
            <SectionTitle title="My Certificates" subtitle="Explore the certificates I've earned so far." />
            
            <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center w-full">
                    <button onClick={handlePrev} className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 p-3 rounded-full text-white transition-all z-10" aria-label="Previous Certificates">
                        <ChevronLeft size={24} />
                    </button>

                    <motion.div 
                        className="relative w-full overflow-hidden"
                        animate={{ height: containerHeight || 'auto' }}
                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                    >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                ref={slideRef}
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 1, ease: "easeInOut" },
                                    opacity: { duration: 1 }
                                }}
                                className="absolute w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {currentAchievements.map((item) => (
                                    <div
                                        key={item.title}
                                        className="bg-slate-800/80 rounded-xl group cursor-pointer flex flex-col"
                                        onClick={() => setActivePdfUrl(item.certificateImage)}
                                    >
                                        <div className="aspect-video overflow-hidden">
                                            <img 
                                                src={item.logo}
                                                alt={`${item.title} preview`}
                                                className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 text-center flex flex-col flex-grow">
                                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                            <p className="text-slate-400 text-sm mt-2 flex-grow">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    <button onClick={handleNext} className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 p-3 rounded-full text-white transition-all z-10" aria-label="Next Certificates">
                        <ChevronRight size={24} />
                    </button>
                </div>
                <p className="mt-8 text-sm text-indigo-400 italic">
                    *Click any card to preview the certificate
                </p>
            </div>

            <AnimatePresence>
                {activePdfUrl && <CertificateModal pdfUrl={activePdfUrl} onClose={() => setActivePdfUrl(null)} />}
            </AnimatePresence>
        </Section>
    );
};

export default Achievements;