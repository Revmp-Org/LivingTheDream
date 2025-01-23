import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const StepSection = ({
    step,
}: {
    step: {
        title: string;
        description: string;
        image: string;
        index: number;
        points: string[];
    };
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    const textVariants = {
        hidden: { opacity: 0, x: step.index % 2 === 0 ? 50 : -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: step.index % 2 === 0 ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const bulletVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeIn", delay: 0.2 },
        },
    };
    return (
        <section ref={ref} className={`py-16 bg-gradient-to-b from-gray-100 to-gray-200`}>
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                <div
                    className={`flex flex-col lg:flex-row items-center gap-12 ${step.index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                >
                    {/* Image Section */}
                    <motion.div
                        className="lg:w-1/2"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        <div className="rounded-lg overflow-hidden shadow-xl border-4 border-primary">
                            <Image
                                src={step.image}
                                alt={step.title}
                                width={600}
                                height={400}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="lg:w-1/2 space-y-6 text-center lg:text-left"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={textVariants}
                    >
                        <h2 className="text-3xl font-extrabold text-primary">
                            {step.title}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {step.description}
                        </p>
                        {step.points && step.points.length > 0 && (
                            <motion.ul
                                className="text-gray-800 text-base leading-relaxed space-y-4 list-none"
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                            >
                                {step.points.map((point, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-center text-left space-x-3"
                                        variants={bulletVariants}
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full shadow-md">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span>{point}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StepSection;
