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


// General style attributes for dynamic class names
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
    custom?: string; // For custom classes
    [key: string]: string | Record<string, string>; // Allow nested structures

};

export type BrandConfig = {
    logo?: string;
    name?: string;
    path?: string;
}

// Component styles for different breakpoints
export type Styles = {
    default?: Record<string, StyleAttributes>; // Default styles for all devices
    mobile?: Record<string, StyleAttributes>; // Mobile-specific styles
    desktop?: Record<string, StyleAttributes>; // Desktop-specific styles
    childStyles?: Record<string, StyleAttributes>; // Styles specific to child components
};

// Analytics configuration for tracking events
export type AnalyticsConfig = {
    eventLabel: string;
    eventCategory: string;
    eventAction: string;
    eventValue?: string;
};

// General settings for a component
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

// Type for a child component
export type PageComponentChild = {
    id: string;
    type: string;
    slug: string;
    contentType?: string;
    isActive: boolean;
    settings?: ComponentSettings;
    children?: Record<string, PageComponentChild>;
};

// Type for a main page component
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
            photoCredit?: string;
        };
    };
    children: Record<string, PageComponentChild>;
};

// Props for the CTA component
export type ComponentConfig<T = any> = {
    config: T;
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
    styles?: Styles;
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

export type StylesType = {
    default?: Record<string, any>;
    mobile?: Record<string, any>;
    desktop?: Record<string, any>;
};

export interface BrandProps {
    desktop?: {
        asset: { _ref: string };
        alt?: string;
        width?: number;
        height?: number;
    };
    mobile?: {
        asset: { _ref: string };
        alt?: string;
        width?: number;
        height?: number;
    };
    type?: "mobile" | "desktop";
}


export interface Service {
    _key: string;
    title: string;
    description: string;
    path: string;
    image?: {
        asset: {
            _ref: string;
        };
        credit?: string;
        creditLink?: string;
    };
}

export interface ServicesProps {
    isActive: boolean;
    servicesList: Service[];
}

export interface CarouselItemProps {
    item: Service;
}

export interface CTAProps {
    isActive: boolean;
    content: {
        title: string;
        description: string;
        highlight: string;
        image?: {
            asset: {
                _ref: string;
            };
            credit?: string;
        };
        button?: {
            text: string;
            href: string;
            analytics: AnalyticsConfig;
        };
    };
}

type FAQItem = {
    question: string;
    answer: string;
};

type FAQCategory = {
    category: string;
    questions: FAQItem[];
};

export type FAQSectionProps = {
    content?: {
        sections: FAQCategory[];
    };
};

interface FormField {
    fieldName: string;
    label: string;
    placeholder: string;
    required?: boolean;
}
export interface ContactFormProps {
    form: {
        isActive: boolean;
        formFields: FormField[];
        serviceOptions: string[];
        referralOptions: string[];
        webhook: string;
    };
    thankYou: {
        isActive: boolean;
        content: {
            title: string;
            message: string;
        };
    };
}

export type NavLinkButton = {
    text: string;
    link: string;
    analytics?: {
        eventLabel: string;
        eventCategory: string;
        eventAction: string;
        eventValue?: string;
    };
};

export interface OverviewContent {
    title?: string;
    description?: string;
    highlight?: string;
    button?: {
        text?: string;
        link?: string;
        analytics?: AnalyticsConfig
    };
    image?: {
        asset: {
            _ref: string;
        };
        credit?: string;
    };
}

export interface OverviewContentProps {
    isActive?: boolean;
    content?: OverviewContent;
}

export interface BenefitItem {
    _key: string;
    title: string;
    description: string;
}

export interface BenefitsSectionProps {
    isActive?: boolean;
    content?: BenefitItem[];
}

export interface CTAButton {
    text: string;
    link: string;
    analytics?: {
        eventAction: string;
        eventCategory: string;
        eventLabel: string;
    };
}

export interface FooterCTAProps {
    isActive?: boolean;
    content?: {
        title: string;
        description: string;
        button: CTAButton;
    };
}

export interface Step {
    index: number;
    title: string;
    description: string;
    image?: {
        asset: {
            _ref: string;
        };
    };
    points: string[];
}

export interface StepsSectionProps {
    steps: Step[];
}