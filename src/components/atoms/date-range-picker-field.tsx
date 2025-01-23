import { DayPicker } from "react-day-picker";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/popover";
import "react-day-picker/dist/style.css";
import { useDateRangeField } from "@/app/hooks/use-date-range";
import { cn } from "@/style";

interface DateRangeFieldProps {
    label: string;
    startDate?: Date;
    endDate?: Date;
    onChange: (dates: { start?: Date; end?: Date }) => void;
    className?: string;
    isDisabled?: boolean;
    error?: string;
    min?: Date;
    max?: Date;
}

export const DateRangeField: React.FC<DateRangeFieldProps> = ({
    label,
    startDate,
    endDate,
    onChange,
    className,
    isDisabled,
    error,
    min,
    max,
}) => {
    const {
        isOpen,
        setIsOpen,
        selected,
        dateDisplay,
        handleSelect,
        calendarProps,
    } = useDateRangeField({ startDate, endDate, onChange });

    return (
        <div className="space-y-2">
            {label && <div className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</div>}
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
                            error
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600",
                            "text-gray-900 dark:text-gray-100",
                            "focus:outline-none focus:ring-2 focus:ring-blue-500",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                            "transition-colors duration-200",
                            className
                        ])}
                    >
                        <span className="text-sm">
                            {dateDisplay.mainText}
                        </span>
                        <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700">
                        <DayPicker
                            mode="range"
                            defaultMonth={startDate}
                            selected={selected}
                            onSelect={handleSelect}
                            numberOfMonths={2}
                            disabled={
                                (date: Date) => {
                                    // Disable days before the min date, but allow the min date itself
                                    if (min && date.getTime() < min.setHours(0, 0, 0, 0)) return true;

                                    // Disable days after the max date
                                    if (max && date > max) return true;

                                    return false;
                                }
                            }
                            {...calendarProps}
                            className={cn([
                                "border-0",
                                "[&_.rdp-day:hover:not([disabled])]:bg-gray-100",
                                "dark:[&_.rdp-day:hover:not([disabled])]:bg-gray-700",
                                "[&_.rdp-day_span]:text-gray-900",
                                "dark:[&_.rdp-day_span]:text-gray-100",
                                "[&_.rdp-day.rdp-day_selected]:bg-blue-500",
                                "[&_.rdp-day.rdp-day_selected]:text-white",
                                "[&_.rdp-day.rdp-day_selected:hover]:bg-blue-600",
                                "[&_.rdp-head_cell]:text-gray-500",
                                "dark:[&_.rdp-head_cell]:text-gray-400",
                                "[&_.rdp-button:hover:not([disabled])]:bg-gray-100",
                                "dark:[&_.rdp-button:hover:not([disabled])]:bg-gray-700",
                                "[&_.rdp-caption]:text-gray-900",
                                "dark:[&_.rdp-caption]:text-gray-100"
                            ])}
                        />
                        {dateDisplay.duration && (
                            <div className="mt-3 pt-3 border-t dark:border-gray-700">
                                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                                    <span>Duration:</span>
                                    <span className="font-medium">{dateDisplay.duration}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </PopoverContent>
            </Popover>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};
