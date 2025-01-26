import Head from "next/head";
import FAQHeader from "@/components/molecules/faq/faq-header";
import FAQSection from "@/components/molecules/faq/faq-section";
import FaqConfig from "@/config/faq/index.json";

const FAQPage: React.FC = () => {
    const { pageComponents, seo } = FaqConfig;

    const header = pageComponents?.header;
    const faq = pageComponents?.faq;

    return (
        <div>
            <Head>
                <title>{seo?.title}</title>
                <meta name="description" content={seo?.description} />
                <meta property="og:title" content={seo?.title} />
                <meta property="og:description" content={seo?.description} />
                <meta property="og:url" content={seo?.canonical} />
                <link rel="canonical" href={seo?.canonical} />
                <meta name="keywords" content={seo?.keywords?.join(", ")} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: seo?.title,
                            url: seo?.canonical,
                            potentialAction: {
                                "@type": "SearchAction",
                                target: `${seo?.canonical}/search?q={search_term_string}`,
                                "query-input": "required name=search_term_string",
                            },
                        }),
                    }}
                />
            </Head>

            <FAQHeader {...header} />
            <FAQSection {...faq} />
        </div>
    );
};

export default FAQPage;
