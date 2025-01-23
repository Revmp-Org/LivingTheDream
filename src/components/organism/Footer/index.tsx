import { FooterConfig } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SmallLogo from "../../../../public/logo-small.png";
import useGoogleAnalytics from "@/hooks/use-google-analytics";

const Footer = ({ config }: { config: FooterConfig }) => {
    const { copyright, navigation, links } = config;

    const { trackClick } = useGoogleAnalytics();

    const defaultStyles = {
        wrapper: "bg-gray-900 text-white py-10",
        container: "max-w-screen-xl mx-auto px-6 md:px-12",
        topSection: "flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-gray-800 pb-8",
        logo: "w-auto h-16 md:h-20 object-contain",
        navigationContainer: "flex flex-wrap gap-12",
        navigation: {
            title: "text-lg font-semibold mb-3 text-gray-200 tracking-wide",
            link: "text-gray-400 hover:text-white transition-all duration-200 text-sm",
        },
        bottomSection: "flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500",
        copyright: "text-center md:text-left",
        links: "flex space-x-6 text-gray-400 hover:text-white transition-all duration-200",
    };

    const motionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hover: { scale: 1.05 },
    };

    return (
        <motion.footer
            className={defaultStyles.wrapper}
            initial="hidden"
            animate="visible"
            variants={motionVariants}
        >
            <div className={defaultStyles.container}>
                {/* Top Section */}
                <motion.div className={defaultStyles.topSection} variants={motionVariants}>
                    {/* Logo */}
                    <div>
                        <Image
                            src={SmallLogo}
                            alt="Footer Logo"
                            className={defaultStyles.logo}
                        />
                    </div>

                    {/* Navigation */}
                    <div className={defaultStyles.navigationContainer}>
                        {navigation?.map((section, idx) => (
                            <div key={idx}>
                                <h4 className={defaultStyles.navigation.title}>
                                    {section.label}
                                </h4>
                                <ul className="space-y-3">
                                    {section.items?.map((item) => (
                                        <li key={item.id}>
                                            <Link
                                                href={item.path || ""}
                                                passHref
                                                onClick={() =>
                                                    trackClick(
                                                        item.label || "",
                                                        "Footer Interaction",
                                                        "link_click",
                                                        item.label || ""
                                                    )
                                                }
                                            >
                                                <motion.a
                                                    whileHover={motionVariants.hover}
                                                    className={defaultStyles.navigation.link}
                                                >
                                                    {item.label}
                                                </motion.a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div className={defaultStyles.bottomSection} variants={motionVariants}>
                    <div className={defaultStyles.copyright}>{copyright}</div>
                    <div className={defaultStyles.links}>
                        {links?.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.path || ""}
                                passHref
                                onClick={() =>
                                    trackClick(link.label || "", "Footer Interaction", "link_click", link.label || "")
                                }
                            >
                                <motion.a whileHover={motionVariants.hover} className={defaultStyles.links}>
                                    {link.label}
                                </motion.a>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
