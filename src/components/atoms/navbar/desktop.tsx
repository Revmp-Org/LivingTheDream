import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { buildTailwindClass } from "@/utils";
import { useGoogleAnalytics } from "@/hooks/use-google-analytics";
import useMotionConfig from "@/hooks/framer-motion";
import NavLink from "@/components/organism/NavLink";
import { AnalyticsConfig, NavigationItem } from "@/types";
import Link from "next/link";

const DesktopNavbar = ({
    navigation,
    styles,
    ctaButton,
}: {
    navigation: NavigationItem[];
    styles: Record<string, any>;
    ctaButton?: {
        text?: string;
        link?: string;
        analytics?: AnalyticsConfig;
    };
}) => {
    const { trackClick } = useGoogleAnalytics();
    const { listItemHover, listItemTap } = useMotionConfig();

    const defaultStyles = {
        list: {
            display: "hidden lg:flex",
            alignment: "items-center justify-end",
            spacing: "space-x-8",
        },
        listItem: {
            position: "relative",
            group: "group",
        },
        title: {
            text: "text-md text-gray-800",
            cursor: "cursor-pointer",
            inline: "inline-block relative",
            underline:
                "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[2px] after:bg-[#18CB96] after:transition-all after:duration-300 after:ease-in-out after:w-0 group-hover:after:w-full",
        },
        dropdown: {
            container: "absolute left-0 top-full mt-2 bg-white shadow-md rounded-md p-3 w-60 z-10",
            transition: "transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible",
        },
        dropdownItem: {
            padding: "p-2",
            alignment: "flex items-center",
            text: "text-gray-700",
            cursor: "cursor-pointer",
            rounded: "rounded-md",
            hover: "hover:bg-gray-100",
        },
        button: {
            text: "text-white",
            background: "bg-primary hover:bg-primary-light",
            rounded: "rounded-md",
            padding: "px-6 py-2.5",
            cursor: "cursor-pointer",
            transition: "transition-colors duration-200",
        },
    };

    return (
        <ul className={buildTailwindClass(styles.list, defaultStyles.list)}>
            {navigation.map((item, idx) => (
                <li
                    key={idx}
                    className={buildTailwindClass(styles.listItem, defaultStyles.listItem)}
                >
                    {item.items ? (
                        <div className={buildTailwindClass(styles.listItem, defaultStyles.listItem)}>
                            {/* Title with underline */}
                            <div
                                className={buildTailwindClass(
                                    styles.title,
                                    defaultStyles.title
                                )}
                            >
                                {item.label}
                            </div>
                            {/* Dropdown Content */}
                            <ul
                                className={buildTailwindClass(
                                    styles.dropdown,
                                    defaultStyles.dropdown
                                )}
                            >
                                {item.items.map((subItem) => (
                                    <motion.li
                                        key={subItem.id}
                                        whileHover={listItemHover}
                                        whileTap={listItemTap}
                                        className={buildTailwindClass(
                                            styles.dropdownItem,
                                            defaultStyles.dropdownItem
                                        )}
                                        onClick={() => {
                                            trackClick(
                                                subItem?.label || "",
                                                "Navbar Interaction",
                                                "link_click",
                                                subItem?.label || ""
                                            );
                                        }}
                                        initial={{ opacity: 0, y: 10 }} 
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <Link href={subItem?.path || ''}>
                                            {subItem.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div
                            className={buildTailwindClass(
                                styles.title,
                                defaultStyles.title
                            )}
                            onClick={() => {
                                trackClick(
                                    item?.label || '',
                                    "Navbar Interaction",
                                    "link_click",
                                    item?.label || ''
                                );
                            }}
                        >
                            <Link href={item?.path || ''}>
                                {item.label}
                            </Link>
                        </div>
                    )}
                </li>
            ))}
            <li>
                <NavLink
                    href={ctaButton?.link || '/get-started'}
                    analytics={ctaButton?.analytics || {
                        eventLabel: "Get Started",
                        eventCategory: "Navbar Interaction",
                        eventAction: "link_click",
                        eventValue: "Get Started",
                    }}
                    className={buildTailwindClass(styles.button, defaultStyles.button)}
                >
                    {ctaButton?.text || 'Get Started'}
                </NavLink>
            </li>
        </ul>
    );
};

export default DesktopNavbar;
