import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "aboutPage",
    title: "About Page",
    type: "document",
    fields: [
        defineField({ name: "isActive", title: "Is Active", type: "boolean" }),

        // SEO Settings
        defineField({
            name: "seo",
            title: "SEO Settings",
            type: "object",
            fields: [
                { name: "title", title: "SEO Title", type: "string" },
                { name: "description", title: "SEO Description", type: "text" },
                defineField({
                    name: "keywords",
                    title: "SEO Keywords",
                    type: "array",
                    of: [{ type: "string" }],
                }),
                { name: "canonical", title: "Canonical URL", type: "url" },
                defineField({
                    name: "ogImage",
                    title: "Open Graph Image",
                    type: "image",
                    options: { hotspot: true },
                    fields: [{ name: "alt", title: "Alt Text", type: "string" }],
                }),
            ],
        }),


        // About Section
        defineField({
            name: "about",
            title: "About Section",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                defineField({
                    name: "image",
                    title: "About Image",
                    type: "image",
                    options: { hotspot: true },
                    fields: [{ name: "alt", title: "Alt Text", type: "string" }],
                }),
                defineField({
                    name: "content",
                    title: "About Content",
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "array",
                            of: [{ type: "text" }],
                        }),
                        { name: "quote", title: "Quote", type: "string" },
                        defineField({
                            name: "additionalInfo",
                            title: "Additional Info",
                            type: "object",
                            fields: [
                                defineField({
                                    name: "getToKnowMe",
                                    title: "Fun Facts",
                                    type: "array",
                                    of: [{ type: "string" }],
                                }),
                                defineField({
                                    name: "experience",
                                    title: "Experience",
                                    type: "array",
                                    of: [{ type: "string" }],
                                }),
                                { name: "questions", title: "Contact Info", type: "text" },
                                { name: "travel", title: "Travel Availability", type: "text" },
                            ],
                        }),
                    ],
                }),
            ],
        }),

        // Footer CTA Section
        defineField({
            name: "footerCTA",
            title: "Footer CTA",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                defineField({
                    name: "content",
                    title: "CTA Content",
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                        defineField({
                            name: "button",
                            title: "CTA Button",
                            type: "object",
                            fields: [
                                { name: "text", title: "Button Text", type: "string" },
                                { name: "link", title: "Button Link", type: "string" },
                                defineField({
                                    name: "analytics",
                                    title: "Analytics",
                                    type: "object",
                                    fields: [
                                        { name: "eventLabel", title: "Event Label", type: "string" },
                                        { name: "eventCategory", title: "Event Category", type: "string" },
                                        { name: "eventAction", title: "Event Action", type: "string" },
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
});
