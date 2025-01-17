import Image from "next/image";
import Link from "next/link";

const Brand = () => (
        <Link href="/">
            <Image
                src="/revamp-logo-light.svg"
                width={250}
                height={100}
                alt="Blinder logo"
            />
        </Link>
)
export default Brand
