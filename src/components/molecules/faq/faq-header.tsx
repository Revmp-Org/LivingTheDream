import NavLink from "@/components/organism/NavLink";
import { PageComponentChild } from "@/types";

const FAQHeader = (header: PageComponentChild) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
                <h1 className="text-gray-900 text-4xl font-bold mb-4">
                    {header?.settings?.content?.title}
                </h1>
                <p className="text-gray-700 text-lg">
                    {header?.settings?.content?.description}
                </p>
            </div>
            <div className="flex justify-center mt-8">
                <NavLink
                    href={header?.settings?.content?.button?.link || ""}
                    className="text-white bg-primary hover:bg-primary-light active:bg-primary-dark px-6 py-3 rounded-md transition-colors duration-200"
                    analytics={header?.settings?.content?.button?.analytics || {
                        eventLabel: "FAQ Header Button",
                        eventCategory: "FAQ Header",
                        eventAction: "button_click",
                        eventValue: "",
                    }}
                >
                    {header?.settings?.content?.button?.text}
                </NavLink>
            </div>
        </section>
    );
};

export default FAQHeader;