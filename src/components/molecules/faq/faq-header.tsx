import NavLink from "@/components/organism/NavLink";
import { PageComponentChild } from "@/types";
import { getStyles } from "@/utils";

const FAQHeader = (header: PageComponentChild) => {
    const headerStyles = getStyles("wrapper", header?.settings?.styles);
    const containerStyles = getStyles("container", header?.settings?.styles);
    const titleStyles = getStyles("title", header?.settings?.styles);
    const descriptionStyles = getStyles("description", header?.settings?.styles);
    const buttonWrapperStyles = getStyles("buttonWrapper", header?.settings?.styles);
    const buttonStyles = getStyles("button", header?.settings?.styles);

    return (
        <section className={headerStyles}>
            <div className={containerStyles}>
                <h1 className={titleStyles}>
                    {header?.settings?.content?.title}
                </h1>
                <p className={descriptionStyles}>
                    {header?.settings?.content?.description}
                </p>
            </div>
            <div className={buttonWrapperStyles}>
                <NavLink
                    href={header?.settings?.content?.button?.href || ""}
                    className={buttonStyles}
                    analytics={header?.settings?.content?.button?.analytics || {
                        eventLabel: "FAQ Header Button",
                        eventCategory: "FAQ Header",
                        eventAction: "button_click",
                        eventValue: "",
                    }}
                >
                    {header?.settings?.content?.button?.text}
                </NavLink>
            </div>
        </section>
    );
};

export default FAQHeader;
