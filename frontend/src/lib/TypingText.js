import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingText = ({ text, className }) => {
    // Kita perlu mengubah array string menjadi format yang dibutuhkan oleh TypeAnimation
    // Contoh: ['Game Developer', 1500, 'Fullstack Developer', 1500]
    const sequence = text.reduce((acc, role) => {
        return [...acc, role, 2000]; 
    }, []);

    return (
        <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={10} // Kecepatan mengetik
            className={className}
            repeat={Infinity}
        />
    );
};

export default TypingText;
