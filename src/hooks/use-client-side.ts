"use client";

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export type AppRouter = ReturnType<typeof useRouter>;

export function useClientSide() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return { pathname, searchParams, router, mounted };
}