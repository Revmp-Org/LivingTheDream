import Link from "next/link";
import { useGoogleAnalytics } from "@/hooks/use-google-analytics";
import { motion } from "framer-motion";
import useMotionConfig from "@/hooks/framer-motion";
import { AnalyticsConfig } from "@/types";

type NavLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
    scroll?: boolean;
    baseClassName?: string;
    onClick?: () => void;
    analytics: AnalyticsConfig;
    disableMotion?: boolean;
};

const NavLink = ({
    children,
    href,
    disableMotion = false,
    baseClassName = "",
    className = "",
    ...props
}: NavLinkProps) => {
    const { trackClick } = useGoogleAnalytics();
    const { buttonHover, buttonTap } = useMotionConfig();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (props.analytics) {
            const {
                eventLabel,
                eventCategory = "Navbar Interaction",
                eventAction = "link_click",
                eventValue = "",
            } = props.analytics;

            trackClick(eventLabel, eventCategory, eventAction, eventValue);
        }

        if (props.onClick) {
            props.onClick();
        }
    };

    if (disableMotion) {
        return (
            <Link href={href} passHref legacyBehavior>
                <a className={`${baseClassName} ${className}`} onClick={handleClick}>
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <Link href={href} passHref legacyBehavior>
            <motion.a
                whileHover={buttonHover}
                whileTap={buttonTap}
                className={`${baseClassName} ${className}`}
                onClick={handleClick}
            >
                {children}
            </motion.a>
        </Link>
    );
};

export default NavLink;
