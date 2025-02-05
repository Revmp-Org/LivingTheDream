import { motion } from "framer-motion";
import ContactHeader from "@/components/organism/ContactHeader";
import ContactForm from "@/components/organism/ContactForm";
import ContactConfig from "@/config/contact/index.json";
import SEO from "@/components/atoms/seo-config";

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactPage = () => {
    const { pageComponents, seo } = ContactConfig;
    const { header, form, thankYou } = pageComponents;

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
                    <ContactHeader content={header.settings.content} />
                    <ContactForm form={form} thankYou={thankYou} />
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
