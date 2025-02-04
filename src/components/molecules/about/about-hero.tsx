import { motion } from "framer-motion";

interface HeroSectionProps {
    title: string;
    subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <section className="py-16 px-6 lg:px-12 bg-[#F3E5E5] text-center">
            <motion.h1
                className="text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {title}
            </motion.h1>
            {subtitle && (
                <p className="mt-4 text-gray-700 text-lg">
                    {subtitle}
                </p>
            )}
        </section>
    );
};

export default HeroSection;
