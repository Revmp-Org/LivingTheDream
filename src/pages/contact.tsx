import Head from "next/head";
import { motion } from "framer-motion";
import { getStyles } from "@/utils";
import { PageComponent } from "@/types";
import ContactHeader from "@/components/organism/ContactHeader";
import ContactForm from "@/components/organism/ContactForm";
import ContactConfig from "@/config/contact/index.json";

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactPage = () => {
    const { pageComponents, seo, styles } = ContactConfig;
    const { header, form, thankYou } = pageComponents;

    const defaultStyles = header?.settings?.styles;

    const pageContainerStyles = getStyles("container", styles);
    const containerStyles = getStyles("container", defaultStyles);

    return (
        <div className={pageContainerStyles}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                <Head>
                    <title>{seo?.title}</title>
                    <meta name="description" content={seo?.description} />
                    <meta name="keywords" content={seo?.keywords.join(", ")} />
                    <link rel="canonical" href={seo?.canonical} />
                </Head>
                <div className={containerStyles}>
                    <ContactHeader config={header} />
                    <ContactForm form={form} thankYou={thankYou} />
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
