import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import Image from "next/image";
import { AnalyticsConfig, PageComponent } from "@/types";
import { motion } from "framer-motion";
import { getStyles } from "@/utils";

const CTA: React.FC<PageComponent> = (cta) => {
    const { settings, children } = cta;
    const { image, content, styles } = settings || {};
    

    const button = children?.["cta-button"]?.settings as {
        text?: string;
        href?: string;
        analytics?: AnalyticsConfig;
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
        <section className="pb-16 pt-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#F3E5E5] via-white to-[#EAD4D4] flex flex-col items-center sm:flex-row sm:justify-between">
            <motion.div
                className="flex flex-col items-center gap-y-8 sm:gap-y-6 lg:flex-row lg:items-start lg:gap-x-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Image Section */}
                {image && (
                    <motion.div
                        className="flex justify-center mb-6 sm:mb-0 flex-1 max-w-full lg:max-w-[50%]"
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
                    className="sm:text-left px-4 sm:px-6 lg:px-0 flex-1 max-w-full lg:max-w-[50%] font-serif"
                    variants={textSlideInVariant}
                >
                    {/* Title */}
                    <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        {content?.title || "Default Title"}
                    </h2>

                    {/* Description */}
                    {Array.isArray(content?.description) &&
                        content.description.map((desc, idx) => (
                            <p
                                key={idx}
                                className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed"
                            >
                                {desc}
                            </p>
                        ))}

                    {content?.highlight && (
                        <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                            <span className="font-bold text-primary">{content?.highlight}</span>
                        </p>
                    )}

                    {/* Button */}
                    {button && (
                        <div className="flex mt-6 space-x-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <NavLink
                                    href={button.href || "#"}
                                    className="text-white bg-primary hover:bg-primary-dark rounded-md px-6 py-3 cursor-pointer transition-colors duration-200 text-white"
                                    analytics={
                                        button.analytics || {
                                            eventLabel: "Get Started",
                                            eventCategory: "CTA Interaction",
                                            eventAction: "link_click",
                                            eventValue: "Get Started",
                                        }
                                    }
                                >
                                    {button.text || "Get Started"}
                                </NavLink>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTA;
