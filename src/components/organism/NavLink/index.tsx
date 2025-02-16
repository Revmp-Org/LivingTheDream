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
    analytics: AnalyticsConfig | undefined;
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

    // Use disableMotion prop to conditionally disable Framer Motion animations
    if (disableMotion) {
        return (
            <Link
                href={href}
                className={`${baseClassName} ${className}`}
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
                className={`${baseClassName} ${className}`}
                onClick={handleClick}
            >
                {children}
            </Link>
        </motion.div>
    );
};

export default NavLink;
