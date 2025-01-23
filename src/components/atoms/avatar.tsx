"use client";

import type React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { IoPerson } from "react-icons/io5";
import { cn } from '@/style';

type AvatarProps = {
    src?: string;
    alt: string;
    rootClassName?: string;
    imageClassName?: string;
    fallbackClassName?: string;
    theme?: 'light' | 'dark';
    defaultImage?: string;
}

const Avatar = ({ src, alt, rootClassName, imageClassName, fallbackClassName, theme = 'dark', defaultImage }: AvatarProps) => (
    <AvatarPrimitive.Root
        className={cn([
            'inline-flex items-center justify-center overflow-hidden w-10 h-10 rounded-full cursor-pointer',
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200',
            rootClassName
        ])}
    >
        <AvatarPrimitive.Image
            className={cn([
                'w-full h-full object-cover',
                imageClassName
            ])}
            src={defaultImage}
            alt={alt}
        />
        <AvatarPrimitive.Fallback className={cn([
            'flex items-center justify-center w-full h-full',
            theme === 'dark' ? 'bg-gray-500 text-white' : 'bg-gray-300 text-primary',
            fallbackClassName
        ])}>
            <IoPerson />
        </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
);

export default Avatar;