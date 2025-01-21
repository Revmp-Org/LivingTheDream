import { useRouter } from "next/router";
import { useState } from "react";
import Brand from "../../molecules/brand";
import NavLink from "../../organism/NavLink";
import { useGoogleAnalytics } from "@/hooks/use-google-analytics";
import { buildTailwindClass } from "@/utils";
import { FiMenu, FiX } from "react-icons/fi";
import { AnalyticsConfig, Logo, NavigationItem } from "@/types";

const MobileNavbar = ({
    navigation,
    styles,
    ctaButton,
    logo,
}: {
    navigation: NavigationItem[];
    styles: Record<string, any>;
    ctaButton?: {
        text?: string;
        link?: string;
        analytics?: AnalyticsConfig;
    };
    logo?: Logo;
}) => {
    const { push } = useRouter();
    const [state, setState] = useState(false);
    const { trackClick } = useGoogleAnalytics();

    const handleState = () => {
        document.body.classList.remove("overflow-hidden");
        setState(false);
    };

    const defaultStyles: Record<string, any> = {
        toggleButton: {
            color: "text-gray-500 hover:text-gray-800",
            transition: "transition-colors duration-200",
            layout: "block lg:hidden",
        },
        menuContainer: {
            position: "fixed inset-0 top-0 bg-white lg:hidden",
            transition: "transition-transform duration-300",
            layout: "flex flex-col h-full",
        },
        menuContent: {
            layout: "flex-1 overflow-y-auto px-6 py-8",
        },
        menuVisible: {
            transform: "translate-x-0",
        },
        menuHidden: {
            transform: "translate-x-full",
        },
        header: {
            layout: "flex items-center justify-between",
            padding: "p-6",
            border: "border-b",
        },
        itemGroup: {
            container: "mb-6",
            title: "text-lg font-semibold text-gray-800 mb-4",
            itemList: "space-y-3 pl-4",
        },
        listItem: {
            text: "p-3 text-gray-700",
            hover: "hover:bg-gray-100 active:bg-gray-200",
            rounded: "rounded-md",
            transition: "transition-colors duration-200",
        },
        navButton: {
            layout: "block w-full text-center",
            text: "text-white bg-primary hover:bg-primary-light active:bg-primary-dark",
            rounded: "rounded-md",
            padding: "px-6 py-3",
            transition: "transition-colors duration-200",
        },
        ctaButtonContainer: {
            marginTop: "mt-8",
        },
    };

    return (
        <>
            <button
                role="button"
                aria-label="Toggle menu"
                className={buildTailwindClass(
                    styles.toggleButton || {},
                    defaultStyles.toggleButton
                )}
                onClick={() => {
                    setState(!state);
                    document.body.classList.toggle("overflow-hidden");
                }}
            >
                <FiMenu />
            </button>

            <div
                className={buildTailwindClass(
                    {
                        ...styles.menuContainer,
                        ...(state ? styles.menuVisible : styles.menuHidden),
                    },
                    {
                        ...defaultStyles.menuContainer,
                        ...(state ? defaultStyles.menuVisible : defaultStyles.menuHidden),
                    }
                )}
            >
                <div className={buildTailwindClass(styles.menuContainer, defaultStyles.menuContainer)}>
                    {/* Mobile Header */}
                    <div
                        className={buildTailwindClass(
                            styles.header || {},
                            defaultStyles.header
                        )}
                    >
                        <Brand logo={logo || {}} />
                        <button
                            className={buildTailwindClass(
                                styles.toggleButton || {},
                                defaultStyles.toggleButton
                            )}
                            onClick={handleState}
                        >
                            <FiX />
                        </button>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className={buildTailwindClass(styles.menuContent, defaultStyles.menuContent)}>
                        {navigation.map((item, idx) => (
                            <div
                                key={idx}
                                className={buildTailwindClass(
                                    styles.itemGroup?.container || {},
                                    defaultStyles.itemGroup.container
                                )}
                            >
                                {item.items ? (
                                    <>
                                        <div
                                            className={buildTailwindClass(
                                                styles.itemGroup?.title || {},
                                                defaultStyles.itemGroup.title
                                            )}
                                        >
                                            {item.label}
                                        </div>
                                        <ul
                                            className={buildTailwindClass(
                                                styles.itemGroup?.itemList || {},
                                                defaultStyles.itemGroup.itemList
                                            )}
                                        >
                                            {item.items.map((subItem) => (
                                                <li
                                                    key={subItem.id}
                                                    className={buildTailwindClass(
                                                        styles.listItem || {},
                                                        defaultStyles.listItem
                                                    )}
                                                    onClick={() => {
                                                        push(subItem?.path || '');
                                                        handleState();
                                                        trackClick(
                                                            subItem?.label || '',
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
                                        className={buildTailwindClass(
                                            styles.listItem || {},
                                            defaultStyles.listItem
                                        )}
                                        onClick={() => {
                                            push(item?.path || '');
                                            handleState();
                                            trackClick(
                                                item?.label || '',
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
                        <div className={buildTailwindClass(styles.ctaButtonContainer, defaultStyles.ctaButtonContainer)}>
                            <NavLink
                                href={ctaButton?.link || '/get-started'}
                                analytics={ctaButton?.analytics}
                                className={buildTailwindClass(
                                    styles.navButton || {},
                                    defaultStyles.navButton
                                )}
                                onClick={handleState}
                            >
                                {ctaButton?.text || 'Get Started'}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
