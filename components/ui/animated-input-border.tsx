import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedInputBorderProps {
    children: React.ReactNode;
    className?: string; // To capture width/height/rounding if needed
    hasValue?: boolean;
}

const AnimatedInputBorder: React.FC<AnimatedInputBorderProps> = ({ children, className = '', hasValue = false }) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <div
            className={`relative ${className}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            {/* The actual Input/Textarea */}
            {children}

            {/* The Animated Border Overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden">
                <svg className="w-full h-full">
                    <motion.rect
                        width="100%"
                        height="100%"
                        rx="12" // Matches rounded-xl (approx 12px)
                        ry="12"
                        fill="none"
                        stroke="#DC2626" // red-600
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isFocused || hasValue ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </svg>
            </div>
        </div>
    );
};

export default AnimatedInputBorder;
