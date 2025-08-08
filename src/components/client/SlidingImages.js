'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

export default function SlidingImages() {

     const {isMobile} = useAppContext()

    console.log("isMobile",isMobile)

    const slides = [
        '/images/converted1.png',
        '/images/converted2.png',
        '/images/converted3.png'
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

      useEffect(() => {
    let timerId
    
    // Only set timer if mobile
    if (!isMobile) {
      timerId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
      }, 5000)
    }

    return () => {
      if (timerId) clearInterval(timerId)
    }
  }, [slides.length, isMobile]) // Add isMobile as dependency

    return (
        <div className="relative hidden lg:flex w-full  h-[500px]  overflow-hidden ">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        } absolute inset-0 transition-opacity duration-1000`}
                >
                    <Image
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover rounded-2xl "
                        priority={index === 0} // Preload first image
                    />
                </div>
            ))}

            {/* Navigation buttons */}
            <Button
                onClick={() =>
                    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
                }
                variant="outline"
                size="icon"
                className="absolute cursor-pointer top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
                onClick={() =>
                    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
                }
                variant="outline"
                size="icon"
                className="absolute cursor-pointer top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
