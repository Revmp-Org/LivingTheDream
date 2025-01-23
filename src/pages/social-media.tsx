import Head from "next/head";
import OverviewSection from "@/components/organism/ServiceOverview";
import BenefitsSection from "@/components/molecules/service/benefits";
import StepSection from "@/components/molecules/service/steps";
import FooterCTA from "@/components/molecules/footer-cta";

export default function SocialMediaPage() {
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
        { title: "Increased Brand Awareness", description: "Grow your brand's visibility across multiple platforms." },
        { title: "Better Audience Engagement", description: "Foster meaningful connections with your audience." },
        { title: "Improved Conversion Rates", description: "Drive traffic and turn followers into loyal customers." },
        { title: "Time-Saving Management", description: "Let us handle your accounts so you can focus on your business." },
    ];

    const stepsData = [
        {
            index: 1,
            title: "Step 1: Strategy Development",
            description:
                "We create a tailored social media strategy based on your goals, audience, and industry.",
            image: "https://cdn.revampmarketing.net/social-media-service-planning.jpg",
            points: [
                "Define your target audience and brand voice.",
                "Set clear objectives and KPIs for social media growth.",
                "Select the best platforms for your business.",
            ],
        },
        {
            index: 2,
            title: "Step 2: Content Creation",
            description:
                "We craft engaging and visually appealing content that resonates with your audience.",
            image: "https://cdn.revampmarketing.net/social-media-service-creation.png",
            points: [
                "Design eye-catching graphics and visuals.",
                "Write compelling captions and calls-to-action.",
                "Ensure all content aligns with your brand's identity.",
            ],
        },
        {
            index: 3,
            title: "Step 3: Scheduling & Posting",
            description:
                "Our team ensures consistent posting to maximize reach and engagement.",
            image: "https://cdn.revampmarketing.net/social-media-calendar.jpg",
            points: [
                "Use analytics to determine the best posting times.",
                "Automate scheduling for seamless management.",
                "Ensure all posts maintain a consistent tone and quality.",
            ],
        },
        {
            index: 4,
            title: "Step 4: Monitoring & Reporting",
            description:
                "We monitor your social media accounts and provide detailed reports on performance.",
            image: "https://cdn.revampmarketing.net/social-media-reporting.jpg",
            points: [
                "Track audience engagement and growth.",
                "Monitor comments and messages for responsiveness.",
                "Provide actionable insights for ongoing improvement.",
            ],
        },
    ];

    return (
        <div>
            <Head>
                <title>Revamp Marketing | Social Media Management</title>
                <meta
                    name="description"
                    content="Learn about our social media management services and how we can help you grow your brand's online presence and engagement."
                />
                <meta
                    name="keywords"
                    content="social media management, content creation, brand awareness, audience engagement"
                />
                <link rel="canonical" href="https://revampmarketing.net/social-media" />
            </Head>
            <OverviewSection
                title="Social Media Management"
                description="Our social media management services are designed to help you grow your brand, engage with your target audience, and drive meaningful conversions across multiple platforms. From crafting compelling content to analyzing performance metrics, we ensure your social presence is consistent, impactful, and aligned with your business goals."
                highlight="Let us manage your social presence while you focus on what you do best."
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
                image="https://cdn.revampmarketing.net/social-media-service-cta.jpg"
            />


            <BenefitsSection benefits={benefitsData} />

            {stepsData.map((step) => (
                <StepSection key={step.index} step={step} />
            ))}

            <FooterCTA
                title="Ready to Grow Your Social Presence?"
                description="Contact our social media experts today to develop a strategy that strengthens your brand and maximizes engagement."
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
