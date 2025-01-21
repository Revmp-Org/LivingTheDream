import { buildTailwindClass } from "@/utils";
import DesktopNavbar from "../atoms/navbar/desktop";
import MobileNavbar from "../atoms/navbar/mobile";
import Brand from "./brand";
import { useSiteConfig } from "@/context/site-config-context";
import { motion } from "framer-motion";

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
            top: "top-4",
            zIndex: "z-50",
            border: "border",
            padding: "py-2",
            shadow: "shadow-lg",
            rounded: "rounded-lg",
            margin: "mx-4 md:mx-24",
            background: "bg-white",
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

    const motionVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.header
            className={buildTailwindClass(styles.header, defaultStyles.header)}
            initial="hidden"
            animate="visible"
            variants={motionVariants}
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
