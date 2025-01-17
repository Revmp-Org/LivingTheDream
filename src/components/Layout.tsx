import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

const Layout = ({ 
    children, 
    title = "RevampMarketing", 
    description = "Empowering schools, teachers, and students with innovative, data-driven solutions to enhance academic outcomes, improve course quality, and maximize college acceptance rates. Transforming education through actionable insights and fostering excellence at every step." 
}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content="https://www.revampmarketing.net" />
                <meta name="keywords" content="education, teaching tools, student success, academic solutions" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#ffffff" />
                <link
                    rel="icon"
                    type="image/png"
                    href="/logo-small-light.svg"
                    media="(prefers-color-scheme: light)"
                />
                <link rel="canonical" href="https://www.revampmarketing.net" />
                <style>
                {`
                    html {
                    scroll-behavior: smooth;
                    }
                `}
                </style>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "RevampMarketing",
                            url: "https://www.revampmarketing.net",
                            potentialAction: {
                                "@type": "SearchAction",
                                target: "https://www.revampmarketing.net/search?q={search_term_string}",
                                "query-input": "required name=search_term_string",
                            },
                        }),
                    }}
                />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
