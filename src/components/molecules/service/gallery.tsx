import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type GalleryItemType = {
    image: string;
    isPortrait?: boolean;
};

type GallerySectionProps = {
    galleryItems: GalleryItemType[];
    columns?: 3 | 4;
};

const GallerySection: React.FC<GallerySectionProps> = ({ galleryItems, columns = 4 }) => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#F3E5E5] via-white to-[#F3E5E5]">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
                    A Glimpse Into Our Work
                </h2>

                {/* Responsive 4x4 Grid Layout */}
                <div className={`grid grid-cols-2 md:grid-cols-3 ${columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-8 justify-items-center`}>
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={index} image={item.image} isPortrait={item.isPortrait} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const GalleryItem: React.FC<GalleryItemType> = ({ image, isPortrait }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    return (
        <motion.div
            ref={ref}
            className="relative flex flex-col items-center text-center w-full max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            <div
                className={`w-full relative rounded-lg shadow-lg overflow-hidden transition-all duration-500
                ${isPortrait ? "aspect-[9/16]" : "aspect-[16/9]"}`}
            >
                <Image
                    src={image}
                    alt="Gallery image"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-md"
                    priority
                />
            </div>
        </motion.div>
    );
};

export default GallerySection;
