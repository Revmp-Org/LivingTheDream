import CTA from "@/components/organism/CTA";
import Services from "@/components/organism/Services";
import Hero from "@/components/organism/Hero";
import TestimonialsLayout from "@/components/organism/Testimonials";
import homeConfig from "@/config/home/index.json";
import Head from "next/head";

export default function Home() {
  const { pageComponents, seo } = homeConfig;
  

  return (
    <>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <meta property="og:title" content={seo?.title} />
        <meta property="og:description" content={seo?.description} />
        <meta property="og:url" content={seo?.canonical} />
        <link rel="canonical" href={seo?.canonical} />
        <meta name="keywords" content={seo?.keywords?.join(", ")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: seo?.title,
              url: seo?.canonical,
              potentialAction: {
                "@type": "SearchAction",
                target: `${seo?.canonical}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
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
