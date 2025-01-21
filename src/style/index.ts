import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type CnOptions = {
    base?: ClassValue;
    variants?: Record<string, ClassValue>;
    conditionals?: Record<string, boolean>;
};

export function cn(inputs: ClassValue[], options?: CnOptions) {
    const { base, variants, conditionals } = options || {};

    const variantClasses = variants
        ? Object.entries(variants)
            .filter(([key]) => conditionals?.[key])
            .map(([, value]) => value)
        : [];

    return twMerge(clsx(base, ...inputs, ...variantClasses));
}