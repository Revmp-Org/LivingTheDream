import { motion } from "framer-motion";

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactHeader: React.FC<{ header: any }> = ({ header }) => {
    if (!header?.isActive || !header?.content) return null;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="mt-12 mb-16 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32"
        >
            <div className="text-center">
                <h1 className="text-gray-800 text-3xl sm:text-4xl font-semibold">
                    {header.content.title}
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                    {header.content.subheader}
                </p>
            </div>
        </motion.div>
    );
};

export default ContactHeader;
