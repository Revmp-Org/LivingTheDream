import { motion } from "framer-motion";
import useMotionConfig from "@/hooks/framer-motion";
import NavLink from "@/components/organism/NavLink";
import { ComponentConfig, HeroSettings, ComponentChild, ButtonConfig } from "@/types";
import { buildTailwindClass } from "@/utils";

const MobileHero: React.FC<ComponentConfig<HeroSettings>> = (hero) => {
    const { containerVariants, itemVariants, buttonHover, buttonTap } = useMotionConfig();
    const { mobile, content } = hero.config || {};
    const { styles } = mobile || {};

    const defaultStyles = {
        wrapper: {
            padding: "py-20",
            background: "bg-gray-50",
            flex: "flex items-center",
        },
        container: {
            layout: "space-y-8 max-w-4xl mx-auto text-center px-4",
        },
        title: {
            text: "text-4xl sm:text-5xl text-gray-900 font-bold leading-tight",
        },
        description: {
            text: "text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto",
        },
        buttonContainer: {
            layout: "flex flex-col items-center gap-8 w-full",
        },
        button: {
            primary:
                "text-white bg-primary hover:bg-primary-light active:bg-primary-dark shadow-primary/30 transition-all duration-200 rounded-lg font-medium shadow-lg px-8 py-3",
            secondary:
                "text-gray-700 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-200 rounded-lg font-medium shadow-lg px-8 py-3",
        },
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
                    className={buildTailwindClass(styles?.container, defaultStyles.container)}
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
                                className="w-full"
                            >
                                <NavLink
                                    href={(button.settings as ButtonConfig).href || "#"}
                                    scroll={(button.settings as ButtonConfig).scroll || false}
                                    analytics={(button.settings as ButtonConfig).analytics}
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

export default MobileHero;
