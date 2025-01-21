"use client";

import type React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

type SwitchProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    onIcon?: React.ReactNode;
    offIcon?: React.ReactNode;
    onIconColor?: string;
    offIconColor?: string;
};

const Switch: React.FC<SwitchProps> = ({
    checked,
    onCheckedChange,
    onIcon,
    offIcon,
    onIconColor = "text-white",
    offIconColor = "primary",
}) => (
    <SwitchPrimitive.Root
        className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors ${checked ? 'bg-primary' : 'bg-gray-300'
            }`}
        checked={checked}
        onCheckedChange={onCheckedChange}
    >
        <span className={`absolute ${checked ? 'left-1' : 'right-1'} ${checked ? onIconColor : offIconColor}`}>
            {checked ? onIcon : offIcon}
        </span>
        <SwitchPrimitive.Thumb
            className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'
                }`}
        />
    </SwitchPrimitive.Root>
);

export default Switch;