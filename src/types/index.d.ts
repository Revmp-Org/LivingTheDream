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
    text?: string;
    padding?: string;
    margin?: string;
    background?: string;
    layout?: string;
    border?: string;
    shadow?: string;
    width?: string;
    height?: string;
    custom?: string;
};

// Each specific settings type
export interface HeroSettings {
    content: {
        title: string;
        description: string;
    };
    mobile?: HeroDeviceConfig;
    desktop?: HeroDeviceConfig;
    buttons?: ButtonConfig[];
}

export interface HeroDeviceConfig {
    styles: {
        wrapper?: Record<string, string>;
        container?: Record<string, string>;
        title?: Record<string, string>;
        contentContainer?: Record<string, string>;
        description?: Record<string, string>;
        imageContainer?: Record<string, string>;
        buttonContainer?: Record<string, string>;
        button?: {
            primary?: string;
            secondary?: string;
        };
    };
}


export interface ServiceCardSettings {
    title: string;
    description: string;
    path?: string;
    carouselImage?: string;
    styles?: {
        wrapper?: Record<string, string> | undefined
        container?: Record<string, string> | undefined
        imageContainer?: Record<string, string> | undefined
        contentContainer?: Record<string, string> | undefined
        title?: Record<string, string> | undefined
        description?: Record<string, string> | undefined
        content?: Record<string, string> | undefined
        buttonContainer?: Record<string, string> | undefined
        buttonPrev?: Record<string, string> | undefined
        buttonNext?: Record<string, string> | undefined
        dotsContainer?: Record<string, string> | undefined
        dot?: Record<string, string> | undefined
        dotActive?: Record<string, string> | undefined
        dotInactive?: Record<string, string> | undefined
    };
    childStyles?: {
        item?: Record<string, string> | undefined
        imageContainer?: Record<string, string> | undefined
        textContainer?: Record<string, string> | undefined
        title?: Record<string, string> | undefined
        description?: Record<string, string> | undefined
        link?: Record<string, string> | undefined
    }
}


export interface CTASettings {
    image?: {
        src: string;
        alt: string;
        className?: string;
    };
    content?: {
        title: string;
        description: string[];
        highlight?: string;
    };
    styles?: {
        wrapper?: StyleAttributes;
        container?: StyleAttributes;
        imageContainer?: StyleAttributes;
        contentContainer?: StyleAttributes;
        title?: StyleAttributes;
        description?: StyleAttributes;
        buttonContainer?: StyleAttributes;
    };
}
export interface TestimonialSettings {
    title: string;
    description: string;
    avatar: string;
    name: string;
    role: string;
    quote: string;
    styles?: {
        wrapper?: StyleAttributes;
        testimonialWrapper?: StyleAttributes;
        container?: StyleAttributes;
        header?: {
            container?: StyleAttributes;
            title?: StyleAttributes;
            description?: StyleAttributes;
        };
        list?: StyleAttributes;
        listItem?: {
            wrapper?: StyleAttributes;
            avatarContainer?: StyleAttributes;
            avatarImage?: StyleAttributes;
            name?: StyleAttributes;
            role?: StyleAttributes;
            quote?: StyleAttributes;
        };
    };
}

export type ComponentSettings =
    | HeroSettings
    | ServiceCardSettings
    | CTASettings
    | TestimonialSettings;

export type ComponentChildSettings =
    | ButtonConfig
    | ServiceCardSettings
    | TestimonialSettings;

export interface ComponentChild {
    id: string;
    type: "atom" | "molecule" | "organism";
    slug: string;
    isActive: boolean;
    contentType: "singleton" | "collection";
    settings: ComponentChildSettings;
    children: ComponentChild[];
}

export interface ComponentItemType<T extends ComponentSettings> {
    id: string;
    type: "atom" | "molecule" | "organism";
    slug: string;
    isActive: boolean;
    contentType: "singleton" | "collection";
    settings: T;
    children: ComponentChild[];
}

export interface ComponentConfig<T = ComponentSettings> {
    visible: boolean;
    config: T | null;
    children: ComponentChild[];
}


export interface SEOConfig {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    structuredData: {
        "@context": string;
        "@type": string;
        name: string;
        description: string;
        url: string;
    };
}
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

// Structure for a page component
export interface PageComponent extends ComponentChild {
    type: "organism"; // Override for top-level components
}

// Structure for a page configuration
export interface PageConfig {
    id: string;
    created: string; // ISO timestamp
    updated: string; // ISO timestamp
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

export interface FooterConfig {
    cta?: Record<string, any>;
    copyright?: string;
    social?: {
        key?: string;
        value?: string;
    }[];
    navigation?: NavigationItem[];
    styles?: Record<string, any>;
    links?: {
        label?: string;
        path?: string;
    }[];
    address?: {
        line1?: string;
        line2?: string;
        country?: string;
    };
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

export interface NavbarConfig {
    logo?: Logo;
    ctaButton?: {
        text?: string;
        link?: string;
        analytics?: AnalyticsConfig;
    };
    settings?: {
        styles?: Record<string, any>;
        desktop?: {
            styles?: Record<string, any>;
        };
        mobile?: {
            styles?: Record<string, any>;
        };
    };
    navigation?: NavigationItem[];
}

export interface GlobalConfig {
    layout?: LayoutConfig;
    html?: Record<string, any>;
    body?: Record<string, any>;
    analytics?: Record<string, any>;
    navbar?: NavbarConfig;
    footer?: FooterConfig;
}

export interface GlobalConfigType {
    id: string;
    created: string;
    updated: string;
    websiteId: string;
    global: GlobalConfig;
}
export interface WebsiteConfig {
    id?: string;
    isLive?: boolean;
    name?: string;
    publishedAt?: string | null;
    status?: 'published' | 'draft';
    version?: number;
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

export interface PagesConfig {
    home: PageConfig;
    [key: string]: PageConfig;
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

export type ServiceConfig = {
    title?: string;
    desc?: string;
    carouselImage?: string;
    icon?: string;
    path?: string
}

export type AnalyticsConfig = {
    eventLabel?: string;
    eventCategory?: string;
    eventAction?: string;
    eventValue?: string;
}

export type ButtonConfig = {
    text?: string;
    href?: string;
    variant?: 'primary' | 'secondary';
    analytics?: AnalyticsConfig;
    scroll?: boolean;
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