import Image from "next/image";
import { motion } from "framer-motion";

interface AboutSectionProps {
    settings: {
        image: { src: string; alt: string };
        content: {
            title: string;
            description: string[];
            quote?: string;
        };
    };
}

const AboutSection: React.FC<AboutSectionProps> = ({ settings }) => {
    if (!settings) return null;

    return (
        <section className="py-16 px-6 mt-8 lg:px-12 bg-gradient-to-b from-bg-primary-light via-white to-bg-primary-light">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Image */}
                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src={settings.image.src}
                        className="rounded-xl shadow-lg object-cover"
                        alt={settings.image.alt}
                        width={400} // Reduced width
                        height={250} // Reduced height
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    className="flex-1 text-center md:text-left font-serif"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-3xl font-semibold text-gray-900">{settings.content.title}</h2>
                    {settings.content.description.map((desc: string, index: number) => (
                        <p key={index} className="mt-4 text-gray-700 text-lg leading-relaxed">
                            {desc}
                        </p>
                    ))}
                    {settings.content.quote && (
                        <p className="mt-6 italic text-gray-600 text-lg">
                            "{settings.content.quote}"
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
