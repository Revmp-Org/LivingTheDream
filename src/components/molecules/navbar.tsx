import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { buildTailwindClass } from "@/utils";
import DesktopNavbar from "../atoms/navbar/desktop";
import MobileNavbar from "../atoms/navbar/mobile";
import Brand from "./brand";
import { useSiteConfig } from "@/context/site-config-context";

const Navbar = () => {
    const siteConfigTest = useSiteConfig();
    const navbarConfig = siteConfigTest?.global?.navbar || {};
    const navbarItems = navbarConfig.navigation || [];
    const ctaButton = navbarConfig.ctaButton || {};
    const logo = navbarConfig.logo || {};

    const settings = navbarConfig.settings || {};
    const styles = settings.styles || {};
    const desktopStyles = settings.desktop?.styles || {};
    const mobileStyles = settings.mobile?.styles || {};

    const defaultStyles = {
        header: {
            position: "sticky",
            top: "top-4", // Margin top
            zIndex: "z-50",
            border: "border",
            padding: "py-2",
            shadow: "shadow-lg",
            rounded: "rounded-lg",
            margin: "mx-4 md:mx-24",
            background: "bg-white",
            transition: "transition-all duration-300 ease-in-out", // Smooth transition for fade-out
        },
        nav: {
            maxWidth: "max-w-screen-xl",
            centered: "mx-auto",
        },
        container: {
            layout: "flex items-center justify-between",
            padding: "py-5 px-6",
            rounded: "rounded-lg",
        },
    };

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Detect scrolling direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Hide navbar on scroll down
            } else {
                setIsVisible(true); // Show navbar on scroll up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            className={buildTailwindClass(styles.header, defaultStyles.header)}
            initial={{ opacity: 1, y: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : -20,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <nav className={buildTailwindClass(styles.nav, defaultStyles.nav)}>
                <div className={buildTailwindClass(styles.container, defaultStyles.container)}>
                    <Brand logo={logo} />
                    <DesktopNavbar navigation={navbarItems} styles={desktopStyles} ctaButton={ctaButton} />
                    <MobileNavbar navigation={navbarItems} styles={mobileStyles} ctaButton={ctaButton} logo={logo} />
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;
