import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/style';
import Spinner from './spinner';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white hover:bg-primary/80 hover:text-white',
                destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
                outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-primary hover:text-white',
                'outline-secondary': 'border border-input bg-accent hover:bg-accent hover:text-accent-foreground',
                secondary: 'bg-secondary text-primary border border-primary hover:bg-primary hover:text-white',
                ghost: 'hover:bg-primary/10',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-8 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-8 w-8',
            },
            theme: {
                light: '',
                dark: 'bg-gray-800 text-white border-white',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            theme: 'light',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    theme?: 'light' | 'dark';
    variant?: 'default' | 'destructive' | 'outline' | 'outline-secondary' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, loading = false, children, icon, theme = 'light', ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';

        return (
            <Comp
                className={cn(
                    [buttonVariants({ variant, size, theme }), className]
                )}
                ref={ref}
                {...props}
                disabled={loading || props.disabled}
            >
                {loading && (
                    <Spinner size="sm" className="mr-2" theme="dark" />
                )}
                <span>{children}</span>
                {icon && <span className="ml-2">{icon}</span>}
            </Comp>
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
