import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import NavLink from "@/components/organism/NavLink";
import Head from "next/head";
import { CarouselItemProps } from "@/types";
import { urlFor } from "@/sanity/lib/image";
import ImageWithCredit from "./image-with-credit";

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const inView = useInView(ref, {
        margin: isMobile ? "-50px 0px -50px 0px" : "-100px 0px -100px 0px",
        once: true,
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
            setScrollProgress(Math.min(scrollY / maxScroll, 1));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        } else {
            controls.start({ opacity: 0, x: 50 });
        }
    }, [inView, controls]);

    const imageUrl = item.image?.asset?._ref
        ? urlFor(item.image.asset._ref).url()
        : "/placeholder.jpg";

    return (
        <div className="min-w-full flex flex-col md:flex-row items-center justify-between p-6 h-auto md:h-[500px]">
            {/* Preload images */}
            <Head>
                <link rel="preload" href={item.path} as="image" />
            </Head>

            {/* Image */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center items-center rounded-lg"
                style={{
                    transform: `perspective(1000px) rotateX(${20 - scrollProgress * 20}deg)`,
                    transformOrigin: "center bottom",
                    transition: "all 0.3s ease-out",
                }}
            >
                <ImageWithCredit
                    src={item.image?.asset?._ref || ""}
                    alt={item.title || "Default Title"}
                    width={800}
                    height={800}
                    photoCredit={item.image?.credit || ""}
                    orientation='landscape'
                    fixedCreditHeight={false}
                    className="rounded-lg"
                />
            </motion.div>

            {/* Text */}
            <motion.div
                ref={ref}
                className="w-full md:w-1/2 text-left px-6 flex flex-col justify-center mt-6 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {item.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {item.description}
                </p>
                {item.path && (
                    <div className="mt-8">
                        <NavLink
                            href={item.path}
                            disableMotion={true}
                            className="text-white bg-primary hover:bg-primary-dark rounded-md px-6 py-3 cursor-pointer transition-colors duration-200"
                            analytics={{
                                eventLabel: item.title,
                                eventCategory: "Carousel Interaction",
                                eventAction: "link_click",
                                eventValue: item.path,
                            }}
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