import type React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/style';

export type DropdownMenuItem = {
    id: number | string;
    label: string;
    icon?: React.ReactNode;
    onSelect?: () => void;
    customTrigger?: React.ReactNode;
    items?: DropdownMenuItem[];
    hoverColorClass?: string;
    path?: string | (() => void);
};

export type DropdownMenuProps = {
    id?: string;
    items?: DropdownMenuItem[];
    trigger: React.ReactNode;
    contentClassName?: string;
    itemClassName?: string;
    header?: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    theme?: 'light' | 'dark';
    value?: string | number | null;
    isScrollable?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    variant?: 'default' | 'skinnier'
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    items = [],
    trigger,
    contentClassName,
    itemClassName,
    header,
    content,
    footer,
    theme = 'dark',
    value,
    isScrollable = false,
    open,
    onOpenChange,
    variant = 'default',
}) => {
    return (
        <DropdownMenuPrimitive.Root open={open} onOpenChange={onOpenChange}>
            <DropdownMenuPrimitive.Trigger asChild>
                <div className="focus:outline-none">{trigger}</div>
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.Content
                    className={cn([
                        'rounded-md shadow-lg z-50',
                        variant === 'skinnier' ? 'w-40 text-left right-0' : 'w-48', // Skinnier variant alignment
                        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black',
                        contentClassName,
                        isScrollable ? 'max-h-[80vh] overflow-y-auto' : '',
                    ])}
                    align="end" // Align dropdown content to the right
                    sideOffset={4} // Space between trigger and dropdown
                    side="bottom"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Arrow for dropdown */}
                    <DropdownMenuPrimitive.Arrow
                        className={cn([
                            'fill-current',
                            theme === 'dark' ? 'text-gray-800' : 'text-white',
                        ])}
                    />

                    {header && <div className="p-3 border-b border-gray-300">{header}</div>}

                    {content && <div>{content}</div>}

                    {items.length > 0 && (
                        <DropdownMenuPrimitive.Content
                            className={cn([
                                'rounded-md shadow-lg z-50',
                                'w-60', // Increased width
                                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black',
                                'text-left', // Align text to the left
                                contentClassName,
                                isScrollable ? 'max-h-[80vh] overflow-y-auto' : '',
                            ])}
                            align="start" // Align dropdown content to the left of the trigger
                            sideOffset={4} // Space between trigger and dropdown
                            side="bottom"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Arrow for dropdown */}
                            <DropdownMenuPrimitive.Arrow
                                className={cn([
                                    'fill-current',
                                    theme === 'dark' ? 'text-gray-800' : 'text-white',
                                ])}
                            />

                            {header && <div className="p-3 border-b border-gray-300">{header}</div>}

                            {content && <div>{content}</div>}

                            {items.length > 0 && (
                                <div className="py-2">
                                    {items.map((item) =>
                                        item.customTrigger ? (
                                            <div key={item.id} className="w-full">{item.customTrigger}</div>
                                        ) : (
                                            <DropdownMenuPrimitive.Item
                                                key={item.id}
                                                className={cn([
                                                    'p-3 flex items-center gap-2 text-sm font-medium cursor-pointer rounded-md transition-colors focus-visible:outline-none',
                                                    theme === 'dark'
                                                        ? 'hover:bg-gray-700 hover:text-gray-300'
                                                        : 'hover:bg-gray-100 hover:text-gray-900',
                                                    item.hoverColorClass,
                                                    itemClassName,
                                                    value === item.label ? 'bg-primary text-white' : '',
                                                ])}
                                                onSelect={(e) => {
                                                    e.preventDefault();
                                                    item.onSelect?.();
                                                }}
                                            >
                                                {item.icon && (
                                                    <div className="w-5 h-5 flex items-center justify-center">
                                                        {item.icon}
                                                    </div>
                                                )}
                                                <span>{item.label}</span>
                                            </DropdownMenuPrimitive.Item>
                                        )
                                    )}
                                </div>
                            )}

                            {footer && <div className="border-t border-gray-300">{footer}</div>}
                        </DropdownMenuPrimitive.Content>
                    )}

                    {footer && <div className="border-t border-gray-300">{footer}</div>}
                </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
    );
};

export default DropdownMenu;
