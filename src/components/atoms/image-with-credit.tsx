import React from "react";
import Image from "next/image";

type ImageWithCreditProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    photoCredit?: string;
    className?: string;
    orientation?: "portrait" | "landscape";
    fixedCreditHeight?: boolean;
    backgroundCard?: boolean
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
    backgroundCard = false
}) => {
    return (
        <div className={`relative flex flex-col items-center ${className} w-full`}>
            {/* Image Container */}
            <div
                className={`relative w-full ${backgroundCard ? "rounded-lg overflow-hidden shadow-md" : ""}
                    ${orientation === "portrait" ? "aspect-[9/16]" : "aspect-[16/9]"}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="rounded-lg w-full h-full object-cover"
                    priority
                    loading="eager"
                />
            </div>

            {/* Photo Credit - Keeps Height if Fixed */}
            {(photoCredit || fixedCreditHeight) && (
                <div className="mt-2 min-h-[20px] flex items-center justify-center text-sm text-gray-500 italic">
                    {photoCredit ? `Photo by: ${photoCredit}` : <span className="opacity-0">Placeholder</span>}
                </div>
            )}
        </div>
    );
};

export default ImageWithCredit;
