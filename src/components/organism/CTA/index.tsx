import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import Image from "next/image";
import { AnalyticsConfig, ComponentConfig, CTASettings, ComponentChild } from "@/types";
import { buildTailwindClass } from "@/utils";

const CTA: React.FC<ComponentConfig<CTASettings>> = (cta) => {
    const { config, children } = cta;
    const { image, content, styles } = config || {};
    const button = children?.find((child: ComponentChild) => child.slug === "cta-button")?.settings as {
        text?: string;
        href?: string;
        analytics?: AnalyticsConfig;
    };

    const defaultStyles = {
        wrapper: {
            padding: "py-24",
            background: "bg-gray-50",
            flex: "flex items-center justify-center"
        },
        container: {
            layout: "items-center gap-x-12 lg:flex"
        },
        imageContainer: {
            layout: "flex-1 sm:hidden lg:block"
        },
        contentContainer: {
            layout: "max-w-xl mt-6 md:mt-0 lg:max-w-2xl"
        },
        title: {
            text: "text-gray-800 text-3xl font-semibold sm:text-4xl"
        },
        description: {
            text: "mt-3 text-gray-600"
        },
        buttonContainer: {
            layout: "flex justify-center lg:justify-start mt-8 space-x-4"
        }
    }
    
    return (
        <SectionWrapper className={buildTailwindClass(styles?.wrapper, defaultStyles.wrapper)}>
            <div className={buildTailwindClass(styles?.container, defaultStyles.container)}>
                <div className={buildTailwindClass(styles?.container, defaultStyles.container)}>
                    {/* Image Section */}
                    {image && (
                        <div className={buildTailwindClass(styles?.imageContainer, defaultStyles.imageContainer)}>
                            <Image
                                src={image?.src || ""}
                                className={image?.className || ""}
                                alt={image?.alt || "Image Alt Text"}
                                width={800}
                                height={600}
                            />
                        </div>
                    )}

                    {/* Content Section */}
                    <div className={buildTailwindClass(styles?.contentContainer, defaultStyles.contentContainer)}>
                        {/* Title */}
                        <h2 className={buildTailwindClass(styles?.title, defaultStyles.title)}>
                            {content?.title || "Default Title"}
                        </h2>

                        {/* Description */}
                        {content?.description?.map((desc, idx) => (
                            <p key={idx} className={buildTailwindClass(styles?.description, defaultStyles.description)}>
                                {desc}
                            </p>
                        ))}

                        {/* Highlight */}
                        {content?.highlight && (
                            <p className={buildTailwindClass(styles?.description, defaultStyles.description)}>
                                <span className="font-bold">{content?.highlight}</span>
                            </p>
                        )}

                        {/* Button */}
                        {button && (
                            <div className={buildTailwindClass(styles?.buttonContainer, defaultStyles.buttonContainer)}>
                                <NavLink
                                    href={button.href || "#"}
                                    className="inline-block font-medium text-sm text-white bg-primary hover:bg-primary-light active:bg-primary-dark px-6 py-2 rounded-lg"
                                    analytics={button.analytics}
                                >
                                    {button.text || "Get Started"}
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTA;
