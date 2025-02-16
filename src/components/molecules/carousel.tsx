import { useState } from "react";
import CarouselItem from "@/components/atoms/carousel-item";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { ServicesProps } from "@/types";

const Carousel: React.FC<{ services: ServicesProps }> = ({ services }) => {

    const servicesArray = services.servicesList
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? servicesArray.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === servicesArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full">
            {/* Carousel Content */}
            <div className="overflow-hidden relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={servicesArray[currentIndex]._key}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <CarouselItem item={servicesArray[currentIndex]} />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                >
                    <IoChevronBackOutline className="w-6 h-6 text-gray-800" />
                </button>
                <button
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                    onClick={handleNext}
                    aria-label="Next Slide"
                >
                    <IoChevronForwardOutline className="w-6 h-6 text-gray-800" />
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center items-center mt-6 space-x-3">
                {servicesArray.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-indigo-600 w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
