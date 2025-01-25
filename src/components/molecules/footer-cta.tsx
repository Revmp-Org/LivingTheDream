import NavLink from "@/components/organism/NavLink";
import { motion } from "framer-motion";
import { getStyles } from "@/utils";
import { PageComponentChild } from "@/types";

const FooterCTA = (cta: PageComponentChild) => {
    const styles = cta?.settings?.styles;
    const { title, description, button } = cta?.settings?.content || {};

    return (
        <section className={getStyles("wrapper", styles)}>
            <motion.div
                className={getStyles("container", styles)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={getStyles("title", styles)}>{title}</h2>
                <p className={getStyles("description", styles)}>{description}</p>
                <div className={getStyles("buttonWrapper", styles)}>
                    <NavLink
                        href={button.link}
                        className={getStyles("button", styles)}
                        analytics={
                            button.analytics || {
                                eventLabel: "Get Started",
                                eventCategory: "CTA Interaction",
                                eventAction: "link_click",
                                eventValue: "Get Started",
                            }
                        }
                    >
                        {button.text}
                    </NavLink>
                </div>
            </motion.div>
        </section>
    );
};

export default FooterCTA;
