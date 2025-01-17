import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <title>RevampEdu | Empowering Schools and Teachers</title>
        <meta
          name="description"
          content="Discover data-driven solutions to enhance education outcomes and support students' success."
        />
        <meta property="og:title" content="RevampEdu | Empowering Schools and Teachers" />
        <meta property="og:description" content="Discover data-driven solutions to enhance education outcomes and support students' success." />
        <link rel="canonical" href="https://www.revampedu.com/" />
        <meta name="keywords" content="education, teaching tools, student success, academic solutions" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "RevampEdu | Empowering Schools and Teachers",
              description:
                "Discover data-driven solutions to enhance education outcomes and support students' success.",
              url: "https://www.revampedu.com/",
            }),
          }}
        />
      </Head>
      <Hero />
      {/* <LogoGrid /> */}
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      {/* <ToolKit /> */}
      {/* <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA /> */}
    </>
  );
}
