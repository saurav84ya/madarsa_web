

import React from 'react';
import { 
  ChevronRight,
  Zap
} from 'lucide-react';
import TabSection from '@/components/client/admissionPage/TabSection';
import Link from 'next/link';

const AdmissionPage = () => {

  return (
    <div className="">
      {/* Hero Section with Floating Elements */}
      <section className=" rounded-2xl mt-5 relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white py-24">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Admissions Now Open
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Join Our
                <span className="block text-yellow-300">Journey</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
                Begin your path of faith and knowledge with us. Experience world-class Islamic education in a nurturing environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#down"  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center">
                  Apply Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-4 px-8 rounded-xl transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-emerald-200">Active Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">29</div>
                    <div className="text-emerald-200">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <div className="text-emerald-200">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">25+</div>
                    <div className="text-emerald-200">Expert Teachers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <TabSection/>




     



    </div>
  );
};

export default AdmissionPage;