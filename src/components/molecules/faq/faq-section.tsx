import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/atoms/accordian";
import { PageComponentChild } from "@/types";
import { getStyles } from "@/utils";

type Section = {
    category: string;
    questions: {
        question: string;
        answer: string;
    }[];
};

const FAQSection = (faq: PageComponentChild) => {
    const faqStyles = getStyles("wrapper", faq?.settings?.styles);
    const faqContainerStyles = getStyles("container", faq?.settings?.styles);
    const categoryTitleStyles = getStyles("categoryTitle", faq?.settings?.styles);
    const accordionItemStyles = getStyles("accordion.item", faq?.settings?.styles);

    return (
        <section className={faqStyles}>
            <div className={faqContainerStyles}>
                <Accordion type="single" collapsible>
                    {faq?.settings?.content?.sections.map((section: Section, sectionIdx: number) => (
                        <div key={sectionIdx} className="mb-8">
                            <h2 className={categoryTitleStyles}>
                                {section.category}
                            </h2>
                            {section.questions.map((faqItem, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`${sectionIdx}-${idx}`}
                                    className={accordionItemStyles}
                                >
                                    <AccordionTrigger className={accordionItemStyles}>
                                        {faqItem.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {faqItem.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </div>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;
