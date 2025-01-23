import { useState, useCallback } from 'react';

export const useDatePickerField = ({ selectedDate, onChange }: { selectedDate: Date; onChange: (date: Date) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [timeValue, setTimeValue] = useState(() => selectedDate ? selectedDate.toTimeString().substring(0, 5) : "00:00");

    const handleDateSelect = useCallback((date: Date) => {
        if (date) {
            const [hours, minutes] = timeValue.split(':').map(Number);
            date.setHours(hours, minutes);
            onChange(date);
        }
    }, [onChange, timeValue]);

    const handleTimeChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = event.target.value;
        setTimeValue(newTime);
        if (selectedDate) {
            const [hours, minutes] = newTime.split(':').map(Number);
            const updatedDate = new Date(selectedDate.setHours(hours, minutes));
            onChange(updatedDate);
        }
    }, [onChange, selectedDate]);

    const formatDateDisplay = useCallback(() => {
        return selectedDate ? `${selectedDate.toLocaleDateString()} ${timeValue}` : 'Select date & time';
    }, [selectedDate, timeValue]);

    return {
        isOpen,
        setIsOpen,
        selectedDate,
        handleDateSelect,
        handleTimeChange,
        formatDateDisplay,
        timeValue
    };
};
