
'use client'

import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  Users, 
  Calendar,
  Upload,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  GraduationCap,
  Home,
  Award,
  Clock,
  User,
  Building,
  Heart,
  Star,
  Download,
  AlertCircle,
  BookOpen,
  Target,
  Shield,
  Zap
} from 'lucide-react';
export default function TabSection() {

      const [formData, setFormData] = useState({
        fullName: '',
        guardianName: '',
        dateOfBirth: '',
        courseApplying: '',
        phoneNumber: '',
        address: '',
        email: '',
        previousSchool: '',
        hostelRequired: false
      });
      const [submitted, setSubmitted] = useState(false);
      const [activeTab, setActiveTab] = useState('process');
    
      const steps = [
        {
          number: "01",
          title: "Online Application",
          description: "Fill our comprehensive online form with accurate details",
          icon: FileText,
          time: "10 minutes"
        },
        {
          number: "02", 
          title: "Document Submission",
          description: "Upload or submit required documents for verification",
          icon: Upload,
          time: "1 day"
        },
        {
          number: "03",
          title: "Assessment Test",
          description: "Take entrance test based on your chosen course",
          icon: GraduationCap,
          time: "2 hours"
        },
        {
          number: "04",
          title: "Personal Interview",
          description: "Meet with our admission committee and course coordinators",
          icon: Users,
          time: "30 minutes"
        },
        {
          number: "05",
          title: "Final Confirmation",
          description: "Receive admission letter and complete enrollment",
          icon: CheckCircle,
          time: "Same day"
        }
      ];
    
      const eligibilityData = [
        {
          course: "Hifz-e-Quran Program",
          age: "6-16 years",
          requirements: "Basic Arabic reading",
          duration: "2-4 years",
          icon: "📖",
          color: "emerald"
        },
        {
          course: "Aalim Course",
          age: "12+ years", 
          requirements: "Nazra & Tajweed completion",
          duration: "6-8 years",
          icon: "🕌",
          color: "teal"
        },
        {
          course: "Nazra Quran",
          age: "All ages",
          requirements: "No prerequisites",
          duration: "1-2 years",
          icon: "🎓",
          color: "yellow"
        },
        {
          course: "Tajweed Course",
          age: "12+ years",
          requirements: "Basic Quran reading",
          duration: "6 months",
          icon: "🧠",
          color: "emerald"
        }
      ];
    
      const documentsGrid = [
        { icon: User, title: "Identity Proof", desc: "Aadhaar Card / Valid ID", required: true },
        { icon: FileText, title: "Academic Records", desc: "Previous marksheets", required: true },
        { icon: Calendar, title: "Age Proof", desc: "Birth certificate", required: true },
        { icon: Upload, title: "Photographs", desc: "2 passport size photos", required: true },
        { icon: Shield, title: "Guardian ID", desc: "Parent/Guardian ID proof", required: true },
        { icon: Heart, title: "Medical Certificate", desc: "For hostel students", required: false }
      ];
    
      const timelineEvents = [
        { date: "15 Mar", event: "Admission Opens", status: "active" },
        { date: "15 Apr", event: "Entrance Test", status: "upcoming" },
        { date: "20-25 Apr", event: "Interviews", status: "upcoming" },
        { date: "30 Apr", event: "Last Date", status: "deadline" },
        { date: "5 May", event: "Orientation", status: "upcoming" }
      ];
    
      const courses = [
        "Hifz-e-Quran Program",
        "Aalim Course (Dars-e-Nizami)", 
        "Nazra Quran",
        "Tajweed Course",
        "Modern Education",
        "Weekend Islamic Classes"
      ];
    
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
      const handleSubmit = () => {
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      };
    
      const getStatusColor = (status) => {
        switch(status) {
          case 'active': return 'bg-emerald-500 text-white';
          case 'deadline': return 'bg-red-500 text-white';
          case 'upcoming': return 'bg-gray-300 text-gray-700';
          default: return 'bg-gray-300 text-gray-700';
        }
      };
    
      
  return (
    <div>



       {/* Tab Navigation */}
      <section className="py-8 rounded-2xl mt-4 bg-white shadow-lg   sticky top-18 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'process', label: 'Admission Process', icon: Target },
              { id: 'eligibility', label: 'Eligibility', icon: CheckCircle },
              { id: 'documents', label: 'Documents', icon: FileText },
              { id: 'dates', label: 'Important Dates', icon: Calendar },
              { id: 'apply', label: 'Apply Now', icon: ChevronRight }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex cursor-pointer items-center px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-emerald-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>




      {/* Dynamic Content Based on Active Tab */}
      <div className="py-16">
        {/* Admission Process Tab */}
        {activeTab === 'process' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Simple 5-Step Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;ve streamlined our admission process to make it as smooth as possible for students and parents
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 transform translate-x-4"></div>
                  )}
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">{step.number}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Eligibility Tab */}
        {activeTab === 'eligibility' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Course Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Find the perfect course that matches your background and aspirations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {eligibilityData.map((course, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-l-4 ${
                  course.color === 'emerald' ? 'border-emerald-500' : 
                  course.color === 'teal' ? 'border-teal-500' : 'border-yellow-500'
                }`}>
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{course.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{course.course}</h3>
                      <p className="text-gray-600">Duration: {course.duration}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700"><strong>Age Group:</strong> {course.age}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700"><strong>Requirements:</strong> {course.requirements}</span>
                    </div>
                  </div>

                  <button className={`mt-6 w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    course.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' :
                    course.color === 'teal' ? 'bg-teal-50 text-teal-700 hover:bg-teal-100' : 
                    'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                  }`}>
                    Apply for this Course
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600">
                Prepare these documents for a smooth admission process
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {documentsGrid.map((doc, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg ${doc.required ? 'bg-emerald-100' : 'bg-gray-100'} mr-4`}>
                      <doc.icon className={`w-6 h-6 ${doc.required ? 'text-emerald-600' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="font-bold text-gray-900">{doc.title}</h3>
                        {doc.required && (
                          <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Required</span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{doc.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4">Document Submission Guidelines</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-amber-700">
                    <div>
                      <h4 className="font-semibold mb-2">✓ What to bring:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Original documents for verification</li>
                        <li>• One photocopy of each document</li>
                        <li>• Documents in a transparent folder</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">✗ Important notes:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Incomplete applications will be rejected</li>
                        <li>• Ensure all copies are clear and readable</li>
                        <li>• Documents in regional languages need translation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Important Dates Tab */}
        {activeTab === 'dates' && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Admission Timeline
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with important dates and deadlines
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-teal-300 to-emerald-300"></div>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-lg ${getStatusColor(event.status)}`}>
                      {event.date}
                    </div>
                    <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1 hover:shadow-2xl transition-all">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">{event.event}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          event.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                          event.status === 'deadline' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {event.status === 'active' ? 'Now Open' : 
                           event.status === 'deadline' ? 'Deadline' : 'Upcoming'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Don&apos;t Miss Out!</h3>
              <p className="text-emerald-700 mb-6">
                Set reminders for these important dates to ensure you don&apos;t miss any deadlines.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Add to Calendar
              </button>
            </div>
          </section>
        )}

        {/* Apply Now Tab */}
        {activeTab === 'apply' && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Online Application
              </h2>
              <p className="text-xl text-gray-600">
                Take the first step towards your educational journey
              </p>
            </div>

            {submitted && (
              <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mr-4" />
                  <div>
                    <h3 className="text-lg font-bold text-green-800">Application Submitted Successfully! 🎉</h3>
                    <p className="text-green-700">We&apos;ll contact you within 2-3 working days with next steps.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Student&apos;s Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Guardian&apos;s Name *
                  </label>
                  <input
                    type="text"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Enter guardian's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Course Selection *
                  </label>
                  <select
                    name="courseApplying"
                    value={formData.courseApplying}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Choose your course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Complete Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your complete residential address..."
                ></textarea>
              </div>

              <div className="mt-8 flex items-center">
                <input
                  type="checkbox"
                  name="hostelRequired"
                  checked={formData.hostelRequired}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-emerald-600 border-2 border-gray-300 rounded focus:ring-emerald-500"
                />
                <span className="ml-3 text-gray-700 font-medium">I require hostel accommodation</span>
              </div>

              <div className="mt-12">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center text-lg"
                >
                  Submit Application
                  <ChevronRight className="w-6 h-6 ml-2" />
                </button>
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-emerald-50 rounded-xl p-6 text-center">
                <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-emerald-700">+91-9876543210</p>
              </div>
              <div className="bg-teal-50 rounded-xl p-6 text-center">
                <Mail className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-teal-700">admissions@madarsa.edu</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <MapPin className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Visit</h3>
                <p className="text-yellow-700">Campus Address</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
