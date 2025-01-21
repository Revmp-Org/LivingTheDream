import type React from 'react';

interface TimeLabelProps {
    time: string;
    theme: 'light' | 'dark';
}

const TimeLabel: React.FC<TimeLabelProps> = ({ time, theme }) => {
    const timeClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

    return (
        <div>
            <div className={`sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 ${timeClass}`}>
            {time}
        </div>
        </div>
    );
};

export default TimeLabel;