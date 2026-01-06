import React from 'react';
import { motion } from 'framer-motion';

const TravelingBorder: React.FC = () => {
    return (
        <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden z-0">
            <svg className="absolute inset-0 w-full h-full" width="100%" height="100%">
                <motion.rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="1rem"
                    ry="1rem"
                    fill="none"
                    stroke="#DC2626" // red-600
                    strokeWidth="3"
                    strokeDasharray="200 4000" // Beam length 200, gap large enough to look like a single beam
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -4200 }} // Animate enough to loop fully
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </svg>
        </div>
    );
};

export default TravelingBorder;
