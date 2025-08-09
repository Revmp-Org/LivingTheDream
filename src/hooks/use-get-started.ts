import { useState } from "react";
import { AutocompleteOption } from "@/components/atoms/autocomplete";
import useGoogleAnalytics from "./use-google-analytics";

export type FormData = {
    services: string[];
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    eventDate: string;
    referralSource: string;
};

export const useContactForm = (webhookUrl: string, serviceOptions: { id: string; label: string }[], referralOptions: { id: string; label: string }[]) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [selectedServices, setSelectedServices] = useState<AutocompleteOption[]>([]);
    const [referralSource, setReferralSource] = useState<AutocompleteOption[]>([]);
    const [eventDate, setEventDate] = useState<Date | null>(null);
    const validateForm = (formData: FormData) => {
        const newErrors: Partial<FormData> = {};

        if (formData.services.length === 0) {
            newErrors.services = ["Please select at least one service."];
        }
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        }
        if (!formData.eventDate) {
            newErrors.eventDate = "Please select an event date.";
        }
        if (!formData.referralSource) {
            newErrors.referralSource = "Please select how you heard about us.";
        }

        return newErrors;
    };

    const handleServiceSelect = (id: string) => {
        const selectedOption = serviceOptions.find((option) => option.id === id);
        if (selectedOption) {
            if (selectedServices.some((service) => service.id === selectedOption.id)) {
                setSelectedServices(selectedServices.filter((service) => service.id !== selectedOption.id));
            } else {
                setSelectedServices([...selectedServices, selectedOption]);
            }
        }
    };

    const handleEventDateChange = (date: Date) => {
        setEventDate(date);
    };

    const splitName = (fullName: string): { firstName: string; lastName: string } => {
        const nameParts = fullName.trim().split(/\s+/);
        if (nameParts.length >= 2) {
            const lastName = nameParts.pop() || '';
            const firstName = nameParts.join(' ');
            return { firstName, lastName };
        }
        return { firstName: fullName, lastName: '' };
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});


        const form = e.target as HTMLFormElement;
        const fullName = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
        const { firstName, lastName } = splitName(fullName);

        const formData: FormData = {
            services: selectedServices.map((service) => service.label),
            name: fullName,
            firstName: firstName,
            lastName: lastName,
            email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
            phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
            eventDate: eventDate ? eventDate.toISOString().split("T")[0] : "",
            referralSource: referralSource.length > 0 ? referralSource[0].label : "",
        };

        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setFormSubmitted(true);
            form.reset();
            setSelectedServices([]);
            setReferralSource([]);
            setEventDate(null);
        } catch (err) {
            setErrors({ email: "Something went wrong. Please try again." });
            console.error("Submission error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReferralSourceChange = (id: string) => {
        const selectedOption = referralOptions.find((option) => option.id === id);
        if (selectedOption) {
            setReferralSource([selectedOption]);
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
        referralSource,
        setReferralSource,
        referralOptions,
        handleReferralSourceChange,
        eventDate,
        handleEventDateChange,
    };
};
