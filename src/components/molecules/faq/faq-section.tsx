import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/atoms/accordian";
import { PageComponentChild } from "@/types";

type Section = {
    category: string;
    questions: {
        question: string;
        answer: string;
    }[];
};

const FAQSection = (faq: PageComponentChild) => {
    return (
        <section className="py-8">
            <div className="max-w-screen-lg mx-auto px-6 lg:px-12">
                <Accordion type="single" collapsible>
                    {faq?.settings?.content?.sections.map((section: Section, sectionIdx: number) => (
                        <div key={sectionIdx} className="mb-8">
                            <h2 className="text-gray-800 text-2xl font-semibold mb-4 text-center">
                                {section.category}
                            </h2>
                            {section.questions.map((faqItem, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`${sectionIdx}-${idx}`}
                                    className="border-b text-sm text-left"
                                >
                                    <AccordionTrigger className="border-b text-sm text-left">
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