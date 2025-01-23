import type React from "react";
import { Input } from "./input";
import { cn } from "@/style";
import { useDropdownMultiSelect } from "@/app/hooks/use-dropown-multi-select";
import Spinner from "./spinner";

export interface MultiSelectOption {
    id: string;
    label: string;
}

interface MultiSelectDropdownProps {
    selectedItems: string[];
    onChange: (selected: string[]) => void;
    options: MultiSelectOption[];
    placeholder?: string;
    theme?: "light" | "dark";
    label?: string;
    error?: string;
    isLoading?: boolean;
    filterChange?: (term: string) => void;
    maxItems?: number;
}

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
    selectedItems,
    onChange,
    options,
    placeholder,
    theme = "light",
    label,
    error,
    isLoading,
    filterChange,
    maxItems = null,
}) => {
    const {
        isOpen,
        setIsOpen,
        searchTerm,
        setSearchTerm,
        filteredOptions,
        toggleItem,
        containerRef,
    } = useDropdownMultiSelect({ selectedItems, onChange, options, filterChange, maxItems });

    // Generate a comma-separated string of selected items
    const selectedItemsLabel = selectedItems
        .map((id) => options.find((option) => option.id === id)?.label || "")
        .filter(Boolean)
        .join(", ");

    // Check if max items limit is reached
    const isMaxReached = maxItems !== null && selectedItems.length >= maxItems;

    return (
        <div className="space-y-2" ref={containerRef}>
            {label && (
                <div className="flex justify-between items-center">
                    <div className="block text-sm font-medium">{label}</div>
                    {maxItems !== null && (
                    <div className={cn([
                        "text-xs",
                        theme === "dark" ? "text-gray-400" : "text-gray-500",
                    ])}>
                        {selectedItems.length}/{maxItems} selected
                        </div>
                    )}
                </div>
            )}
            <div className="relative">
                <Input
                    value={isOpen ? searchTerm : selectedItemsLabel}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    placeholder={isMaxReached ? `Maximum ${maxItems} items selected` : placeholder}
                    theme={theme}
                    variant="outlined"
                    fullWidth
                    containerClassName={`bg-transparent ${error ? "border-red-500" : "border-gray-200 hover:border-gray-300"
                        } transition-colors`}
                    className="placeholder:text-gray-400"
                />
                {isOpen && (
                    <div
                        className={cn([
                            "absolute w-full mt-1 rounded-md shadow-lg z-50 max-h-60 overflow-auto",
                            theme === "dark" ? "bg-gray-800" : "bg-white",
                            "border",
                            theme === "dark" ? "border-gray-700" : "border-gray-200",
                        ])}
                    >
                        {isLoading ? (
                            <div className="p-4 text-center">
                                <Spinner size="sm" theme={theme} />
                            </div>
                        ) : filteredOptions.length > 0 ? (
                            filteredOptions.map((option: MultiSelectOption) => {
                                const isSelected = selectedItems.includes(option.id);
                                const isDisabled = isMaxReached && !isSelected;

                                return (
                                    <div
                                        key={option.id}
                                        className={cn([
                                            "px-4 py-2 flex justify-between items-center gap-2",
                                            isDisabled
                                                ? theme === "dark"
                                                    ? "text-gray-600 cursor-not-allowed"
                                                    : "text-gray-400 cursor-not-allowed"
                                                : "cursor-pointer",
                                            !isDisabled && (theme === "dark"
                                                ? "hover:bg-gray-700 text-white"
                                                : "hover:bg-gray-100 text-gray-900"),
                                            isSelected && (theme === "dark"
                                                ? "bg-gray-700"
                                                : "bg-gray-100")
                                        ])}
                                        onClick={() => !isDisabled && toggleItem(option.id)}
                                        onKeyDown={(e) => {
                                            if (!isDisabled && (e.key === "Enter" || e.key === " ")) {
                                                toggleItem(option.id);
                                            }
                                        }}
                                    >
                                        <span className="flex-1 text-sm">{option.label}</span>
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            disabled={isDisabled}
                                            onChange={() => !isDisabled && toggleItem(option.id)}
                                            className={cn([
                                                "accent-primary focus:ring-0",
                                                isDisabled && "cursor-not-allowed opacity-50"
                                            ])}
                                        />
                                    </div>
                                );
                            })
                        ) : (
                            <div
                                className={cn([
                                    "px-4 py-2 text-center",
                                    theme === "dark" ? "text-gray-400" : "text-gray-500",
                                ])}
                            >
                                No results found
                            </div>
                        )}
                    </div>
                )}
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default MultiSelectDropdown;