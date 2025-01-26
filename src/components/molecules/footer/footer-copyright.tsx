import { getStyles } from "@/utils";
import { PageComponentChild } from "@/types";

const FooterCopyright = (copyright: PageComponentChild) => {
    if (!copyright?.isActive) return null;

    const copyrightStyles = copyright?.settings?.styles;
    const copyrightTextStyles = getStyles("text", copyrightStyles);

    return (
        <div className={copyrightTextStyles}>
            {copyright.settings?.content?.text}
        </div>
    );
};

export default FooterCopyright;
