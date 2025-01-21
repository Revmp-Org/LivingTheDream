import Link from "next/link";


interface NavLinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    scroll?: boolean;
}

const NavLink = ({ children, href, ...props }: NavLinkProps) => (
    <Link href={href} {...props} className={`py-2.5 px-4 text-center rounded-lg duration-150 ${props?.className || ""}`}>
        {children}
    </Link>
)

export default NavLink