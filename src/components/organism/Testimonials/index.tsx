import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { PageComponent } from "@/types";
import { useRef } from "react";

const TestimonialsLayout: React.FC<PageComponent> = (testimonials) => {
    const { settings, children } = testimonials;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.05 });

    const listItemVariants = {
        hidden: { opacity: 0, y: 100, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <section className="py-24 bg-gradient-to-r from-gray-100 via-white to-gray-100">
            <div id="testimonials" className="max-w-screen-2xl mx-auto px-6 md:px-12">
                {/* Header Section */}
                <motion.div
                    className="max-w-2xl sm:text-center md:mx-auto mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-gray-800 text-4xl font-bold sm:text-5xl">
                        {settings?.content?.title}
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        {settings?.content?.description}
                    </p>
                </motion.div>

                {/* Testimonials List */}
                <motion.div
                    ref={containerRef}
                    className="mt-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {children &&
                            Object.values(children).map((item: any, idx: number) => (
                                <motion.li
                                    key={idx}
                                    className="bg-white border p-6 rounded-xl shadow-md"
                                    variants={listItemVariants}
                                >
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <Image
                                                src={
                                                    item?.settings?.content?.avatar ||
                                                    "/images/avatar.png"
                                                }
                                                className="w-16 h-16 object-cover rounded-full border-2 border-indigo-500 shadow-md"
                                                alt={
                                                    item?.settings?.content?.name ||
                                                    "Avatar"
                                                }
                                                width={64}
                                                height={64}
                                            />
                                            <div>
                                                <span className="block text-gray-800 font-semibold text-lg">
                                                    {item?.settings?.content?.name}
                                                </span>
                                                <span className="block text-gray-500 text-sm mt-0.5">
                                                    {item?.settings?.content?.role}
                                                </span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700 leading-relaxed italic">
                                                {item?.settings?.content?.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </motion.li>
                            ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsLayout;
