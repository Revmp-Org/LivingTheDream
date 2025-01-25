import { motion } from "framer-motion";
import Image from "next/image";
import { getStyles } from "@/utils";
import NavLink from "../NavLink";
import { PageComponentChild } from "@/types";

const OverviewSection = (overview: PageComponentChild) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const styles = overview?.settings?.styles;
    const { title, description, highlight, button, image } = overview?.settings?.content || {};

    return (
        <section className={getStyles("wrapper", styles)}>
            <motion.div
                className={getStyles("container", styles)}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Text Section */}
                <motion.div
                    className={getStyles("textContainer", styles)}
                    variants={fadeInVariants}
                >
                    <h1 className={getStyles("title", styles)}>{title}</h1>
                    <p className={getStyles("description", styles)}>{description}</p>
                    <p className={getStyles("highlight", styles)}>{highlight}</p>
                    <div className={getStyles("buttonWrapper", styles)}>
                        <NavLink
                            href={button?.link}
                            className={getStyles("button", styles)}
                            analytics={button?.analytics}
                        >
                            {button?.text}
                        </NavLink>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className={getStyles("imageContainer", styles)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={image}
                        alt="Service overview"
                        className="rounded-lg shadow-md"
                        width={1000}
                        height={1000}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OverviewSection;
