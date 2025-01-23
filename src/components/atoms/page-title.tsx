"use client";

import type React from 'react';
import { cn } from '@/style';

type PageTitleProps = {
    title: string;
    theme: 'light' | 'dark';
};

const PageTitle: React.FC<PageTitleProps> = ({ title, theme }) => {
    return (
        <div className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <h1 className={cn([
                'text-2xl font-bold',
            theme === 'dark' ? 'text-white' : 'text-black'
        ])}>
                {title}
            </h1>
        </div>
    );
};

export default PageTitle;