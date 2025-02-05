import SEO from "@/components/atoms/seo-config";
import FooterCTA from "@/components/molecules/footer-cta";
import AboutConfig from "@/config/about/index.json";
import Questions from "@/components/molecules/about/questions";
import AboutSection from "@/components/molecules/about/about-details";
import AboutMoreInfo from "@/components/molecules/about/about-more-info";
const AboutPage: React.FC = () => {
    const { pageComponents, seo } = AboutConfig;

    const about = pageComponents?.about;
    const footerCTA = pageComponents?.footerCTA;

    return (
        <>
            <SEO seo={seo} />
            {/* About Details Section */}
            <AboutSection {...about} />


            {/* About Introduction Section */}
            <AboutMoreInfo {...about} />


            {/* Questions Section */}
            <Questions {...about} />

            {/* Footer CTA Section */}
            <FooterCTA {...footerCTA} />
        </>
    );
};

export default AboutPage;
