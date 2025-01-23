import { useState } from "react";
import { AutocompleteOption } from "@/components/atoms/autocomplete";

export type FormData = {
    services: string[];
    contactName: string;
    email: string;
    phone: string;
    additionalInfo: string;
};

const serviceOptions: AutocompleteOption[] = [
    { id: "1", label: "Web Development" },
    { id: "2", label: "SEO" },
    { id: "3", label: "Social Media Marketing" },
    { id: "4", label: "Content Creation" },
];

export const useContactForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [selectedServices, setSelectedServices] = useState<AutocompleteOption[]>([]);

    const validateForm = (formData: FormData) => {
        const newErrors: Partial<FormData> = {};

        if (formData.services.length === 0) {
            newErrors.services = ["Please select at least one service"];
        }

        if (!formData.contactName.trim()) {
            newErrors.contactName = "Contact name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.additionalInfo.trim()) {
            newErrors.additionalInfo = "Please provide additional information";
        }

        return newErrors;
    };

    const handleServiceSelect = (id: string) => {
        const selectedOption = serviceOptions.find((option) => option.id === id);

        if (selectedOption) {
            if (selectedServices.some((service) => service.id === selectedOption.id)) {
                // Remove the option if it's already selected
                setSelectedServices(selectedServices.filter((service) => service.id !== selectedOption.id));
            } else {
                // Add the option if it's not selected
                setSelectedServices([...selectedServices, selectedOption]);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        const form = e.target as HTMLFormElement;

        const formData: FormData = {
            services: selectedServices.map((service) => service.label),
            contactName: (form.elements.namedItem("contactName") as HTMLInputElement)?.value || "",
            email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
            phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
            additionalInfo: (form.elements.namedItem("additionalInfo") as HTMLTextAreaElement)?.value || "",
        };

        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL || "", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setFormSubmitted(true);
            form.reset();
            setSelectedServices([]);
        } catch (err) {
            setErrors({ email: "Something went wrong. Please try again." });
            console.error("Submission error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formSubmitted,
        isLoading,
        errors,
        selectedServices,
        serviceOptions,
        handleServiceSelect,
        handleSubmit,
    };
};
