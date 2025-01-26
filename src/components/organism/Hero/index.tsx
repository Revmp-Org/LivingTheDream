import { motion } from "framer-motion";
import NavLink from "@/components/organism/NavLink";
import { PageComponent } from "@/types";
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
            className="bg-white bg-opacity-50 flex items-center justify-center min-h-[calc(100vh-5rem)]"
        >
            <div className="max-w-7xl mx-auto px-8 py-20">
                <motion.div className="space-y-8 text-center max-w-4xl mx-auto" variants={containerVariants}>
                    <motion.h1
                        className="text-5xl font-bold text-gray-900 tracking-tight md:text-6xl"
                        variants={itemVariants}
                    >
                        {content?.title || "Elevate Your Business with Data-Driven Solutions"}
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        {content?.description ||
                            "At Revamp Marketing, we specialize in SEO, social media, and web design to transform your business. Let's take your business to the next level."}
                    </motion.p>
                    <motion.div
                        className="flex items-center justify-center gap-x-6 mt-10"
                        variants={itemVariants}
                    >
                        {children &&
                            Object.keys(children).map((key) => {
                                const button = children[key];
                                if (!button || !button.settings) return null;

                                const { href, text, analytics, styles } = button.settings;
                                const defaultStyle =
                                    key === "button-primary"
                                        ? "flex justify-center bg-primary px-6 py-3 rounded-lg shadow-primary/30 shadow-lg hover:bg-primary-light active:bg-primary-dark text-white"
                                        : "flex justify-center bg-white px-6 py-3 rounded-lg shadow-primary/30 shadow-lg border border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-dark";

                                return (
                                    <motion.div
                                        key={button.id}
                                        whileHover={buttonHover}
                                        whileTap={buttonTap}
                                        className={defaultStyle}
                                    >
                                        <NavLink
                                            href={href || "#"}
                                            scroll={button.settings?.scroll || false}
                                            analytics={
                                                analytics || {
                                                    eventLabel: text || "Button Click",
                                                    eventCategory: "Hero Section",
                                                    eventAction: "click",
                                                    eventValue: text || "Button Clicked",
                                                }
                                            }
                                        >
                                            {text || "Default Button"}
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