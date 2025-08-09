import { Calendar, Download, ZoomIn } from 'lucide-react'
import React from 'react'

export default function FeaturedCertifications({certificates,openLightbox}) {

      const featuredCertificates = certificates.filter(cert => cert.featured);

  return (
   <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most prestigious achievements that showcase our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCertificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(cert.image)}
                  />
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => openLightbox(cert.image)}
                      className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition-colors"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                  <p className="text-emerald-600 font-semibold mb-2">{cert.authority}</p>
                  <p className="text-gray-600 mb-3">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.year}
                    </span>
                    <button className="text-emerald-600 hover:text-emerald-700 flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
