import { useEffect, useState } from "react";

export const useServicePage = (slug: string) => {
    const [servicePageConfig, setServicePageConfig] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchServicePage = async () => {
            try {
                const response = await fetch(`/api/sanity/service-config?slug=${slug}`);
                if (!response.ok) throw new Error("Failed to fetch service page");

                const result = await response.json();
                setServicePageConfig(result);
            } catch (err) {
                console.error("Error loading service page:", err);
                setError("Failed to load service page.");
            } finally {
                setLoading(false);
            }
        };

        fetchServicePage();
    }, [slug]);

    return { servicePageConfig, loading, error };
};
