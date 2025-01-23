import { ComponentChild, ComponentConfig, ComponentItemType, ComponentSettings, ServiceCardSettings } from "@/types";

export const getComponent = <T = ComponentSettings>(
    components: ComponentItemType<ComponentSettings>[], 
    componentSlug: string
): ComponentConfig<T> => {
    const component = components.find((comp) => comp.slug === componentSlug);
    return component
        ? {
            visible: component.isActive || false,
            config: component.settings as T,
            children: component.children || [],
        }
        : { visible: false, config: null as T, children: [] };
};

export const getChildComponent = <T = ComponentSettings>(
    children: ComponentChild[],
    childId: string
): ComponentConfig<T> => {
    const child = children.find((child) => child.slug === childId);
    return child
        ? {
            visible: child.isActive || false,
            config: child.settings as T,
            children: child.children || [],
        }
        : { visible: false, config: null as T, children: [] };
};


export function buildTailwindClass(
    styleObject: Record<string, any> | undefined,
    defaultStyles: Record<string, any> | undefined
): string {
    const mergeStyles = (styles: Record<string, any> | undefined): string[] => {
        if (!styles) return [];
        return Object.values(styles).flatMap((value) => {
            if (typeof value === "string") return value;
            if (typeof value === "object") return mergeStyles(value);
            return [];
        });
    };

    const combinedStyles = {
        ...defaultStyles,
        ...styleObject,
    };

    return mergeStyles(combinedStyles).filter(Boolean).join(" ");
}

export const isClient = typeof window !== 'undefined';
