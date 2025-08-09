import Link from 'next/link'
import React from 'react'
import SlidingImages from './SlidingImages'
import { ChevronRight, Star, Users, BookOpen, Award } from 'lucide-react';
import About from './About';
import Courses from './Courses';
import Gallery from './Gallery';
import Image from 'next/image';
import Contact from './Contact';
import FooterHomePage from './FooterHomePage';

export default function HeroSection() {

    const stats = [
        { icon: Users, number: "500+", label: "Students" },
        { icon: BookOpen, number: "15+", label: "Courses" },
        { icon: Award, number: "25+", label: "Years Experience" },
        { icon: Star, number: "4.9", label: "Rating" }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Ahmed Hassan",
            role: "Parent",
            image: "/images/testimonial/1.webp",
            text: "Al-Noor Madrasa has been instrumental in my child's Islamic and academic development. The teachers are highly qualified and caring."
        },
        {
            id: 2,
            name: "Fatima Ali",
            role: "Alumni",
            image: "/images/testimonial/2.png",
            text: "I completed my Hifz here and the environment was perfect for learning. The balance between Islamic and modern education is excellent."
        },
        {
            id: 3,
            name: "Omar Rahman",
            role: "Parent",
            image: "/images/testimonial/3.jpg",
            text: "The staff at Al-Noor Madrasa go above and beyond to ensure each student receives personalized attention and guidance."
        }
    ];

    return (
        <div>

            {/* sliding section */}

            <div className='flex gap-3 mt-3  ' >

                <div>
                    <section className=" flex rounded-2xl overflow-hidden  relative bg-gradient-to-r from-emerald-600 to-teal-600 h-[500px] text-white">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center  md:py-24">
                            <div className="text-center  ">
                                <h1 className="text-4xl md:text-4xl font-bold mb-6">
                                    Welcome to Madrasah Islamia Arabia Quran Memorization
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                                    Nurturing minds and souls through authentic Islamic education combined with modern academic excellence
                                </p>
                                <div className="flex flex-col text-center sm:flex-row gap-4 justify-center">
                                    <Link href="/admission" className="bg-yellow-500 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex  items-center">
                                        Apply Now <ChevronRight className="ml-2 w-5 h-5" />
                                    </Link>
                                    <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <div className='w-full h-[500px] hidden  lg:flex  overflow-hidden'>
                    <SlidingImages />
                </div>



            </div>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <stat.icon className="w-12 h-12 text-emerald-600" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* About Section */}
            <About />


            {/* Courses Section */}
            <Courses />

            {/* Gallery Preview*/}
            <Gallery />



            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What People Say</h2>
                        <p className="text-xl text-gray-600">Testimonials from our community</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.text}&quot;</p>

                                <div className="flex items-center">
                                    {/* Image container */}
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            height={48} // 12 * 4px = 48px
                                            width={48}
                                            className="object-cover"
                                        />
                                    </div>


                                    {/* Name & role */}
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>


               {/* Contact Section */}
                        <Contact/>


               



        </div>
    )
}
