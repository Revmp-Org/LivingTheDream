import { useState, useCallback } from 'react';
import type { DateRange } from 'react-day-picker';
import moment from 'moment';

interface DateRangeValue {
    start?: Date;
    end?: Date;
}

interface UseDateRangeFieldProps {
    startDate?: Date;
    endDate?: Date;
    onChange: (dates: DateRangeValue) => void;
}

interface UseDateRangeFieldReturn {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    selected: DateRange | undefined;
    dateDisplay: {
        mainText: string;
        subText?: string;
        duration?: string;
    };
    handleSelect: (range: DateRange | undefined) => void;
    calendarProps: {
        modifiers: { range: DateRange | undefined };
        modifiersStyles: {
            range: { backgroundColor: string; color: string };
            today: { color: string; fontWeight: string };
            range_start: { backgroundColor: string; color: string; borderRadius: string };
            range_end: { backgroundColor: string; color: string; borderRadius: string };
            range_middle: { color: string; backgroundColor: string };
        };
        styles: {
            months: { gap: string };
            caption: { color: string };
            head_cell: { color: string; fontSize: string };
            cell: { margin: string; borderRadius: string };
            day: {
                margin: string;
                width: string;
                height: string;
                fontSize: string;
                transition: string;
                borderRadius: string;
            };
        };
        modifiersClassNames: {
            selected: string;
            range_start: string;
            range_end: string;
            range_middle: string;
        };
    };
}
export const useDateRangeField = ({
    startDate,
    endDate,
    onChange,
}: UseDateRangeFieldProps): UseDateRangeFieldReturn => {
    const [isOpen, setIsOpen] = useState(false);

    // Use dates directly without conversion
    const selected: DateRange | undefined = startDate
        ? {
            from: startDate ? new Date(moment(startDate).toISOString()) : undefined,
            to: endDate ? new Date(moment(endDate).toISOString()) : undefined
        }
        : undefined;

    const handleSelect = useCallback((range: DateRange | undefined) => {
        onChange({
            start: range?.from ? new Date(moment(range.from).toISOString()) : undefined,
            end: range?.to ? new Date(moment(range.to).toISOString()) : undefined
        });
    }, [onChange]);

    const formatDateRange = useCallback((range: DateRange | undefined): string => {
        if (!range?.from) return 'Select date range';
        if (!range.to) return moment(range.from).format('MMM D, YYYY');

        const fromDate = moment(range.from);
        const toDate = moment(range.to);
        const fromYear = fromDate.year();
        const toYear = toDate.year();

        if (fromYear === toYear) {
            return `${fromDate.format('MMM D')} - ${toDate.format('MMM D, YYYY')}`;
        }

        return `${fromDate.format('MMM D, YYYY')} - ${toDate.format('MMM D, YYYY')}`;
    }, []);

    const formatDayRange = useCallback((from: Date, to: Date): string => {
        return `${moment(from).format('MMM D')} - ${moment(to).format('MMM D, YYYY')}`;
    }, []);

    const getDurationInDays = useCallback((from: Date, to: Date): number => {
        return moment(to).diff(moment(from), 'days');
    }, []);

    const dateDisplay = {
        mainText: formatDateRange(selected),
        subText: selected?.from && selected.to
            ? formatDayRange(selected.from, selected.to)
            : undefined,
        duration: selected?.from && selected.to
            ? `${getDurationInDays(selected.from, selected.to)} days`
            : undefined
    };

    const calendarProps = {
        modifiers: {
            range: selected
        },
        modifiersStyles: {
            range: {
                backgroundColor: '#3b82f6',
                color: 'white'
            },
            today: {
                color: '#3b82f6',
                fontWeight: 'bold'
            },
            range_start: {
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '4px'
            },
            range_end: {
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '4px'
            },
            range_middle: {
                color: 'white',
                backgroundColor: '#60a5fa'
            }
        },
        styles: {
            months: { gap: '1rem' },
            caption: { color: 'inherit' },
            head_cell: {
                color: 'inherit',
                fontSize: '0.875rem'
            },
            cell: {
                margin: '0px',
                borderRadius: '0px'
            },
            day: {
                margin: '0px',
                width: '40px',
                height: '40px',
                fontSize: '0.875rem',
                transition: 'all 0.2s',
                borderRadius: '4px'
            }
        },
        modifiersClassNames: {
            selected: 'rdp-day_selected',
            range_start: 'rdp-day_range_start',
            range_end: 'rdp-day_range_end',
            range_middle: 'rdp-day_range_middle'
        }
    };


    return {
        isOpen,
        setIsOpen,
        selected,
        dateDisplay,
        handleSelect,
        calendarProps
    };
};