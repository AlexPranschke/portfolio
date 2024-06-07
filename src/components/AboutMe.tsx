'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMe: React.FC = () => {
    const experiences = [
        ['1 year experience as front-end developer'],
        ['2 years experience as automation technician'],
        ['Graduate with an Engineering degree in Automation', 'and Robotics from the Gdańsk University of Technology']
    ];

    const randomPosition = () => ({
        x: typeof window !== 'undefined' ?  (Math.random() - 0.5) * window.innerWidth * 2 : 0,
        y: typeof window !== 'undefined' ? (Math.random() - 0.5) * window.innerHeight * 2 : 0,
    });

    const characterVariants = {
        hidden: { opacity: 0, x: randomPosition().x, y: randomPosition().y, rotate: Math.random() * 360 },
        visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
    };

    const transitionDuration = 1; // Duration of the transition
    const transitionDelayIncrement = 0.05; // Incremental delay between characters

    return (
        <div className="flex flex-row justify-center items-center">
            <div className="mt-auto translate-y-48 flex-col g-2 p-2">
                {/* Add content here if needed */}
            </div>
            <div className="justify-center items-center flex flex-col g-2 p-2">
                <ul className="text-3xl mt-32 space-y-32">
                    <AnimatePresence>
                        {experiences.map((row, rowIndex) => (
                            <motion.li
                                key={rowIndex}
                                className="p-2 rounded-2xl border-gray-500 shadow-2xl bg-gradient-to-b from-gray-300 to-gray-500"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: transitionDelayIncrement,
                                        },
                                    },
                                }}
                            >
                                {row.map((item, itemIndex) => (
                                    <React.Fragment key={itemIndex}>
                                        {item.split(/()/).map((char, charIndex) => (
                                            <motion.span
                                                key={charIndex}
                                                className="inline-block"
                                                initial="hidden"
                                                animate="visible"
                                                variants={characterVariants}
                                                transition={{
                                                    duration: transitionDuration,
                                                    delay: transitionDelayIncrement/2 * charIndex,
                                                }}
                                            >
                                                {char === ' ' ? '\u00A0' : char}
                                            </motion.span>
                                        ))}
                                        {itemIndex < row.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
            <div className="mb-auto translate-y-[-10] flex-col g-2 p-2">
                {/* Add content here if needed */}
            </div>
        </div>
    );
};

export default AboutMe;
