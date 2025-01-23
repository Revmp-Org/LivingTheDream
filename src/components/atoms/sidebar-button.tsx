import type { FC, ReactNode } from 'react';
import { Tooltip } from '@/components/atoms/tooltip';
import { useClientSide } from '@/hooks/use-client-side';

interface SidebarButtonProps {
    label: string;
    icon: ReactNode;
    onSelect: () => void;
    theme?: 'light' | 'dark';
    path?: string;
}

const SidebarButton: FC<SidebarButtonProps> = ({
    label,
    icon,
    onSelect,
    theme = 'light',
    path
}) => {
    const { pathname } = useClientSide();

    return (
        <Tooltip
            content={label}
            side="right"
            theme={theme}
        >
            <button
                onClick={onSelect}
                className={`p-3 rounded-lg transition-colors
                    ${theme === 'dark'
                        ? 'hover:bg-gray-700 text-gray-200'
                        : 'hover:bg-gray-200 text-gray-700'
                    }
                    ${path === pathname ? 'bg-gray-200 text-gray-700' : ''}
                `}
                type="button"
            >
                <span className="text-xl">{icon}</span>
            </button>
        </Tooltip>
    );
};

export default SidebarButton;