import { useRouter } from "next/router";
import { useState } from "react";
import Brand from "../../molecules/brand";
import NavLink from "../../organism/NavLink";
import { useGoogleAnalytics } from "@/hooks/use-google-analytics";
import { getStyles } from "@/utils";
import { FiMenu, FiX } from "react-icons/fi";
import { NavigationItem, PageComponentChild } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavbar = ({
    navigation,
    styles,
    ctaButton,
    brand,
}: {
    navigation: NavigationItem[];
    styles: Record<string, any>;
    ctaButton?: PageComponentChild;
    brand: any;
}) => {
    const { push } = useRouter();
    const [state, setState] = useState(false);
    const { trackClick } = useGoogleAnalytics();

    const handleState = () => {
        document.body.classList.remove("overflow-hidden");
        setState(false);
    };
    const toggleButtonStyles = getStyles("toggleButton", styles);
    const navButtonStyles = getStyles("navButton", styles);

    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100%" },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                aria-label="Toggle menu"
                className={toggleButtonStyles}
                onClick={() => {
                    setState(true);
                    document.body.classList.add("overflow-hidden");
                }}
            >
                <FiMenu size={24} />
            </button>

            {/* Overlay and Menu */}
            <AnimatePresence>
                {state && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={handleState}
                        />

                        {/* Menu Container */}
                        <motion.div
                            className="fixed inset-y-0 right-0 bg-white z-50 flex flex-col w-full sm:w-3/4 md:w-1/2"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b">
                                <Brand brand={brand} />
                                <button
                                    aria-label="Close menu"
                                    className="text-gray-500 hover:text-gray-800"
                                    onClick={handleState}
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            {/* Navigation Items */}
                            <div className="flex-1 overflow-y-auto px-6 py-8">
                                {navigation.map((item, idx) => (
                                    <div key={idx} className="mb-6">
                                        {item.items ? (
                                            <>
                                                <div className="text-lg font-semibold text-gray-800 mb-4">
                                                    {item.label}
                                                </div>
                                                <ul className="space-y-3 pl-4">
                                                    {item.items.map((subItem) => (
                                                        <li
                                                            key={subItem.id}
                                                            className="p-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-md cursor-pointer transition-colors duration-200"
                                                            onClick={() => {
                                                                push(subItem?.path || "");
                                                                handleState();
                                                                trackClick(
                                                                    subItem?.label || "",
                                                                    "Mobile Nav",
                                                                    "link_click",
                                                                    subItem.label
                                                                );
                                                            }}
                                                        >
                                                            {subItem.label}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <div
                                                className="p-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-md cursor-pointer transition-colors duration-200"
                                                onClick={() => {
                                                    push(item?.path || "");
                                                    handleState();
                                                    trackClick(
                                                        item?.label || "",
                                                        "Mobile Nav",
                                                        "link_click",
                                                        item.label
                                                    );
                                                }}
                                            >
                                                {item.label}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="mt-8">
                                    <NavLink
                                        href={ctaButton?.settings?.content?.link || "/get-started"}
                                        analytics={ctaButton?.settings?.analytics || {
                                            eventLabel: "Get Started",
                                            eventCategory: "Mobile Nav",
                                            eventAction: "link_click",
                                            eventValue: "Get Started",
                                        }}
                                        className={navButtonStyles}
                                        onClick={handleState}
                                    >
                                        {ctaButton?.settings?.content?.ctaButton?.text || "Get Started"}
                                    </NavLink>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNavbar;
