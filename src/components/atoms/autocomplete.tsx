import { Input } from './input';
import { cn } from '@/style';
import { useAutocomplete } from '@/app/hooks/use-autocomplete';
import Spinner from './spinner';

export interface AutocompleteOption {
    id: string;
    label: string;
}

interface AutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    onSelect: (id: string) => void;
    options: AutocompleteOption[];
    placeholder?: string;
    theme?: 'light' | 'dark';
    label?: string;
    error?: string;
    isLoading?: boolean;
    noResultsMessage?: React.ReactNode;
    className?: string;
    disableFilter?: boolean;
    alwaysShowOptions?: boolean;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
    value,
    onChange,
    onSelect,
    options,
    placeholder,
    theme = 'light',
    label,
    error,
    isLoading,
    noResultsMessage = 'No results found',
    className,
    disableFilter = false,
    alwaysShowOptions = false,
}) => {
    const {
        isOpen,
        filteredOptions,
        inputRef,
        handlers: { handleInputChange, handleOptionSelect, handleKeyDown, handleFocus },
    } = useAutocomplete({
        value,
        onChange,
        onSelect,
        options,
        disableFilter: alwaysShowOptions ? true : disableFilter, // Disable filter if alwaysShowOptions is true
    });

    const displayOptions = alwaysShowOptions ? options : filteredOptions; // Show all options if alwaysShowOptions is true

    return (
        <div className={cn(['space-y-2', className])}>
            {label && <div className="block text-sm font-medium">{label}</div>}
            <div className="relative" ref={inputRef}>
                <Input
                    value={value}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    placeholder={placeholder}
                    theme={theme}
                    variant="outlined"
                    fullWidth
                    containerClassName={`bg-transparent ${error ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                        } transition-colors`}
                    className="placeholder:text-gray-400"
                />

                {isOpen && (filteredOptions.length > 0 || isLoading || value) && (
                    <div
                        className={cn([
                            'absolute w-full mt-1 rounded-md shadow-lg z-[9999]',
                            theme === 'dark' ? 'bg-gray-800' : 'bg-white',
                            'border',
                            theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
                        ])}
                    >
                        {isLoading ? (
                            <div className="px-4 py-2 text-center">
                                <Spinner size="sm" theme={theme} />
                            </div>
                        ) : filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <div
                                    key={option.id}
                                    onKeyDown={handleKeyDown(option.id, option.label)}
                                    className={cn([
                                        'px-4 py-2 cursor-pointer',
                                        theme === 'dark' ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-900',
                                    ])}
                                    onClick={() => handleOptionSelect(option.id, option.label)}
                                >
                                    {option.label}
                                </div>
                            ))
                        ) : value ? (
                            <div
                                className={cn([
                                    'px-4 py-2 text-center',
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
                                ])}
                            >
                                {noResultsMessage}
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};
