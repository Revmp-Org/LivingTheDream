import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "servicePage",
    title: "Service Page",
    type: "document",
    fields: [
        defineField({ name: "isActive", title: "Is Active", type: "boolean" }),

        // Service Info
        defineField({ name: "title", title: "Service Title", type: "string" }),
        defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
        defineField({ name: "description", title: "Service Description", type: "text" }),

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

        // Overview Section
        defineField({
            name: "overview",
            title: "Overview Section",
            type: "object",
            fields: [
                defineField({ name: "isActive", title: "Is Active", type: "boolean" }),
                defineField({
                    name: "content",
                    title: "Content",
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                        { name: "highlight", title: "Highlight", type: "string" },
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: { hotspot: true },
                            fields: [
                                { name: "credit", title: "Photo Credit", type: "string" },
                            ],
                        }),
                        defineField({
                            name: "button",
                            title: "Call to Action Button",
                            type: "object",
                            fields: [
                                { name: "text", title: "Button Text", type: "string" },
                                { name: "link", title: "Button Link", type: "string" },
                                defineField({
                                    name: "analytics",
                                    title: "Analytics Tracking",
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

        // Gallery Section
        defineField({
            name: "gallery",
            title: "Gallery Section",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                defineField({
                    name: "credit",
                    title: "Photo Credit",
                    type: "string",
                    description: "Credit for all photos in this gallery section",
                }),
                defineField({
                    name: "items",
                    title: "Gallery Items",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
                                defineField({ name: "isPortrait", title: "Is Portrait?", type: "boolean", initialValue: false }),
                            ],
                        }),
                    ],
                }),
            ],
        }),

        // CTA Section
        defineField({
            name: "cta",
            title: "Call to Action",
            type: "object",
            fields: [
                defineField({ name: "isActive", title: "Is Active", type: "boolean" }),
                defineField({
                    name: "content",
                    title: "Content",
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                        defineField({
                            name: "button",
                            title: "Call to Action Button",
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
