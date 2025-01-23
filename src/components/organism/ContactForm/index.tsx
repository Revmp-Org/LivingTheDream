import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { AnimatePresence, motion } from "framer-motion";
import { useContactForm } from "@/hooks/use-get-started";
import { buildTailwindClass } from "@/utils";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { isClient } from '@/utils';
import { Autocomplete } from "@/components/atoms/autocomplete";

const Player = dynamic(
    () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
    { ssr: false }
);

const ContactForm: React.FC<{ config: any; defaultStyles: any }> = ({ config, defaultStyles }) => {
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
    } = useContactForm();

    const formStyles = config.form.styles;
    const formDefaultStyles = defaultStyles.form;

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

            {
                formSubmitted && isMounted ? (
                    <motion.div
                        key="thankYou"
                        variants={thankYouVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={buildTailwindClass(
                            config.thankYou.styles.wrapper,
                            defaultStyles.thankYou.wrapper
                        )}
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
                        {/* Thank You Message */}
                        <h2
                            className={buildTailwindClass(
                                config.thankYou.styles.title,
                                defaultStyles.thankYou.title
                            )}
                        >
                            {config.thankYou.title}
                        </h2>
                        <p
                            className={buildTailwindClass(
                                config.thankYou.styles.message,
                                defaultStyles.thankYou.message
                            )}
                        >
                            {config.thankYou.message}
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className={buildTailwindClass(formStyles.wrapper, formDefaultStyles.wrapper)}
                    >
                        <form onSubmit={handleSubmit}>
                            <motion.div className={buildTailwindClass(formStyles.grid, formDefaultStyles.grid)}>
                                {/* Contact Name */}
                                <div className="col-span-2 md:col-span-1">
                                    <Input
                                        id="contactName"
                                        name="contactName"
                                        label="Contact Name"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    {errors.contactName && (
                                        <p className={buildTailwindClass(formStyles.inputError, formDefaultStyles.inputError)}>
                                            {errors.contactName}
                                        </p>
                                    )}
                                </div>

                                {/* Company Name */}
                                <div className="col-span-2 md:col-span-1">
                                    <Input
                                        id="companyName"
                                        name="companyName"
                                        label="Company Name"
                                        type="text"
                                        placeholder="Your Company"
                                    />
                                    {errors.companyName && (
                                        <p className={buildTailwindClass(formStyles.inputError, formDefaultStyles.inputError)}>
                                            {errors.companyName}
                                        </p>
                                    )}
                                </div>

                                {/* Input Fields */}
                                <div className="col-span-2 md:col-span-1">
                                    <Input
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && (
                                        <p className={buildTailwindClass(formStyles.inputError, formDefaultStyles.inputError)}>
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <Input
                                        id="phone"
                                        name="phone"
                                        label="Phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                    />
                                </div>

                                    {/* Services Selection */}
                                    <div className="col-span-2 md:col-span-1">
                                        <Autocomplete
                                            value={selectedServices.map((service) => service.label).join(", ")}
                                            label="Services You Want"
                                            onChange={() => { }}
                                            onSelect={handleServiceSelect}
                                            options={serviceOptions}
                                            selectedOptions={selectedServices}
                                            placeholder="Select services"
                                            noResultsMessage="No services available"
                                            disableFilter={true}
                                        />
                                        {errors.services && (
                                            <p className={buildTailwindClass(formStyles.inputError, formDefaultStyles.inputError)}>
                                                {errors.services}
                                            </p>
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
                                            <p className={buildTailwindClass(formStyles.inputError, formDefaultStyles.inputError)}>
                                                {errors.referralSource}
                                            </p>
                                        )}
                                    </div>

                                    <div className="col-span-2">
                                        <Input
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            rows={4}
                                            placeholder="Tell us more about your requirements..."
                                            label="Additional Information"
                                            isTextArea={true}
                                        />
                                        {errors.additionalInfo && (
                                            <p className={buildTailwindClass(formStyles.inputError, formDefaultStyles.inputError)}>
                                                {errors.additionalInfo}
                                            </p>
                                        )}
                                    </div>
                                {/* Button Container */}
                                <div className={buildTailwindClass(formStyles.buttonContainer, formDefaultStyles.buttonContainer)}>
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className={buildTailwindClass(formStyles.button, formDefaultStyles.button)}
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
