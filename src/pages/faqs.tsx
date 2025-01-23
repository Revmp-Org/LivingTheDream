import Head from "next/head";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/atoms/accordian";
import faqConfig from "@/config/faq/index.json";
import { buildTailwindClass } from "@/utils";
import NavLink from "@/components/organism/NavLink";


export default function FAQPage() {
    const { seo, components } = faqConfig;

    const defaultStyles = {
        wrapper: {
            padding: "py-8",
            container: "max-w-screen-lg mx-auto px-6 lg:px-12"
        },
        categoryTitle: {
            color: "text-gray-800",
            typography: "text-2xl font-semibold mb-4",
            textAlign: "text-left"
        },
        accordion: {
            item: {
                border: "border-b",
                typography: "text-sm",
                textAlign: "text-left"
            }
        },
        link: {
            color: "text-indigo-500 hover:underline"
        },
        description: {
            color: "text-gray-700",
            typography: "text-lg"
        },
        buttonWrapper: {
            layout: "flex justify-center"
        },
        button: {
            color: "text-white",
            background: "bg-indigo-500 hover:bg-indigo-600"
        }
    };

    return (
        <div>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta name="keywords" content={seo.keywords.join(", ")} />
                <link rel="canonical" href={seo.canonical} />
            </Head>

            {/* Header Section */}
            <section
                className={buildTailwindClass(
                    components.header.styles.wrapper,
                    defaultStyles.wrapper
                )}
            >
                <div
                    className={buildTailwindClass(
                        components.header.styles.container,
                        defaultStyles.wrapper
                    )}
                >
                    <h1
                        className={buildTailwindClass(
                            components.header.styles.title,
                            defaultStyles.categoryTitle
                        )}
                    >
                        {faqConfig.title}
                    </h1>
                    <p
                        className={buildTailwindClass(
                            components.header.styles.description,
                            defaultStyles.description
                        )}
                    >
                        {faqConfig.description}
                    </p>
                </div>
                <div className={buildTailwindClass(
                    components.header.styles.buttonWrapper,
                    defaultStyles.buttonWrapper
                )}>
                    <NavLink
                        href={faqConfig.button.link}
                        className={buildTailwindClass(
                            components.header.styles.button,
                            defaultStyles.button
                        )}
                        analytics={faqConfig.button.analytics || {
                            eventLabel: "Get Started",
                            eventCategory: "Navbar Interaction",
                            eventAction: "link_click",
                            eventValue: "Get Started",
                        }}
                    >
                        {faqConfig.button.text}
                    </NavLink>
                </div>
            </section>

            {/* FAQ Section */}
            <section
                className={buildTailwindClass(
                    components.faq.styles.wrapper,
                    defaultStyles.wrapper
                )}
            >
                <div
                    className={buildTailwindClass(
                        components.faq.styles.container,
                        defaultStyles.wrapper
                    )}
                >
                    <Accordion type="single" collapsible>
                        {components.faq.sections.map((section, sectionIdx) => (
                            <div key={sectionIdx} className="mb-8">
                                <h2
                                    className={buildTailwindClass(
                                        components.faq.styles.categoryTitle,
                                        defaultStyles.categoryTitle
                                    )}
                                >
                                    {section.category}
                                </h2>
                                {section.questions.map((faq, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={`${sectionIdx}-${idx}`}
                                        className={buildTailwindClass(
                                            components.faq.styles.accordion.item,
                                            defaultStyles.accordion.item
                                        )}
                                    >
                                        <AccordionTrigger className={buildTailwindClass(
                                            components.faq.styles.accordion.item,
                                            defaultStyles.accordion.item
                                        )}>
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </div>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
