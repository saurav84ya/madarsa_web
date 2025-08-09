

'use client'
import { Calendar, CheckCircle, ChevronDown, ChevronRight, Clock, Download, Heart, MapPin, Star, User, Users } from 'lucide-react'
import React, { useState } from 'react'

export default function CourseCate() {
  const [openCourse, setOpenCourse] = useState(null);


     const toggleCourse = (courseId) => {
    setOpenCourse(openCourse === courseId ? null : courseId);
  };


     const courses = [
    {
      id: 1,
      title: "Hifz-e-Quran Program",
      emoji: "📖",
      duration: "2–4 Years",
      ageGroup: "6–18 years",
      mode: "Offline",
      seats: "50 Available",
      instructor: "Hafiz Abdullah Khan",
      schedule: "Daily 6 AM - 12 PM",
      description: "Complete memorization of the Holy Quran with daily revision, proper tajweed, and regular oral tests. Students will also learn translation and basic Arabic.",
      features: [
        "One-on-one attention from qualified Huffaz",
        "Daily revision sessions",
        "Monthly progress assessments",
        "Tajweed correction classes",
        "Certificate upon completion"
      ],
      fee: "₹2,000/month",
      color: "emerald"
    },
    {
      id: 2,
      title: "Aalim Course (Dars-e-Nizami)",
      emoji: "🕌",
      duration: "6–8 Years",
      ageGroup: "15+ years",
      mode: "Offline",
      seats: "30 Available",
      instructor: "Maulana Imran Ahmed",
      schedule: "Mon-Sat 8 AM - 2 PM",
      description: "Comprehensive Islamic scholarship program covering all aspects of Islamic jurisprudence, theology, and Arabic literature.",
      features: [
        "Fiqh (Islamic Jurisprudence)",
        "Hadith Studies & Tafsir",
        "Arabic Grammar & Literature",
        "Logic & Philosophy",
        "Recognized Aalim Degree"
      ],
      fee: "₹3,500/month",
      color: "teal"
    },
    {
      id: 3,
      title: "Nazra Quran",
      emoji: "🎓",
      duration: "1–2 Years",
      ageGroup: "All ages",
      mode: "Offline/Online",
      seats: "100 Available",
      instructor: "Qari Salman Sheikh",
      schedule: "Flexible timing",
      description: "Learn to recite the Holy Quran properly with correct pronunciation and basic tajweed rules.",
      features: [
        "Basic Arabic alphabets",
        "Proper pronunciation guide",
        "Tajweed fundamentals",
        "Daily practice sessions",
        "Progress tracking"
      ],
      fee: "₹1,500/month",
      color: "emerald"
    },
    {
      id: 4,
      title: "Tajweed Course",
      emoji: "🧠",
      duration: "6 Months",
      ageGroup: "12+ years",
      mode: "Offline/Online",
      seats: "40 Available",
      instructor: "Qari Muhammad Ali",
      schedule: "3 days/week, 2 hours",
      description: "Intensive course focusing on the rules of Quranic recitation with proper pronunciation and melodious voice.",
      features: [
        "Advanced tajweed rules",
        "Voice modulation training",
        "Individual practice sessions",
        "Audio-visual learning aids",
        "Certification exam"
      ],
      fee: "₹2,500/month",
      color: "yellow"
    },
    {
      id: 5,
      title: "Modern Education",
      emoji: "💻",
      duration: "1 Academic Year",
      ageGroup: "6–16 years",
      mode: "Offline",
      seats: "200 Available",
      instructor: "Multiple Teachers",
      schedule: "Mon-Sat 2 PM - 6 PM",
      description: "State board curriculum covering English, Mathematics, Science, and Social Studies from Class 1 to 10.",
      features: [
        "NCERT curriculum",
        "English communication skills",
        "Mathematics & Science",
        "Computer basics",
        "Board exam preparation"
      ],
      fee: "₹4,000/month",
      color: "teal"
    },
    {
      id: 6,
      title: "Weekend Islamic Classes",
      emoji: "🌙",
      duration: "Ongoing",
      ageGroup: "All ages",
      mode: "Offline",
      seats: "80 Available",
      instructor: "Various Ustaz",
      schedule: "Saturdays & Sundays",
      description: "Perfect for working adults and school-going students who want to learn Islamic fundamentals.",
      features: [
        "Basic Quran reading",
        "Islamic history & Seerah",
        "Fiqh essentials",
        "Akhlaq (Islamic ethics)",
        "Family-friendly timings"
      ],
      fee: "₹1,000/month",
      color: "emerald"
    }
  ];

    const getColorClasses = (color) => {
    const colors = {
      emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800'
    };
    return colors[color] || colors.emerald;
  };


  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Categories
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our comprehensive range of Islamic and academic programs
            </p>
          </div>

          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                {/* Course Header */}
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleCourse(course.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{course.emoji}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                      <p className="text-gray-600">{course.description.substring(0, 80)}...</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(course.color)}`}>
                      {course.duration}
                    </span>
                    {openCourse === course.id ? 
                      <ChevronDown className="w-6 h-6 text-gray-400" /> : 
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    }
                  </div>
                </div>

                {/* Course Details (Expandable) */}
                {openCourse === course.id && (
                  <div className="border-t border-gray-200 p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column - Course Info */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Course Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-emerald-600 mr-3" />
                            <span className="text-gray-700"><strong>Duration:</strong> {course.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-emerald-600 mr-3" />
                            <span className="text-gray-700"><strong>Age Group:</strong> {course.ageGroup}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="w-5 h-5 text-emerald-600 mr-3" />
                            <span className="text-gray-700"><strong>Instructor:</strong> {course.instructor}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-emerald-600 mr-3" />
                            <span className="text-gray-700"><strong>Schedule:</strong> {course.schedule}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                            <span className="text-gray-700"><strong>Mode:</strong> {course.mode}</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                            <span className="text-gray-700"><strong>Seats:</strong> {course.seats}</span>
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-5 h-5 text-emerald-600 mr-3" />
                            <span className="text-gray-700"><strong>Fee:</strong> {course.fee}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Course Features */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">What You&apos;ll Learn</h4>
                        <ul className="space-y-2">
                          {course.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 space-y-3">
                          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                            Apply Now
                            <ChevronRight className="w-5 h-5 ml-2" />
                          </button>
                          <button className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                            <Download className="w-5 h-5 mr-2" />
                            Download Syllabus
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{course.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
