import { cn } from '@/style';
import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';
import { forwardRef, useId } from 'react';

// Types
export type InputSizeVariant = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'filled' | 'outlined';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Input label */
    label?: string;
    /** Input theme */
    theme?: 'light' | 'dark';
    /** Left side icon or element */
    leftIcon?: ReactNode;
    /** Right side icon or element */
    rightIcon?: ReactNode;
    /** Input size variant */
    sizeVariant?: InputSizeVariant;
    /** Input style variant */
    variant?: InputVariant;
    /** Full width mode */
    fullWidth?: boolean;
    /** Error state */
    error?: boolean;
    /** Error message */
    errorMessage?: string;
    /** Helper text below input */
    helperText?: string;
    /** Container className */
    containerClassName?: string;
    /** Is textarea */
    isTextArea?: boolean;
    /** Rows */
    rows?: number;
}


// Styles
const inputContainerStyles = cva(
    'flex items-center border rounded-lg shadow-sm',
    {
        variants: {
            theme: {
                light: 'border-gray-300 bg-white',
                dark: 'border-gray-700 bg-gray-900'
            },
            variant: {
                default: '',
                filled: 'border-transparent',
                outlined: 'bg-transparent'
            },
            size: {
                sm: 'h-8',
                md: 'h-10',
                lg: 'h-12'
            },
            fullWidth: {
                true: 'w-full',
                false: 'w-auto'
            },
            error: {
                true: 'border-red-500',
                false: ''
            }
        },
        defaultVariants: {
            theme: 'light',
            variant: 'default',
            size: 'md',
            fullWidth: false,
            error: false
        }
    }
);

const inputStyles = cva(
    'flex-1 focus:outline-none bg-transparent',
    {
        variants: {
            theme: {
                light: 'text-gray-700 placeholder-gray-400',
                dark: 'text-white placeholder-gray-500'
            },
            variant: {
                default: '',
                filled: 'bg-gray-100 dark:bg-gray-800',
                outlined: 'bg-transparent'
            },
            size: {
                sm: 'text-sm px-2 py-1',
                md: 'text-base px-3 py-2',
                lg: 'text-lg px-4 py-3'
            },
            isTextArea: {
                true: 'resize-none min-h-[100px]',
                false: ''
            }
        },
        defaultVariants: {
            theme: 'light',
            variant: 'default',
            size: 'md'
        }
    }
);

const iconContainerStyles = cva(
    'flex items-center justify-center',
    {
        variants: {
            size: {
                sm: 'w-8',
                md: 'w-10',
                lg: 'w-12'
            }
        },
        defaultVariants: {
            size: 'md'
        }
    }
);

// Component
export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    theme = 'light',
    leftIcon,
    rightIcon,
    sizeVariant = 'md',
    variant = 'default',
    fullWidth = false,
    error = false,
    errorMessage,
    helperText,
    className,
    containerClassName,
    isTextArea = false,
    rows = 4,
    ...props
}, ref) => {
    const inputId = useId();

    return (
        <div className="w-full space-y-1">
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium">
                    {label}
                </label>
            )}
            <div
                className={cn([
                    inputContainerStyles({ theme, variant, size: sizeVariant, fullWidth, error }),
                    isTextArea && 'h-auto',
                    containerClassName
                ])}
            >
                {leftIcon && !isTextArea && (
                    <div className={cn([
                        iconContainerStyles({ size: sizeVariant }),
                        theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    ])}>
                        {leftIcon}
                    </div>
                )}

                {isTextArea ? (
                    <textarea
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        rows={rows}
                        className={cn([
                            inputStyles({ theme, variant, size: sizeVariant, isTextArea }),
                            className
                        ])}
                        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                ) : (
                    <input
                        ref={ref as React.Ref<HTMLInputElement>}
                        className={cn([
                            inputStyles({ theme, variant, size: sizeVariant, isTextArea }),
                            className
                        ])}
                        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                    />
                )}

                {rightIcon && !isTextArea && (
                    <div className={cn([
                        iconContainerStyles({ size: sizeVariant }),
                        theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    ])}>
                        {rightIcon}
                    </div>
                )}
            </div>

            {(error && errorMessage) && (
                <p className="text-sm text-red-500">{errorMessage}</p>
            )}

            {(!error && helperText) && (
                <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                    {helperText}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input';