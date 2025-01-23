import { BlogSearch } from "@/components/molecules/blog/blog-search";
import { BlogCards } from "@/components/organism/Blog/blog-cards";
import Head from "next/head";
import { useState } from "react";


const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const blogPosts = [
        {
            id: 1,
            title: "The Importance of SEO in Digital Marketing",
            author: "Casey Mackrell",
            authorRole: "Founder @ Revamp Marketing",
            image: "https://cdn.revampmarketing.net/web-design.jpg",
            link: "/blog/seo-importance"
        },
        {
            id: 2,
            title: "Social Media Marketing Strategies",
            author: "Reese Mackrell",
            authorRole: "Chief Dog @ Revamp Marketing",
            image: "https://cdn.revampmarketing.net/web-design.jpg",
            link: "/blog/social-media-strategies"
        },
        {
            id: 3,
            title: "Web Design Trends in 2025",
            author: "Cheerio Mackrell",
            authorRole: "Chief Cat @ Revamp Marketing",
            image: "https://cdn.revampmarketing.net/web-design.jpg",
            link: "/blog/web-design-trends"
        },
        {
            id: 4,
            title: "How to Create Engaging Content",
            author: "Casey Mackrell",
            authorRole: "Founder @ Revamp Marketing",
            image: "https://cdn.revampmarketing.net/web-design.jpg",
            link: "/blog/engaging-content"
        },
        {
            id: 5,
            title: "Why Email Marketing Still Works in 2025",
            author: "Reese Mackrell",
            authorRole: "Chief Dog @ Revamp Marketing",
            image: "https://cdn.revampmarketing.net/web-design.jpg",
            link: "/blog/email-marketing"
        },
        {
            id: 6,
            title: "AI in Marketing: The Future is Here",
            author: "Cheerio Mackrell",
            authorRole: "Chief Cat @ Revamp Marketing",
            image: "https://cdn.revampmarketing.net/web-design.jpg",
            link: "/blog/ai-in-marketing"
        },
        {
            id: 7,
            title: "The Role of Branding in Business Success",
            author: "Casey Mackrell",
            authorRole: "Founder @ Revamp Marketing",
            image: "https://cdn.revampmarketing.net/web-design.jpg",
            link: "/blog/branding-success"
        },
        {
            id: 8,
            title: "The Rise of Video Marketing in 2025",
            author: "Reese Mackrell",
            authorRole: "Chief Dog @ Revamp Marketing",
            image: "https://cdn.revampmarketing.net/web-design.jpg",
            link: "/blog/video-marketing"
        },
    ];


    const filteredPosts = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pt-16 pb-16">
            <Head>
                <title>Blog | Revamp Marketing</title>
                <meta name="description" content="Explore our blog for the latest insights, tips, and trends in digital marketing, SEO, and web design." />
            </Head>
            <div className="custom-screen">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">All Articles</h1>
                <BlogSearch value={searchQuery} onChange={setSearchQuery} />
                <BlogCards posts={filteredPosts} />
            </div>
        </div>
    );
};

export default BlogPage;
