import { motion } from "framer-motion";
import useMotionConfig from "@/hooks/framer-motion";
import NavLink from "@/components/organism/NavLink";
import { ComponentConfig, HeroSettings, ComponentChild, ButtonConfig } from "@/types";
import { buildTailwindClass } from "@/utils";

const DesktopHero: React.FC<ComponentConfig<HeroSettings>> = (hero) => {
    const { containerVariants, itemVariants, buttonHover, buttonTap } = useMotionConfig();
    const { desktop, content } = hero.config || {};
    const { styles } = desktop || {};

    const defaultStyles = {
        wrapper: {
            height: "min-h-[calc(100vh-4rem)]",
            flex: "flex items-center justify-center"
        },
        container: {
            padding: "py-32",
            text: "text-gray-600"
        },
        contentContainer: {
            layout: "space-y-8 max-w-4xl mx-auto text-center px-4"
        },
        title: {
            text: "text-6xl lg:text-7xl text-gray-900 font-bold leading-tight tracking-tight"
        },
        description: {
            text: "text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
        },
        buttonContainer: {
            layout: "flex items-center justify-center gap-x-6 mt-10"
        },
        button: {
            primary: "text-white bg-primary hover:bg-primary-light active:bg-primary-dark shadow-primary/30 transition-all duration-200 rounded-lg font-medium shadow-lg px-8 py-3",
            secondary: "text-gray-700 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-200 rounded-lg font-medium shadow-lg px-8 py-3"
        }
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={buildTailwindClass(styles?.wrapper, defaultStyles.wrapper)}
        >
            <div className={buildTailwindClass(styles?.container, defaultStyles.container)}>
                <motion.div
                    className={buildTailwindClass(styles?.contentContainer, defaultStyles.contentContainer)}
                    variants={containerVariants}
                >
                    <motion.h1
                        className={buildTailwindClass(styles?.title, defaultStyles.title)}
                        variants={itemVariants}
                    >
                        {content?.title || "Default Title"}
                    </motion.h1>

                    <motion.p
                        className={buildTailwindClass(styles?.description, defaultStyles.description)}
                        variants={itemVariants}
                    >
                        {content?.description || "Default Description"}
                    </motion.p>

                    <motion.div
                        className={buildTailwindClass(styles?.buttonContainer, defaultStyles.buttonContainer)}
                        variants={itemVariants}
                    >
                        {hero.children?.map((button: ComponentChild, index) => (
                            <motion.div
                                key={index}
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                            >
                                <NavLink
                                    href={(button.settings as ButtonConfig).href || "#"}
                                    scroll={(button.settings as ButtonConfig).scroll || false}
                                    analytics={(button.settings as ButtonConfig).analytics || {
                                        eventLabel: "Button Click",
                                        eventCategory: "Hero Section",
                                        eventAction: "click",
                                        eventValue: "Button Clicked"
                                    }}
                                    className={
                                        (button.settings as ButtonConfig).variant === "primary"
                                            ? styles?.button?.primary || defaultStyles.button.primary
                                            : styles?.button?.secondary || defaultStyles.button.secondary
                                    }
                                >
                                    {(button.settings as ButtonConfig).text || "Default Button"}
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default DesktopHero;
