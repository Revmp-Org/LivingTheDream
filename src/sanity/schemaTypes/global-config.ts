import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "globalConfig",
    title: "Global Config",
    type: "document",
    fields: [
        defineField({
            name: "navbar",
            title: "Navbar",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                {
                    name: "content",
                    title: "Content",
                    type: "object",
                    fields: [
                        defineField({
                            name: "navigation",
                            title: "Navigation Items",
                            type: "array",
                            of: [
                                defineArrayMember({
                                    type: "object",
                                    fields: [
                                        { name: "id", title: "Nav ID", type: "number" },
                                        { name: "label", title: "Label", type: "string" },
                                        { name: "path", title: "Path", type: "string" },
                                        {
                                            name: "items",
                                            title: "Sub-items",
                                            type: "array",
                                            of: [
                                                defineArrayMember({
                                                    type: "object",
                                                    fields: [
                                                        { name: "id", title: "Item ID", type: "number" },
                                                        { name: "label", title: "Label", type: "string" },
                                                        { name: "path", title: "Path", type: "string" },
                                                    ],
                                                }),
                                            ],
                                        },
                                    ],
                                }),
                            ],
                        }),
                        defineField({
                            name: "logo",
                            title: "Logo",
                            type: "object",
                            fields: [
                                {
                                    name: "mobile",
                                    title: "Mobile Logo",
                                    type: "image",
                                    options: { hotspot: true },
                                },
                                {
                                    name: "desktop",
                                    title: "Desktop Logo",
                                    type: "image",
                                    options: { hotspot: true },
                                },
                            ],
                        }),
                        defineField({
                            name: "ctaButton",
                            title: "CTA Button",
                            type: "object",
                            fields: [
                                { name: "text", title: "Button Text", type: "string" },
                                { name: "link", title: "CTA Link", type: "string" },
                                {
                                    name: "analytics",
                                    title: "Analytics",
                                    type: "object",
                                    fields: [
                                        { name: "event", title: "Event Name", type: "string" },
                                        { name: "label", title: "Event Label", type: "string" },
                                        { name: "category", title: "Category", type: "string" },
                                        { name: "action", title: "Action", type: "string" },
                                    ],
                                },
                            ],
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: "brand",
            title: "Brand",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                defineField({
                    name: "logo",
                    title: "Logo",
                    type: "object",
                    fields: [
                        {
                            name: "mobile",
                            title: "Mobile Logo",
                            type: "image",
                            options: { hotspot: true },
                        },
                        {
                            name: "desktop",
                            title: "Desktop Logo",
                            type: "image",
                            options: { hotspot: true },
                        },
                    ],
                }),],
        }),
        defineField({
            name: "footer",
            title: "Footer",
            type: "object",
            fields: [
                { name: "isActive", title: "Is Active", type: "boolean" },
                {
                    name: "content",
                    title: "Content",
                    type: "object",
                    fields: [
                        defineField({
                            name: "logo",
                            title: "Footer Logo",
                            type: "image",
                            options: { hotspot: true },
                        }),
                        defineField({
                            name: "navigation",
                            title: "Navigation Items",
                            type: "array",
                            of: [
                                defineArrayMember({
                                    type: "object",
                                    fields: [
                                        { name: "id", title: "Nav ID", type: "number" },
                                        { name: "label", title: "Label", type: "string" },
                                        { name: "path", title: "Path", type: "string" },
                                        {
                                            name: "items",
                                            title: "Sub-items",
                                            type: "array",
                                            of: [
                                                defineArrayMember({
                                                    type: "object",
                                                    fields: [
                                                        { name: "id", title: "Item ID", type: "number" },
                                                        { name: "label", title: "Label", type: "string" },
                                                        { name: "path", title: "Path", type: "string" },
                                                    ],
                                                }),
                                            ],
                                        },
                                    ],
                                }),
                            ],
                        }),
                        defineField({
                            name: "socialLinks",
                            title: "Social Links",
                            type: "array",
                            of: [
                                defineArrayMember({
                                    type: "object",
                                    fields: [
                                        { name: "key", title: "Social Platform", type: "string" },
                                        { name: "value", title: "URL", type: "url" },
                                    ],
                                }),
                            ],
                        }),
                        defineField({
                            name: "copyright",
                            title: "Copyright Text",
                            type: "string",
                        }),
                    ],
                },
            ],
        }),
    ],
});
