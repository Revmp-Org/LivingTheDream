import { getStyles } from "@/utils";

const ContactHeader: React.FC<{ config: any }> = ({ config }) => {
    const styles = config.settings.styles;

    const titleWrapperStyles = getStyles("titleWrapper", styles);
    const titleStyles = getStyles("title", styles);
    const subtitleStyles = getStyles("subtitle", styles);

    return (
        <div className={titleWrapperStyles}>
            <h1 className={titleStyles}>{config.settings.content.title}</h1>
            <p className={subtitleStyles}>{config.settings.content.subtitle}</p>
        </div>
    );
};

export default ContactHeader;
