import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { cn } from '@/style';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { theme?: 'light' | 'dark' }
>(({ className, theme = 'light', ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(['border-b text-sm', theme === 'dark' ? 'text-white' : 'text-black', className])}
        {...props}
    />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { theme?: 'light' | 'dark' }
>(({ className, children, theme = 'light', ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn([
                'flex flex-1 items-center justify-between p-4 font-medium transition-all',
                theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-900' : 'bg-white text-black hover:bg-gray-100',
                '[&[data-state=open]>svg]:rotate-[-90deg]',
                className
            ])}
            {...props}
        >
            {children}
            <ChevronLeftIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { theme?: 'light' | 'dark' }
>(({ className, children, theme = 'light', ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn([
            'overflow-hidden p-4 text-sm transition-all',
            'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
            className
        ])}
        {...props}
    >
        <div>{children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };