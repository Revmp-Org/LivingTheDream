import NavLink from "@/components/organism/NavLink";
import { motion } from "framer-motion";
import { PageComponentChild } from "@/types";

const FooterCTA = (cta: PageComponentChild) => {
    const styles = cta?.settings?.styles;
    const { title, description, button } = cta?.settings?.content || {};

    return (
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-600">
            <motion.div
                className="max-w-screen-lg mx-auto text-center space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-white text-3xl lg:text-4xl font-extrabold">{title}</h2>
                <p className="text-gray-200 text-lg lg:text-xl leading-relaxed">{description}</p>
                <div className="flex justify-center mt-8">
                    <NavLink
                        href={button?.link}
                        className="text-indigo-700 bg-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-200"
                        analytics={
                            button?.analytics || {
                                eventLabel: "Get Started",
                                eventCategory: "CTA Interaction",
                                eventAction: "link_click",
                                eventValue: "Get Started",
                            }
                        }
                    >
                        {button?.text}
                    </NavLink>
                </div>
            </motion.div>
        </section>
    );
};

export default FooterCTA;
