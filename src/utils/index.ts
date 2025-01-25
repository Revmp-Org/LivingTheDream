import { Styles } from "@/types";

export function buildTailwindClass(
    styleObject: Record<string, string> | undefined,
): string {
    const styleArray: string[] = [];

    if (styleObject) {
        Object.values(styleObject).forEach((value) => {
            if (typeof value === "string") {
                styleArray.push(value.trim());
            }
        });
    }


    return styleArray.join(" ").replace(/\s+/g, " ").trim();
}

export function getStyles(
    key: string,
    styles: Styles | undefined,
    defaultStyles?: Record<string, string>
): string {
    const styleLevels = ["default", "mobile", "desktop"] as const;

    // Helper to access nested keys
    const getNestedStyle = (obj: any, path: string): any => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    const combinedStyles = styleLevels
        .map((level) => {
            const levelStyle = getNestedStyle(styles?.[level as keyof Styles], key);
            if (levelStyle) {
                return levelStyle;
            }
            return undefined;
        })
        .filter(Boolean);

    const finalStyles = combinedStyles.reduce(
        (acc, current) => buildTailwindClass(current),
        getNestedStyle(defaultStyles, key) || ""
    );
    return finalStyles;
}


export const isClient = typeof window !== 'undefined';