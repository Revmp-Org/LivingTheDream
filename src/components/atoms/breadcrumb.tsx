"use client";

import type React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/style';

type BreadcrumbProps = {
    theme: 'light' | 'dark';
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ theme }) => {
    const pathname = usePathname();
    const breadcrumb = pathname?.split('/').filter(Boolean).slice(0, -1).map((segment, index) => {

        return (
            <span key={segment} className="flex items-center">
                {index > 0 && <span className="mx-1">{'/'}</span>}
                <div
                    className={cn([
                        'text-gray-600',
                        theme === 'dark' ? 'text-white' : 'text-black'
                    ])}
                >
                    {segment}
                </div>
            </span>
        );
    });

    return <div className="flex items-center space-x-1">{breadcrumb}</div>;
};

export default Breadcrumb;