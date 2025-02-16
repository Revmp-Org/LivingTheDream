import OverviewSection from "@/components/organism/ServiceOverview";
import FooterCTA from "@/components/molecules/footer-cta";
import SEO from "@/components/atoms/seo-config";
import GallerySection from "@/components/molecules/service/gallery";
import { useServicePage } from "@/hooks/sanity/use-service-page";

export default function CustomBouquetsPage() {

    const { servicePageConfig, loading, error } = useServicePage("custom-bouquets");

    if (loading) return null;
    if (error || !servicePageConfig) return <p>Error loading service page.</p>;

    // Extract fields from the fetched data
    const { seo, overview, gallery, cta } = servicePageConfig || {};

    return (
        <div>
            <SEO seo={seo} />

            {/* Overview Section */}
            <OverviewSection {...overview} />


            {/* Gallery Section */}
            <GallerySection galleryItems={gallery?.items} photoCredit={gallery?.credit} />



            {/* CTA Section */}
            <FooterCTA {...cta} />
        </div>
    );
}
