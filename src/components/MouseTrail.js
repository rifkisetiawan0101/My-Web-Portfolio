import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', setFromEvent);

        return () => {
        window.removeEventListener('mousemove', setFromEvent);
        };
    }, []);

    return position;
};

const MouseTrail = () => {
    const { x, y } = useMousePosition();
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const newTrail = [...trail, { x, y }];
        // Batasi panjang jejak agar tidak terlalu banyak elemen
        if (newTrail.length > 20) {
            newTrail.shift();
        }
        const timer = setTimeout(() => setTrail(newTrail), 10);
        return () => clearTimeout(timer);
    }, [x, y]);

    return (
        <>
            <div 
                className="mouse-cursor-dot" 
                style={{ left: `${x}px`, top: `${y}px` }}
            />
            {trail.map((pos, index) => (
                <div
                    key={index}
                    className="mouse-trail-dot"
                    style={{ 
                        left: `${pos.x}px`, 
                        top: `${pos.y}px`,
                        opacity: (index / trail.length) * 0.5,
                        transform: `scale(${(index / trail.length)})`
                    }}
                />
            ))}
        </>
    );
};

export default MouseTrail;