import Head from "next/head";
import OverviewSection from "@/components/organism/ServiceOverview";
import BenefitsSection from "@/components/molecules/service/benefits";
import StepSection from "@/components/molecules/service/steps";
import FooterCTA from "@/components/molecules/footer-cta";
import WebsiteDevelopmentConfig from "@/config/service/website-development.json";
import {buildTailwindClass} from "@/utils";

export default function WebsiteDevelopmentPage() {
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
        { title: "Boost Engagement", description: "Enhance audience interaction with captivating designs." },
        { title: "Increase Traffic", description: "Reach more users with mobile-friendly interfaces." },
        { title: "Improve SEO", description: "Rank higher on search engines with optimized content." },
        { title: "Streamline UX", description: "Ensure seamless navigation and user satisfaction." },
    ];

    const stepsData = [
        {
            index: 1,
            title: "Step 1: Discovery & Planning",
            description:
                "We work closely with you to understand your goals, target audience, and unique requirements. This phase ensures a clear roadmap for success.",
            image: "https://cdn.revampmarketing.net/website-service-todo.jpg",
            points: [
                "Analyze business goals and objectives.",
                "Identify the target audience and user needs.",
                "Outline a clear project timeline and deliverables.",
            ],
        },
        {
            index: 2,
            title: "Step 2: Design & Prototyping",
            description:
                "Our designers create visually appealing and user-friendly prototypes tailored to your brand. Your feedback shapes the final design.",
            image: "https://cdn.revampmarketing.net/web-service-designing.jpg",
            points: [
                "Develop wireframes and initial prototypes.",
                "Collaborate with you to refine designs.",
                "Ensure alignment with your brand identity.",
            ],
        },
        {
            index: 3,
            title: "Step 3: Development",
            description:
                "Our developers bring the designs to life, ensuring your website is functional and responsive across all devices and platforms.",
            image: "https://cdn.revampmarketing.net/website-service-dev-design.jpg",
            points: [
                "Write clean, scalable, and efficient code.",
                "Implement responsive design for all devices.",
                "Integrate essential features and functionalities.",
            ],
        },
        {
            index: 4,
            title: "Step 4: Launch & Support",
            description:
                "We rigorously test the website before launch and offer ongoing support to keep your website running smoothly.",
            image: "https://cdn.revampmarketing.net/website-service-launch-img.jpg",
            points: [
                "Conduct thorough QA testing for bugs.",
                "Deploy the website to a live environment.",
                "Provide continuous support and maintenance.",
            ],
        },
    ];


    return (
        <div>
            <Head>
                <title>Revamp Marketing | Website Development</title>
                <meta
                    name="description"
                    content="Learn about our website development services and how we can create a custom solution for your business."
                />
                <meta name="keywords" content="website development, custom websites, responsive design" />
                <link rel="canonical" href="https://revampmarketing.net/website-development" />
            </Head>
            <OverviewSection
                title="Website Development"
                description="Our website development service offers tailored solutions to captivate your audience and enhance your online presence.From responsive designs to seamless user experiences, our team is dedicated to delivering exceptional results."
                highlight="Let us help you create a website that drives your success."
                button={{
                    text: "Learn More",
                    link: "/contact",
                    analytics: {
                        eventLabel: "Learn More",
                        eventCategory: "Navbar Interaction",
                        eventAction: "link_click",
                        eventValue: "Learn More",
                    },
                }}
                defaultStyles={defaultStyles}
                image="https://cdn.revampmarketing.net/web-design.jpg"
            />

            <BenefitsSection benefits={benefitsData} />

            {stepsData.map((step) => (
                <StepSection key={step.index} step={step} />
            ))}

            <FooterCTA
                title="Ready to Transform Your Online Presence?"
                description="Contact our team today to discuss your project and take the first step toward creating a stunning, high-performing website that delivers results."
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

