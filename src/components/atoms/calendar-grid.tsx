import type React from 'react';

interface CalendarGridProps {
    renderVerticalLines: () => React.ReactNode;
    renderHorizontalLines: () => React.ReactNode;
    renderEvents: () => React.ReactNode;
    children?: React.ReactNode;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
    children,
    renderVerticalLines,
    renderHorizontalLines,
    renderEvents,
}) => {
    return (
        <div className='grid flex-auto grid-cols-1 grid-rows-1'>
            {/* Horizontal lines */}
            <div
                className='col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100'
                style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
            >
                {renderHorizontalLines()}
            </div>

            {/* Vertical lines */}
            <div className='col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7'>
                {renderVerticalLines()}
            </div>

            {/* Events */}
            <ol
                className='col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 pr-8'
                style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto' }}
            >
                {renderEvents()}
            </ol>

            {children}
        </div>
    );
};

export default CalendarGrid;