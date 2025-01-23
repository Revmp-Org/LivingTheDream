import type { AutocompleteOption } from "@/components/atoms/autocomplete";
import { useState, useMemo, useRef, useEffect } from "react";

interface AutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    onSelect: (id: string) => void;
    options: AutocompleteOption[];
    disableFilter?: boolean;
}

export const useAutocomplete = ({ value, onChange, onSelect, options, disableFilter }: AutocompleteProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLDivElement>(null);

    const filteredOptions = useMemo(() => {
        if (disableFilter) {
            return options;
        }

        return options.filter((option) =>
            option.label.toLowerCase().includes(value.toLowerCase())
        );
    }, [value, options, disableFilter]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
        setIsOpen(true);
    };

    const handleOptionSelect = (id: string, label: string) => {
        onChange("");
        onSelect(id);

        // Close dropdown only when filtering is enabled
        if (!disableFilter) {
            setIsOpen(false);
        }
    };

    const handleKeyDown = (id: string, label: string) => (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleOptionSelect(id, label);
        }
    };

    const handleFocus = () => setIsOpen(true);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return {
        isOpen,
        filteredOptions,
        inputRef,
        setIsOpen,
        handlers: {
            handleInputChange,
            handleOptionSelect,
            handleKeyDown,
            handleFocus,
        },
    };
};
