import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    );
};

export default SectionTitle;
