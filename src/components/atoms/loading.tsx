import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
            onAnimationComplete();
        }, 2000); // Adjust time for how long the animation should display
        return () => clearTimeout(timeout);
    }, [onAnimationComplete]);

    return (
        visible && (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 bg-indigo-600 flex items-center justify-center z-50"
            >
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-white text-3xl font-bold"
                >
                    Loading...
                </motion.div>
            </motion.div>
        )
    );
};

export default LoadingScreen;
