import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particleOptions = {
        background: {
            color: {
                value: '#111827', // slate-900 background
            },
        },
        fpsLimit: 60,
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
                    distance: 200,
                    links: {
                        opacity: 0.5,
                    },
                },
            },
        },
        particles: {
            color: {
                value: '#818cf8', // Indigo-400 color
            },
            links: {
                color: '#6366f1', // Indigo-500 color
                distance: 150,
                enable: true,
                opacity: 0.2,
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
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 50,
            },
            opacity: {
                value: 0.2,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particleOptions}
            style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    );
};

export default ParticleBackground;