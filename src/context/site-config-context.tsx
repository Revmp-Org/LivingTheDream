import React, { createContext, useContext, useEffect, useState } from "react";
import { SiteConfigProviderProps, GlobalConfigType } from "@/types";
import GlobalConfig from "@/config/global/index.json";

const SiteConfigContext = createContext<GlobalConfigType | undefined>(undefined);

export const SiteConfigProvider: React.FC<SiteConfigProviderProps> = ({
    children,
}) => {
    const [siteConfig, setSiteConfig] = useState<GlobalConfigType | null>(GlobalConfig);

    useEffect(() => {
        const fetchSiteConfig = async () => {
            try {
                const response = await fetch("http://localhost:8081/website", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-tenant-id": process.env.NEXT_PUBLIC_ORGANIZATION_ID || "",
                        "draft-mode": "true",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch site config");
                }

                const { data } = await response.json();
                console.log("Fetched site config:", data);

                setSiteConfig(data || GlobalConfig);
            } catch (error) {
                console.error("Error fetching site config, falling back to global config:", error);
                setSiteConfig(GlobalConfig);
            }
        };

        fetchSiteConfig();
    }, []);

    return (
        <SiteConfigContext.Provider value={siteConfig || GlobalConfig}>
            {children}
        </SiteConfigContext.Provider>
    );
};

export const useSiteConfig = (): GlobalConfigType => {
    const context = useContext(SiteConfigContext);
    if (!context) {
        throw new Error("useSiteConfig must be used within a SiteConfigProvider");
    }
    return context;
};
