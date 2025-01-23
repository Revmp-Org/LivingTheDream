import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import Image from "next/image";
import { AnalyticsConfig, ComponentConfig, CTASettings, ComponentChild } from "@/types";
import { buildTailwindClass } from "@/utils";
import { motion } from "framer-motion";

const CTA: React.FC<ComponentConfig<CTASettings>> = (cta) => {
    const { config, children } = cta;
    const { image, content, styles } = config || {};
    const button = children?.find((child: ComponentChild) => child.slug === "cta-button")?.settings as {
        text?: string;
        href?: string;
        analytics?: AnalyticsConfig;
    };

    const defaultStyles = {
        wrapper: {
            padding: "pb-16 pt-16 px-4 sm:px-6 lg:px-12",
            background: "bg-gradient-to-br from-blue-50 via-white to-gray-100",
            flex: "flex items-center justify-center",
        },
        container: {
            layout: "flex flex-col-reverse lg:flex-row items-center lg:items-start lg:gap-x-16",
        },
        imageContainer: {
            layout: "flex-1 max-w-full lg:max-w-[50%] flex justify-center",
        },
        contentContainer: {
            layout: "flex-1 max-w-full lg:max-w-[50%] px-4 sm:px-6 lg:px-0 text-center lg:text-left",
        },
        title: {
            text: "text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
        },
        description: {
            text: "mt-4 text-gray-700 text-base sm:text-lg leading-relaxed max-h-[150px] overflow-hidden",
        },

        buttonContainer: {
            layout: "flex justify-center lg:justify-start mt-6 space-x-4",
        },
    };

    const imageSlideInVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const textSlideInVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    };

    return (
        <SectionWrapper className={buildTailwindClass(styles?.wrapper, defaultStyles.wrapper)}>
            <motion.div
                className={buildTailwindClass(styles?.container, defaultStyles.container)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Image Section */}
                {image && (
                    <motion.div
                        className={buildTailwindClass(styles?.imageContainer, defaultStyles.imageContainer)}
                        variants={imageSlideInVariant}
                    >
                        <Image
                            src={image?.src || ""}
                            className={image?.className || "rounded-lg shadow-md"}
                            alt={image?.alt || "Image Alt Text"}
                            width={720}
                            height={480}
                        />
                    </motion.div>
                )}

                {/* Content Section */}
                <motion.div
                    className={buildTailwindClass(styles?.contentContainer, defaultStyles.contentContainer)}
                    variants={textSlideInVariant}
                >
                    {/* Title */}
                    <h2 className={buildTailwindClass(styles?.title, defaultStyles.title)}>
                        {content?.title || "Default Title"}
                    </h2>

                    {/* Description */}
                    {content?.description?.map((desc, idx) => (
                        <p key={idx} className={buildTailwindClass(styles?.description, defaultStyles.description)}>
                            {desc}
                        </p>
                    ))}

                    {content?.highlight && (
                        <p className={buildTailwindClass(styles?.description, defaultStyles.description)}>
                            <span className="font-bold text-primary">{content?.highlight}</span>
                        </p>
                    )}

                    {/* Button */}
                    {button && (
                        <div className={buildTailwindClass(styles?.buttonContainer, defaultStyles.buttonContainer)}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <NavLink
                                    href={button.href || "#"}
                                    className="inline-block font-medium text-sm text-white bg-primary hover:bg-primary-light active:bg-primary-dark px-6 py-3 rounded-lg shadow-md transition-all duration-300"
                                    analytics={button.analytics || {
                                        eventLabel: "Get Started",
                                        eventCategory: "Navbar Interaction",
                                        eventAction: "link_click",
                                        eventValue: "Get Started",
                                    }}
                                >
                                    {button.text || "Get Started"}
                                </NavLink>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </SectionWrapper>

    );
};

export default CTA;
