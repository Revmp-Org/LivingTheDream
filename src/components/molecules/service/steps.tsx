import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Styles } from "@/types";
import { getStyles } from "@/utils";

type StepSectionType = {
    index: number;
    title: string;
    description: string;
    image: string;
    points: string[];
};

const StepSection: React.FC<{ stepSection: StepSectionType; styles: Styles }> = ({ stepSection, styles }) => {
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
        <section ref={ref} className={getStyles("wrapper", styles)}>
            <div className={getStyles("container", styles)}>
                <div
                    className={`${getStyles("stepLayout", styles)} ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                >
                    {/* Image Section */}
                    <motion.div
                        className={getStyles("stepImageContainer", styles)}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        <div className={getStyles("stepImageWrapper", styles)}>
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
                        className={getStyles("stepTextContainer", styles)}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={textVariants}
                    >
                        <h2 className={getStyles("stepTitle", styles)}>{title}</h2>
                        <p className={getStyles("stepDescription", styles)}>{description}</p>
                        {points && points.length > 0 && (
                            <motion.ul
                                className={getStyles("stepPoints", styles)}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                            >
                                {points.map((point: string, idx: number) => (
                                    <motion.li
                                        key={idx}
                                        className={getStyles("stepBulletWrapper", styles)}
                                        variants={bulletVariants}
                                    >
                                        <div className={getStyles("stepBullet", styles)}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className={getStyles("stepBulletIcon", styles)}
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
