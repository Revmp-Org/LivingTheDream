import React from 'react';
import { cn } from '@/style';

type BadgeSize = '1' | '2' | '3';
type BadgeVariant = 'solid' | 'soft' | 'surface' | 'outline';
export type BadgeColor = 'gray' | 'red' | 'green' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'pink' | 'orange' | 'cyan' | 'crimson' | 'primary';
type BadgeRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: BadgeSize;
    variant?: BadgeVariant;
    color?: BadgeColor;
    highContrast?: boolean;
    radius?: BadgeRadius;
    theme?: 'light' | 'dark';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({
    children,
    className,
    size = '1',
    variant = 'soft',
    color = 'gray',
    highContrast = false,
    radius = 'medium',
    theme = 'light',
    ...props
}, ref) => {
    const sizeClasses = {
        '1': 'text-xs px-1.5 py-0.5',
        '2': 'text-sm px-2 py-0.5',
        '3': 'text-base px-2.5 py-1',
    };

    const radiusClasses = {
        'none': 'rounded-none',
        'small': 'rounded-sm',
        'medium': 'rounded',
        'large': 'rounded-lg',
        'full': 'rounded-full',
    };

    const getColorClasses = (variant: BadgeVariant, color: BadgeColor, highContrast: boolean, isDark: boolean) => {
        const colorMap = {
            gray: {
                solid: `${isDark ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white'}`,
                soft: `${isDark ? 'bg-gray-800/30 text-gray-300' : 'bg-gray-100 text-gray-900'}`,
                surface: `${isDark ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'} border border-gray-200`,
                outline: `${isDark ? 'text-gray-300' : 'text-gray-900'} border border-current`,
            },
            blue: {
                solid: 'bg-blue-600 text-white',
                soft: `${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-900'}`,
                surface: `${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-white text-blue-900'} border border-blue-200`,
                outline: 'text-blue-600 border border-current',
            },
            green: {
                solid: 'bg-green-600 text-white',
                soft: `${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-900'}`,
                surface: `${isDark ? 'bg-green-500/20 text-green-300' : 'bg-white text-green-900'} border border-green-200`,
                outline: 'text-green-600 border border-current',
            },
            yellow: {
                solid: 'bg-yellow-600 text-white',
                soft: `${isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-900'}`,
                surface: `${isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-white text-yellow-900'} border border-yellow-200`,
                outline: 'text-yellow-600 border border-current',
            },
            red: {
                solid: 'bg-red-600 text-white',
                soft: `${isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-900'}`,
                surface: `${isDark ? 'bg-red-500/20 text-red-300' : 'bg-white text-red-900'} border border-red-200`,
                outline: 'text-red-600 border border-current',
            },
            primary: {
                solid: `${isDark ? 'bg-primary/90 text-white' : 'bg-primary text-white'}`,
                soft: `${isDark ? 'bg-primary/20 text-white' : 'bg-primary/20 text-primary'}`,
                surface: `${isDark ? 'bg-primary/20 text-white' : 'bg-white text-primary'} border border-primary/30`,
                outline: `${isDark ? 'text-white' : 'text-primary'} border border-current`,
            },
        };

        const baseClasses = colorMap[color as keyof typeof colorMap]?.[variant] || colorMap.gray[variant];
        return highContrast ? baseClasses.replace(/\/20|\/30/, '/40') : baseClasses;
    };

    return (
        <span
            ref={ref}
            className={cn([
                'inline-flex items-center justify-center font-medium cursor-pointer',
                sizeClasses[size],
                radiusClasses[radius],
                getColorClasses(variant, color, highContrast, theme === 'dark'),
                className
            ])}
            {...props}
        >
            {children}
        </span>
    );
});

Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps };