import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { AnimatePresence, motion } from "framer-motion";
import { useContactForm } from "@/hooks/use-get-started";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { isClient } from "@/utils";
import { Autocomplete } from "@/components/atoms/autocomplete";
import DatePickerField from "@/components/atoms/date-picker";

const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
);

const ContactForm: React.FC<{ form: any; thankYou: any }> = ({ form, thankYou }) => {
    const {
        formSubmitted,
        isLoading,
        errors,
        selectedServices,
        serviceOptions,
        handleServiceSelect,
        handleSubmit,
        referralSource,
        referralOptions,
        handleReferralSourceChange,
        eventDate,
        handleEventDateChange,
    } = useContactForm();

    const thankYouVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {formSubmitted && isMounted ? (
                <motion.div
                    key="thankYou"
                    variants={thankYouVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="p-8 text-center flex flex-col pt-16 min-h-[500px]" // Static wrapper style for Thank You
                >
                    {/* Lottie Animation */}
                    {isClient && (
                        <motion.div
                            key="lottieAnimation"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Player
                                autoplay
                                loop={false}
                                keepLastFrame={true}
                                speed={1}
                                src={require("../../../assets/lottie/check-mark-primary.json")}
                                style={{ width: 100, height: 100 }}
                            />
                        </motion.div>
                    )}
                    <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
                        {/* Thank You Message */}
                        <h2 className="text-gray-800 text-3xl font-semibold mt-4"> {/* Static title style */}
                            {thankYou?.settings?.content?.title}
                    </h2>
                    <p className="text-gray-600 text-lg mt-2"> {/* Static message style */}
                            {thankYou?.settings?.content?.message}
                        </p>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    className="py-4 px-8" // Static wrapper style
                >
                        <form onSubmit={handleSubmit}>
                            <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                                {/* Name */}
                                <div className="col-span-2 md:col-span-1">
                                    <Input
                                        id="name"
                                        name="name"
                                        label="Name"
                                        type="text"
                                        placeholder="John Smith"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="col-span-2 md:col-span-1">
                                    <Input
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div className="col-span-2 md:col-span-1">
                                    <Input
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Event Type Selection */}
                                <div className="col-span-2 md:col-span-1">
                                    <Autocomplete
                                        value={selectedServices.map((service) => service.label).join(", ")}
                                        label="Type of Event"
                                        onChange={() => { }}
                                        onSelect={handleServiceSelect}
                                        options={serviceOptions}
                                        selectedOptions={selectedServices}
                                        placeholder="Select event type"
                                        noResultsMessage="No event types available"
                                        disableFilter={true}
                                    />
                                    {errors.services && (
                                        <p className="text-red-500 text-sm mt-1">{errors.services}</p>
                                    )}
                                </div>

                                {/* Event Date Picker */}
                                <div className="col-span-2 md:col-span-1">
                                    <DatePickerField
                                        label="Event Date"
                                        selectedDate={eventDate || undefined}
                                        onChange={handleEventDateChange}
                                        minDate={new Date()}
                                        hideTimeField={true}
                                    />
                                    {errors.eventDate && (
                                        <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
                                    )}
                                </div>

                                {/* Referral Source */}
                                <div className="col-span-2 md:col-span-1">
                                    <Autocomplete
                                        onSelect={handleReferralSourceChange}
                                        label="How did you hear about us?"
                                        value={referralSource.map((option) => option.label).join(", ")}
                                        onChange={handleReferralSourceChange}
                                        options={referralOptions}
                                        selectedOptions={referralSource}
                                        placeholder="Select an option"
                                        noResultsMessage="No options available"
                                        disableFilter={true}
                                    />
                                    {errors.referralSource && (
                                        <p className="text-red-500 text-sm mt-1">{errors.referralSource}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="col-span-2 flex justify-end mt-4">
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="text-white bg-primary hover:bg-primary-dark font-medium rounded-lg py-3 px-4 transition-colors duration-200 disabled:opacity-70"
                                    >
                                        {isLoading ? "Submitting..." : "Submit"}
                                    </Button>
                                </div>
                            </motion.div>
                        </form>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactForm;