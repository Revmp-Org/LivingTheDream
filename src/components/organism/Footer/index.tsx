import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

interface FooterProps {
    footer: {
        content: {
            copyright: string;
            logo?: {
                asset: { _ref: string };
            };
            navigation: {
                id: number;
                label: string;
                path?: string;
                items?: { id: number; label: string; path: string }[];
            }[];
        };
    };
}

const Footer = ({ footer }: FooterProps) => {
    return (
        <motion.footer
            className="bg-gradient-to-t from-[#F3E5E5] to-[#E8DCDC] text-gray-800 border-t border-[#D6BFC0] py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-gray-800 pb-8">
                    {/* Logo */}
                    {footer.content.logo?.asset?._ref && (
                        <div className="w-auto h-16 md:h-20">
                            <Image
                                src={urlFor(footer.content.logo.asset._ref).url()}
                                width={100}
                                height={50}
                                alt="Revamp Marketing Footer Logo"
                            />
                        </div>
                    )}

                    {/* Navigation */}
                    <nav className="flex flex-wrap gap-12">
                        {footer.content.navigation.map((section) => (
                            <div key={section.id}>
                                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                                    {section.label}
                                </h4>
                                <ul>
                                    {section.items ? (
                                        section.items.map((item) => (
                                            <li key={item.id} className="mb-2">
                                                <Link
                                                    href={item.path}
                                                    className="text-gray-500 hover:text-gray-800 transition-all duration-200"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))
                                    ) : (
                                        section.path && (
                                            <li>
                                                <Link
                                                    href={section.path}
                                                    className="text-gray-500 hover:text-gray-800 transition-all duration-200"
                                                >
                                                    {section.label}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
                    <p>{footer.content.copyright}</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
