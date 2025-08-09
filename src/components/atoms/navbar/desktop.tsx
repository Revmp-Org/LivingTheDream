import { motion } from "framer-motion";
import useMotionConfig from "@/hooks/framer-motion";
import NavLink from "@/components/organism/NavLink";
import { NavigationItem, NavLinkButton } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";


const DesktopNavbar = ({
    navigation,
    ctaButton,
}: {
    navigation: NavigationItem[];
    ctaButton?: NavLinkButton
}) => {
    const { listItemHover, listItemTap } = useMotionConfig();
    const router = useRouter();
    return (
        <ul className="flex items-center justify-end space-x-8">
            {navigation.map((item) => (
                <li key={item.id} className="relative group">
                    {item.items ? (
                        <div className="group relative">
                            {/* Navigation Item */}
                            <span className="text-md text-gray-800 cursor-pointer inline-block relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[2px] after:bg-primary-light after:transition-all after:duration-300 after:ease-in-out after:w-0 group-hover:after:w-full">
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
                                        className="p-2 flex items-center text-gray-700 cursor-pointer rounded-md hover:bg-gray-100"
                                        onClick={() => {
                                            router.push(subItem.path || "");
                                        }}
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
                            className="text-md text-gray-800 cursor-pointer inline-block relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[2px] after:bg-primary-light after:transition-all after:duration-300 after:ease-in-out after:w-0 group-hover:after:w-full"
                        >
                            <Link href={item.path || ""}>{item.label}</Link>
                        </span>
                    )}
                </li>
            ))}
            {/* CTA Button */}
            <li>
                <NavLink
                    href={ctaButton?.link || "/get-started"}
                    analytics={ctaButton?.analytics || {
                        eventLabel: "Get Started",
                        eventCategory: "Navbar Interaction",
                        eventAction: "link_click",
                        eventValue: "Get Started",
                    }}
                    className="text-white bg-primary hover:bg-primary-dark rounded-md px-6 py-3 cursor-pointer transition-colors duration-200"
                >
                    {ctaButton?.text || "Get Started"}
                </NavLink>
            </li>
        </ul>
    );
};

export default DesktopNavbar;
