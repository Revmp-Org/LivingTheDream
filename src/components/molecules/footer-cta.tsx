import NavLink from "@/components/organism/NavLink";
import { motion } from "framer-motion";
import { FooterCTAProps } from "@/types";

const FooterCTA = ({ isActive, content }: FooterCTAProps) => {
    if (!isActive || !content) return null;

    const { title, description, button } = content || {};

    return (
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#E5CFCF] via-[#DFC4C4] to-[#E5CFCF]">
            <motion.div
                className="max-w-screen-lg mx-auto text-center space-y-6 font-serif"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-gray-900 text-3xl lg:text-4xl font-extrabold">{title}</h2>
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">{description}</p>
                {button && (
                    <div className="flex justify-center mt-8">
                        <NavLink
                            href={button.link}
                            className="text-white bg-primary hover:bg-primary-dark rounded-md px-6 py-3 cursor-pointer transition-colors duration-200 text-white"
                            analytics={button.analytics}
                        >
                            {button.text}
                        </NavLink>
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default FooterCTA;
