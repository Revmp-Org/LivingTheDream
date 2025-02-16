import { motion } from "framer-motion";
import NavLink from "@/components/organism/NavLink";
import useMotionConfig from "@/hooks/framer-motion";

interface HeroProps {
    isActive: boolean;
    content: {
        title: string;
        description: string;
        buttons: {
            primary: {
                text: string;
                href: string;
                variant: string;
                analytics: {
                    eventLabel: string;
                    eventCategory: string;
                    eventAction: string;
                };
            };
            secondary?: {
                text: string;
                href: string;
                variant: string;
                analytics: {
                    eventLabel: string;
                    eventCategory: string;
                    eventAction: string;
                };
            };
        };
    };
}

const Hero: React.FC<{ hero: HeroProps }> = ({ hero }) => {
    const { containerVariants, itemVariants, buttonHover, buttonTap } = useMotionConfig();
    const { title, description, buttons } = hero.content;

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-primary-light bg-opacity-50 flex items-center justify-center min-h-[calc(100vh-5rem)]"
        >
            <div className="max-w-7xl mx-auto px-8 py-20">
                <motion.div className="space-y-8 text-center max-w-4xl mx-auto" variants={containerVariants}>
                    <motion.h1
                        className="text-5xl font-bold text-gray-900 tracking-tight md:text-6xl"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        className="flex items-center justify-center gap-x-6 mt-10"
                        variants={itemVariants}
                    >
                        {/* Primary Button */}
                        {buttons.primary && (
                            <motion.div
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                className="flex justify-center bg-primary px-6 py-3 rounded-lg shadow-primary/30 shadow-lg hover:bg-primary-dark active:bg-primary-dark text-white"
                            >
                                <NavLink
                                    href={buttons.primary.href}
                                    analytics={buttons.primary.analytics}
                                >
                                    {buttons.primary.text}
                                </NavLink>
                            </motion.div>
                        )}

                        {/* Secondary Button (Optional) */}
                        {buttons.secondary && (
                            <motion.div
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                className="flex justify-center bg-white px-6 py-3 rounded-lg shadow-primary/30 shadow-lg border border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-dark"
                            >
                                <NavLink
                                    href={buttons.secondary.href}
                                    analytics={buttons.secondary.analytics}
                                >
                                    {buttons.secondary.text}
                                </NavLink>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
