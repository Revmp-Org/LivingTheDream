import { motion } from "framer-motion";
import NavLink from "../NavLink";
import { OverviewContentProps } from "@/types";
import { urlFor } from "@/sanity/lib/image";
import ImageWithCredit from "@/components/atoms/image-with-credit";


const OverviewSection = ({ content, isActive }: OverviewContentProps) => {
    if (!isActive || !content) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const { title, description, highlight, button, image } = content || {};

    const imageUrl = urlFor(image?.asset._ref || "").url() || "";

    console.log('imageUrl', image)

    return (
        <section className="py-24">
            <motion.div
                className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:items-start text-center lg:text-left"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Text Content */}
                <motion.div className="flex-1 max-w-full lg:max-w-[50%]" variants={fadeInVariants}>
                    {title && <h1 className="text-gray-900 text-4xl lg:text-5xl font-bold mb-4">{title}</h1>}
                    {description && <p className="text-gray-700 text-lg mb-4 leading-relaxed">{description}</p>}
                    {highlight && <p className="text-primary text-lg font-semibold">{highlight}</p>}
                    {button?.text && button?.link && (
                        <div className="flex justify-center lg:justify-start mt-6">
                            <NavLink
                                href={button.link}
                                className="text-white bg-primary hover:bg-primary-dark active:bg-primary-dark px-6 py-3 rounded-md transition-colors duration-200"
                                analytics={button.analytics}
                            >
                                {button.text}
                            </NavLink>
                        </div>
                    )}
                </motion.div>

                <motion.div
                    className="relative flex-1 max-w-full lg:max-w-[50%] flex justify-center items-center mt-6 lg:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <ImageWithCredit
                        src={imageUrl}
                        alt="Service overview"
                        width={500}
                        height={600}
                        photoCredit={image?.credit}
                        className="rounded-lg shadow-md"
                    />
                </motion.div>

            </motion.div>
        </section>
    );
};

export default OverviewSection;