import CTA from "@/components/organism/CTA";
import Services from "@/components/organism/Services";
import Hero from "@/components/organism/Hero";
import TestimonialsLayout from "@/components/organism/Testimonials";
import { getComponent } from "@/utils";
import homeConfig from "@/config/home/index.json";
import { 
  HeroSettings, 
  ServiceCardSettings, 
  CTASettings, 
  TestimonialSettings, 
  ComponentItemType, 
  ComponentSettings 
} from "@/types";

export default function Home() {
  const components = homeConfig.pageComponents as ComponentItemType<ComponentSettings>[];

  const hero = getComponent<HeroSettings>(components, "hero");
  const services = getComponent<ServiceCardSettings>(components, "services");
  const cta = getComponent<CTASettings>(components, "cta");
  const testimonials = getComponent<TestimonialSettings>(components, "testimonials");

  return (
    <>
      {hero.visible && <Hero {...hero} />}
      {services.visible && (
          <Services {...services} />
      )}
      {testimonials.visible && (
          <TestimonialsLayout {...testimonials} />
      )}
      {cta.visible && <CTA {...cta} />}
    </>
  );
}
