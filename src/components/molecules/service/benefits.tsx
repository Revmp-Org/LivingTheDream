import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const BenefitsSection = ({ settings }: { settings: any }) => {
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

    const { content } = settings;

    return (
        <section
            ref={ref}
            className="py-16 bg-gray-50 border-t border-gray-200"
        >
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content?.map(
                        (
                            benefit: { title: string; description: string },
                            idx: number
                        ) => (
                            <motion.div
                                key={idx}
                                className="bg-gradient-to-br from-white via-gray-100 to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
                                variants={itemVariants}
                                initial="hidden"
                                animate={controls}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-md mx-auto mb-4">
                                    {idx + 1}
                                </div>
                                <h3 className="text-gray-900 text-lg font-bold text-center">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2 leading-relaxed text-center">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
