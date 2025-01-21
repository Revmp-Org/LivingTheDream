"use client";

import type React from 'react';
import { cn } from '@/style';

type SkeletonProps = {
    width?: string;
    height?: string;
    className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = '100%', className }) => (
    <div
        className={cn([
            'bg-gray-300 animate-pulse',
            className
        ])}
        style={{ width, height }}
    />
);

export default Skeleton;