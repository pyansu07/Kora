"use client";

import { motion } from "framer-motion";
import { cn } from "@/functions";

interface BlurTextProps {
    word: React.ReactNode | string;
    className?: string;
    delay?: number;
    duration?: number;
    blur?: number;
    y?: number;
    once?: boolean;
}

export const BlurText = ({ 
    word, 
    className, 
    delay = 0,
    duration = 0.5,
    blur = 10,
    y = 20,
    once = true 
}: BlurTextProps) => {
    const variants = {
        hidden: { 
            opacity: 0, 
            y: y, 
            filter: `blur(${blur}px)` 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)" 
        },
    };

    const renderWord = () => {
        if (typeof word === 'string') {
            return word.split('\n').map((line, index) => (
                <span key={index} className="block">
                    {line}
                </span>
            ));
        }
        return word;
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            variants={variants}
            transition={{ 
                duration,
                delay,
                ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className={cn(
                "relative",
                className
            )}
        >
            {renderWord()}
        </motion.div>
    );
};