import React, { useState, useEffect } from 'react';

const MouseTrail = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newParticle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setParticles(prevParticles => [...prevParticles, newParticle]);
            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, 500);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="mouse-trail-dot"
                    style={{
                        left: `${particle.x}px`,
                        top: `${particle.y}px`,
                    }}
                />
            ))}
        </>
    );
};

export default MouseTrail;
