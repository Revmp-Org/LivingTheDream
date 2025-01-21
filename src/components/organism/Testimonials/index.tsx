import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { ComponentConfig, TestimonialSettings } from "@/types";
import { buildTailwindClass } from "@/utils";
import { useRef } from "react";

const TestimonialsLayout: React.FC<ComponentConfig<TestimonialSettings>> = (testimonials) => {
    const { config, children } = testimonials;

    const defaultStyles = {
        wrapper: {
            layout: "py-16 bg-gradient-to-r from-gray-100 via-white to-gray-100",
        },
        container: {
            layout: "max-w-screen-2xl mx-auto px-6 md:px-12",
        },
        header: {
            container: { layout: "max-w-2xl sm:text-center md:mx-auto mb-12" },
            title: { text: "text-gray-800 text-4xl font-bold sm:text-5xl" },
            description: { text: "mt-4 text-gray-600 text-lg" },
        },
        testimonialWrapper: {
            layout: "mt-8",
        },
    };

    const defaultChildStyles = {
        list: {
            layout: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
        },
        item: {
            wrapper: { layout: "bg-white border p-6 rounded-xl shadow-md" },
            avatarContainer: { layout: "flex items-center gap-x-4" },
            avatarImage: { layout: "w-16 h-16 object-cover rounded-full border-2 border-indigo-500 shadow-md" },
            name: { text: "block text-gray-800 font-semibold text-lg" },
            role: { text: "block text-gray-500 text-sm mt-0.5" },
            quote: { text: "mt-6 text-gray-700 leading-relaxed italic" },
        },
    };

    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef, { once: true });
    const controls = useAnimation();

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
        <SectionWrapper className={buildTailwindClass(config?.styles?.wrapper, defaultStyles.wrapper)}>
            <div
                id="testimonials"
                className={buildTailwindClass(config?.styles?.container, defaultStyles.container)}
            >
                {/* Header Section */}
                <motion.div
                    className={buildTailwindClass(
                        config?.styles?.header?.container,
                        defaultStyles.header.container
                    )}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2
                        className={buildTailwindClass(
                            config?.styles?.header?.title,
                            defaultStyles.header.title
                        )}
                    >
                        {config?.title}
                    </h2>
                    <p
                        className={buildTailwindClass(
                            config?.styles?.header?.description,
                            defaultStyles.header.description
                        )}
                    >
                        {config?.description}
                    </p>
                </motion.div>

                {/* Testimonials List */}
                <motion.div
                    ref={containerRef}
                    className={buildTailwindClass(
                        config?.styles?.testimonialWrapper,
                        defaultStyles.testimonialWrapper
                    )}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    <motion.ul
                        className={buildTailwindClass(config?.styles?.list, defaultChildStyles.list)}
                        initial="hidden"
                        animate="visible"
                    >
                        {children?.map((item, idx) => {
                            const settings = item.settings as TestimonialSettings;

                            return (
                                <motion.li
                                    key={idx}
                                    className={buildTailwindClass(
                                        settings?.styles?.listItem?.wrapper,
                                        defaultChildStyles.item.wrapper
                                    )}
                                    variants={listItemVariants}
                                >
                                    <figure>
                                        <motion.div
                                            className={buildTailwindClass(
                                                settings?.styles?.listItem?.avatarContainer,
                                                defaultChildStyles.item.avatarContainer
                                            )}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={settings.avatar || "/images/avatar.png"}
                                                className={buildTailwindClass(
                                                    settings?.styles?.listItem?.avatarImage,
                                                    defaultChildStyles.item.avatarImage
                                                )}
                                                alt={settings.name || "Avatar"}
                                                width={64}
                                                height={64}
                                            />
                                            <div>
                                                <span
                                                    className={buildTailwindClass(
                                                        settings?.styles?.listItem?.name,
                                                        defaultChildStyles.item.name
                                                    )}
                                                >
                                                    {settings.name}
                                                </span>
                                                <span
                                                    className={buildTailwindClass(
                                                        settings?.styles?.listItem?.role,
                                                        defaultChildStyles.item.role
                                                    )}
                                                >
                                                    {settings.role}
                                                </span>
                                            </div>
                                        </motion.div>
                                        <blockquote>
                                            <p
                                                className={buildTailwindClass(
                                                    settings?.styles?.listItem?.quote,
                                                    defaultChildStyles.item.quote
                                                )}
                                            >
                                                {settings.quote}
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
