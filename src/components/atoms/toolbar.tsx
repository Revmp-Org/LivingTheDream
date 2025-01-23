import * as Toolbar from "@radix-ui/react-toolbar";
import { cn } from "@/style";

interface ToolbarProps {
    theme?: "light" | "dark";
    className?: string;
    children: React.ReactNode;
}

export interface ToolbarStyles {
    buttonClass: string;
    separatorClass: string;
    rootClass: string;
}

export const useToolbarStyles = (theme: "light" | "dark"): ToolbarStyles => ({
    buttonClass: cn([
        "h-8 px-2.5 flex items-center justify-center rounded",
        "transition-colors duration-150",
        "focus:outline-none focus-visible:ring-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        theme === "dark" ? [
            "text-gray-800",
            "hover:bg-gray-700 hover:text-gray-100",
            "active:bg-gray-600",
            "focus-visible:ring-gray-500",
            "[&[data-state=on]]:bg-gray-700",
            "[&[data-state=on]]:text-white"
        ] : [
            "text-gray-600",
            "hover:bg-gray-100 hover:text-gray-900",
            "active:bg-gray-200",
            "focus-visible:ring-blue-500",
            "[&[data-state=on]]:bg-gray-100",
            "[&[data-state=on]]:text-gray-900"
        ]
    ]),
    separatorClass: cn([
        "w-[1px] h-6 mx-1",
        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
    ]),
    rootClass: cn([
        "flex items-center p-1 border rounded-md",
        "transition-colors duration-150",
        theme === "dark" ? [
            "bg-gray-800/50",
            "border-gray-700",
            "shadow-sm shadow-gray-900/10"
        ] : [
            "bg-white",
            "border-gray-200",
            "shadow-sm shadow-gray-200/50"
        ]
    ])
});

const BaseToolbar: React.FC<ToolbarProps> = ({
    theme = "light",
    className,
    children
}) => {
    const styles = useToolbarStyles(theme);

    return (
        <Toolbar.Root className={cn([styles.rootClass, className])}>
            {children}
        </Toolbar.Root>
    );
};

export const ToolbarToggleGroup = Toolbar.ToggleGroup;
export const ToolbarToggleItem = Toolbar.ToggleItem;
export const ToolbarSeparator = Toolbar.Separator;
export const ToolbarButton = Toolbar.Button;
export const ToolbarLink = Toolbar.Link;

export default BaseToolbar;