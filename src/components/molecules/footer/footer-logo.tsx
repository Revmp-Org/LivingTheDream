import Image from "next/image";
import { getStyles } from "@/utils";
import { PageComponentChild } from "@/types";

const FooterLogo = (logo: PageComponentChild) => {
    if (!logo?.isActive) return null;

    const logoStyles = logo?.settings?.styles;
    const logoLayoutStyles = getStyles("layout", logoStyles);

    return (
        <div>
            <Image
                src={logo.settings?.content?.src as string || ""}
                alt={logo.settings?.content?.alt as string || "Logo"}
                width={logo.settings?.content?.width as number || 50}
                height={logo.settings?.content?.height as number || 50}
                className={logoLayoutStyles}
            />
        </div>
    );
};

export default FooterLogo;
