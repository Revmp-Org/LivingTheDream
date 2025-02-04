import Image from "next/image";
import { motion } from "framer-motion";
import SEO from "@/components/atoms/seo-config";
import FooterCTA from "@/components/molecules/footer-cta";
import AboutConfig from "@/config/about/index.json";
import AboutSection from "@/components/molecules/about/about-details";

const AboutPage: React.FC = () => {
    const { pageComponents, seo } = AboutConfig;

    const about = pageComponents?.about;
    const hero = pageComponents?.hero;
    const footerCTA = pageComponents?.footerCTA;

    return (
        <>
            <SEO seo={seo} />
            
            {/* About Section */}
            <AboutSection {...about} />

            {/* Footer CTA Section */}
            <FooterCTA {...footerCTA} />
        </>
    );
};

export default AboutPage;
