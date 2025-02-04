import Head from "next/head";

interface SEOProps {
    seo: {
        title: string;
        description: string;
        canonical: string;
        keywords?: string[];
        image?: string;
    };
}

const SEO = ({ seo }: SEOProps) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />

            {/* Standard SEO Meta Tags */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords?.join(", ")} />
            <link rel="canonical" href={seo.canonical} />

            {/* Open Graph for Social Media */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={seo.canonical} />
            <meta property="og:image" content={seo.image || "/logo-small.png"} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image || "/logo-small.png"} />
            <meta name="twitter:url" content={seo.canonical} />

            {/* Schema Markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: seo.title,
                        url: seo.canonical,
                        potentialAction: {
                            "@type": "SearchAction",
                            target: `${seo.canonical}/search?q={search_term_string}`,
                            "query-input": "required name=search_term_string",
                        },
                    }),
                }}
            />
        </Head>
    );
};

export default SEO;
