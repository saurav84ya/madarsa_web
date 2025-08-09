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

export default function page() {

      const teachers = [
    {
      name: "Maulana Imran Khan",
      expertise: "15+ years teaching Tafsir & Hadith",
      specialty: "Known for student mentorship",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Maulana Abdul Rahman",
      expertise: "12+ years Quranic Studies",
      specialty: "Expert in Tajweed",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Ustaz Fatima Sheikh",
      expertise: "10+ years Islamic Studies",
      specialty: "Girls section coordinator",
      image: "/api/placeholder/150/150"
    }
   ]; 

  const facilities = [
    { icon: Users, title: "Separate Classes", desc: "Boys & Girls sections" },
    { icon: Library, title: "Library", desc: "Comprehensive Islamic & Academic books" },
    { icon: Building, title: "Prayer Halls", desc: "Spacious halls for daily prayers" },
    { icon: Monitor, title: "Computer Lab", desc: "Modern IT facilities" },
    { icon: Home, title: "Hostel", desc: "Safe accommodation" },
    { icon: Droplets, title: "Clean Water", desc: "Pure drinking water & hygiene" }
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
      <section className=" my-5 rounded-2xl relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6
                          ">
            About Madrasah Islamia Arabia Quran Memorization
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
    </div>
  )
}
