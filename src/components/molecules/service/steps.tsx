import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type StepSectionType = {
    index: number;
    title: string;
    description: string;
    image: string;
    points: string[];
};

const StepSection: React.FC<{ stepSection: StepSectionType }> = ({ stepSection }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    const { index, title, description, image, points } = stepSection;

    const textVariants = {
        hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
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
        <section
            ref={ref}
            className="py-20 bg-gray-50 border-t border-b border-gray-200"
        >
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                <div
                    className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                >
                    {/* Image Section */}
                    <motion.div
                        className="lg:w-1/2 w-full border-2 border-primary rounded-lg"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={800}
                                className="object-cover w-full"
                            />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="lg:w-1/2 w-full space-y-6 text-center lg:text-left"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={textVariants}
                    >
                        <h2 className="text-gray-900 text-3xl font-extrabold mb-4">{title}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">{description}</p>
                        {points && points.length > 0 && (
                            <motion.ul
                                className="text-gray-700 text-base leading-relaxed list-none space-y-4"
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                            >
                                {points.map((point, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="flex items-center text-left space-x-3"
                                        variants={bulletVariants}
                                    >
                                        <div className="text-primary text-xl font-bold">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="text-white bg-primary w-6 h-6 flex items-center justify-center rounded-full"
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
