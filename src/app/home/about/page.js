import React from 'react'
import { 
  BookOpen, 
  Users, 
  Award, 
  Building2, 
  Heart, 
  Star, 
  GraduationCap, 
  Building,
  Library,
  Monitor,
  Home,
  Droplets,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {

  const about1 =  '/about1.jpg'
const teachers = [
  {
    name: "Maulana Imran Khan",
    expertise: "15+ years teaching Tafsir & Hadith",
    specialty: "Known for student mentorship",
    image: "/teacher1.jpg" // replace with your actual image paths
  },
  {
    name: "Maulana Abdul Rahman",
    expertise: "12+ years Quranic Studies",
    specialty: "Expert in Tajweed",
    image: "/teacher2.jpg"
  },
  {
    name: "Ustaz Fatima Sheikh",
    expertise: "10+ years Islamic Studies",
    specialty: "Girls section coordinator",
    image: "/teacher3.jpg"
  },
  {
    name: "Ustazah Aisha Mohamed",
    expertise: "8+ years Fiqh & Islamic Law",
    specialty: "Women's spiritual counseling",
    image: "/teacher4.jpg"
  },
  {
    name: "Maulana Yusuf Ibrahim",
    expertise: "20+ years Seerah & Islamic History",
    specialty: "Public speaker & lecturer",
    image: "/teacher5.jpg"
  },
  {
    name: "Ustaz Hamza Abdullah",
    expertise: "5+ years Arabic Language",
    specialty: "Quran memorization specialist",
    image: "/teacher6.jpg"
  }
];

  const facilities = [
    { icon: "👤", title: "Separate Classes", desc: "Boys & Girls sections" },
    { icon: "📚", title: "Library", desc: "Comprehensive Islamic & Academic books" },
    { icon: "🏠", title: "Prayer Halls", desc: "Spacious halls for daily prayers" },
    { icon: "💻", title: "Computer Lab", desc: "Modern IT facilities" },
     { icon: "💧", title: "Clean Water", desc: "Pure drinking water & hygiene" },
    { icon: "🏡", title: "Hostel", desc: "Safe accommodation" }
   
  ];

  const objectives = [
    "Teach Quran with proper Tajweed",
    "Provide quality academic education",
    "Instill strong moral values",
    "Help students become good citizens",
    "Promote interfaith harmony"
  ];

  const achievements = [
    "200+ students have become Hafiz",
    "150+ Alim graduates serving communities",
    "50+ students pursuing higher education",
    "Excellence in annual Quran competitions"
  ];
  return (
    <div>
  {/* Hero Section */}
      <section className="relative rounded-2xl mt-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Madarsa Al-Hikmah
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A place where faith meets education 🌙📚
          </p>
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl">
              <p className="text-lg leading-relaxed">
                Nurturing minds, building character, and fostering Islamic values 
                in a modern educational environment since 1995.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Brief History */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Our Journey
                    </h2>
                    <div className="space-y-4 text-lg text-gray-600">
                      <p>
                        Our Madarsa was founded in 1995 with the goal to provide quality 
                        Islamic and academic education in the heart of our community.
                      </p>
                      <p>
                        Started by the visionary Maulana Abdullah Ahmed, who recognized 
                        the need for an institution that bridges traditional Islamic 
                        education with modern academic excellence.
                      </p>
                      <p>
                        Over nearly three decades, we have grown from a small classroom 
                        of 20 students to a thriving institution serving over 500 students, 
                        with graduates serving communities worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="bg-emerald-100 rounded-xl p-8 text-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-lg">
                        <div className="text-3xl font-bold text-emerald-600">29</div>
                        <div className="text-gray-600">Years of Service</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-lg">
                        <div className="text-3xl font-bold text-emerald-600">500+</div>
                        <div className="text-gray-600">Students</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-lg">
                        <div className="text-3xl font-bold text-emerald-600">1000+</div>
                        <div className="text-gray-600">Graduates</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-lg">
                        <div className="text-3xl font-bold text-emerald-600">25+</div>
                        <div className="text-gray-600">Teachers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Mission & Vision
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                    <div className="flex items-center mb-6">
                      {/* <Heart className="w-12 h-12 text-emerald-600 mr-4" /> */}

                        <h1 className='text-4xl' >💖</h1>

                      <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      To nurture faith, knowledge, and character in every student, 
                      creating well-rounded individuals who contribute positively 
                      to society while staying true to Islamic values.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                    <div className="flex items-center mb-6">
                      {/* <Star className="w-12 h-12 text-emerald-600 mr-4" /> */}
                       <h1 className='text-4xl' >⭐</h1>
                      <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      To be a beacon of Islamic and modern education, empowering 
                      young minds to lead meaningful lives and become future 
                      leaders of our ummah.
                    </p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Objectives */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Objectives
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We are committed to achieving excellence in every aspect of education
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {objectives.map((objective, index) => (
                    <div key={index} className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-800 font-medium">{objective}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Meet Our Teachers */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Meet Our Teachers
                  </h2>
                  <p className="text-lg text-gray-600">
                    Dedicated scholars committed to nurturing the next generation
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {teachers.map((teacher, index) => (
    <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-emerald-100">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
      <p className="text-emerald-600 font-medium mb-2">📖 {teacher.expertise}</p>
      <p className="text-gray-600">🏆 {teacher.specialty}</p>
    </div>
  ))}
</div>
              </div>
            </section>
      
            {/* Infrastructure */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Facilities
                  </h2>
                  <p className="text-lg text-gray-600">
                    Modern infrastructure designed for holistic learning
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {facilities.map((facility, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                      {/* <facility.icon className="w-12 h-12 text-emerald-600 mb-4" /> */}


                       <div className='flex gap-2 items-center  justify-center' >
                        <h1 className='text-4xl' >{facility.icon}</h1>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                       </div>


                      <p className="text-gray-600 text-center">{facility.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Achievements */}
            <section className="py-16 bg-emerald-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Achievements
                  </h2>
                  <p className="text-lg text-gray-600">
                    Success stories that inspire us to do better every day
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center hover:shadow-2xl transition-shadow">
                      <Award className="w-8 h-8 text-yellow-500 mr-4 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-lg text-gray-700 italic">
                    &quot;Our students have gone on to become Hafiz, Alims, and professionals in different fields, 
                    making positive contributions to society while upholding Islamic values.&quot;
                  </p>
                </div>
              </div>
            </section>
      
            {/* Message from Principal */}
            <section className="py-16 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white p-8 md:p-12 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Message from the Principal
                  </h2>
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                    &quot;We believe in holistic growth that encompasses spiritual, intellectual, 
                    and moral development. Every child who enters our doors is not just a 
                    student, but a future leader of our ummah. We invite you to be a part 
                    of our family and join us in this noble mission of education and 
                    character building.&quot;
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold">Maulana Abdullah Ahmed</p>
                    <p className="text-emerald-200">Principal, Madarsa Al-Hikmah</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Gallery Preview */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Life at Our Madarsa
                  </h2>
                  <p className="text-lg text-gray-600">
                    Glimpses of our vibrant learning community
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-emerald-100 rounded-xl p-8 text-center">
                    <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-800 font-medium">Classrooms</p>
                  </div>
                  <div className="bg-emerald-100 rounded-xl p-8 text-center">
                    <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-800 font-medium">Students Learning</p>
                  </div>
                  <div className="bg-emerald-100 rounded-xl p-8 text-center">
                    <Building className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-800 font-medium">Prayer Time</p>
                  </div>
                  <div className="bg-emerald-100 rounded-xl p-8 text-center">
                    <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-800 font-medium">Special Events</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Call to Action */}
            <section className="py-16 rounded-2xl mb-5 bg-emerald-600">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Join Our Educational Family
                </h2>
                <p className="text-xl text-emerald-100 mb-8">
                  Discover how we can help your child grow in faith, knowledge, and character
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href='/home/admission'  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors">
                    Apply Now
                  </Link>
                  <a className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-3 px-8 rounded-lg transition-colors">
                   📍 Visit Campus
                  </a>
                </div>
              </div>
            </section>



    </div>
  )
}
