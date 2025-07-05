import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particleOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: '#0f172a', // Warna slate-900 yang lebih gelap
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
                    value: 80, // Jumlah partikel
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
                    color: "#6366f1", // Warna glow
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

    if (init) {
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
                    zIndex: 0,
                }}
            />
        );
    }

    return <></>;
};

export default ParticleBackground;
