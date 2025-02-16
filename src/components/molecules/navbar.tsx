import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DesktopNavbar from "../atoms/navbar/desktop";
import MobileNavbar from "../atoms/navbar/mobile";
import Brand from "./brand";

const Navbar = ({ config }: { config: any }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 50);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    if (!config) return null;

    const { content } = config;
    const navigation = content?.navigation || [];
    const brand = content?.logo;
    const ctaButton = content?.ctaButton;

    return (
        <motion.header
            className="sticky top-4 z-50 border py-4 shadow-lg rounded-lg mx-auto bg-white transition-all duration-500 ease-in-out max-w-5xl w-full lg:px-12 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <nav className="w-full">
                <div className="flex items-center justify-between py-3">
                    <Brand logo={brand} />
                    {/* Desktop Navbar */}
                    <div className="hidden md:flex">
                        <DesktopNavbar navigation={navigation} ctaButton={ctaButton} />
                    </div>
                    {/* Mobile Navbar */}
                    <div className="md:hidden">
                        <MobileNavbar navigation={navigation} ctaButton={ctaButton} brand={brand} />
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;
