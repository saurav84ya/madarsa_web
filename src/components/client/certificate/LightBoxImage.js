'use client'

import { X } from 'lucide-react'
import React from 'react'

export default function LightBoxImage({closeLightbox ,lightboxImage}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={lightboxImage} 
              alt="Certificate"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
  )
}
