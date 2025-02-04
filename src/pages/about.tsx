import FAQHeader from "@/components/molecules/faq/faq-header";
import FAQSection from "@/components/molecules/faq/faq-section";
import FaqConfig from "@/config/faq/index.json";
import SEO from "@/components/atoms/seo-config";

const AboutPage: React.FC = () => {
    const { pageComponents, seo } = FaqConfig;

    const header = pageComponents?.header;
    const faq = pageComponents?.faq;

    return (
        <div>
            <SEO seo={seo} />

            <FAQHeader {...header} />
            <FAQSection {...faq} />
        </div>
    );
};

export default AboutPage;
