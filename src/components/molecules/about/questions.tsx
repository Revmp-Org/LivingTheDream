import { motion } from "framer-motion";

interface QuestionsProps {
    settings: {
        content: {
            additionalInfo?: {
                questions: string;
                travel: string;
            };
        };
    };
}

const Questions: React.FC<QuestionsProps> = ({ settings }) => {
    if (!settings?.content?.additionalInfo) return null;

    return (
        <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-[#F5E7E7] to-[#F5E7E7]">
            <div className="max-w-screen-lg mx-auto">
                {/* Questions & Do You Travel Side by Side */}
                <div className="flex flex-col md:flex-row gap-12">
                    <motion.div
                        className="flex-1 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-900">Questions?</h3>
                        <p className="mt-4 text-lg text-gray-700">{settings.content.additionalInfo.questions}</p>
                    </motion.div>

                    <motion.div
                        className="flex-1 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-900">Do You Travel?</h3>
                        <p className="mt-4 text-lg text-gray-700">{settings.content.additionalInfo.travel}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Questions;
