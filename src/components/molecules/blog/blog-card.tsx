import { motion } from "framer-motion";
import { PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import NavLink from "@/components/organism/NavLink";

type BlogCardProps = {
    post: {
        id: number;
        title: string;
        author: string;
        authorRole: string;
        image: string;
        link: string;
    };
}
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" },
};

export const BlogCard = ({ post }: BlogCardProps) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 flex flex-col"
    >
        {/* Image Section */}
        <div className="w-full h-48 overflow-hidden">
            <Image
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                width={300}
                height={200}
            />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 mb-2 truncate">{post.title}</h2>
            <div className="flex items-center mt-3">
                <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
                        <PersonIcon className="text-gray-600" width={16} height={16} />
                    </div>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.authorRole}</p>
                </div>
            </div>
            <NavLink
                href={post.link}
                analytics={{
                    eventLabel: "Read More",
                    eventCategory: "Blog Interaction",
                    eventAction: "link_click",
                    eventValue: "Read More"
                }}
                className="text-white bg-primary hover:bg-primary-dark rounded-md px-6 py-3 cursor-pointer transition-colors duration-200 text-white"
            >
                Read More
            </NavLink>
        </div>
    </motion.div>
);
