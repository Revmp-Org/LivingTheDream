import NavLink from "@/components/organism/NavLink";
import { motion } from "framer-motion";
import { buildTailwindClass } from "@/utils";
import { AnalyticsConfig } from "@/types";

interface ServiceCTAProps {
    title: string;
    description: string;
    button: {
        text: string;
        link: string;
        analytics?: AnalyticsConfig;
    };
    styles?: Record<string, any>;
    defaultStyles: Record<string, any>;
}

const FooterCTA = ({
    title,
    description,
    button,
    styles,
    defaultStyles,
}: ServiceCTAProps) => {
    return (
        <section
            className={buildTailwindClass(styles?.wrapper, defaultStyles?.wrapper)}
        >
            <motion.div
                className={buildTailwindClass(styles?.container, defaultStyles?.container)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2
                    className={buildTailwindClass(styles?.title, defaultStyles?.title)}
                >
                    {title}
                </h2>
                <p
                    className={buildTailwindClass(
                        styles?.description,
                        defaultStyles?.description
                    )}
                >
                    {description}
                </p>
                <div className={buildTailwindClass(styles?.buttonWrapper, defaultStyles?.buttonWrapper)}>
                    <NavLink
                        href={button.link}
                        className={buildTailwindClass(
                            styles?.button,
                            defaultStyles?.button
                        )}
                        analytics={button.analytics || {
                            eventLabel: "Get Started",
                            eventCategory: "Footer Interaction",
                            eventAction: "link_click",
                            eventValue: "Get Started"
                        }}
                    >
                        {button.text}
                    </NavLink>
                </div>
            </motion.div>
        </section>
    );
};

export default FooterCTA;
