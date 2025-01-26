import Footer from "./organism/Footer";
import Navbar from "./molecules/navbar";
import Head from "next/head";
import { useSiteConfig } from "@/context/site-config-context";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({
    children,
}: LayoutProps) => {
    const siteConfig = useSiteConfig();
    const footerConfig = siteConfig?.global?.footer
    const navbarConfig = siteConfig?.global?.navbar
    const themeColor = siteConfig?.global?.layout?.themeColor || "#ffffff"

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <html lang="en" />
                <meta property="og:type" content="website" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content={themeColor} />
                <style>{`html { scroll-behavior: smooth; }`}</style>
            </Head>
            {navbarConfig && <Navbar config={navbarConfig} />}
            <main className="min-h-screen">{children}</main>
            {footerConfig && <Footer config={footerConfig} />}
        </>
    );
};

export default Layout;
