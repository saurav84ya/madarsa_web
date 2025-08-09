
'use client'
import React, { useState } from 'react';
import { 
  Award, 
  Download, 
  Calendar, 
  Star, 
  BookOpen, 
  Users, 
  Heart, 
  Phone, 
  Mail, 
  MapPin,
  X,
  Filter,
  ZoomIn,
  ChevronRight
} from 'lucide-react';
import FeaturedCertifications from '@/components/client/certificate/FeaturedCertifications';
import TimelineofAchievements from '@/components/client/certificate/TimelineofAchievements';
import CfDownloadSection from '@/components/client/certificate/CfDownloadSection';
import LightBoxImage from '@/components/client/certificate/LightBoxImage';

const CertificationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Sample certificate data
  const certificates = [
    {
      id: 1,
      title: "Excellence in Islamic Education",
      authority: "Ministry of Education",
      year: 2023,
      category: "government",
      description: "Recognition for outstanding contribution to Islamic education",
      image: "/api/placeholder/400/300",
      featured: true
    },
    {
      id: 2,
      title: "Best Community Service Award",
      authority: "Bihar Education Board",
      year: 2023,
      category: "community",
      description: "Awarded for exceptional community outreach programs",
      image: "/api/placeholder/400/300",
      featured: true
    },
    {
      id: 3,
      title: "Academic Excellence Recognition",
      authority: "Islamic Education Council",
      year: 2022,
      category: "academic",
      description: "Outstanding academic performance of students",
      image: "/api/placeholder/400/300",
      featured: true
    },
    {
      id: 4,
      title: "Quality Education Certificate",
      authority: "State Quality Council",
      year: 2022,
      category: "academic",
      description: "Certification for maintaining high educational standards",
      image: "/api/placeholder/400/300",
      featured: false
    },
    {
      id: 5,
      title: "Religious Education Excellence",
      authority: "All India Islamic Council",
      year: 2021,
      category: "religious",
      description: "Recognition for exceptional Quranic education",
      image: "/api/placeholder/400/300",
      featured: false
    },
    {
      id: 6,
      title: "Community Development Award",
      authority: "District Administration",
      year: 2021,
      category: "community",
      description: "For significant contribution to community development",
      image: "/api/placeholder/400/300",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certificates', icon: Award },
    { id: 'academic', name: 'Academic Excellence', icon: BookOpen },
    { id: 'government', name: 'Government Recognition', icon: Award },
    { id: 'community', name: 'Community Service', icon: Users },
    { id: 'religious', name: 'Religious Achievements', icon: Star }
  ];

  const timeline = [
    { year: 2023, title: "Excellence in Islamic Education", reason: "Outstanding contribution to Islamic education" },
    { year: 2023, title: "Best Community Service Award", reason: "Exceptional community outreach programs" },
    { year: 2022, title: "Academic Excellence Recognition", reason: "Outstanding academic performance of students" },
    { year: 2022, title: "Quality Education Certificate", reason: "Maintaining high educational standards" },
    { year: 2021, title: "Religious Education Excellence", reason: "Exceptional Quranic education" },
    { year: 2021, title: "Community Development Award", reason: "Significant contribution to community development" }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);



  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Header Section */}
      <div className="bg-gradient-to-r rounded-2xl mt-5 from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Achievements & Certifications
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Recognizing our journey of knowledge, faith, and excellence
          </p>
        </div>
      </div>

      {/* Featured Certifications */}
      <FeaturedCertifications certificates={certificates}   openLightbox = {openLightbox} />
      



      {/* Certification Categories & Gallery */}
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
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                    selectedCategory === category.id
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








      {/* About Our Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            About Our Certifications
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These certifications represent our unwavering commitment to excellence in Islamic education and community service. 
              Each award reflects the dedication of our teachers, the achievements of our students, and our continuous efforts 
              to maintain the highest standards of education while staying true to our Islamic values.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The rigorous process of obtaining these certifications involves thorough evaluations of our curriculum, 
              teaching methodologies, student outcomes, and community impact. They serve as a testament to our mission 
              of nurturing knowledgeable, faithful, and contributing members of society.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <CfDownloadSection/>

      {/* Timeline of Achievements */}
      <TimelineofAchievements timeline ={timeline} />

      {/* Contact for Verification */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Contact for Verification
          </h2>
          <div className=" rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-8">
              If you wish to verify any of our certificates, please contact our administration office:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                <p className="text-gray-600">9999XXXXXX</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">madarsa@email.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                <p className="text-gray-600">Madrasa Address, Patna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proud of our journey? Support us in achieving more milestones.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your support helps us continue our mission of excellence in Islamic education
          </p>
          <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Donate to Support Education
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section> */}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <LightBoxImage closeLightbox={closeLightbox}  lightboxImage= {lightboxImage} />
      )}

      {/* WhatsApp Floating Button */}
      {/* <a 
        href="https://wa.me/919999XXXXXX" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone className="w-6 h-6" />
      </a> */}
    </div>
  );
};

export default CertificationPage;