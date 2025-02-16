import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { BrandProps } from "@/types";

const Brand = ({
    logo,
    type,
}: {
    logo: BrandProps;
    type?: "desktop" | "mobile"
}) => {
    return (
        <Link href="/" className="block">
            {/* If type is 'desktop' or undefined (default behavior shows desktop) */}
            {(type === "desktop" || !type) && logo.desktop?.asset?._ref && (
                <div className="hidden lg:block">
                    <Image
                        src={urlFor(logo.desktop.asset._ref).url()}
                        width={logo.desktop.width || 250}
                        height={logo.desktop.height || 100}
                        alt={logo.desktop.alt || "Revamp Marketing logo"}
                        priority
                    />
                </div>
            )}

            {/* If type is 'mobile' or undefined (default behavior shows mobile) */}
            {(type === "mobile" || !type) && logo.mobile?.asset?._ref && (
                <div className="block lg:hidden">
                    <Image
                        src={urlFor(logo.mobile.asset._ref).url()}
                        width={logo.mobile.width || 50}
                        height={logo.mobile.height || 50}
                        alt={logo.mobile.alt || "Revamp Marketing logo small"}
                        priority
                    />
                </div>
            )}
        </Link>
    );
};

export default Brand;
