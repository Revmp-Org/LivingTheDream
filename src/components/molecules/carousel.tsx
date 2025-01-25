import { useState } from "react";
import CarouselItem from "@/components/atoms/carousel-item";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { getStyles } from "@/utils";
import { PageComponent } from "@/types";

const Carousel: React.FC<PageComponent> = (services) => {
    const { children } = services;
    const carousel = children.carousel;

    const carouselItems = carousel.children || {};
    const carouselItemsArray = Object.values(carouselItems);

    const carouselStyles = carousel.settings.styles;
    const childStyles = carousel?.settings?.styles?.childStyles;

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItemsArray.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItemsArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={getStyles("wrapper", carouselStyles)}>
            {/* Carousel Content */}
            <div className={getStyles("content", carouselStyles)}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={carouselItemsArray[currentIndex]?.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <CarouselItem
                            item={carouselItemsArray[currentIndex]}
                            childStyles={childStyles}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className={getStyles("buttonPrev", carouselStyles)}
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                >
                    <IoChevronBackOutline className="w-6 h-6 text-gray-800" />
                </button>
                <button
                    className={getStyles("buttonNext", carouselStyles)}
                    onClick={handleNext}
                    aria-label="Next Slide"
                >
                    <IoChevronForwardOutline className="w-6 h-6 text-gray-800" />
                </button>
            </div>

            {/* Dots Navigation */}
            <div className={getStyles("dotsContainer", carouselStyles)}>
                {carouselItemsArray.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`${getStyles("dot", carouselStyles)} ${index === currentIndex
                                ? getStyles("dotActive", carouselStyles)
                                : getStyles("dotInactive", carouselStyles)
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
