import { FooterConfig } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SmallLogo from "../../../../public/logo-small.png";

const Footer = ({ config }: { config: FooterConfig }) => {
    const { copyright, navigation, address, social, links } = config;

    const socialInfo = [
        {
            key: "facebook",
            icon: <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>,
        },
        {
            key: 'twitter',
            icon: <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>,
        },
        {
            key: 'linkedin',
            icon: <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 28 28"><g clipPath="url(#clip0_1213_3074)"><path fill="currentColor" d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z" /></g><defs><clipPath id="clip0_1213_3074"><path fill="#fff" d="M0 0h28v28H0z" /></clipPath></defs></svg>,
        },
    ]

    const mappedSocialInfo = social?.map((item) => {
        const iconData = socialInfo.find((info) => info.key === item.key);
        return { ...iconData, href: item.value };
    });

    const defaultStyles = {
        wrapper: {
            layout: "bg-gray-900 text-white py-16",
        },
        container: {
            layout: "max-w-screen-xl mx-auto px-6 md:px-12",
        },
        topSection: {
            layout: "flex flex-col md:flex-row justify-between items-start pb-8 border-b border-gray-800",
            imageContainer: "mb-8 md:mb-0 md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left",
            navigationContainer: "w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12",
        },
        logo: {
            image: "w-auto h-20 object-contain",
            address: "mt-6 text-gray-400 text-sm space-y-1",
        },
        social: {
            container: "flex justify-center md:justify-start space-x-6 mt-6",
            icon: "text-gray-400 hover:text-white transition-all duration-200",
        },
        bottomSection: {
            layout: "flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500",
            copyright: "mb-4 md:mb-0 text-center md:text-left",
            links: "flex space-x-6 text-gray-400 hover:text-white transition-all duration-200",
        },
        navigation: {
            title: "text-lg font-semibold mb-6 text-gray-200 uppercase tracking-wide",
            link: "text-gray-400 hover:text-white transition-all duration-200 text-sm",
        },
    };

    const motionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 } },
        hover: { scale: 1.05 },
    };

    return (
        <motion.footer
            className={defaultStyles.wrapper.layout}
            initial="hidden"
            animate="visible"
            variants={motionVariants}
        >
            <div className={defaultStyles.container.layout}>
                {/* Top Section */}
                <motion.div
                    className={defaultStyles.topSection.layout}
                    variants={motionVariants}
                >
                    {/* Left Image */}
                    <div className={defaultStyles.topSection.imageContainer}>
                        <Image
                            src={SmallLogo}
                            alt="Footer Logo"
                            className={defaultStyles.logo.image}
                        />
                        <div className={defaultStyles.logo.address}>
                            <p>{address?.line1}</p>
                            <p>{address?.line2}</p>
                            <p>{address?.country}</p>
                        </div>
                        <div className={defaultStyles.social.container}>
                            <div className={defaultStyles.social.container}>
                                {mappedSocialInfo?.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        aria-label="social media"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={defaultStyles.social.icon}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Navigation */}
                    <div
                        className={defaultStyles.topSection.navigationContainer}
                    >
                        {navigation?.map((section, idx) => (
                            <div key={idx}>
                                <h4 className={defaultStyles.navigation.title}>
                                    {section.label}
                                </h4>
                                <ul className="space-y-3">
                                    {section.items?.map((item) => (
                                        <li key={item.id}>
                                            <Link href={item.path || ""} passHref>
                                                <motion.a
                                                    whileHover={motionVariants.hover}
                                                    className={defaultStyles.navigation.link}
                                                >
                                                    {item.label}
                                                </motion.a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    className={defaultStyles.bottomSection.layout}
                    variants={motionVariants}
                >
                    <div className={defaultStyles.bottomSection.copyright}>
                        {copyright}
                    </div>
                    <div className={defaultStyles.bottomSection.links}>
                        {links?.map((link, idx) => (
                            <Link key={idx} href={link.path || ""} passHref>
                                <motion.a
                                    whileHover={motionVariants.hover}
                                    className={defaultStyles.bottomSection.links}
                                >
                                    {link.label}
                                </motion.a>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
