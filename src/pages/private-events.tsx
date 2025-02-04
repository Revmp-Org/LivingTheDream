import OverviewSection from "@/components/organism/ServiceOverview";
import BenefitsSection from "@/components/molecules/service/benefits";
import StepSection from "@/components/molecules/service/steps";
import FooterCTA from "@/components/molecules/footer-cta";
import PrivateEventsConfig from "@/config/service/private-events.json";
import SEO from "@/components/atoms/seo-config";

export default function PrivateEventsPage() {
    const { seo, pageComponents } = PrivateEventsConfig;

    const overview = pageComponents?.overview;
    const benefits = pageComponents?.benefits;
    const steps = pageComponents?.steps;
    const cta = pageComponents?.cta;

    return (
        <div>
            {/* SEO Metadata */}
            <SEO seo={seo} />

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
