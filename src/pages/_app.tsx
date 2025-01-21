import Layout from "../components/Layout";
import "../style/globals.css";
import { SiteConfigProvider } from "../context/site-config-context";
import { useState } from "react";
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
          >
            <App {...props} />
          </motion.div>
        </AnimatePresence>
      )}
    </SiteConfigProvider>
  );
}
