import Link from 'next/link'
import React from 'react'

export default function FooterHomePage() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">🕌</div>
                <span className="text-xl font-bold"><span className='text-[#009966]' >M</span>adrasah Islamia Arabia Quran Memorization</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building faithful and knowledgeable generations through comprehensive Islamic education
                combined with modern academic excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/home/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/home/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
                <li><Link href="/home/admission" className="text-gray-400 hover:text-white">Admission</Link></li>
                <li><Link href="/home/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                {/* <li><Link href="/donation" className="text-gray-400 hover:text-white">Donate</Link></li> */}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Education Street</p>
                <p>Islamic Quarter, City 12345</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@miaqm.edu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              © 2025 Madrasah Islamia Arabia Quran Memorization. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}
