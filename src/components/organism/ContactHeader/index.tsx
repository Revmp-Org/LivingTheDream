import { buildTailwindClass } from "@/utils";

const ContactHeader: React.FC<{ config: any; defaultStyles: any }> = ({ config, defaultStyles }) => {
    const styles = config.header.styles;

    return (
        <div className={buildTailwindClass(styles.wrapper, defaultStyles.wrapper)}>
            <h1 className={buildTailwindClass(styles.title, defaultStyles.title)}>
                {config.header.title}
            </h1>
            <p className={buildTailwindClass(styles.subtitle, defaultStyles.subtitle)}>
                {config.header.subtitle}
            </p>
        </div>
    );
};

export default ContactHeader;
