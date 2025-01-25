import Link from "next/link";
import { getStyles } from "@/utils";
import { PageComponentChild } from "@/types";

const FooterSocialLinks = (social: PageComponentChild) => {
    if (!social?.isActive) return null;

    const socialStyles = social?.settings?.styles;
    const socialContainerStyles = getStyles("container", socialStyles);
    const socialLinkStyles = getStyles("link", socialStyles);

    return (
        <div className={socialContainerStyles}>
            {social.settings?.content?.links.map((link: any) => (
                <Link key={link.key} href={link.value} className={socialLinkStyles}>
                    {link.key}
                </Link>
            ))}
        </div>
    );
};

export default FooterSocialLinks;
