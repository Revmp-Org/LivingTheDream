import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type ImageWithCreditProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    photoCredit?: string;
    className?: string;
    orientation?: "portrait" | "landscape";
    fixedCreditHeight?: boolean;
    creditLink?: string;
};

const ImageWithCredit: React.FC<ImageWithCreditProps> = ({
    src,
    alt,
    width,
    height,
    photoCredit,
    className = "",
    orientation = "landscape",
    fixedCreditHeight = true,
    creditLink,
}) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="flex flex-col items-center w-full rounded-lg">
            {/* Image Container */}
            <div
                className={`relative w-full rounded-lg overflow-hidden flex justify-center items-center
                ${orientation === "portrait" ? "aspect-[9/16]" : "aspect-[16/9]"}`}
            >
                {/* Show a loading placeholder */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                        <span className="text-gray-500 text-sm">Loading image...</span>
                    </div>
                )}

                <Image
                    src={urlFor(src).url()}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`rounded-lg w-full h-full object-cover transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                    priority
                    loading="eager"
                    onLoadingComplete={() => setIsLoading(false)}
                />
            </div>

            {/* Photo Credit - Now Below the Image */}
            {photoCredit && creditLink && (
                <div className="mt-2 text-gray-600 text-xs text-center italic cursor-pointer">
                    <a href={creditLink} target="_blank" rel="noopener noreferrer">
                        Photo by: {photoCredit}
                    </a>
                </div>
            )}

            {photoCredit && !creditLink && (
                <div className="mt-2 text-gray-600 text-xs text-center italic">
                    {`Photo by: ${photoCredit}`}
                </div>
            )}
        </div>
    );
};

export default ImageWithCredit;
