
import type React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/style';

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    delayDuration?: number;
    className?: string;
    theme?: 'light' | 'dark';
}

const Tooltip: React.FC<TooltipProps> = ({
    children,
    content,
    side = 'top',
    align = 'center',
    delayDuration = 300,
    className,
    theme = 'light',
    ...props
}) => {
    const isDark = theme === 'dark';
    return (
        <TooltipPrimitive.Provider delayDuration={delayDuration}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side={side}
                        align={align}
                        sideOffset={5}
                        className={cn([
                            'z-50 px-3 py-2 text-sm rounded shadow-md',
                            isDark
                                ? 'bg-gray-800 text-white'
                                : 'bg-white text-gray-900 border border-gray-300',
                            className,
                        ])}
                        {...props}
                    >
                        {content}
                        <TooltipPrimitive.Arrow
                            className={cn([
                                'fill-current',
                                isDark ? 'text-gray-800' : 'text-white',
                            ])}
                        />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
};

export { Tooltip };
