import { motion } from "framer-motion";
import NavLink from "@/components/organism/NavLink";
import { PageComponent, ButtonConfig } from "@/types";
import { getStyles } from "@/utils";
import useMotionConfig from "@/hooks/framer-motion";

const Hero: React.FC<PageComponent> = (hero) => {
    const { containerVariants, itemVariants, buttonHover, buttonTap } = useMotionConfig();

    const { settings, children } = hero;
    const { styles, content } = settings || {};

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={getStyles("wrapper", styles)}
        >
            <div className={getStyles("container", styles)}>
                <motion.div
                    className={getStyles("contentContainer", styles)}
                    variants={containerVariants}
                >
                    <motion.h1
                        className={getStyles("title", styles)}
                        variants={itemVariants}
                    >
                        {content?.title || "Default Title"}
                    </motion.h1>

                    <motion.p
                        className={getStyles("description", styles)}
                        variants={itemVariants}
                    >
                        {content?.description || "Default Description"}
                    </motion.p>

                    <motion.div
                        className={getStyles("buttonContainer", styles)}
                        variants={itemVariants}
                    >
                        {children &&
                        Object.keys(children).map((key) => {
                            const button = children[key];
                            if (!button || !button.settings) {
                                console.warn(`Invalid button configuration for key: ${key}`);
                                return null;
                            }

                            const buttonSettings = button.settings as ButtonConfig;
                            const wrapperClass = getStyles("wrapper", buttonSettings.styles);

                                return (
                                    <motion.div
                                        key={button.id}
                                        whileHover={buttonHover}
                                        whileTap={buttonTap}
                                        className={wrapperClass.trim()}
                                    >
                                        <NavLink
                                            href={buttonSettings.href || "#"}
                                            scroll={buttonSettings.scroll || false}
                                            analytics={buttonSettings.analytics || {
                                                eventLabel: "Button Click",
                                                eventCategory: "Hero Section",
                                                eventAction: "click",
                                                eventValue: "Button Clicked",
                                            }}
                                        >
                                            {buttonSettings.text || "Default Button"}
                                        </NavLink>
                                    </motion.div>
                                );
                            })}

                    </motion.div>

                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
