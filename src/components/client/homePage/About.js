import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
     <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About <span className='text-[#009966]' >M</span>adrasah Islamia Arabia Quran Memorization</h2>
                          <p className="text-lg text-gray-600 mb-6">
                            Established in 2000, Madrasah Islamia Arabia Quran Memorization has been a beacon of Islamic education, 
                            providing comprehensive religious and academic instruction to students from diverse backgrounds.
                          </p>
                          <p className="text-lg text-gray-600 mb-8">
                            Our mission is to create an environment where students can develop strong Islamic values 
                            while excelling in modern academics, preparing them to be productive members of society.
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                              <p className="text-gray-700"><strong>Mission:</strong> To provide quality Islamic education combined with modern academics</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                              <p className="text-gray-700"><strong>Vision:</strong> To nurture righteous, knowledgeable, and confident Muslim leaders</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                              <p className="text-gray-700"><strong>Values:</strong> Faith, Knowledge, Excellence, Integrity, and Community Service</p>
                            </div>
                          </div>
                        </div>

                        <div className="relative  ">
                          <div className="bg-emerald-100  rounded-2xl">
                            <Image
                              src="/images/Madrasa-Islamia-Arabia-Manzoor-Ul-Uloom_3.jpg"
                              alt="Madrasah Islamia Arabia Quran Memorization Building"
                              width={600}
                              height={400}
                              className="rounded-lg w-full h-auto"
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>
  )
}
