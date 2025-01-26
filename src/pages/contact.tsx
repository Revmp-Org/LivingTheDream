import Head from "next/head";
import { motion } from "framer-motion";
import ContactHeader from "@/components/organism/ContactHeader";
import ContactForm from "@/components/organism/ContactForm";
import ContactConfig from "@/config/contact/index.json";

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactPage = () => {
    const { pageComponents, seo } = ContactConfig;
    const { header, form, thankYou } = pageComponents;

    return (
        <div className="px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                <Head>
                    <title>{seo?.title}</title>
                    <meta name="description" content={seo?.description} />
                    <meta property="og:title" content={seo?.title} />
                    <meta property="og:description" content={seo?.description} />
                    <meta property="og:url" content={seo?.canonical} />
                    <link rel="canonical" href={seo?.canonical} />
                    <meta name="keywords" content={seo?.keywords?.join(", ")} />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                name: seo?.title,
                                url: seo?.canonical,
                                potentialAction: {
                                    "@type": "SearchAction",
                                    target: `${seo?.canonical}/search?q={search_term_string}`,
                                    "query-input": "required name=search_term_string",
                                },
                            }),
                        }}
                    />
                </Head>

                <div className="mt-12 mb-16 px-8">
                    <ContactHeader content={header.settings.content} />
                    <ContactForm form={form} thankYou={thankYou} />
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
