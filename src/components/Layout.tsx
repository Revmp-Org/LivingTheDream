import Footer from "./organism/Footer";
import Navbar from "./molecules/navbar";
import Head from "next/head";
import { useSiteConfig } from "@/context/site-config-context";
import { usePageConfig } from "@/context/page-config-context";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({
    children,
}: LayoutProps) => {
    const siteConfig = useSiteConfig();
    const footerConfig = siteConfig?.global?.footer
    const themeColor = siteConfig?.global?.layout?.themeColor || "#ffffff"

    const defaultPageConfig = {
        meta: {
            title: "Revamp Marketing",
            description: "Revamp Marketing",
            seo: {
                canonical: "https://revampmarketing.com",
                keywords: [],
            }
        }
    }

    const pageConfig = usePageConfig() || defaultPageConfig;
    
    
    const {
        meta: {
            title = pageConfig?.meta?.title || "Revamp Marketing",
            description = pageConfig?.meta?.description || "Revamp Marketing",
            seo: {
                canonical = pageConfig?.meta?.seo?.canonical || "",
                keywords = pageConfig?.meta?.seo?.keywords || [],
            } = {},
        } = {},
    } = pageConfig || {};

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
                <meta property="og:type" content="website" />
                <meta name="keywords" content={keywords.join(", ")} />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content={themeColor} />
                <link rel="canonical" href={canonical} />
                <style>{`html { scroll-behavior: smooth; }`}</style>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: title,
                            url: canonical,
                            potentialAction: {
                                "@type": "SearchAction",
                                target: `${canonical}/search?q={search_term_string}`,
                                "query-input": "required name=search_term_string",
                            },
                        }),
                    }}
                />
            </Head>
            <Navbar />
            <main>{children}</main>
            {footerConfig && <Footer config={footerConfig} />}
        </>
    );
};

export default Layout;
