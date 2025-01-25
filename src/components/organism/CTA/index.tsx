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
        <SectionWrapper className={getStyles("wrapper", styles)}>
            <motion.div
                className={getStyles("container", styles)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Image Section */}
                {image && (
                    <motion.div className={getStyles("imageContainer", styles)} variants={imageSlideInVariant}>
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
                <motion.div className={getStyles("contentContainer", styles)} variants={textSlideInVariant}>
                    {/* Title */}
                    <h2 className={getStyles("title", styles)}>
                        {content?.title || "Default Title"}
                    </h2>

                    {/* Description */}
                    {Array.isArray(content?.description) &&
                        content.description.map((desc, idx) => (
                            <p key={idx} className={getStyles("description", styles)}>
                                {desc}
                            </p>
                        ))}

                    {content?.highlight && (
                        <p className={getStyles("description", styles)}>
                            <span className="font-bold text-primary">{content?.highlight}</span>
                        </p>
                    )}

                    {/* Button */}
                    {button && (
                        <div className={getStyles("buttonContainer", styles)}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <NavLink
                                    href={button.href || "#"}
                                    className="inline-block font-medium text-sm text-white bg-primary hover:bg-primary-light active:bg-primary-dark px-6 py-3 rounded-lg shadow-md transition-all duration-300"
                                    analytics={button.analytics || {
                                        eventLabel: "Get Started",
                                        eventCategory: "CTA Interaction",
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
