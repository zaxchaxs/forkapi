
"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { LuZoomIn } from "react-icons/lu";

// Placeholder for full lightbox functionality
// In a real app we might use a library like yet-another-react-lightbox

interface GalleryItem {
    id: string | number;
    src: string | StaticImageData;
    category?: string;
    title?: string;
}

interface GalleryGridProps {
    items: GalleryItem[];
}

const GalleryGrid = ({ items }: GalleryGridProps) => {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    // Simple column distribution logic could go here for masonry,
    // but for simplicity we'll use CSS grid or columns.

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer bg-white dark:bg-default-100 shadow-md transition-all hover:shadow-xl border border-default-200 dark:border-default-700"
                        onClick={() => setSelectedImage(item)}
                    >
                        <div className="relative aspect-square w-full overflow-hidden">
                            <Image
                                src={item.src}
                                alt={item.title || "Gallery Image"}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <LuZoomIn className="h-8 w-8 text-white mx-auto mb-2" />
                                {item.title && (
                                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                                )}
                                {item.category && (
                                    <p className="text-white/80 text-sm">{item.category}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Simple Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full max-h-screen">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.title || "Full view"}
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-primary"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryGrid;
