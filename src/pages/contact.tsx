import { useState } from "react";
import Head from "next/head";
import Input from "@/components/organism/Input";
import { Button } from "@/components/atoms/button";
import NavLink from "@/components/organism/NavLink";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    schoolName: string;
    role: string;
    phone: string;
    submit: string;
};

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = (formData: FormData) => {
        const newErrors: Partial<FormData> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.schoolName.trim()) {
            newErrors.schoolName = "School name is required";
        }

        // Add role validation
        if (!formData.role) {
            newErrors.role = "Role is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        const form = e.target as HTMLFormElement;

        const formData = {
            firstName: (form.elements.namedItem("first-name") as HTMLInputElement)?.value || "",
            lastName: (form.elements.namedItem("last-name") as HTMLInputElement)?.value || "",
            email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
            schoolName: (form.elements.namedItem("school-name") as HTMLInputElement)?.value || "",
            role: (form.elements.namedItem("role") as HTMLSelectElement)?.value || "",
            phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
            submit: "Submit",
        };

        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("https://hook.us2.make.com/45lixo1se6j22yquuv5w1j4bvy980gvr", {
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
        } catch (err) {
            setErrors({ submit: "Something went wrong. Please try again." });
            console.error("Submission error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Get Started with RevampEdu</title>
                <meta
                    name="description"
                    content="Sign up to join the RevampEdu community and take part in transforming education."
                />
                <meta property="og:title" content="Get Started with RevampEdu" />
                <meta property="og:description" content="Join our community and help shape the future of education." />
                <meta name="keywords" content="education, teaching tools, student success, academic solutions" />
                <link rel="canonical" href="https://www.revampedu.com/get-started" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "Get Started with RevampEdu",
                            description:
                                "Sign up to join the RevampEdu community and take part in transforming education.",
                            url: "https://www.revampedu.com/get-started",
                        }),
                    }}
                />
            </Head>

            <div className="pt-16 pb-12">
                <div className="custom-screen text-gray-600">
                    <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center mb-12">
                        Be a Part of the RevampEdu Community
                    </h1>
                    <div className="max-w-6xl mx-auto lg:flex lg:gap-12">
                        {/* Survey Section */}
                        <div className="lg:w-1/2 mb-12 lg:mb-0 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-0 border-b lg:border-b-0 border-gray-200">
                            <h2 className="text-gray-800 text-2xl font-semibold sm:text-3xl mb-6">
                                Take Our Survey
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Help us understand your needs and challenges as an educator. By participating in our survey,
                                you contribute to building solutions that empower schools, teachers, and students.
                            </p>
                            <div className="mb-8">
                                <p className="text-gray-700 font-medium mb-2">
                                    Next Steps:
                                </p>
                                <p className="text-gray-600">
                                    Choose your role below and share your valuable insights.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <NavLink
                                    href="https://ff87uuv1tyx.typeform.com/to/oK5cKPdJ"
                                    className="flex items-center justify-center flex-1 font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 px-8 py-3 rounded-lg transition-colors duration-200"
                                    analytics={{
                                        eventLabel: "Teacher Survey",
                                        eventCategory: "Survey Interaction",
                                        eventAction: "link_click",
                                        eventValue: "Teacher Survey",
                                    }}
                                >
                                    Teacher Survey
                                </NavLink>

                                <NavLink
                                    href="https://ff87uuv1tyx.typeform.com/to/z3QzKcB3"
                                    className="flex items-center justify-center flex-1 font-medium text-indigo-600 bg-white border-2 border-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 px-8 py-3 rounded-lg transition-colors duration-200"
                                    analytics={{
                                        eventLabel: "Administrator Survey",
                                        eventCategory: "Survey Interaction",
                                        eventAction: "link_click",
                                        eventValue: "Administrator Survey",
                                    }}
                                >
                                    Administrator Survey
                                </NavLink>
                            </div>
                        </div>
                        {/* Email Sign-Up Section */}
                        {!formSubmitted && (
                            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm">
                                <h2 className="text-gray-800 text-3xl font-semibold">
                                    Join Our Email List
                                </h2>
                                <p className="mt-3 text-gray-600">
                                    Stay updated on the latest developments at RevampEdu.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="first-name"
                                                aria-label="First name"
                                                type="text"
                                                placeholder="John"
                                                className={`mt-1 w-full rounded-lg border ${errors.firstName
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'border-gray-300 focus:ring-indigo-500'
                                                    }`}
                                                disabled={isLoading}
                                            />
                                            {errors.firstName && (
                                                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last Name <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="last-name"
                                                aria-label="Last name"
                                                type="text"
                                                placeholder="Doe"
                                                className={`mt-1 w-full rounded-lg border ${errors.lastName
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'border-gray-300 focus:ring-indigo-500'
                                                    }`}
                                                disabled={isLoading}
                                            />
                                            {errors.lastName && (
                                                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* School and Role Fields */}
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="col-span-6">
                                            <label htmlFor="school-name" className="block text-gray-700">
                                                School Name <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="school-name"
                                                aria-label="School name"
                                                type="text"
                                                placeholder="Enter your school name"
                                                className="mt-2 w-full"
                                                disabled={isLoading}
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="role" className="block text-gray-700">
                                                Role <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                disabled={isLoading}
                                                className={`mt-2 w-full rounded-lg border ${errors.role
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'border-gray-300 focus:ring-indigo-500'
                                                    } py-2.5 px-3`}
                                            >
                                                <option value="">Select role</option>
                                                <option value="teacher">Teacher</option>
                                                <option value="administrator">Administrator</option>
                                                <option value="counselor">Counselor</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Contact Fields */}
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                className={`mt-1 w-full rounded-lg border ${errors.email
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'border-gray-300 focus:ring-indigo-500'
                                                    }`}
                                                disabled={isLoading}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                Phone
                                            </label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="(123) 456-7890"
                                                className={`mt-1 w-full rounded-lg border ${errors.phone
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : 'border-gray-300 focus:ring-indigo-500'
                                                    }`}
                                                disabled={isLoading}
                                            />
                                            {errors.phone && (
                                                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                                            )}
                                        </div>
                                    </div>

                                    {errors.submit && (
                                        <div className="text-red-500 text-sm text-center">
                                            {errors.submit}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors duration-200 disabled:opacity-70"
                                        onClick={() => {
                                            if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
                                                window.gtag('event', 'button_click', {
                                                    event_category: 'Sign Up for Email List',
                                                    event_label: 'Sign Up',
                                                });
                                            }
                                        }}
                                    >
                                        {isLoading ? "Signing up..." : "Sign Up"}
                                    </Button>
                                </form>
                            </div>
                        )}

                        {/* Thank You Message */}
                        {formSubmitted && (
                            <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-xl shadow-sm">
                                <h2 className="text-gray-800 text-3xl font-semibold">
                                    Thank You for Signing Up!
                                </h2>
                                <p className="mt-4 text-gray-600">
                                    Your subscription to our email list helps us keep you updated with the latest developments,
                                    tools, and opportunities to collaborate in reshaping education.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
