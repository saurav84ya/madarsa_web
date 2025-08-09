'use client'
import { Calendar, Download, ZoomIn } from 'lucide-react';
import React, { useState } from 'react'

export default function SelectedCategory() {

       const categories = [
        { id: 'all', name: 'All Certificates', icon: Award },
        { id: 'academic', name: 'Academic Excellence', icon: BookOpen },
        { id: 'government', name: 'Government Recognition', icon: Award },
        { id: 'community', name: 'Community Service', icon: Users },
        { id: 'religious', name: 'Religious Achievements', icon: Star }
    ];

        const [selectedCategory, setSelectedCategory] = useState('all');
    
  return (
    <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Certificate Gallery
                        </h2>
                        <p className="text-lg text-gray-600">
                            Browse our complete collection of awards and recognitions
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center px-6 py-3 rounded-lg transition-colors ${selectedCategory === category.id
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <IconComponent className="w-5 h-5 mr-2" />
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Certificate Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCertificates.map((cert) => (
                            <div key={cert.id} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="relative overflow-hidden rounded-t-xl">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
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
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
                                    <p className="text-emerald-600 font-semibold text-sm mb-2">{cert.authority}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {cert.year}
                                        </span>
                                        <button className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm">
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
