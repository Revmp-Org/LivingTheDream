import Layout from "../components/Layout";
import "../style/globals.css";
import { SiteConfigProvider } from "../context/site-config-context";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import LogoTransition from "@/components/atoms/on-load-transition";

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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Prevents the page from scrolling to the top
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SiteConfigProvider>
      {!isLogoTransitionComplete ? (
        <LogoTransition onComplete={() => setIsLogoTransitionComplete(true)} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            onAnimationStart={() => window.scrollTo(0, 0)} // Ensure smooth scroll during animation
          >
            <App {...props} />
          </motion.div>
        </AnimatePresence>
      )}
    </SiteConfigProvider>
  );
}
