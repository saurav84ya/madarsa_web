import React from 'react';
import { 
  BookOpen, 
  Users, 
  Clock, 
  GraduationCap, 
  Award, 
  Calendar,
  User,
  MapPin,
  Download,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Heart,
  Building
} from 'lucide-react';
import CourseCate from '@/components/client/coursesPage/CourseCate';

const CoursesPage = () => {

 

  const whyChooseUs = [
    "Certified and experienced Islamic scholars",
    "Focused and distraction-free learning environment",
    "Affordable fee structure with scholarship options",
    "Modern hostel facility available for outstation students",
    "Recognized certification upon course completion",
    "Individual attention and personalized learning approach"
  ];

  const faqs = [
    {
      question: "What is the age limit for Hifz program?",
      answer: "We accept students from age 6 to 18 for the Hifz program. However, younger motivated students may be considered on a case-by-case basis."
    },
    {
      question: "Can students do Hifz and school together?",
      answer: "Yes, we offer flexible timing options. Many students successfully complete both Hifz and their regular schooling with our morning and evening batches."
    },
    {
      question: "Is hostel facility mandatory?",
      answer: "No, hostel is optional. We provide hostel facility for outstation students, but local students can attend as day scholars."
    },
    {
      question: "Do you provide recognized certification?",
      answer: "Yes, all our courses come with certificates recognized by major Islamic boards and institutions across the country."
    }
  ];

 

  return (
    <div className=" ">

        
      {/* Hero Section */}
      <section className="relative rounded-2xl mt-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Courses
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore the programs we offer to nurture both faith and intellect
          </p>
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl">
              <p className="text-lg leading-relaxed">
                From Quranic memorization to comprehensive Islamic scholarship, 
                discover the perfect educational path for your spiritual and academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <CourseCate/>
      

      {/* Why Choose Our Courses */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-lg text-gray-600">
              Excellence in Islamic education with modern teaching methodologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-medium">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos of Classes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Classes in Action
            </h2>
            <p className="text-lg text-gray-600">
              See our students and teachers in their learning environment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-100 rounded-xl p-8 text-center">
              <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <p className="text-gray-800 font-medium">Quran Classes</p>
              <p className="text-gray-600 text-sm mt-2">Students learning with dedication</p>
            </div>
            <div className="bg-teal-100 rounded-xl p-8 text-center">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <p className="text-gray-800 font-medium">Group Studies</p>
              <p className="text-gray-600 text-sm mt-2">Collaborative learning environment</p>
            </div>
            <div className="bg-yellow-100 rounded-xl p-8 text-center">
              <GraduationCap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <p className="text-gray-800 font-medium">Graduation Day</p>
              <p className="text-gray-600 text-sm mt-2">Celebrating achievements</p>
            </div>
            <div className="bg-emerald-100 rounded-xl p-8 text-center">
              <Building className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <p className="text-gray-800 font-medium">Campus Life</p>
              <p className="text-gray-600 text-sm mt-2">Modern facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our courses
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CoursesPage;