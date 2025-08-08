// "use client";
// import { useEffect } from "react";

// export default function MadrasaPage() {
//   useEffect(() => {
//     // Smooth scrolling for navigation links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute("href"));
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       });
//     });

//     // Prayer time highlight
//     function updatePrayerTimes() {
//       const now = new Date();
//       const hour = now.getHours();
//       const prayerTimes = document.querySelectorAll(".prayer-time");

//       prayerTimes.forEach(time => time.classList.remove("prayer-active"));

//       let activeIndex = 0;
//       if (hour >= 5 && hour < 12) activeIndex = 0; // Fajr
//       else if (hour >= 12 && hour < 16) activeIndex = 1; // Dhuhr
//       else if (hour >= 16 && hour < 18) activeIndex = 2; // Asr
//       else if (hour >= 18 && hour < 20) activeIndex = 3; // Maghrib
//       else activeIndex = 4; // Isha

//       if (prayerTimes[activeIndex]) {
//         prayerTimes[activeIndex].classList.add("prayer-active");
//       }
//     }
//     updatePrayerTimes();
//     const prayerInterval = setInterval(updatePrayerTimes, 60000);

//     // Intersection Observer animations
//     const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-fade-in-up");
//         }
//       });
//     }, observerOptions);

//     const animatedElements = document.querySelectorAll(".group, .grid > div");
//     animatedElements.forEach(el => observer.observe(el));

//     return () => {
//       clearInterval(prayerInterval);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="bg-gray-50">
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         .prayer-active {
//           background: linear-gradient(135deg, #ffd700, #ffed4e);
//           color: #1a202c;
//         }
//       `}</style>

//       {/* HEADER */}
//       <header className="bg-gradient-to-r from-[#2c5530] to-[#4a7c59] text-white shadow-lg">
//         <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center space-x-3 mb-4 md:mb-0">
//             <div className="text-3xl">🕌</div>
//             <div>
//               <h1 className="text-2xl font-bold">Al-Noor Islamic Madrasa</h1>
//               <p className="text-sm opacity-90">Excellence in Islamic Education</p>
//             </div>
//           </div>
//           <nav className="flex flex-wrap justify-center gap-6">
//             <a href="#home" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-300">Home</a>
//             <a href="#about" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-300">About</a>
//             <a href="#programs" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-300">Programs</a>
//             <a href="#admissions" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-300">Admissions</a>
//             <a href="#contact" className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all duration-300">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* HERO */}
//       <section id="home" className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
//               Welcome to Al-Noor Madrasa
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//               Nurturing minds, enriching souls through authentic Islamic education combined with modern learning
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
//               <a href="#admissions" className="bg-[#ffd700] text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
//                 Apply Now
//               </a>
//               <a href="#about" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* PRAYER TIMES */}
//           <div className="max-w-md mx-auto mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
//             <h3 className="text-lg font-semibold mb-4 text-center">Today's Prayer Times</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between items-center p-2 rounded-lg prayer-time">
//                 <span className="font-medium">Fajr</span>
//                 <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded">5:30 AM</span>
//               </div>
//               <div className="flex justify-between items-center p-2 rounded-lg prayer-time">
//                 <span className="font-medium">Dhuhr</span>
//                 <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded">12:45 PM</span>
//               </div>
//               <div className="flex justify-between items-center p-2 rounded-lg prayer-time">
//                 <span className="font-medium">Asr</span>
//                 <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded">4:15 PM</span>
//               </div>
//               <div className="flex justify-between items-center p-2 rounded-lg prayer-time">
//                 <span className="font-medium">Maghrib</span>
//                 <span className="text-sm bg-black bg-opacity-20 px-2 py-1 rounded">6:30 PM</span>
//               </div>
//               <div className="flex justify-between items-center p-2 rounded-lg prayer-time">
//                 <span className="font-medium">Isha</span>
//                 <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded">8:00 PM</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Rest of your sections go here — ABOUT, PROGRAMS, CONTACT, FOOTER — same structure as your HTML but converted to JSX */}
//     </div>
//   );
// }

'use client'


// pages/index.js - Homepage
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Phone, Mail, MapPin, Star, Users, BookOpen, Award } from 'lucide-react';
import Header from '@/components/client/header';

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const courses = [
    {
      id: 1,
      name: "Quran Memorization (Hifz)",
      duration: "2-5 years",
      image: "/images/quran-hifz.jpg",
      description: "Complete Quran memorization with proper Tajweed"
    },
    {
      id: 2,
      name: "Islamic Studies",
      duration: "1-3 years",
      image: "/images/islamic-studies.jpg",
      description: "Comprehensive Islamic knowledge including Fiqh, Hadith, and Seerah"
    },
    {
      id: 3,
      name: "Arabic Language",
      duration: "6 months - 2 years",
      image: "/images/arabic-language.jpg",
      description: "Classical and modern Arabic language learning"
    },
    {
      id: 4,
      name: "Academic Subjects",
      duration: "Ongoing",
      image: "/images/academic-subjects.jpg",
      description: "Mathematics, Science, English, and Social Studies"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "Parent",
      image: "/images/testimonial-1.jpg",
      text: "Al-Noor Madrasa has been instrumental in my child's Islamic and academic development. The teachers are highly qualified and caring."
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "Alumni",
      image: "/images/testimonial-2.jpg",
      text: "I completed my Hifz here and the environment was perfect for learning. The balance between Islamic and modern education is excellent."
    },
    {
      id: 3,
      name: "Omar Rahman",
      role: "Parent",
      image: "/images/testimonial-3.jpg",
      text: "The staff at Al-Noor Madrasa go above and beyond to ensure each student receives personalized attention and guidance."
    }
  ];

  const galleryImages = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg"
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Students" },
    { icon: BookOpen, number: "15+", label: "Courses" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Rating" }
  ];

  return (
    <>
      <Head>
        <title>Al-Noor Islamic Madrasa - Excellence in Islamic Education</title>
        <meta name="description" content="Leading Islamic educational institute providing comprehensive Quran memorization, Islamic studies, and academic programs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/* Navigation */}

        <Header/>

   
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Al-Noor Islamic Madrasa
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Nurturing minds and souls through authentic Islamic education combined with modern academic excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admission" className="bg-yellow-500 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center">
                Apply Now <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Al-Noor Madrasa</h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 1998, Al-Noor Islamic Madrasa has been a beacon of Islamic education, 
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
            <div className="relative">
              <div className="bg-emerald-100 rounded-2xl p-8">
                <Image
                  src="/images/about-madrasa.jpg"
                  alt="Al-Noor Madrasa Building"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to develop both spiritual and intellectual growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-emerald-100 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-emerald-600" />
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
            <Link href="/courses" className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 font-medium inline-flex items-center">
              View All Courses <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600">A glimpse into life at our madrasa</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((image, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-75 transition-opacity cursor-pointer">
                <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-600 text-sm">Gallery Image {index + 1}</span>
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
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
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
      <section className="py-20" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get in touch with us for admissions, inquiries, or to schedule a visit.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">123 Education Street, Islamic Quarter<br />City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@alnoor-madrasa.edu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleContactSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">🕌</div>
                <span className="text-xl font-bold">Al-Noor Islamic Madrasa</span>
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
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
                <li><Link href="/admission" className="text-gray-400 hover:text-white">Admission</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                <li><Link href="/donation" className="text-gray-400 hover:text-white">Donate</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Education Street</p>
                <p>Islamic Quarter, City 12345</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@alnoor-madrasa.edu</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              © 2025 Al-Noor Islamic Madrasa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
  >
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.884 3.488" />
    </svg>
  </a>
</div>

    </>
  );
}