import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/style'
import { buttonVariants } from './button'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn([
            'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            className
        ])}
        {...props}
    />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay ref={ref} />
        <DialogPrimitive.Content
            ref={ref}
            onCloseAutoFocus={(e) => {
                e.preventDefault();
            }}
            className={cn([
                'fixed left-[50%] top-[50%] z-50 w-full max-w-lg',
                'transform -translate-x-[50%] -translate-y-[50%]',
                'bg-white p-6 shadow-lg rounded-lg',
                'data-[state=open]:animate-slide-up',
                'data-[state=closed]:animate-slide-down',
                'duration-200',
                className
            ])}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </DialogPortal>
))

DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn(['flex flex-col space-y-2', className])} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(['flex justify-end space-x-2 mt-4', className])}
        {...props}
    />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(['text-lg font-semibold', className])}
        {...props}
    />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn(['text-sm text-muted-foreground', className])}
        {...props}
    />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

const DialogClose = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Close>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Close
        ref={ref}
        className={cn([buttonVariants({ variant: 'outline' }), className])}
        {...props}
    />
))
DialogClose.displayName = DialogPrimitive.Close.displayName

export {
    Dialog,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogClose,
}
