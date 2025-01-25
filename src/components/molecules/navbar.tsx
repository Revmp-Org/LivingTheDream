import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getStyles } from "@/utils";
import DesktopNavbar from "../atoms/navbar/desktop";
import MobileNavbar from "../atoms/navbar/mobile";
import Brand from "./brand";
import { useSiteConfig } from "@/context/site-config-context";

const Navbar = () => {
    const siteConfigTest = useSiteConfig();
    const navbarConfig = siteConfigTest?.global?.navbar
    const settings = navbarConfig?.settings
    const defaultStyles = settings?.styles

    const desktopNavbar = navbarConfig?.children?.desktopNavbar
    const mobileNavbar = navbarConfig?.children?.mobileNavbar
    const brand = navbarConfig?.children?.brand
    const ctaButton = navbarConfig?.children?.ctaButton

    const desktopNavbarNavigation = desktopNavbar?.settings?.content?.navigation || [];
    const mobileNavbarNavigation = mobileNavbar?.settings?.content?.navigation || [];


    const desktopStyles = desktopNavbar?.settings?.styles || {};
    const mobileStyles = mobileNavbar?.settings?.styles || {};

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


    const headerStyles = getStyles("header", defaultStyles);
    const navStyles = getStyles("nav", defaultStyles);
    const containerStyles = getStyles("container", defaultStyles);
    
    return (
        <motion.header
            className={headerStyles}
            initial={{ opacity: 1, y: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : -20,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <nav className={navStyles}>
                <div className={containerStyles}>
                    <Brand brand={brand} />
                    <DesktopNavbar navigation={desktopNavbarNavigation} styles={desktopStyles} ctaButton={ctaButton} />
                    <MobileNavbar navigation={mobileNavbarNavigation} styles={mobileStyles} ctaButton={ctaButton} brand={brand} />
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;
