import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 800); // Allow exit animation to finish
        }, 2800); // Slightly longer to appreciate the animation

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="relative flex items-center justify-center">
                        {/* Logo Container */}
                        <motion.svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Left Bracket < */}
                            <motion.path
                                d="M35 70 L15 50 L35 30"
                                stroke="black"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                variants={{
                                    hidden: { pathLength: 0, opacity: 0, x: -20 },
                                    visible: {
                                        pathLength: 1,
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            pathLength: { duration: 0.8, ease: "easeInOut" },
                                            opacity: { duration: 0.5 },
                                            x: { type: "spring", stiffness: 100, damping: 15 }
                                        }
                                    }
                                }}
                            />

                            {/* Slash / - Draws from top-right to bottom-left */}
                            <motion.path
                                d="M60 20 L40 80"
                                stroke="#DC2626" // red-600
                                strokeWidth="6"
                                strokeLinecap="round"
                                variants={{
                                    hidden: { pathLength: 0, opacity: 0 },
                                    visible: {
                                        pathLength: 1,
                                        opacity: 1,
                                        transition: {
                                            delay: 0.5,
                                            duration: 0.8,
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                            />

                            {/* Right Bracket > */}
                            <motion.path
                                d="M65 70 L85 50 L65 30"
                                stroke="black"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                variants={{
                                    hidden: { pathLength: 0, opacity: 0, x: 20 },
                                    visible: {
                                        pathLength: 1,
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            pathLength: { duration: 0.8, ease: "easeInOut" },
                                            opacity: { duration: 0.5 },
                                            x: { type: "spring", stiffness: 100, damping: 15 }
                                        }
                                    }
                                }}
                            />
                        </motion.svg>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
