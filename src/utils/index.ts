import { Styles } from "@/types";

export function buildTailwindClass(
    styleObject: Record<string, string> | undefined,
): string {
    if (!styleObject) return "";

    const styleArray: string[] = Object.values(styleObject).filter(
        (value) => typeof value === "string" && value.trim() !== ""
    );

    const formattedStyles = styleArray
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

    return formattedStyles;
}

export function getStyles(
    key: string,
    styles: Styles | undefined
): string {
    const styleLevels = ["default", "mobile", "desktop"] as const;

    const getNestedStyle = (obj: any, path: string): any => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    const combinedStyles = styleLevels
        .map((level) => {
            const levelStyle = getNestedStyle(styles?.[level as keyof Styles], key);
            return levelStyle ? levelStyle : undefined;
        })
        .filter(Boolean);

    const finalStyles = combinedStyles.reduce(
        (acc, current) => `${acc} ${buildTailwindClass(current)}`,
        ""
    ).trim();

    return finalStyles;
}

export const isClient = typeof window !== "undefined";
