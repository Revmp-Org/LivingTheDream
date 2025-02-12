import OverviewSection from "@/components/organism/ServiceOverview";
import FooterCTA from "@/components/molecules/footer-cta";
import WeddingsConfig from "@/config/service/weddings.json";
import SEO from "@/components/atoms/seo-config";
import GallerySection from "@/components/molecules/service/gallery";

export default function WeddingsPage() {
    const { seo, pageComponents } = WeddingsConfig;

    const overview = pageComponents?.overview;
    const cta = pageComponents?.cta;
    const gallery = pageComponents?.gallery;

    return (
        <div>
            <SEO seo={seo} />

            {/* Overview Section */}
            <OverviewSection {...overview} />


            {/* Gallery Section */}
            <GallerySection galleryItems={gallery?.settings?.content} photoCredit={gallery?.settings?.photoCredit} />



            {/* CTA Section */}
            <FooterCTA {...cta} />
        </div>
    );
}
