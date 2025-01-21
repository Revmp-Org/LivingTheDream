import Image from "next/image";
import Link from "next/link";

const Brand = () => (
    <Link href="/" className="block">
        {/* Large screen logo */}
        <div className="hidden lg:block">
            <Image
                src="/logo-large-light.svg"
                width={250}
                height={100}
                alt="Revamp Marketing logo"
            />
        </div>
        {/* Small and medium screen logo */}
        <div className="block lg:hidden">
            <Image
                src="/logo-small.png"
                width={50}
                height={50}
                alt="Revamp Marketing logo small"
            />
        </div>
    </Link>
);

export default Brand;
