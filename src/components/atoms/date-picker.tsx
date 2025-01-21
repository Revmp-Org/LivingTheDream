import type React from 'react';
import { DayPicker, type OnSelectHandler } from 'react-day-picker';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/atoms/popover';
import 'react-day-picker/dist/style.css';
import { useDatePickerField } from '@/app/hooks/use-date-picker';
import { cn } from '@/style';

interface DatePickerFieldProps {
    label?: string;
    selectedDate?: Date;
    onChange: (date: Date) => void;
    className?: string;
    isDisabled?: boolean;
    error?: string;
    position?: 'bottom' | 'right' | 'top' | 'left';
    minDate?: Date;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
    label,
    selectedDate,
    onChange,
    className,
    isDisabled,
    error,
    position = 'bottom',
    minDate
}) => {
    const {
        isOpen,
        setIsOpen,
        handleDateSelect,
        handleTimeChange,
        formatDateDisplay,
        timeValue
    } = useDatePickerField({ selectedDate: selectedDate || new Date(), onChange });

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
                            "bg-white dark:bg-gray-900",
                            "border rounded-md",
                            "text-sm",
                            error
                                ? "border-red-500"
                                : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600",
                            "text-gray-900 dark:text-gray-100",
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
                <PopoverContent className="w-auto p-0" align="start" side={position}>
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleDateSelect as OnSelectHandler<Date | undefined>}
                            className="border-0"
                            required={false}
                            disabled={isDisabled}
                            defaultMonth={selectedDate}
                        />
                        <input
                            type="time"
                            value={timeValue}
                            onChange={handleTimeChange}
                            disabled={isDisabled}
                            className={cn([
                                "mt-2 w-full px-3 py-2",
                                "text-sm",
                                "border rounded-md",
                                "border-gray-200 dark:border-gray-700",
                                "focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                                "bg-white dark:bg-gray-900",
                                "text-gray-900 dark:text-gray-100",
                                "h-10",
                            ])}
                        />
                    </div>
                </PopoverContent>
            </Popover>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default DatePickerField;
