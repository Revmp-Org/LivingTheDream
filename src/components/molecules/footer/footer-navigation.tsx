import Link from "next/link";
import { motion } from "framer-motion";
import { getStyles } from "@/utils";
import { PageComponentChild } from "@/types";


const FooterNavigation = (navigation: PageComponentChild) => {
    if (!navigation?.isActive) return null;

    const navigationStyles = navigation?.settings?.styles;
    const titleStyles = getStyles("title", navigationStyles);
    const linkStyles = getStyles("link", navigationStyles);
    const linkWrapperStyles = getStyles("linkWrapper", navigationStyles);
    const navigationContainerStyles = getStyles("container", navigationStyles);
    

    const hoverVariants = {
        hover: {
            scale: 1.05,
            color: "#FFFFFF",
            transition: { duration: 0.2 },
        },
    };

    return (
        <div className={navigationContainerStyles}>
            {navigation.settings?.content?.sections.map((section: any) => (
                <div key={section.id}>
                    <h4 className={titleStyles}>{section.label}</h4>
                    <ul>
                        {section.items.map((item: any) => (
                            <motion.li
                                key={item.id}
                                whileHover="hover"
                                variants={hoverVariants}
                                className={linkWrapperStyles}
                            >
                                <Link href={item.path} className={`${linkStyles} text-base`}>
                                    {item.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FooterNavigation;
