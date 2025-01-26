import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/types";

const Brand = ({ brand }: { brand: any }) => (
    <Link href="/" className="block">
        {/* Large screen logo */}
        <div className="hidden lg:block">
            <Image
                src={brand.settings.content.logo.desktop?.src || "/logo-large-light.svg"}
                width={brand.settings.content.logo.desktop?.width || 250}
                height={brand.settings.content.logo.desktop?.height || 100}
                alt={brand.settings.content.logo.desktop?.alt || "Revamp Marketing logo"}
            />
        </div>
        {/* Small and medium screen logo */}
        <div className="block lg:hidden">
            <Image
                src={brand.settings.content.logo.mobile?.src || "/logo-small.png"}
                width={brand.settings.content.logo.mobile?.width || 50}
                height={brand.settings.content.logo.mobile?.height || 50}
                alt={brand.settings.content.logo.mobile?.alt || "Revamp Marketing logo small"}
            />
        </div>
    </Link>
);

export default Brand;
