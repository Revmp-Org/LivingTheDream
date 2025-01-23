import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { ComponentItemType, ServiceCardSettings } from "@/types";
import { buildTailwindClass } from "@/utils";
import NavLink from "../organism/NavLink";

type CarouselItemStyles = {
    item?: {
        wrapper?: Record<string, string>;
        imageContainer?: Record<string, string>;
        textContainer?: Record<string, string>;
        title?: Record<string, string>;
        description?: Record<string, string>;
        linkUrl?: Record<string, string>;
        button?: Record<string, string>;
        buttonContainer?: Record<string, string>;
    };
};

type CarouselItemProps = {
    item: ComponentItemType<ServiceCardSettings>;
    childStyles: CarouselItemStyles | undefined;
    defaultStyles: CarouselItemStyles;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ item, childStyles, defaultStyles }) => {
    const controls = useAnimation();
    const ref = React.useRef<HTMLDivElement>(null);

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const inView = useInView(ref, {
        margin: isMobile ? "-50px 0px -50px 0px" : "-100px 0px -100px 0px",
        once: true
    });

    const [scrollProgress, setScrollProgress] = useState(() => {
        const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
        const maxScroll = isMobile ? 400 : 600; // Reduce maxScroll for mobile
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
        <div className={buildTailwindClass(childStyles?.item?.wrapper, defaultStyles?.item?.wrapper)}>
            {/* Image */}
            <motion.div
                className={buildTailwindClass(childStyles?.item?.imageContainer, defaultStyles?.item?.imageContainer)}
                style={{
                    transform: `perspective(1000px) rotateX(${20 - scrollProgress * 20}deg)`,
                    boxShadow: `0 ${20 - scrollProgress * 15}px ${30 - scrollProgress * 20}px rgba(0, 0, 0, ${0.25 - scrollProgress * 0.15})`,
                    transformOrigin: "center bottom",
                    transition: "all 0.3s ease-out",
                }}
            >
                <Image
                    src={item.settings.carouselImage || ""}
                    width={800}
                    height={800}
                    alt={item.settings.title || "Default Title"}
                    className="rounded-lg w-full h-full object-cover"
                    priority
                />
            </motion.div>

            {/* Text */}
            <motion.div
                ref={ref}
                className={buildTailwindClass(childStyles?.item?.textContainer, defaultStyles?.item?.textContainer)}
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h3 className={buildTailwindClass(childStyles?.item?.title, defaultStyles?.item?.title)}>
                    {item.settings.title || "Default Title"}
                </h3>
                <p className={buildTailwindClass(childStyles?.item?.description, defaultStyles?.item?.description)}>
                    {item.settings.description || "Default Description"}
                </p>
                {item.settings.path && (
                    <div className={buildTailwindClass(childStyles?.item?.buttonContainer, defaultStyles?.item?.buttonContainer)}>
                        <NavLink
                            href={item.settings.path}
                            disableMotion={true}
                            className={buildTailwindClass(childStyles?.item?.button, defaultStyles?.item?.button)}
                            analytics={
                            {
                                eventLabel: item.settings.title || "Default Title",
                                eventCategory: "Carousel Interaction",
                                eventAction: "link_click",
                                eventValue: item.settings.path,
                            }
                        }
                    >
                            Learn More
                        </NavLink>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default CarouselItem;
