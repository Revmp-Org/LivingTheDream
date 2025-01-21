import { useState } from "react";
import CarouselItem from "@/components/atoms/carousel-item";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { getChildComponent } from "@/utils";
import { buildTailwindClass } from "@/utils";
import { ComponentConfig, ComponentItemType, ServiceCardSettings } from "@/types";

const Carousel: React.FC<ComponentConfig<ServiceCardSettings>> = (services) => {
    const carousel = getChildComponent<ServiceCardSettings>(services.children, "carousel");
    const carouselItems = carousel.children;
    const carouselStyles = carousel.config?.styles;
    const childStyles = carousel.config?.childStyles;

    const defaultStyles = {
        wrapper: {
            layout: "relative w-full",
        },
        content: {
            layout: "overflow-hidden relative",
        },
        buttonPrev: {
            position: "absolute left-1 top-1/2",
            transform: "-translate-y-1/2",
            background: "bg-white/80",
            padding: "p-3",
            hover: "hover:scale-110",
            active: "active:scale-95",
            rounded: "rounded-full",
            shadow: "shadow-lg",
            transition: "transition-all duration-200",
        },
        buttonNext: {
            position: "absolute right-1 top-1/2",
            transform: "-translate-y-1/2",
            background: "bg-white/80",
            padding: "p-3",
            hover: "hover:scale-110",
            active: "active:scale-95",
            rounded: "rounded-full",
            shadow: "shadow-lg",
            transition: "transition-all duration-200",
        },
        dotsContainer: {
            layout: "flex justify-center items-center mt-6 space-x-3",
        },
        dot: {
            size: "w-3 h-3 rounded-full",
            transition: "transition-all duration-300",
        },
        dotActive: {
            background: "bg-indigo-600 w-6",
        },
        dotInactive: {
            background: "bg-gray-300 hover:bg-gray-400",
        },
    };

    const defaultChildStyles = {
        item: {
            wrapper: {
                layout: "min-w-full flex flex-col md:flex-row items-center justify-between p-6 h-auto md:h-[500px]"
            },
            imageContainer: {
                layout: "w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-lg p-4 h-full",
                transform: "perspective(1000px) rotateX",
                shadow: "box-shadow"
            },
            textContainer: {
                layout: "w-full md:w-1/2 text-left px-6 flex flex-col justify-center mt-6 md:mt-0"
            },
            title: {
                text: "text-3xl md:text-4xl font-bold text-gray-800"
            },
            description: {
                text: "text-lg md:text-xl text-gray-600 leading-relaxed"
            },
            linkUrl: {
                text: "inline-block mt-4 text-indigo-600 hover:underline"
            },
            buttonContainer: {
                layout: "mt-8"
            },
            button: {
                text: "text-white",
                background: "bg-primary hover:bg-primary-light",
                rounded: "rounded-md",
                padding: "px-6 py-3",
                cursor: "cursor-pointer",
                transition: "transition-colors duration-200"
            }
        }
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={buildTailwindClass(carouselStyles?.wrapper, defaultStyles.wrapper)}>
            {/* Carousel Content */}
            <div
                className={buildTailwindClass(carouselStyles?.content, defaultStyles.content)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={carouselItems[currentIndex].id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <CarouselItem
                            item={carouselItems[currentIndex] as ComponentItemType<ServiceCardSettings>}
                            childStyles={childStyles}
                            defaultStyles={defaultChildStyles}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className={buildTailwindClass(carouselStyles?.buttonPrev, defaultStyles.buttonPrev)}
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                >
                    <IoChevronBackOutline className="w-6 h-6 text-gray-800" />
                </button>

                <button
                    className={buildTailwindClass(carouselStyles?.buttonNext, defaultStyles.buttonNext)}
                    onClick={handleNext}
                    aria-label="Next Slide"
                >
                    <IoChevronForwardOutline className="w-6 h-6 text-gray-800" />
                </button>
            </div>

            {/* Dots Navigation */}
            <div
                className={buildTailwindClass(
                    carouselStyles?.dotsContainer,
                    defaultStyles.dotsContainer
                )}
            >
                {carouselItems.map((_, idx) => (
                    <motion.button
                        key={idx}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={buildTailwindClass(
                            idx === currentIndex
                                ? carouselStyles?.dotActive
                                : carouselStyles?.dotInactive,
                            idx === currentIndex
                                ? defaultStyles.dotActive
                                : defaultStyles.dotInactive
                        )}
                        onClick={() => handleDotClick(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
