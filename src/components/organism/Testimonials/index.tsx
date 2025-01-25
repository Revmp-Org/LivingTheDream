import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { PageComponent } from "@/types";
import { getStyles } from "@/utils";
import { useRef } from "react";

const TestimonialsLayout: React.FC<PageComponent> = (testimonials) => {
    const { settings, children } = testimonials;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef, { once: true });
    const controls = useAnimation();

    const defaultStyles = settings?.styles;
    const childStyles = settings?.styles?.childStyles;

    if (isInView) {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.25 },
        });
    }

    const listItemVariants = {
        hidden: { opacity: 0, y: 100, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <SectionWrapper className={getStyles("wrapper", defaultStyles)}>
            <div
                id="testimonials"
                className={getStyles("container", defaultStyles)}
            >
                {/* Header Section */}
                <motion.div
                    className={getStyles("headerContainer", defaultStyles)}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className={getStyles("headerTitle", defaultStyles)}>
                        {settings?.content?.title}
                    </h2>
                    <p className={getStyles("headerDescription", defaultStyles)}>
                        {settings?.content?.description}
                    </p>
                </motion.div>

                {/* Testimonials List */}
                <motion.div
                    ref={containerRef}
                    className={getStyles("testimonialWrapper", defaultStyles)}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    <motion.ul
                        className={getStyles("list", childStyles)}
                        initial="hidden"
                        animate="visible"
                    >
                        {children &&
                            Object.values(children).map((item, idx) => {
                                return (
                                    <motion.li
                                        key={idx}
                                        className={getStyles("itemWrapper", childStyles)}
                                        variants={listItemVariants}
                                    >
                                        <figure>
                                            <motion.div
                                                className={getStyles(
                                                    "itemAvatarContainer",
                                                    childStyles
                                                )}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                            >
                                                <Image
                                                    src={item?.settings?.content?.avatar as string || "/images/avatar.png"}
                                                    className={getStyles(
                                                        "itemAvatarImage",
                                                        childStyles
                                                    )}
                                                    alt={item?.settings?.content?.name as string || "Avatar"}
                                                    width={64}
                                                    height={64}
                                                />
                                                <div>
                                                    <span
                                                        className={getStyles(
                                                            "itemName",
                                                            childStyles
                                                        )}
                                                    >
                                                        {item?.settings?.content?.name as string}
                                                    </span>
                                                    <span
                                                        className={getStyles(
                                                            "itemRole",
                                                            childStyles
                                                        )}
                                                    >
                                                        {item?.settings?.content?.role as string}
                                                    </span>
                                                </div>
                                            </motion.div>
                                            <blockquote>
                                                <p
                                                    className={getStyles(
                                                        "itemQuote",
                                                        childStyles
                                                    )}
                                                >
                                                    {item?.settings?.content?.quote as string}
                                                </p>
                                            </blockquote>
                                        </figure>
                                    </motion.li>
                                );
                            })}
                    </motion.ul>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default TestimonialsLayout;
