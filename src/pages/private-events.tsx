import OverviewSection from "@/components/organism/ServiceOverview";
import FooterCTA from "@/components/molecules/footer-cta";
import PrivateEventsConfig from "@/config/service/private-events.json";
import SEO from "@/components/atoms/seo-config";
import GallerySection from "@/components/molecules/service/gallery";

export default function PrivateEventsPage() {
    const { seo, pageComponents } = PrivateEventsConfig;

    const overview = pageComponents?.overview;
    const cta = pageComponents?.cta;
    const gallery = pageComponents?.gallery;

    return (
        <div>
            <SEO seo={seo} />

            {/* Overview Section */}
            <OverviewSection {...overview} />


            {/* Gallery Section */}
            <GallerySection galleryItems={gallery?.settings?.content} />



            {/* CTA Section */}
            <FooterCTA {...cta} />
        </div>
    );
}
