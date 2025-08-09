import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: "/images/gallery/1.jpg" },
    { id: 2, src: "/images/gallery/2.jpg" },
    { id: 3, src: "/images/gallery/3.jpg" },
    { id: 4, src: "/images/gallery/4.jpg" },
    { id: 5, src: "/images/gallery/5.jpg" },
    { id: 6, src: "/images/gallery/6.jpg" }
  ];


  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
          <p className="text-xl text-gray-600">A glimpse into life at our madrasa</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.slice(0, 6).map((image) => (
            <div
              key={image.id}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-75 transition-opacity cursor-pointer"
            >
              <div className="w-full h-full bg-emerald-100 flex  items-center justify-center overflow-hidden relative">
                <Image
                  src={image.src}
                  alt={`Gallery Image ${image.id}`}
                  fill
                  className="object-cover" // ya 'object-contain' agar pura image dekhna ho
                />
              </div>

            </div>
          ))}
        </div>


        <div className="text-center mt-12">
          <Link href="/gallery" className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 font-medium inline-flex items-center">
            View Full Gallery <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
