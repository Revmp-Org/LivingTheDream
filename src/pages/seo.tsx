import Head from "next/head";
import OverviewSection from "@/components/organism/ServiceOverview";
import BenefitsSection from "@/components/molecules/service/benefits";
import StepSection from "@/components/molecules/service/steps";
import FooterCTA from "@/components/molecules/footer-cta";
import SEOConfig from "@/config/service/seo.json";

export default function SEOPage() {
    const { seo, pageComponents } = SEOConfig;

    const overview = pageComponents?.overview;
    const benefits = pageComponents?.benefits;
    const steps = pageComponents?.steps;
    const cta = pageComponents?.cta;

    return (
        <div>
            {/* SEO Metadata */}
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

            {/* Overview Section */}
            <OverviewSection {...overview} />

            {/* Benefits Section */}
            <BenefitsSection {...benefits} />

            {/* Steps Section */}
            {steps?.settings?.content?.map((step, index) => (
                <StepSection key={index} stepSection={step} />
            ))}

            {/* CTA Section */}
            <FooterCTA {...cta} />
        </div>
    );
}
