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

const NavLink = ({ children, href, disableMotion = false, ...props }: NavLinkProps) => {
    const { trackClick } = useGoogleAnalytics();
    const { buttonHover, buttonTap } = useMotionConfig();

    const handleClick = () => {
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
            <Link
                href={href}
                className={`${props.baseClassName || ""} ${props.className || ""} py-2.5 px-4 text-center rounded-lg duration-150`}
                onClick={handleClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link
                href={href}
                scroll={props.scroll}
                className={`${props.baseClassName || ""} ${props.className || ""}`}
                onClick={handleClick}
            >
                {children}
            </Link>
        </motion.div>
    );
};

export default NavLink;

