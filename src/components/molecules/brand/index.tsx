import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/types";

const Brand = ({ logo }: { logo: Logo }) => (
    <Link href="/" className="block">
        {/* Large screen logo */}
        <div className="hidden lg:block">
            <Image
                src={logo.desktop?.src || "/logo-large-light.svg"}
                width={logo.desktop?.width || 250}
                height={logo.desktop?.height || 100}
                alt={logo.desktop?.alt || "Revamp Marketing logo"}
            />
        </div>
        {/* Small and medium screen logo */}
        <div className="block lg:hidden">
            <Image
                src={logo.mobile?.src || "/logo-small.png"}
                width={logo.mobile?.width || 50}
                height={logo.mobile?.height || 50}
                alt={logo.mobile?.alt || "Revamp Marketing logo small"}
            />
        </div>
    </Link>
);

export default Brand;
