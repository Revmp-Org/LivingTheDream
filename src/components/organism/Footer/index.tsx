import { motion } from "framer-motion";
import FooterLogo from "@/components/molecules/footer/footer-logo";
import FooterNavigation from "@/components/molecules/footer/footer-navigation";
import FooterSocialLinks from "@/components/molecules/footer/footer-social-links";
import FooterCopyright from "@/components/molecules/footer/footer-copyright";
import { PageComponent } from "@/types";

const Footer = ({ config }: { config: PageComponent }) => {
    const { children } = config;

    const logo = children?.logo;
    const navigation = children?.navigation;
    const social = children?.social;
    const copyright = children?.copyright;

    return (
        <motion.footer
            className="bg-gray-900 text-white py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-gray-800 pb-8">
                    <FooterLogo {...logo} />
                    <FooterNavigation {...navigation} />
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
                    <FooterSocialLinks {...social} />
                    <FooterCopyright {...copyright} />
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
