import type React from 'react';
import { Input } from '@/components/atoms/input';

interface FormTextareaProps {
    id: string;
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    theme?: 'light' | 'dark';
    error?: string;
    disabled?: boolean;
    className?: string;
    hideLabel?: boolean;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
    id,
    label,
    value,
    onChange,
    placeholder,
    theme = 'light',
    error,
    disabled = false,
    className,
    hideLabel = false
}) => (
    <div className={`space-y-2 ${className}`}>
        {!hideLabel && <div className="block text-sm font-medium">{label}</div>}
        <Input
            id={id}
            isTextArea
            rows={3}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            theme={theme}
            sizeVariant="md"
            variant="outlined"
            fullWidth
            containerClassName="bg-transparent border-gray-200 hover:border-gray-300 transition-colors"
            className="placeholder:text-gray-400"
            error={!!error}
            errorMessage={error}
            disabled={disabled}
        />
    </div>
);