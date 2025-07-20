import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticleBackground = () => {
    const [init, setInit] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Breakpoint mobile
        };

        window.addEventListener('resize', handleResize);        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            setInit(false);
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, [isMobile]); // Jalankan ulangjika status isMobile berubah

    const particleOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: '#0f172a',
                },
            },
            fpsLimit: 30,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.5,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: ['#6366f1', '#F26467'],
                },
                links: {
                    color: '#6366f1',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce',
                    },
                    random: true,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'triangle',
                },
                size: {
                    value: { min: 1, max: 4 },
                    animation: {
                        enable: true,
                        speed: 10,
                        sync: false,
                        startValue: "min",
                        destroy: "none",
                    }
                },
                shadow: {
                    enable: true,
                    color: "#6366f1",
                    blur: 10,
                },
                twinkle: {
                    particles: {
                        enable: true,
                        frequency: 0.05,
                        opacity: 1
                    }
                }
            },
            detectRetina: true,
        }),
        [],
    );

    // Render mobile
    if (isMobile) {
        return (
            <div
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    backgroundColor: '#0f172a', // Warna slate-900
                    zIndex: -10,
                }}
            />
        );
    }

    // Render desktop
    if (init && !isMobile) {
        return (
            <Particles
                id="tsparticles"
                options={particleOptions}
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: -10,
                }}
            />
        );
    }

    // Jika di mobile atau belum init, render null
    return null; 
};

export default ParticleBackground;