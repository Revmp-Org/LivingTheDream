import Head from "next/head";
import { motion } from "framer-motion";
import ContactHeader from "@/components/organism/ContactHeader";
import ContactForm from "@/components/organism/ContactForm";
import contactPageConfig from "@/config/contact/index.json";

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactPage() {
    const defaultStyles = {
        header: {
            wrapper: {
                margin: "mb-8",
            },
            title: {
                color: "text-gray-800",
                typography: "text-3xl font-semibold",
            },
            subtitle: {
                color: "text-gray-600",
                margin: "mt-2",
            },
        },
        form: {
            wrapper: {
                padding: "p-4",
            },
            grid: {
                layout: "grid grid-cols-1 gap-6 md:grid-cols-2",
            },
            inputError: {
                color: "text-red-500",
                typography: "text-sm",
                margin: "mt-1",
            },
            buttonContainer: {
                layout: "col-span-2 flex justify-end mt-4",
            },
            button: {
                color: {
                    text: "text-white",
                    background: "bg-indigo-600",
                    hover: "hover:bg-indigo-700",
                },
                typography: "font-medium",
                rounded: "rounded-lg",
                padding: "py-3 px-4",
                transition: "transition-colors duration-200",
                disabled: "disabled:opacity-70",
            },
        },
        thankYou: {
            wrapper: {
                padding: "p-8",
                alignment: "text-center flex flex-col pt-16",
                minHeight: "min-h-[500px]",
            },
            title: {
                color: "text-gray-800",
                typography: "text-3xl font-semibold",
                margin: "mt-4",
            },
            message: {
                color: "text-gray-600",
                typography: "text-lg",
                margin: "mt-2",
            },
        },

    };


    return (
        <div className="mt-12 mb-16">
            <Head>
                <title>{contactPageConfig.seo.title}</title>
                <meta name="description" content={contactPageConfig.seo.description} />
                <meta name="keywords" content={contactPageConfig.seo.keywords.join(", ")} />
                <link rel="canonical" href={contactPageConfig.seo.canonical} />
            </Head>
            <motion.div initial="hidden" animate="visible" variants={fadeInVariants} className="pt-16 pb-12">
                <div className="custom-screen text-gray-600">
                    <ContactHeader
                        config={contactPageConfig.components}
                        defaultStyles={defaultStyles.header}
                    />
                    <ContactForm
                        config={contactPageConfig.components}
                        defaultStyles={{
                            form: defaultStyles.form,
                            thankYou: defaultStyles.thankYou
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
