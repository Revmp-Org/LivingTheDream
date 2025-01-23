import { motion } from "framer-motion";
import Image from "next/image";
import { buildTailwindClass } from "@/utils";
import NavLink from "../NavLink";

interface OverviewSectionProps {
    title: string;
    description: string;
    highlight: string;
    styles?: Record<string, any>;
    defaultStyles: Record<string, any>;
    image: string;
    button: {
        text: string;
        link: string;
        analytics: {
            eventLabel: string;
            eventCategory: string;
            eventAction: string;
            eventValue: string;
        }
    }
}

const OverviewSection = ({
    title = "Default Title",
    description = "Overview paragraph.",
    highlight = "Highlight sentence.",
    styles,
    defaultStyles,
    image,
    button
}: OverviewSectionProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeInRightVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section
            className={buildTailwindClass(
                styles?.wrapper,
                defaultStyles.wrapper
            )}
        >
            <motion.div
                className={buildTailwindClass(
                    styles?.container,
                    defaultStyles.container
                )}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Text Section */}
                <motion.div
                    className={buildTailwindClass(
                        styles?.textContainer,
                        defaultStyles.textContainer
                    )}
                    variants={fadeInRightVariants}
                >
                    <motion.h1
                        className={buildTailwindClass(
                            styles?.title,
                            defaultStyles.title
                        )}
                        variants={fadeInVariants}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        className={buildTailwindClass(
                            styles?.description,
                            defaultStyles.description
                        )}
                        variants={fadeInVariants}
                    >
                        {description}
                    </motion.p>
                    <motion.p
                        className={buildTailwindClass(
                            styles?.highlight,
                            defaultStyles?.highlight
                        )}
                        variants={fadeInVariants}
                    >
                        {highlight}
                    </motion.p>

                    <div className={buildTailwindClass(styles?.buttonWrapper, defaultStyles?.buttonWrapper)}>
                        <NavLink
                            href={button.link}
                            className={buildTailwindClass(
                                styles?.button,
                                defaultStyles?.button
                            )}
                            analytics={button.analytics}
                        >
                            {button.text}
                        </NavLink>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className={buildTailwindClass(
                        styles?.imageContainer,
                        defaultStyles.imageContainer
                    )}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={image}
                        alt="Service overview"
                        className="rounded-lg shadow-md sm:max-w-xs md:max-w-md lg:max-w-xl"
                        width={1000}
                        height={1000}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OverviewSection;
