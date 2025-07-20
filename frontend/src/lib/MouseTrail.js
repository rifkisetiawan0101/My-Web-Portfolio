// src/components/MouseTrail.js

import React, { useState, useEffect } from 'react';

const MouseTrail = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newParticle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 5 + 1,
                randomX: Math.random(),
                randomY: Math.random(),
            };

            setParticles(prev => [...prev, newParticle]);

            // Hapus partikel dari state setelah animasi selesai (250ms)
            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {particles.map(p => (
                <div
                    key={p.id}
                    className="sparkle"
                    style={{
                        left: `${p.x}px`,
                        top: `${p.y}px`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                    }}
                />
            ))}
        </>
    );
};

export default MouseTrail;