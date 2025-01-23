import type { FC } from 'react';
import { cn } from '@/style';

interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    theme?: 'light' | 'dark';
    hoverEffect?: boolean;
}

const InfoItem: FC<InfoItemProps> = ({
    icon,
    label,
    value,
    theme = 'light',
    hoverEffect = true
}) => (
    <div className={cn([
        "flex items-center gap-3 p-4 rounded-lg",
        theme === 'dark'
            ? hoverEffect ? "bg-gray-700 hover:bg-gray-700/80" : "bg-gray-700"
            : hoverEffect ? "bg-gray-50 hover:bg-gray-100" : "bg-gray-50"
    ])}>
        <div className="flex-shrink-0">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className={cn([
                "text-sm",
                theme === 'dark' ? "text-gray-400" : "text-gray-500"
            ])}>
                {label}
            </span>
            <span className={cn([
                "font-medium",
                theme === 'dark' ? "text-gray-200" : "text-gray-700"
            ])}>
                {value}
            </span>
        </div>
    </div>
);

export { InfoItem };
export type { InfoItemProps };