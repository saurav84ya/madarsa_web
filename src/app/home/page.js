import HeroSection from '@/components/client/homePage/HeroSection'
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />


      {/* whatsaap contact */}
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:bg-[#128C7E] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#128C7E] focus:ring-opacity-75"
        >
          <FaWhatsapp className="text-white text-2xl" />
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>

    </div>
  )
}
