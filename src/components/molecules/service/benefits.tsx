import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const BenefitsSection = ({
    benefits,
}: {
    benefits: Array<{ title: string; description: string }>;
}) => {
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

    return (
        <section ref={ref} className="py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center text-center bg-gradient-to-br from-white via-gray-100 to-gray-50 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                            variants={itemVariants}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="mb-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                                {idx + 1}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
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
