import type React from "react";
import Switch from "@/components/atoms/switch";

interface FormSwitchProps {
    label: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    theme?: "light" | "dark";
    error?: string;
}

export const FormSwitch: React.FC<FormSwitchProps> = ({
    label,
    checked,
    onCheckedChange,
    theme = "light",
    error,
}) => {
    const textClass = theme === "dark" ? "text-white" : "text-gray-800";

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className={textClass}>{label}</div>
                <Switch
                    checked={checked}
                    onCheckedChange={onCheckedChange}
                />
            </div>
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
};