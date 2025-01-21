import React, { createContext, useContext, useEffect, useState } from "react";
import { PageConfig } from "@/types";

const PageConfigContext = createContext<PageConfig | undefined>(undefined);

export const PageConfigProvider: React.FC<{ slug: string; children: React.ReactNode }> = ({ slug, children }) => {
    const [pageConfig, setPageConfig] = useState<PageConfig | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPageConfig = async () => {
            try {
                const response = await fetch(`http://localhost:8081/pages/${slug}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-tenant-id": process.env.NEXT_PUBLIC_ORGANIZATION_ID || "",
                        "draft-mode": "true",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch page config");
                }

                const { data } = await response.json();
                setPageConfig(data);
            } catch (error) {
                console.error("Error fetching page config:", error);
                setPageConfig(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPageConfig();
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <PageConfigContext.Provider value={pageConfig || undefined}>
            {children}
        </PageConfigContext.Provider>
    );
};

export const usePageConfig = (): PageConfig | undefined => {
    return useContext(PageConfigContext);
};
