import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "contactPage",
    title: "Contact Page",
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

        // Header Section
        defineField({
            name: "header",
            title: "Header",
            type: "object",
            fields: [
                defineField({ name: "isActive", title: "Is Active", type: "boolean" }),
                defineField({
                    name: "content",
                    title: "Content",
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "subheader", title: "Subheader", type: "text" },
                    ],
                }),
            ],
        }),

        // Contact Form
        defineField({
            name: "form",
            title: "Contact Form",
            type: "object",
            fields: [
                defineField({ name: "isActive", title: "Is Active", type: "boolean" }),
                defineField({ name: "webhook", title: "Webhook Form URL", type: "string" }),

                // Form Fields
                defineField({
                    name: "formFields",
                    title: "Form Fields",
                    type: "array",
                    of: [
                        defineArrayMember({
                            type: "object",
                            fields: [
                                {
                                    name: "fieldName",
                                    title: "Field Name",
                                    type: "string",
                                    options: {
                                        list: [
                                            { title: "Full Name", value: "name" },
                                            { title: "Company Name", value: "companyName" },
                                            { title: "Email", value: "email" },
                                            { title: "Phone", value: "phone" },
                                        ],
                                    },
                                },
                                { name: "label", title: "Label", type: "string" },
                                { name: "placeholder", title: "Placeholder", type: "string" },
                                { name: "required", title: "Required", type: "boolean" },
                            ],
                        }),
                    ],
                }),

                // Event Type Selection (Autocomplete)
                defineField({
                    name: "serviceOptions",
                    title: "Service Options (Event Types)",
                    type: "array",
                    of: [{ type: "string" }],
                }),

                // Referral Source Selection (Autocomplete)
                defineField({
                    name: "referralOptions",
                    title: "Referral Sources",
                    type: "array",
                    of: [{ type: "string" }],
                }),
            ],
        }),

        // Thank You Message
        defineField({
            name: "thankYou",
            title: "Thank You Message",
            type: "object",
            fields: [
                defineField({ name: "isActive", title: "Is Active", type: "boolean" }),
                defineField({
                    name: "content",
                    title: "Thank You Content",
                    type: "object",
                    fields: [
                        { name: "title", title: "Thank You Title", type: "string" },
                        { name: "message", title: "Thank You Message", type: "text" },
                    ],
                }),
            ],
        }),
    ],
});
