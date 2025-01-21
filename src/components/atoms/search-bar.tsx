import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import type React from 'react';
import { Input } from './input';
import { cn } from '@/style';

interface SearchBarProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    theme?: 'light' | 'dark';
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search...',
    value,
    onChange,
    theme = 'light',
    className
}) => {
    return (
        <div className="w-full sm:w-72 md:w-80 lg:w-96">
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                theme={theme}
                leftIcon={
                    <MagnifyingGlassIcon
                        className="text-gray-400"
                        height={16}
                        width={16}
                    />
                }
                sizeVariant="md"
                variant="outlined"
                containerClassName={cn([
                    'bg-transparent border border-gray-200 hover:border-gray-300 transition-colors',
                    'focus-ring-none',
                    className
                ])}
                className="placeholder:text-gray-400"
            />
        </div>
    );
};

export default SearchBar;