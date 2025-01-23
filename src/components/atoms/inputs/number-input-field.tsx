import { PersonIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/atoms/input';

// NumberInputField.tsx
interface NumberInputFieldProps {
    label?: string;
    value: string | number | undefined;
    onChange: (value: number | undefined) => void;
    theme: 'light' | 'dark';
    placeholder: string;
    error?: string;
    icon?: React.ReactNode;
    min?: number;
    max?: number;
}

export const NumberInputField: React.FC<NumberInputFieldProps> = ({
    label,
    value,
    onChange,
    theme,
    placeholder,
    error,
    icon,
    min,
    max
}) => (
    <div className="space-y-2">
        <div className="block text-sm font-medium">{label}</div>
        <Input
            type="number"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                const val = e.target.value
                if (val === '') {
                    onChange(undefined)
                } else {
                    const num = Number(val)

                    if (min !== undefined && num < min) {
                        return
                    }
                    if (max !== undefined && num > max) {
                        return
                    }
                    onChange(!Number.isNaN(num) ? num : undefined);
                }
            }}
            theme={theme}
            leftIcon={icon || <PersonIcon height={16} width={16} />}
            sizeVariant="md"
            variant="outlined"
            fullWidth
            containerClassName="bg-transparent border-gray-200 hover:border-gray-300 transition-colors"
            className="placeholder:text-gray-400"
        />
        {error && (
            <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
    </div>
);