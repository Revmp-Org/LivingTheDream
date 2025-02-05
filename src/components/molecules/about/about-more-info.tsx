import { motion } from "framer-motion";

interface AboutMoreInfoProps {
    settings: {
        content: {
            title: string;
            description: string[];
            additionalInfo: {
                getToKnowMe: string[];
                experience: string[];
                questions: string;
                travel: string;
            };
        };
    };
}

const AboutMoreInfo: React.FC<AboutMoreInfoProps> = ({ settings }) => {
    if (!settings) return null;

    return (
        <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-[#F5E7E7] to-[#F8ECEC]">
            <div className="max-w-screen-lg mx-auto space-y-16">
                {/* Get to Know Me & Experience Side by Side */}
                <div className="flex flex-col md:flex-row gap-12">
                    <motion.div
                        className="flex-1 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-900">🌸 Get to Know Me</h3>
                        <ul className="mt-4 text-lg text-gray-700 list-none border-t border-gray-300">
                            {settings.content.additionalInfo.getToKnowMe.map((fact, index) => (
                                <li key={index} className="py-3 border-b border-gray-300">
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="flex-1 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-900">💐 Experience</h3>
                        <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
                            {settings.content.additionalInfo.experience.map((exp, index) => (
                                <li key={index}>{exp}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMoreInfo;
