import { Input } from './input';
import { cn } from '@/style';
import Spinner from './spinner';
import { useAutocomplete } from '../../hooks/use-autocomplete';
import { motion, AnimatePresence } from 'framer-motion';

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
    selectedOptions = [],
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
            onSelect(id);
        } else {
            handleOptionSelect(id, label);
        }
        if (!disableFilter) {
            inputRef.current?.blur();
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
                    containerClassName={`bg-white ${error ? 'border-red-500' : 'border-gray-300 hover:border-gray-300'
                        } transition-colors`}
                    className={`placeholder:text-gray-400 ${disableFilter ? 'cursor-pointer' : ''}`}
                    readOnly={disableFilter}
                />

                <AnimatePresence>
                    {isOpen && (filteredOptions.length > 0 || isLoading || value) && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={cn([
                                'absolute w-full mt-1 rounded-md shadow-lg z-[9999] overflow-hidden',
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
                                filteredOptions.map((option, index) => (
                                    <motion.div
                                        key={option.id}
                                        onKeyDown={handleKeyDown(option.id, option.label)}
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
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
                                    </motion.div>
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};
