import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DesktopNavbar from "../atoms/navbar/desktop";
import MobileNavbar from "../atoms/navbar/mobile";
import Brand from "./brand";
import { PageComponent } from "@/types";

const Navbar = ({ config }: { config: PageComponent }) => {
    const navbarConfig = config;

    const desktopNavbar = navbarConfig?.children?.desktopNavbar;
    const mobileNavbar = navbarConfig?.children?.mobileNavbar;
    const brand = navbarConfig?.children?.brand;
    const ctaButton = navbarConfig?.children?.ctaButton;

    const desktopNavbarNavigation = desktopNavbar?.settings?.content?.navigation || [];
    const mobileNavbarNavigation = mobileNavbar?.settings?.content?.navigation || [];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            className="sticky top-4 z-50 border py-4 shadow-lg rounded-lg mx-auto bg-white transition-all duration-300 ease-in-out max-w-5xl w-full lg:px-12 px-4"
            initial={{ opacity: 1, y: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : -20,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <nav className="w-full">
                <div className="flex items-center justify-between py-3">
                    <Brand brand={brand} />
                    {/* Desktop Navbar */}
                    <div className="hidden md:flex">
                        <DesktopNavbar navigation={desktopNavbarNavigation} ctaButton={ctaButton} />
                    </div>
                    {/* Mobile Navbar */}
                    <div className="md:hidden">
                        <MobileNavbar navigation={mobileNavbarNavigation} ctaButton={ctaButton} brand={brand} />
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;
