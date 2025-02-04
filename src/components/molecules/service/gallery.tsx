import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type GalleryItemType = {
    image: string;
    quote?: string;
    author?: string;
};

const GallerySection: React.FC<{ galleryItems: GalleryItemType[] }> = ({ galleryItems }) => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#F3E5E5] via-white to-[#F3E5E5]">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
                <h2 className="text-center text-4xl font-bold text-gray-900 mb-10">
                    A Glimpse Into Our Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={index} image={item.image} quote={item.quote} author={item.author} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const GalleryItem: React.FC<GalleryItemType> = ({ image, quote, author }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: true });

    return (
        <motion.div
            ref={ref}
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            {/* Image */}
            <div className="w-full max-w-lg h-[400px] relative rounded-lg shadow-md overflow-hidden shadow-xl transition-all duration-500">
                <Image
                    src={image}
                    alt="Gallery image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                    priority
                />
            </div>

            {/* Quote - Uncomment later if needed */}
            {/* <div className="mt-6 bg-white p-6 shadow-md rounded-lg max-w-lg text-gray-700 italic">
                <p className="text-lg leading-relaxed">"{quote}"</p>
                {author && <p className="mt-4 font-semibold text-gray-900">- {author}</p>}
            </div> */}
        </motion.div>
    );
};

export default GallerySection;
