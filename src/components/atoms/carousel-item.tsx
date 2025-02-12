import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import NavLink from "../organism/NavLink";
import { PageComponentChild, Styles } from "@/types";
import Head from "next/head";
import ImageWithCredit from "./image-with-credit";

type CarouselItemProps = {
    item: PageComponentChild;
    childStyles?: Styles | undefined;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ item, childStyles }) => {
    const controls = useAnimation();
    const ref = React.useRef<HTMLDivElement>(null);

    const carouselItems = item.children || {};
    const carouselItemsArray = Object.values(carouselItems);

    // Caching preloaded images
    const imageCache = new Set<string>();

    useEffect(() => {
        const preloadImages = () => {
            carouselItemsArray.forEach((carouselItem) => {
                const imgSrc = carouselItem.settings?.carouselImage;
                if (imgSrc && !imageCache.has(imgSrc)) {
                    const img = new window.Image() as HTMLImageElement;
                    img.src = imgSrc;
                    imageCache.add(imgSrc);
                }
            });
        };

        preloadImages();
    }, [])



    
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const inView = useInView(ref, {
        margin: isMobile ? "-50px 0px -50px 0px" : "-100px 0px -100px 0px",
        once: true
    });

    const [scrollProgress, setScrollProgress] = useState(() => {
        const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
        const maxScroll = isMobile ? 400 : 600;
        return Math.min(scrollY / maxScroll, 1);
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = isMobile ? 400 : 600;
            const progress = Math.min(scrollY / maxScroll, 1);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        } else {
            controls.start({ opacity: 0, x: 50 });
        }
    }, [inView, controls]);

    return (
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between p-6 h-auto md:h-[500px] ">
            {/* Preload images with <link rel="preload"> */}
            <Head>
                {carouselItemsArray.map((item, index) => (
                    <link key={index} rel="preload" href={item.settings.carouselImage} as="image" />
                ))}
            </Head>
            {/* Image */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-lg p-6 h-full"
                style={{
                    transform: `perspective(1000px) rotateX(${20 - scrollProgress * 20}deg)`,
                    boxShadow: `0 ${20 - scrollProgress * 15}px ${30 - scrollProgress * 20}px rgba(0, 0, 0, ${0.25 - scrollProgress * 0.15})`,
                    transformOrigin: "center bottom",
                    transition: "all 0.3s ease-out",
                }}
            >
                <ImageWithCredit
                    src={item.settings.carouselImage || ""}
                    alt={item.settings.title || "Default Title"}
                    width={800}
                    height={800}
                    photoCredit={item.settings.photoCredit}
                    orientation='landscape'
                    fixedCreditHeight={false}
                    backgroundCard={true}
                />
            </motion.div>

            {/* Text */}
            <motion.div
                ref={ref}
                className="w-full md:w-1/2 text-left px-6 flex flex-col justify-center mt-6 md:mt-0 font-serif"
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {item.settings.title || "Default Title"}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {item.settings.description || "Default Description"}
                </p>
                {item.settings.path && (
                    <div className="mt-8">
                        <NavLink
                            href={item.settings.path}
                            disableMotion={true}
                            className="text-white bg-primary hover:bg-primary-dark rounded-md px-6 py-3 cursor-pointer transition-colors duration-200 text-white"
                            analytics={{
                                eventLabel: item.settings.title || "Default Title",
                                eventCategory: "Carousel Interaction",
                                eventAction: "link_click",
                                eventValue: item.settings.path,
                            }}
                        >
                            {item.settings.buttonText || "Learn More"}
                        </NavLink>
                    </div>
                )}
            </motion.div>
        </div>
    );

};

export default CarouselItem;
