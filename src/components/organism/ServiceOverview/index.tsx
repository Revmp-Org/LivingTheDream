import { motion } from "framer-motion";
import Image from "next/image";
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

    const { title, description, highlight, button, image } = overview?.settings?.content || {};

    return (
        <section className="py-24 px-6 mt-8 lg:px-12 bg-gradient-to-b from-bg-primary-light via-white to-bg-primary-light">
            <motion.div
                className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center lg:items-start text-center lg:text-left"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="flex-1 max-w-full lg:max-w-[50%]"
                    variants={fadeInVariants}
                >
                    <h1 className="text-gray-900 text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">{description}</p>
                    <p className="text-primary text-lg font-semibold">{highlight}</p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <NavLink
                            href={button?.link}
                            className="text-white bg-primary hover:bg-primary-dark rounded-md px-6 py-3 cursor-pointer transition-colors duration-200 text-white"
                            analytics={button?.analytics}
                        >
                            {button?.text}
                        </NavLink>
                    </div>
                </motion.div>

                <motion.div
                    className="flex-1 max-w-full lg:max-w-[60%] flex justify-center items-center mt-6 lg:mt-0 mb-12 lg:mb-0 lg:ml-12"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-full max-w-2xl aspect-[16/10] rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={image}
                            alt="Service overview"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                            priority
                        />
                    </div>
                </motion.div>



            </motion.div>
        </section>
    );
};

export default OverviewSection;
