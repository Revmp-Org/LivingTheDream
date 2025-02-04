import { motion } from "framer-motion";
import { useGoogleAnalytics } from "@/hooks/use-google-analytics";
import useMotionConfig from "@/hooks/framer-motion";
import NavLink from "@/components/organism/NavLink";
import { NavigationItem, PageComponentChild } from "@/types";
import Link from "next/link";

const DesktopNavbar = ({
    navigation,
    ctaButton,
}: {
    navigation: NavigationItem[];
    ctaButton?: PageComponentChild;
}) => {
    const { trackClick } = useGoogleAnalytics();
    const { listItemHover, listItemTap } = useMotionConfig();

    return (
        <ul className="flex items-center justify-end space-x-8">
            {navigation.map((item) => (
                <li key={item.id} className="relative group">
                    {item.items ? (
                        <div className="group relative">
                            {/* Navigation Item */}
                            <span className="text-md text-gray-600 cursor-pointer inline-block relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[2px] after:bg-secondary after:transition-all after:duration-300 after:ease-in-out after:w-0 group-hover:after:w-full">
                                {/* Static title styles */}
                                {item.label}
                            </span>
                            {/* Dropdown Content */}
                            <motion.ul
                                className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md p-3 w-60 z-10 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {item.items.map((subItem) => (
                                    <motion.li
                                        key={subItem.id}
                                        whileHover={listItemHover}
                                        whileTap={listItemTap}
                                        className="p-2 flex items-center text-gray-500 cursor-pointer rounded-md hover:bg-gray-100"
                                        onClick={() =>
                                            trackClick(
                                                subItem?.label || "",
                                                "Navbar Interaction",
                                                "link_click",
                                                subItem?.label || ""
                                            )
                                        }
                                    >
                                        <Link href={subItem.path || ""}>
                                            {subItem.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    ) : (
                        <span
                            className="text-md text-gray-600 cursor-pointer inline-block relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[2px] after:bg-secondary after:transition-all after:duration-300 after:ease-in-out after:w-0 group-hover:after:w-full"
                            onClick={() =>
                                trackClick(
                                    item?.label || "",
                                    "Navbar Interaction",
                                    "link_click",
                                    item?.label || ""
                                )
                            }
                        >
                            <Link href={item.path || ""}>{item.label}</Link>
                        </span>
                    )}
                </li>
            ))}
            {/* CTA Button */}
            <li>
                <NavLink
                    href={ctaButton?.settings?.content?.link || "/get-started"}
                    analytics={ctaButton?.settings?.analytics || {
                        eventLabel: "Get Started",
                        eventCategory: "Navbar Interaction",
                        eventAction: "link_click",
                        eventValue: "Get Started",
                    }}
                    className="text-white bg-primary hover:bg-primary-dark rounded-md px-6 py-3 cursor-pointer transition-colors duration-200 text-white"
                >
                    {ctaButton?.settings?.content?.text || "Get Started"}
                </NavLink>
            </li>
        </ul>
    );
};

export default DesktopNavbar;
