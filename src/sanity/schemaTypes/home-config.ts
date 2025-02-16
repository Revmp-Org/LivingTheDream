import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
        defineField({
            name: "isActive",
            title: "Is Active",
            type: "boolean",
        }),
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

        defineField({
            name: "hero",
            title: "Hero Section",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                defineField({
                    name: "content",
                    title: "Content",
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                        defineField({
                            name: "buttons",
                            title: "Buttons",
                            type: "object",
                            fields: [
                                defineField({
                                    name: "primary",
                                    title: "Primary Button",
                                    type: "object",
                                    fields: [
                                        { name: "text", title: "Button Text", type: "string" },
                                        { name: "href", title: "Button Link", type: "string" },
                                        { name: "variant", title: "Variant", type: "string", initialValue: "primary" },
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
                                defineField({
                                    name: "secondary",
                                    title: "Secondary Button",
                                    type: "object",
                                    fields: [
                                        { name: "text", title: "Button Text", type: "string" },
                                        { name: "href", title: "Button Link", type: "string" },
                                        { name: "variant", title: "Variant", type: "string", initialValue: "secondary" },
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
        }),
        defineField({
            name: "services",
            title: "Services Section",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                defineField({
                    name: "servicesList",
                    title: "Services",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                { name: "title", title: "Service Title", type: "string" },
                                { name: "description", title: "Service Description", type: "text" },
                                { name: "path", title: "Service Path", type: "string" },
                                {
                                    name: "image",
                                    title: "Service Image",
                                    type: "image",
                                    options: { hotspot: true },
                                    fields: [
                                        { name: "credit", title: "Photo Credit", type: "string" },
                                    ],
                                },
                            ],
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "testimonials",
            title: "Testimonials Section",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                defineField({
                    name: "testimonialsList",
                    title: "Testimonials",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                { name: "name", title: "Name", type: "string" },
                                { name: "role", title: "Role", type: "string" },
                                { name: "quote", title: "Testimonial", type: "text" },
                                {
                                    name: "avatar",
                                    title: "Avatar",
                                    type: "image",
                                    options: { hotspot: true },
                                },
                            ],
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "cta",
            title: "Call to Action",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                defineField({
                    name: "content",
                    title: "Content",
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                        { name: "highlight", title: "Highlight", type: "string" },
                        {
                            name: "image",
                            title: "Service Image",
                            type: "image",
                            options: { hotspot: true },
                            fields: [
                                { name: "credit", title: "Photo Credit", type: "string" },
                            ],
                        },
                        defineField({
                            name: "button",
                            title: "Button",
                            type: "object",
                            fields: [
                                { name: "text", title: "Button Text", type: "string" },
                                { name: "href", title: "Button Link", type: "string" },
                                { name: "variant", title: "Variant", type: "string", initialValue: "primary" },
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
