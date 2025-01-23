import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

const LogoTransition = ({ onComplete }: { onComplete: () => void }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [player, setPlayer] = useState<any>(null);

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setIsVisible(true);
            if (player) {
                player.play();
            }
        }, 300)

        const completionTimer = setTimeout(() => {
            setIsVisible(false);
            const exitTimer = setTimeout(() => {
                onComplete();
            }, 300);

            return () => clearTimeout(exitTimer);
        }, 1700);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(completionTimer);
        };
    }, [onComplete, player]);

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="lottieAnimation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Player
                            autoplay={false}
                            keepLastFrame={true}
                            speed={1.8}
                            src={require("../../assets/lottie/fade-in-logo.json")}
                            style={{
                                width: 800,
                                height: 800,
                            }}
                            lottieRef={(instance) => setPlayer(instance)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LogoTransition;
