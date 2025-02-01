import { useState } from "react";
import { AutocompleteOption } from "@/components/atoms/autocomplete";
import useGoogleAnalytics from "./use-google-analytics";

export type FormData = {
    services: string[];
    name: string;  // Full name from form
    firstName: string; // Split for submission
    lastName: string;  // Split for submission
    companyName: string;
    email: string;
    phone: string;
    referralSource: string;
};

const serviceOptions: AutocompleteOption[] = [
    { id: "1", label: "Web Development" },
    { id: "2", label: "SEO" },
    { id: "3", label: "Social Media Marketing" },
    { id: "4", label: "Content Creation" },
];

export const referralOptions = [
    { id: "1", label: "Google Search" },
    { id: "2", label: "Social Media" },
    { id: "3", label: "Referral" },
    { id: "4", label: "Online Advertisement" },
    { id: "5", label: "Other" },
];

export const useContactForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [selectedServices, setSelectedServices] = useState<AutocompleteOption[]>([]);
    const [referralSource, setReferralSource] = useState<AutocompleteOption[]>([]);
    const { trackClick } = useGoogleAnalytics();
    const validateForm = (formData: FormData) => {
        const newErrors: Partial<FormData> = {};

        if (formData.services.length === 0) {
            newErrors.services = ["Please select at least one service"];
        }

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = "Company name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.referralSource) {
            newErrors.referralSource = "Please select how you heard about us";
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
        const services = selectedServices.map((service) => service.label);

        const formData: FormData = {
            services: services,
            name: fullName,
            firstName,
            lastName,
            companyName: (form.elements.namedItem("companyName") as HTMLInputElement)?.value || "",
            email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
            phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
            referralSource: referralSource.length > 0 ? referralSource[0].label : "",
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

            trackClick("Contact Form Submit", "Contact Form", "contact_form_submit", "");


            setFormSubmitted(true);
            form.reset();
            setSelectedServices([]);
            setReferralSource([]);
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
    };
};
