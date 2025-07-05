import React from 'react';

const Section = ({ id, className, children }) => {
    return (
        <section id={id} className={`py-20 ${className || ''}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
