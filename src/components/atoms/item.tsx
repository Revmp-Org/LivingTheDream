"use client";

import type React from 'react';

type ItemProps = {
    icon?: React.ReactNode;
    name: string;
    onSelect: () => void;
    theme?: 'light' | 'dark';
};

const Item: React.FC<ItemProps> = ({ icon, name, onSelect, theme = 'dark' }) => {
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            onSelect();
        }
    };

    return (
        <li
            key={name}
            className={`flex items-center p-2 cursor-pointer text-lg space-x-2 ${theme === 'dark' ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-200 hover:text-primary'}`}
            onClick={onSelect}
            onKeyDown={handleKeyPress}
            onKeyUp={handleKeyPress}
        >
            {icon && (
                <div className="flex-shrink-0">
                    {icon}
                </div>
            )}
            <span>{name}</span>
        </li>
    );
};

export default Item;