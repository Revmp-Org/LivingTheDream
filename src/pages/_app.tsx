import Layout from "../components/Layout";
import "../style/globals.css";
import { SiteConfigProvider } from "../context/site-config-context";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import LogoTransition from "@/components/atoms/on-load-transition";
import CookieConsentBanner from "@/components/atoms/cooke-consent";

function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default function MyApp(props: any) {
  const [isLogoTransitionComplete, setIsLogoTransitionComplete] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Ensure client rendering
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);

    // Detect screen size (only on the client)
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Set breakpoint for large screens
    };

    handleResize(); // Run on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  // Prevent rendering until client-side logic is applied
  if (!isMounted) return null;

  return (
    <SiteConfigProvider>
      {isLargeScreen && !isLogoTransitionComplete ? (
        <LogoTransition onComplete={() => setIsLogoTransitionComplete(true)} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            onAnimationStart={() => window.scrollTo(0, 0)}
          >
              <CookieConsentBanner />

            <App {...props} />
          </motion.div>
        </AnimatePresence>
      )}
    </SiteConfigProvider>
  );
}
