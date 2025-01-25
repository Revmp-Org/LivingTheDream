import { motion } from "framer-motion";
import { getStyles } from "@/utils";
import FooterLogo from "@/components/molecules/footer/footer-logo";
import FooterNavigation from "@/components/molecules/footer/footer-navigation";
import FooterSocialLinks from "@/components/molecules/footer/footer-social-links";
import FooterCopyright from "@/components/molecules/footer/footer-copyright";
import { PageComponent } from "@/types";

const Footer = ({ config }: { config: PageComponent }) => {
    const { settings, children } = config;

    const defaultStyles = settings?.styles;

    const wrapperStyles = getStyles("wrapper", defaultStyles);
    const containerStyles = getStyles("container", defaultStyles);
    const topSectionStyles = getStyles("topSection", defaultStyles);
    const bottomSectionStyles = getStyles("bottomSection", defaultStyles);

    const logo = children?.logo;
    const navigation = children?.navigation;
    const social = children?.social;
    const copyright = children?.copyright;

    return (
        <motion.footer
            className={wrapperStyles}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className={containerStyles}>
                {/* Top Section */}
                <div className={topSectionStyles}>
                    <FooterLogo {...logo} />
                    <FooterNavigation {...navigation} />
                </div>

                {/* Bottom Section */}
                <div className={bottomSectionStyles}>
                    <FooterSocialLinks {...social} />
                    <FooterCopyright {...copyright} />
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
