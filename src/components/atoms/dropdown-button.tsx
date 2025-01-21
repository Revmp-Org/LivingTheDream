import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { Button } from "./button";

interface DropdownButtonProps {
    theme: 'dark' | 'light';
}

const DropdownButton: FC<DropdownButtonProps> = ({
    theme,
}) => {
    return (
        <Button
            variant="ghost"
            size="icon"
        >
            <DotsHorizontalIcon
                className="w-5 h-5 opacity-70 transition-opacity duration-200 hover:opacity-100"
            />
        </Button>
    );
};

export default DropdownButton;
