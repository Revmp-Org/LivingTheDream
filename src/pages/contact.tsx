import { motion } from "framer-motion";
import ContactHeader from "@/components/organism/ContactHeader";
import ContactForm from "@/components/organism/ContactForm";
import SEO from "@/components/atoms/seo-config";
import { useContactPage } from "@/hooks/sanity/use-contact-page";

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactPage = () => {

    const { contactPageConfig, loading } = useContactPage();

    if (loading) return null;
    const { header, seo, form, thankYou } = contactPageConfig || {};

    return (
        <div className="px-4 sm:px-8 lg:px-16">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                <SEO seo={seo} />

                {/* Responsive padding and margins */}
                <div className="mt-12 mb-16 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
                    <ContactHeader header={header} />
                    <ContactForm form={form} thankYou={thankYou} />
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
