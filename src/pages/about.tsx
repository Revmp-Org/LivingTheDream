import SEO from "@/components/atoms/seo-config";
import FooterCTA from "@/components/molecules/footer-cta";
import Questions from "@/components/molecules/about/questions";
import AboutSection from "@/components/molecules/about/about-details";
import AboutMoreInfo from "@/components/molecules/about/about-more-info";
import { useAboutPage } from "@/hooks/sanity/use-about-page";
const AboutPage: React.FC = () => {
    const { aboutPageConfig, loading } = useAboutPage();

    if (loading || !aboutPageConfig) {
        return null;
    }

    const { about, footerCTA, seo } = aboutPageConfig;

    return (
        <>
            <SEO seo={seo} />
            {/* About Details Section */}
            <AboutSection settings={about} />


            {/* About Introduction Section */}
            {about?.isActive && <AboutMoreInfo settings={about} />}


            {/* Questions Section */}
            {about?.isActive && <Questions settings={about} />}

            {/* Footer CTA Section */}
            <FooterCTA {...footerCTA} />
        </>
    );
};

export default AboutPage;
