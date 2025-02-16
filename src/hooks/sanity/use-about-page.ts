import { useEffect, useState } from "react";

export const useAboutPage = () => {
    const [aboutPageConfig, setAboutPageConfig] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGlobalConfig = async () => {
            try {
                const response = await fetch("/api/sanity/about-config");
                if (!response.ok) throw new Error("Failed to fetch global config");

                const result = await response.json();
                setAboutPageConfig(result);
            } catch (err) {
                console.error("Error loading global configuration:", err);
                setError("Failed to load configuration.");
            } finally {
                setLoading(false);
            }
        };

        fetchGlobalConfig();
    }, []);

    return { aboutPageConfig, loading, error };
}