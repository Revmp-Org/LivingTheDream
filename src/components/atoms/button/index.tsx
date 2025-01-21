
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, ...props }: ButtonProps) => (
    <button
        role="button"
        {...props}
        className={`${props.className || ""} px-4 py-2 rounded-lg duration-150`}
    >
        {children}
    </button>
)
export default Button