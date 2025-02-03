import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CookieConsentBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookieAccepted = localStorage.getItem("cookieConsent");
        if (!cookieAccepted) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "false");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white text-sm px-6 py-4 flex flex-col sm:flex-row items-center justify-between shadow-lg z-[9999]">
            <div className="flex items-center gap-2">
                <span className="text-lg">🍪</span>
                <p className="text-white">
                    We use cookies to enhance your experience. By accepting, you agree to our{" "}
                    <a href="/privacy-policy" className="underline text-primary hover:text-primary-light">
                        privacy policy.
                    </a>
                </p>
            </div>
            <div className="mt-2 sm:mt-0 flex gap-3">
                <motion.button
                    onClick={handleDecline}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center bg-white px-6 py-3 rounded-lg shadow-primary/30 shadow-lg border border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-dark"
                >
                    Decline
                </motion.button>

                <motion.button
                    onClick={handleAccept}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center bg-primary px-6 py-3 rounded-lg shadow-primary/30 shadow-lg hover:bg-primary-light active:bg-primary-dark text-white"
                >
                    Accept
                </motion.button>
            </div>
        </div>
    );
};

export default CookieConsentBanner;
