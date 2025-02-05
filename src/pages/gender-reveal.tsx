import OverviewSection from "@/components/organism/ServiceOverview";
import FooterCTA from "@/components/molecules/footer-cta";
import GenderRevealConfig from "@/config/service/gender-reveal.json";
import SEO from "@/components/atoms/seo-config";
import GallerySection from "@/components/molecules/service/gallery";

export default function GenderRevealPage() {
    const { seo, pageComponents } = GenderRevealConfig;

    const overview = pageComponents?.overview;
    const cta = pageComponents?.cta;
    const gallery = pageComponents?.gallery;
    const columns = pageComponents?.gallery?.settings?.columns || 4;

    return (
        <div>
            <SEO seo={seo} />

            {/* Overview Section */}
            <OverviewSection {...overview} />


            {/* Gallery Section */}
            <GallerySection galleryItems={gallery?.settings?.content} columns={columns as 3 | 4} />



            {/* CTA Section */}
            <FooterCTA {...cta} />
        </div>
    );
}
