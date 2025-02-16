import CTA from "@/components/organism/CTA";
import Services from "@/components/organism/Services";
import Hero from "@/components/organism/Hero";
import TestimonialsLayout from "@/components/organism/Testimonials";
import SEO from "@/components/atoms/seo-config";
import { useHomePage } from "@/hooks/sanity/use-home-page";

export default function Home() {
  const { homePageConfig, loading } = useHomePage();

  if (loading || !homePageConfig) {
    return null;
  }

  const { hero, services, cta, seo } = homePageConfig;

  return (
    <>
      <SEO seo={seo} />
      {hero?.isActive && <Hero hero={hero} />}
      {services?.isActive && <Services services={services} />}
      {/* {testimonials?.isActive && <TestimonialsLayout {...testimonials} />} */}
      {cta?.isActive && <CTA cta={cta} />}
    </>
  );
}
