import Head from "next/head";
import OverviewSection from "@/components/organism/ServiceOverview";
import BenefitsSection from "@/components/molecules/service/benefits";
import StepSection from "@/components/molecules/service/steps";
import FooterCTA from "@/components/molecules/footer-cta";

export default function SeoPage() {
    const defaultStyles = {
        buttonWrapper: {
            marginTop: "flex mt-6 lg:mt-8 justify-center lg:justify-start",
        },
        button: {
            text: "text-white",
            background: "bg-primary hover:bg-primary-light active:bg-primary-dark",
            rounded: "rounded-md",
            padding: "px-6 py-3",
            cursor: "cursor-pointer",
            transition: "transition-colors duration-200",
        },
        wrapper: {
            padding: {
                base: "px-4 pt-20 pb-12",
                large: "lg:px-8 lg:pt-36 lg:pb-16",
            },
            background: "bg-white",
            height: "h-auto lg:h-[85vh]",
        },
        container: {
            layout: {
                base: "custom-screen flex flex-col-reverse items-center justify-center text-center",
                large: "lg:text-left flex flex-col lg:flex-row items-start gap-8 w-full",
            },
        },
        textContainer: {
            layout: {
                maxWidth: "max-w-2xl",
            },
        },
        title: {
            color: "text-gray-900",
            typography: {
                size: "text-4xl",
                large: "sm:text-5xl",
                weight: "font-bold",
                leading: "leading-tight",
            },
            marginBottom: "mb-6",
        },
        description: {
            color: "text-gray-700",
            typography: {
                size: "text-lg",
                leading: "leading-relaxed",
            },
            marginBottom: "mb-4",
        },
        highlight: {
            color: "text-primary",
            typography: {
                size: "text-lg",
                weight: "font-semibold",
            },
        },
        imageContainer: {
            layout: {
                base: "w-full max-w-sm flex justify-center items-center mt-6 lg:mt-0 lg:ml-12",
                large: "lg:w-[50%] lg:max-w-lg flex justify-center items-center",
            },
        },
        cta: {
            wrapper: {
                padding: "py-16",
                background: "bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-600",
            },
            container: {
                layout: "max-w-screen-lg mx-auto px-6 lg:px-12",
            },
            title: {
                color: "text-white",
                typography: {
                    size: "text-3xl lg:text-4xl",
                },
            },
            description: {
                color: "text-gray-200",
                marginTop: "mt-4",
                typography: {
                    size: "text-lg lg:text-xl",
                },
            },
            buttonWrapper: {
                marginTop: "flex mt-8",
            },
            button: {
                background: "bg-white",
                text: "text-indigo-700",
                padding: "px-8 py-4",
                rounded: "rounded-lg",
                shadow: "shadow-lg",
                hover: "hover:bg-gray-200",
            },
        },
    };


    const benefitsData = [
        { title: "Increased Visibility", description: "Rank higher on search engine results pages." },
        { title: "Enhanced Credibility", description: "Build trust and authority with effective SEO practices." },
        { title: "Improved Traffic", description: "Attract more organic visitors to your website." },
        { title: "Higher ROI", description: "Maximize your marketing investment with targeted optimization." },
    ];

    const stepsData = [
        {
            index: 1,
            title: "Step 1: SEO Audit",
            description:
                "Our team conducts a comprehensive audit to identify strengths, weaknesses, and opportunities for your website.",
            image: "https://cdn.revampmarketing.net/seo-service-research.jpg",
            points: [
                "Analyze current keyword rankings and performance.",
                "Evaluate website structure and on-page elements.",
                "Identify areas for technical and content improvements.",
            ],
        },
        {
            index: 2,
            title: "Step 2: Keyword Research",
            description:
                "We find the best keywords to target based on search volume, competition, and relevance to your business.",
            image: "https://cdn.revampmarketing.net/seo-service-keywords.png",
            points: [
                "Discover high-traffic, low-competition keywords.",
                "Align keywords with your target audience's intent.",
                "Optimize for local, national, or global search priorities.",
            ],
        },
        {
            index: 3,
            title: "Step 3: On-Page Optimization",
            description:
                "We optimize your website's pages to improve relevance and search engine rankings.",
            image: "https://cdn.revampmarketing.net/seo-service-optimization.jpg",
            points: [
                "Enhance meta titles, descriptions, and headers.",
                "Improve internal linking and content readability.",
                "Optimize images and page load speed.",
            ],
        },
        {
            index: 4,
            title: "Step 4: Ongoing Strategy & Reporting",
            description:
                "We provide continuous SEO support to adapt to changing algorithms and maintain performance.",
            image: "https://cdn.revampmarketing.net/seo-service-reporting.png",
            points: [
                "Monitor performance metrics and refine strategies.",
                "Stay up-to-date with algorithm changes.",
                "Provide detailed reports on progress and outcomes.",
            ],
        },
    ];

    return (
        <div>
            <Head>
                <title>Revamp Marketing | SEO Services</title>
                <meta
                    name="description"
                    content="Discover our SEO services to boost your online presence, improve search rankings, and drive organic traffic to your website."
                />
                <meta name="keywords" content="SEO, search engine optimization, keyword research, on-page SEO" />
                <link rel="canonical" href="https://revampmarketing.net/seo" />
            </Head>
            <OverviewSection
                title="Search Engine Optimization"
                description="Our SEO services help your business rank higher on search engines, attract more organic traffic, and achieve measurable growth in your online presence."
                highlight="Partner with us to elevate your visibility and credibility in the digital landscape."
                button={{
                    text: "Get Started",
                    link: "/contact",
                    analytics: {
                        eventLabel: "Get Started",
                        eventCategory: "Navbar Interaction",
                        eventAction: "link_click",
                        eventValue: "Get Started",
                    },
                }}
                defaultStyles={defaultStyles}
                image="https://cdn.revampmarketing.net/seo-optimization.jpg"
            />

            <BenefitsSection benefits={benefitsData} />

            {stepsData.map((step) => (
                <StepSection key={step.index} step={step} />
            ))}

            <FooterCTA
                title="Ready to Boost Your Online Visibility?"
                description="Contact our SEO experts today to create a tailored strategy that improves your search rankings and drives sustainable growth."
                button={{
                    text: "Get Started",
                    link: "/contact",
                    analytics: {
                        eventLabel: "Get Started",
                        eventCategory: "Navbar Interaction",
                        eventAction: "link_click",
                        eventValue: "Get Started",
                    },
                }}
                defaultStyles={defaultStyles.cta}
            />
        </div>
    );
}
