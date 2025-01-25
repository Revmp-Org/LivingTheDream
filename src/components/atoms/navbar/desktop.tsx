import { motion } from "framer-motion";
import { getStyles } from "@/utils";
import { useGoogleAnalytics } from "@/hooks/use-google-analytics";
import useMotionConfig from "@/hooks/framer-motion";
import NavLink from "@/components/organism/NavLink";
import { NavigationItem, PageComponentChild } from "@/types";
import Link from "next/link";

const DesktopNavbar = ({
    navigation,
    styles,
    ctaButton,
}: {
    navigation: NavigationItem[];
    styles: Record<string, any>;
    ctaButton?: PageComponentChild;
}) => {
    const { trackClick } = useGoogleAnalytics();
    const { listItemHover, listItemTap } = useMotionConfig();
    
    const listStyles = getStyles("list", styles);
    const listItemStyles = getStyles("listItem", styles);
    const titleStyles = getStyles("title", styles);
    const dropdownStyles = getStyles("dropdown", styles);
    const dropdownItemStyles = getStyles("dropdownItem", styles);
    const buttonStyles = getStyles("button", styles);
    

    return (
        <ul className={listStyles}>
            {navigation.map((item) => (
                <li key={item.id} className={listItemStyles}>
                    {item.items ? (
                        <div className="group relative">
                            {/* Navigation Item */}
                            <span className={titleStyles}>{item.label}</span>
                            {/* Dropdown Content */}
                            <motion.ul
                                className={`${dropdownStyles} group-hover:opacity-100 group-hover:visible`}
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
                                        className={dropdownItemStyles}
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
                            className={titleStyles}
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
                    className={buttonStyles}
                >
                    {ctaButton?.settings?.content?.ctaButton?.text || "Get Started"}
                </NavLink>
            </li>
        </ul>
    );
};

export default DesktopNavbar;
