import { motion } from "framer-motion";
import NavLink from "../NavLink";
import { CTAProps } from "@/types";
import { urlFor } from "@/sanity/lib/image";
import ImageWithCredit from "@/components/atoms/image-with-credit";

const CTA: React.FC<{ cta: CTAProps }> = ({ cta }) => {
    if (!cta?.isActive) return null;

    const { content } = cta;
    const button = content?.button;

    const imageSlideInVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const textSlideInVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    };

    const imageUrl = cta.content.image?.asset?._ref
        ? urlFor(cta.content.image.asset._ref).url()
        : "/placeholder.jpg";


    return (
        <section className="pb-16 pt-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#F3E5E5] via-white to-[#EAD4D4] flex flex-col items-center sm:flex-row sm:justify-between">
            <motion.div
                className="flex flex-col items-center gap-y-8 sm:gap-y-6 lg:flex-row lg:items-start lg:gap-x-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Content Section */}
                <motion.div
                    className="sm:text-left px-4 sm:px-6 lg:px-0 flex-1 max-w-full lg:max-w-[50%]"
                    variants={textSlideInVariant}
                >
                    {/* Title */}
                    <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        {content?.title || "Transform Your Business Today"}
                    </h2>

                    {/* Description */}
                    <p
                        className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed"
                    >
                        {content.description}
                    </p>

                    {content?.highlight && (
                        <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                            <span className="font-bold text-primary">{content?.highlight}</span>
                        </p>
                    )}

                    {/* Button */}
                    {button && (
                        <div className="flex mt-6 space-x-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <NavLink
                                    href={button.href}
                                    className="inline-block font-medium text-sm text-white bg-primary hover:bg-primary-dark active:bg-primary-dark px-6 py-3 rounded-lg shadow-md transition-all duration-300"
                                    analytics={button.analytics}
                                >
                                    {button.text}
                                </NavLink>
                            </motion.div>
                        </div>
                    )}
                </motion.div>

                {/* Image Section */}
                {imageUrl && (
                    <motion.div
                        className="flex justify-center mb-6 sm:mb-0 flex-1 max-w-full lg:max-w-[50%]"
                        variants={imageSlideInVariant}
                    >
                        <ImageWithCredit
                            src={imageUrl}
                            alt={content?.title || "Image Alt Text"}
                            width={720}
                            height={480}
                            photoCredit={content?.image?.credit}
                            creditLink={content?.image?.creditLink}
                        />
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default CTA;
