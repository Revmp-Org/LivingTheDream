import { motion } from "framer-motion";
import { BlogCard } from "@/components/molecules/blog/blog-card";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const BlogCards = ({ posts }: { posts: any[] }) => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
        {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
        ))}
    </motion.div>
);
