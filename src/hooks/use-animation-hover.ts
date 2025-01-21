import { useState, useRef } from 'react';

const useHoverAnimation = () => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setIsHovered(false);
        }, 150); // Small delay to avoid flickering
    };

    return { isHovered, handleMouseEnter, handleMouseLeave };
};

export default useHoverAnimation;
