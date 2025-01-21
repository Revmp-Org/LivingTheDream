"use client";

import type React from 'react';
import { cn } from '@/style';

type CardProps = {
    children: React.ReactNode;
    className?: string;
    theme?: 'light' | 'dark';
    onClick?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    hoverEffect?: boolean;
};

const Card: React.FC<CardProps> = ({ children, className = '', theme = 'light', onClick, onKeyDown, hoverEffect = true }) => {
    return (
        <div
            onClick={onClick}
            onKeyDown={onKeyDown}
            className={cn([
                'shadow-lg rounded-lg overflow-hidden border',
                hoverEffect ? 'transition-shadow duration-300 transform hover:-translate-y-1 hover:shadow-xl' : '',
                theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-200',
                className
            ])}>
            {children}
        </div>
    );
};

export default Card;