
"use client";

import type React from 'react';
import { cn } from '@/style';
import { Button } from '@radix-ui/themes';
import { FiChevronLeft } from 'react-icons/fi';

type BackButtonProps = {
    theme: 'light' | 'dark';
    onClick?: () => void;
    size?: 'small' | 'medium';
};

const BackButton: React.FC<BackButtonProps> = ({ theme, onClick, size }) => {

    return (
        <Button
            onClick={onClick}
            className={cn([
                'flex items-center',
                theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
            ])}
        >
            <FiChevronLeft size={size === 'small' ? 16 : 18} />
        </Button>
    );
};

export default BackButton;