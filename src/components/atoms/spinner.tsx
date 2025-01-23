import type React from 'react';
import { cn } from '@/style';

interface SpinnerProps {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    theme?: 'light' | 'dark';
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
    size = 'md',
    theme = 'light',
    className,
}) => {
    const sizeClasses = {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
    };

    const colorClass = theme === 'dark' ? 'text-white' : 'text-gray-900';

    return (
        <div
            aria-label="Loading..."
            className={cn([
                'flex items-center justify-center',
                className, // Ensure className is applied to wrapper
            ])}
        >
            <svg
                className={cn(['animate-spin', sizeClasses[size], colorClass])}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                role="img"
            >
                <title>Loading</title>
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        </div>
    );
};

export default Spinner;
