import { useMemo } from "react";

interface MotionConfig {
    initialY?: number;
    initialOpacity?: number;
    staggerDelay?: number;
    childrenDelay?: number;
    duration?: number;
    buttonScale?: number;
    springStiffness?: number;
}

const useMotionConfig = (config: MotionConfig = {}) => {
    const {
        initialY = 20,
        initialOpacity = 0,
        staggerDelay = 0.2,
        childrenDelay = 0.3,
        duration = 0.6,
        buttonScale = 1.05,
        springStiffness = 300,
    } = config;

    // Container Variants
    const containerVariants = useMemo(
        () => ({
            hidden: { opacity: initialOpacity, y: initialY },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    delayChildren: childrenDelay,
                    staggerChildren: staggerDelay,
                },
            },
        }),
        [initialY, initialOpacity, childrenDelay, staggerDelay]
    );

    // Item Variants
    const itemVariants = useMemo(
        () => ({
            hidden: { opacity: initialOpacity, y: initialY },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: duration,
                    ease: "easeOut"
                }
            },
        }),
        [initialY, initialOpacity, duration]
    );

    // Button Hover Variants
    const buttonHover = {
        scale: buttonScale,
        transition: { type: "spring", stiffness: springStiffness },
    };

    // Button Tap Variants
    const buttonTap = {
        scale: 0.95,
        transition: { type: "spring", stiffness: springStiffness },
    };

    const listItemHover = {
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        },
    };

    const listItemTap = {
        scale: 0.95,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        },
    };
    return {
        containerVariants,
        itemVariants,
        buttonHover,
        buttonTap,
        listItemHover,
        listItemTap,
    };
};

export default useMotionConfig;