import type React from 'react';
import { DayPicker, type OnSelectHandler, getDefaultClassNames } from 'react-day-picker';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/atoms/popover';
import 'react-day-picker/dist/style.css';
import { useDatePickerField } from '@/hooks/use-date-picker';
import { cn } from '@/style';
import { motion, AnimatePresence } from 'framer-motion';

interface DatePickerFieldProps {
    label?: string;
    selectedDate?: Date;
    onChange: (date: Date) => void;
    className?: string;
    isDisabled?: boolean;
    error?: string;
    position?: 'bottom' | 'right' | 'top' | 'left';
    minDate?: Date;
    theme?: 'light' | 'dark';
    hideTimeField?: boolean;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
    label,
    selectedDate,
    onChange,
    className,
    isDisabled,
    error,
    position = 'bottom',
    minDate,
    theme = 'light',
    hideTimeField = false,
}) => {
    const {
        isOpen,
        setIsOpen,
        handleDateSelect,
        handleTimeChange,
        formatDateDisplay,
        timeValue
    } = useDatePickerField({ selectedDate: selectedDate || new Date(), onChange, hideTimeField });

    const defaultClassNames = getDefaultClassNames();

    return (
        <div className={cn(['space-y-2', className])}>
            {label && <div className="block text-sm font-medium">{label}</div>}
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        disabled={isDisabled}
                        className={cn([
                            "w-full px-3 py-2",
                            "flex items-center justify-between",
                            theme === 'light' ? "bg-white" : "bg-gray-900",
                            "border rounded-md",
                            "text-sm",
                            error
                                ? "border-red-500"
                                : theme === 'light' ? "border-gray-200" : "border-gray-700",
                            theme === 'light' ? "hover:border-gray-300" : "hover:border-gray-600",
                            theme === 'light' ? "text-gray-900" : "text-gray-100",
                            "focus:outline-none",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                            "transition-colors duration-200",
                            "h-10",
                        ])}
                    >
                        <span className="text-sm text-left flex-1">{formatDateDisplay()}</span>
                        <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                    </button>
                </PopoverTrigger>

                <AnimatePresence>
                    {isOpen && (
                        <PopoverContent className="w-auto p-0" align="start" side={position}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className={cn([
                                    "p-3 shadow-lg rounded-lg",
                                    theme === 'light' ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700",
                                ])}
                            >
                                <DayPicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={handleDateSelect as OnSelectHandler<Date | undefined>}
                                    classNames={{
                                        ...defaultClassNames,
                                        today: "border-primary font-bold", // Border around today's date
                                        selected: "bg-primary text-white rounded-md", // Selected date style
                                        day: "rounded-md p-2 transition-colors duration-200", // Base day style
                                        day_disabled: "text-gray-400 cursor-not-allowed", // Disabled days
                                        day_outside: "text-gray-300", // Days outside current month
                                        root: `${defaultClassNames.root} shadow-md p-3 bg-white rounded-md`, // Root styles
                                        chevron: "fill-primary hover:fill-primary-dark", // Chevron styling
                                    }}
                                    required={false}
                                    disabled={isDisabled}
                                    defaultMonth={selectedDate}
                                />

                                {!hideTimeField && (
                                    <input
                                        type="time"
                                        value={timeValue}
                                        onChange={handleTimeChange}
                                        disabled={isDisabled}
                                        className={cn([
                                            "mt-2 w-full px-3 py-2",
                                            "text-sm",
                                            "border rounded-md",
                                            theme === 'light' ? "border-gray-200" : "border-gray-700",
                                            "focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                                            theme === 'light' ? "bg-white" : "bg-gray-900",
                                            theme === 'light' ? "text-gray-900" : "text-gray-100",
                                            "h-10",
                                        ])}
                                    />
                                )}
                            </motion.div>
                        </PopoverContent>
                    )}
                </AnimatePresence>
            </Popover>

            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default DatePickerField;
