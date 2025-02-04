import CTA from "@/components/organism/CTA";
import Services from "@/components/organism/Services";
import Hero from "@/components/organism/Hero";
import TestimonialsLayout from "@/components/organism/Testimonials";
import homeConfig from "@/config/home/index.json";
import SEO from "@/components/atoms/seo-config";

export default function Home() {
  const { pageComponents, seo } = homeConfig;
  

  return (
    <>
      <SEO seo={seo} />
      {pageComponents.hero?.isActive && <Hero {...pageComponents.hero} />}
      {pageComponents.services?.isActive && (
        <Services {...pageComponents.services} />
      )}
      {pageComponents.testimonials?.isActive && (
        <TestimonialsLayout {...pageComponents.testimonials} />
      )}
      {pageComponents.cta?.isActive && <CTA {...pageComponents.cta} />}
    </>
  );
}
