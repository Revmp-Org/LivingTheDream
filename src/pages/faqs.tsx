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
                <meta name="keywords" content={seo?.keywords?.join(", ")} />
                <link rel="canonical" href={seo?.canonical} />
            </Head>

            <FAQHeader {...header} />
            <FAQSection {...faq} />
        </div>
    );
};

export default FAQPage;
