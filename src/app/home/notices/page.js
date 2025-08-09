
'use client'
import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, Calendar, Bell, BookOpen, GraduationCap, Clock, Users, AlertCircle } from 'lucide-react';

const NoticeBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showArchive, setShowArchive] = useState(false);

  // Sample notices data
  const notices = [
    {
      id: 1,
      title: "Result Announcement - Hifz Course Exams",
      date: "2025-08-08",
      category: "Exam",
      description: "The results for Hifz course exams have been uploaded. Students may collect from the office or download PDF below.",
      isNew: true,
      isImportant: true,
      hasFile: true,
      fileName: "hifz_results_2025.pdf"
    },
    {
      id: 2,
      title: "Holiday on Eid-ul-Adha",
      date: "2025-08-07",
      category: "Holiday",
      description: "The madrasa will remain closed from 17th to 19th August 2025 on the occasion of Eid-ul-Adha. Classes will resume on 20th August.",
      isNew: true,
      isImportant: false,
      hasFile: false
    },
    {
      id: 3,
      title: "New Admissions Open for Academic Session 2025-26",
      date: "2025-08-05",
      category: "Academic",
      description: "Admissions are now open for Hifz, Nazra, and Islamic Studies courses. Last date for admission is 15th August 2025.",
      isNew: true,
      isImportant: true,
      hasFile: true,
      fileName: "admission_form_2025.pdf"
    },
    {
      id: 4,
      title: "Annual Sports Day Event",
      date: "2025-08-03",
      category: "Events",
      description: "Annual Sports Day will be held on 25th August 2025. All students are requested to participate actively.",
      isNew: false,
      isImportant: false,
      hasFile: false
    },
    {
      id: 5,
      title: "Monthly Test Schedule - September 2025",
      date: "2025-08-01",
      category: "Exam",
      description: "Monthly examination schedule has been finalized. Exams will commence from 2nd September 2025.",
      isNew: false,
      isImportant: false,
      hasFile: true,
      fileName: "exam_schedule_sep_2025.pdf"
    },
    {
      id: 6,
      title: "Parent-Teacher Meeting",
      date: "2025-07-28",
      category: "General",
      description: "Parent-teacher meeting scheduled for 15th August 2025 at 10:00 AM. All parents are requested to attend.",
      isNew: false,
      isImportant: false,
      hasFile: false
    }
  ];

  const categories = ['All', 'Academic', 'Events', 'Exam', 'Holiday', 'General'];

  // Filter notices based on search and category
  const filteredNotices = useMemo(() => {
    return notices.filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedFilter === 'All' || notice.category === selectedFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedFilter]);

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Academic':
        return <BookOpen className="w-5 h-5" />;
      case 'Exam':
        return <GraduationCap className="w-5 h-5" />;
      case 'Events':
        return <Users className="w-5 h-5" />;
      case 'Holiday':
        return <Clock className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  // Get days ago
  const getDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return formatDate(dateString);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notice Board
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest updates from Al-Noor Islamic Madrasa
          </p>
        </div>

        {/* Important Notice Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center space-x-3">
            <Bell className="w-6 h-6 animate-pulse" />
            <div>
              <h3 className="text-lg font-bold">Important Notice</h3>
              <p className="text-emerald-100">Admissions closing on 15th August 2025 - Apply now!</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white min-w-[150px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredNotices.length} of {notices.length} notices
          </div>
        </div>

        {/* Notice Cards Grid */}
        <div className="space-y-6">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                notice.isImportant ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <div className="p-6">
                {/* Notice Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start space-x-3 mb-3 md:mb-0">
                    <div className={`flex-shrink-0 p-2 rounded-lg ${
                      notice.category === 'Academic' ? 'bg-blue-100 text-blue-600' :
                      notice.category === 'Exam' ? 'bg-purple-100 text-purple-600' :
                      notice.category === 'Events' ? 'bg-green-100 text-green-600' :
                      notice.category === 'Holiday' ? 'bg-orange-100 text-orange-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {getCategoryIcon(notice.category)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {notice.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(notice.date)}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span>{getDaysAgo(notice.date)}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          notice.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                          notice.category === 'Exam' ? 'bg-purple-100 text-purple-800' :
                          notice.category === 'Events' ? 'bg-green-100 text-green-800' :
                          notice.category === 'Holiday' ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {notice.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex items-center space-x-2">
                    {notice.isNew && (
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Bell className="w-3 h-3" />
                        <span>NEW</span>
                      </span>
                    )}
                    {notice.isImportant && (
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        IMPORTANT
                      </span>
                    )}
                  </div>
                </div>

                {/* Notice Content */}
                <div className="mb-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {notice.description}
                  </p>
                </div>

                {/* Download Section */}
                {notice.hasFile && (
                  <div className="border-t pt-4">
                    <button className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download {notice.fileName}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No notices found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Archive Section */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="inline-flex items-center space-x-2 bg-white border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            <Clock className="w-5 h-5" />
            <span>{showArchive ? 'Hide Archive' : 'View Notice Archive'}</span>
          </button>
        </div>

        {/* WhatsApp Button */}
        <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;