import { useEffect, useState } from "react";

export const useContactPage = () => {
    const [contactPageConfig, setContactPageConfig] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGlobalConfig = async () => {
            try {
                const response = await fetch("/api/sanity/contact-config");
                if (!response.ok) throw new Error("Failed to fetch global config");

                const result = await response.json();
                setContactPageConfig(result);
            } catch (err) {
                console.error("Error loading global configuration:", err);
                setError("Failed to load configuration.");
            } finally {
                setLoading(false);
            }
        };

        fetchGlobalConfig();
    }, []);

    return { contactPageConfig, loading, error };
}