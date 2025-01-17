import Image from "next/image";
import Link from "next/link";

const Brand = () => (
        <Link href="/">
            <Image
                src="/logo-large-light.svg"
                width={250}
                height={100}
                alt="Revamp Marketing logo"
            />
        </Link>
)
export default Brand
