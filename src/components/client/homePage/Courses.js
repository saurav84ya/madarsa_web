import { BookOpen, ChevronRight } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Courses() {
      const courses = [
    {
      id: 1,
      name: "Quran Memorization (Hifz)",
      duration: "2-5 years",
      image: "/images/courses/quran-hifz.jpg",
      description: "Complete Quran memorization with proper Tajweed"
    },
    {
      id: 2,
      name: "Islamic Studies",
      duration: "1-3 years",
      image: "/images/courses/islamic-studies.jpg",
      description: "Comprehensive Islamic knowledge including Fiqh, Hadith, and Seerah"
    },
    {
      id: 3,
      name: "Arabic Language",
      duration: "6 months - 2 years",
      image: "/images/courses/arabic-language.jpeg",
      description: "Classical and modern Arabic language learning"
    },
    {
      id: 4,
      name: "Academic Subjects",
      duration: "Ongoing",
      image: "/images/courses/academic-subjects.avif",
      description: "Mathematics, Science, English, and Social Studies"
    }
  ];
  return (
   <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our  <span className='text-[#009966]' >C</span>ourses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to develop both spiritual and intellectual growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48  flex items-center justify-center">
                  {/* <BookOpen className="w-16 h-16 text-emerald-600" /> */}
                  <Image src={course.image} width={500}  height={500}
                    alt='Courses image'
                    className='h-[195px] w-full rounded-t-2xl  ' 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">Duration: {course.duration}</p>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/home/courses" className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 font-medium inline-flex items-center">
              View All Courses <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
  )
}
