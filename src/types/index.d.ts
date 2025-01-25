declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export { };

export type ComponentSettings =
    | HeroSettings
    | ServiceCardSettings
    | CTASettings
    | TestimonialSettings;


    export type StyleAttributes = {
    padding?: string;
    margin?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    text?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    background?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    activeBackgroundColor?: string;
    layout?: string;
    display?: string;
    width?: string;
    height?: string;
    minWidth?: string;
    maxWidth?: string;
    minHeight?: string;
    maxHeight?: string;
    border?: string;
    borderColor?: string;
    borderRadius?: string;
    shadow?: string;
    boxShadow?: string;
    flex?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    gridTemplateColumns?: string;
    transition?: string;
    transform?: string;
    hover?: string;
    active?: string;
    position?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    zIndex?: string;
    custom?: string;
    [key: string]: string | Record<string, string>;
};

export type Styles = {
    default?: Record<string, StyleAttributes>;
    mobile?: Record<string, StyleAttributes>;
    desktop?: Record<string, StyleAttributes>;
    childStyles?: Record<string, StyleAttributes>;
};

export type AnalyticsConfig = {
    eventLabel: string;
    eventCategory: string;
    eventAction: string;
    eventValue: string;
};

export type ComponentSettings = {
    styles?: Styles;
    content?: {
        title?: string;
        description?: string | string[];
        highlight?: string;
    };
    image?: {
        src: string;
        alt: string;
        className?: string;
    };
    analytics?: AnalyticsConfig;
    text?: string;
    href?: string;
    variant?: string;
    scroll?: boolean;
    avatar?: string;
    name?: string;
    role?: string;
    quote?: string;
    path?: string;
    carouselImage?: string;
};

export type PageComponentChild = {
    id: string;
    type: string;
    slug: string;
    contentType?: string;
    isActive: boolean;
    settings?: ComponentSettings;
    children?: Record<string, PageComponentChild>;
};

export type PageComponent = {
    id: string;
    type: string;
    slug: string;
    contentType?: string;
    isActive: boolean;
    settings: {
        seo?: SEOConfig;
        styles?: Styles;
        content?: {
            title?: string;
            description?: string | string[];
            highlight?: string;
        };
        image?: {
            src: string;
            alt: string;
            className?: string;
        };
    };
    children: Record<string, PageComponentChild>;
};

type Page = {
    id: string;
    created: string;
    updated: string;
    websiteId: string;
    title: string;
    slug: string;
    description: string;
    seo: SEO;
    isActive: boolean;
    pageComponents: Record<string, PageComponent>;
    styles?: StylesType;
};

export interface AnalyticsConfig {
    eventLabel: string;
    eventCategory: string;
    eventAction: string;
    eventValue: string;
}

export interface ComponentChild {
    id: string;
    type: "atom" | "molecule" | "organism";
    slug: string;
    isActive: boolean;
    settings: ComponentSettings;
    children: ComponentChild[];
}

export interface PageComponent extends ComponentChild {
    type: "organism";
}

export interface PageConfig {
    id: string;
    created: string;
    updated: string;
    websiteId: string;
    title: string;
    slug: string;
    description: string;
    seo: SEOConfig;
    isActive: boolean;
    pageComponents: PageComponent[];
}



export interface DocumentConfig {
    body: Record<string, any>;
    html: Record<string, any>;
    analytics: Record<string, any>;
}

export interface LayoutConfig {
    name?: string;
    baseUrl?: string;
    keywords?: string[];
    themeColor?: string;
    defaultTitle?: string;
    defaultDescription?: string;
}

export interface Logo {
    mobile?: {
        src?: string;
        alt?: string;
        width?: number;
        height?: number;
    };
    desktop?: {
        src?: string;
        alt?: string;
        width?: number;
        height?: number;
    };
}

export interface GlobalConfig {
    layout?: LayoutConfig;
    html?: Record<string, any>;
    body?: Record<string, any>;
    analytics?: Record<string, any>;
    navbar?: PageComponent;
    footer?: PageComponent;
}

export interface GlobalConfigType {
    id: string;
    created: string;
    updated: string;
    websiteId: string;
    global: GlobalConfig;
}

export interface ComponentConfig {
    visible?: boolean;
    order?: number;
    config?: any;
    copy?: any;
}

export interface PageConfig {
    meta: {
        title?: string;
        description?: string;
        seo?: {
            title?: string;
            description?: string;
            canonical?: string;
            keywords?: string[];
            structuredData?: Record<string, any>;
        };
    };
    components?: { [key: string]: ComponentConfig };
}

export interface SiteConfigProviderProps {
    children: React.ReactNode;
}

export interface CTAConfig {
    config?: {
        id?: string;
        image?: {
            src?: string;
            alt?: string;
            className?: string;
        };
        button?: {
            text?: string;
            href?: string;
            analytics?: {
                eventLabel?: string;
                eventValue?: string;
                eventAction?: string;
                eventCategory?: string;
            };
        };
        content?: {
            title?: string;
            description?: string[];
            highlight?: string;
        };
        styles?: {
            wrapper?: string;
            container?: string;
            imageContainer?: string;
            contentContainer?: string;
            title?: string;
            description?: string;
            buttonContainer?: string;
        };
    };
}
export interface Testimonial {
    avatar?: string;
    name?: string;
    title?: string;
    quote?: string;
}

export type ButtonConfig = {
    text?: string;
    href?: string;
    variant?: 'primary' | 'secondary';
    analytics?: AnalyticsConfig;
    scroll?: boolean;
    styles?: StylesType;
}

export interface NavigationSubItem {
    id: string | number;
    label?: string;
    path?: string;
    items?: NavigationSubItem[];
}


export interface NavigationItem {
    id: string | number;
    label?: string;
    path?: string;
    items?: NavigationSubItem[]
}