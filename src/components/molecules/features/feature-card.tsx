import React from 'react';
import Card from '@/components/atoms/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

type FeatureCardProps = {
    title: string;
    description: string;
    image: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
        >
            <Card>
                <div className="flex flex-col md:flex-row gap-8 p-8">
                    <div className="w-full md:w-1/2 space-y-6">
                        <motion.h4
                            className="text-3xl font-bold text-gray-800"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {title}
                        </motion.h4>
                        <motion.p
                            className="text-lg text-gray-600 leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {description}
                        </motion.p>
                    </div>
                    <motion.div
                        className="w-full md:w-1/2 h-full"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                            width={800}
                            height={500}
                            priority
                        />
                    </motion.div>
                </div>
            </Card>
        </motion.div>
    );
};

export default FeatureCard;