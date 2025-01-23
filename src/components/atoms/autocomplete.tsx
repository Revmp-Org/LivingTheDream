import { Input } from './input';
import { cn } from '@/style';
import Spinner from './spinner';
import { useAutocomplete } from '../../hooks/use-autocomplete';

export interface AutocompleteOption {
    id: string;
    label: string;
}

interface AutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    onSelect: (id: string) => void;
    options: AutocompleteOption[];
    selectedOptions?: AutocompleteOption[];
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
    selectedOptions = [], // Default empty array for selected options
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
        disableFilter: alwaysShowOptions ? true : disableFilter,
    });

    const handleOptionClick = (id: string, label: string) => {
        if (selectedOptions.some((option) => option.id === id)) {
            onSelect(id); // Deselect the option if it's already selected
        } else {
            handleOptionSelect(id, label); // Select the option
        }

        // Only close the dropdown if filtering is enabled
        if (!disableFilter) {
            inputRef.current?.blur(); // Close the dropdown
        }
    };

    return (
        <div className={cn(['space-y-2', className])}>
            {label && <div className="block text-sm font-medium">{label}</div>}
            <div className="relative" ref={inputRef}>
                <Input
                    value={value}
                    onChange={disableFilter ? undefined : handleInputChange}
                    onFocus={handleFocus}
                    placeholder={placeholder}
                    theme={theme}
                    variant="outlined"
                    fullWidth
                    containerClassName={`bg-transparent ${error ? 'border-red-500' : 'border-gray-300 hover:border-gray-300'
                        } transition-colors`}
                    className={`placeholder:text-gray-400 ${disableFilter ? 'cursor-pointer' : ''}`}
                    readOnly={disableFilter}
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
                                        'px-4 py-2 cursor-pointer flex items-center justify-between',
                                        theme === 'dark' ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-900',
                                    ])}
                                    onClick={() => handleOptionClick(option.id, option.label)}
                                >
                                    <span>{option.label}</span>
                                    {selectedOptions.some((selected) => selected.id === option.id) && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-primary"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
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
