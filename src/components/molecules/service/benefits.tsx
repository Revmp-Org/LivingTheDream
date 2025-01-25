import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { PageComponentChild } from "@/types";
import { getStyles } from "@/utils";

const BenefitsSection = ({ settings }: PageComponentChild) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, {
        amount: 0.2,
        once: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Extract styles using `getStyles`
    const wrapperStyles = getStyles("wrapper", settings.styles);
    const containerStyles = getStyles("container", settings.styles);
    const gridStyles = getStyles("grid", settings.styles);
    const itemStyles = getStyles("item", settings.styles);
    const itemTitleStyles = getStyles("itemTitle", settings.styles);
    const itemDescriptionStyles = getStyles("itemDescription", settings.styles);
    const itemIconStyles = getStyles("itemIcon", settings.styles);

    const { content } = settings;

    return (
        <section ref={ref} className={wrapperStyles}>
            <div className={containerStyles}>
                <div className={gridStyles}>
                    {content?.map((benefit: { title: string; description: string }, idx: number) => (
                        <motion.div
                            key={idx}
                            className={itemStyles}
                            variants={itemVariants}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            {/* Item Icon */}
                            <div className={itemIconStyles}>
                                {idx + 1}
                            </div>
                            {/* Item Title */}
                            <h3 className={itemTitleStyles}>
                                {benefit.title}
                            </h3>
                            {/* Item Description */}
                            <p className={itemDescriptionStyles}>
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
