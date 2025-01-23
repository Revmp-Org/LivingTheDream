import { Input } from '@/components/atoms/input';

interface FormInputProps {
    id: string;
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    theme: 'light' | 'dark';
    error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
    id,
    label,
    value,
    onChange,
    placeholder,
    theme,
    error,
}) => (
    <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium">
            {label}
        </label>
        <Input
            id={id}
            type="text"
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
        />
        {error && (
            <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
    </div>
);
