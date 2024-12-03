"use client";

import { cn } from "@/functions";
import { motion, type Variants } from "framer-motion";

interface Props {
    className?: string;
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    once?: boolean;
    animation?: "fade" | "slide" | "scale" | "none";
    customVariants?: Variants;
}

const animations = {
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    slide: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    },
    scale: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    },
    none: {
        hidden: {},
        visible: {}
    }
} as const;

const Container = ({ 
    children, 
    className, 
    delay = 0, 
    duration = 0.5,
    once = true,
    animation = "fade",
    customVariants
}: Props) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-20px" }}
            variants={customVariants || animations[animation]}
            transition={{ 
                duration,
                delay,
                ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className={cn("relative", className)}
        >
            {children}
        </motion.div>
    );
};

export default Container;
