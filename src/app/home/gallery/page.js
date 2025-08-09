
'use client'
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Play,
  Calendar,
  Users,
  Utensils,
  Building2,
  Camera,
  Heart,
  Star,
  MapPin,
  Clock
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);

  // Sample gallery data - in real app, this would come from API
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400',
      category: 'campus',
      title: 'Main Campus Building',
      caption: 'Our beautiful main building where students learn and grow',
      date: '2024-01-15'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      category: 'student-activities',
      title: 'Quran Recitation Class',
      caption: 'Students during their daily Quran recitation session',
      date: '2024-01-20'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1544531586-fbb6cf2d2bc8?w=400',
      category: 'events',
      title: 'Annual Islamic Conference',
      caption: 'Scholars and students gathered for our annual conference',
      date: '2024-02-05'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400',
      category: 'hostel',
      title: 'Hostel Dining Hall',
      caption: 'Students enjoying their meals together',
      date: '2024-01-18'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
      category: 'infrastructure',
      title: 'Library Section',
      caption: 'Well-stocked library with Islamic literature',
      date: '2024-01-25'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      category: 'campus',
      title: 'Prayer Hall',
      caption: 'Peaceful prayer hall for daily congregational prayers',
      date: '2024-01-12'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400',
      category: 'student-activities',
      title: 'Calligraphy Workshop',
      caption: 'Students learning the beautiful art of Arabic calligraphy',
      date: '2024-02-01'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
      category: 'events',
      title: 'Graduation Ceremony',
      caption: 'Celebrating our Hafiz graduates',
      date: '2024-02-10'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      category: 'hostel',
      title: 'Hostel Rooms',
      caption: 'Comfortable accommodation for our students',
      date: '2024-01-22'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400',
      category: 'infrastructure',
      title: 'Computer Lab',
      caption: 'Modern computer lab for digital learning',
      date: '2024-01-30'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1544531586-fbb6cf2d2bc8?w=400',
      category: 'events',
      title: 'Ramadan Iftar',
      caption: 'Community Iftar during the holy month of Ramadan',
      date: '2024-03-15'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400',
      category: 'student-activities',
      title: 'Sports Day',
      caption: 'Annual sports competition among students',
      date: '2024-02-20'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: Camera, count: galleryImages.length },
    { id: 'campus', label: 'Campus Life', icon: Building2, count: galleryImages.filter(img => img.category === 'campus').length },
    { id: 'events', label: 'Events & Celebrations', icon: Calendar, count: galleryImages.filter(img => img.category === 'events').length },
    { id: 'student-activities', label: 'Student Activities', icon: Users, count: galleryImages.filter(img => img.category === 'student-activities').length },
    { id: 'hostel', label: 'Hostel & Food', icon: Utensils, count: galleryImages.filter(img => img.category === 'hostel').length },
    { id: 'infrastructure', label: 'Infrastructure', icon: Building2, count: galleryImages.filter(img => img.category === 'infrastructure').length }
  ];

  const videoGallery = [
    {
      id: 1,
      title: 'A Day at Our Madarsa',
      thumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400',
      duration: '3:45',
      description: 'Experience a typical day in the life of our students'
    },
    {
      id: 2,
      title: 'Graduation Ceremony Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
      duration: '5:20',
      description: 'Celebrating our Hafiz graduates and their achievements'
    },
    {
      id: 3,
      title: 'Campus Tour',
      thumbnail: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400',
      duration: '4:15',
      description: 'Virtual tour of our beautiful campus facilities'
    }
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(filteredImages[prevIndex]);
  };

  const downloadImage = () => {
    if (lightboxImage) {
      const link = document.createElement('a');
      link.href = lightboxImage.src;
      link.download = `${lightboxImage.title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
  
      {/* Hero Section */}
      <section className="bg-gradient-to-r mt-5 rounded-2xl from-emerald-600 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gallery – A Glimpse Into Our Madarsa
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Experience the essence of learning, worship, and community in frames.
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5" />
              <span>{galleryImages.length}+ Photos</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>{videoGallery.length} Videos</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-emerald-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all font-semibold ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      {formatDate(image.date)}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{image.caption}</p>
                  <div className="flex items-center mt-3 text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{formatDate(image.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">No images found in this category</p>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </section>

        {/* Video Gallery */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Video Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Watch highlights from our campus life and special events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoGallery.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors cursor-pointer">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Gallery Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">{galleryImages.length}+</div>
              <div className="text-white/80">Total Photos</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">{videoGallery.length}</div>
              <div className="text-white/80">Videos</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-white/80">Categories</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">2024</div>
              <div className="text-white/80">Latest Updates</div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Download button */}
            <button
              onClick={downloadImage}
              className="absolute top-4 right-16 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Download className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="text-center">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4 text-white">
                <h3 className="text-xl font-bold mb-2">{lightboxImage.title}</h3>
                <p className="text-white/80 mb-2">{lightboxImage.caption}</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-white/60">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{formatDate(lightboxImage.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Camera className="w-4 h-4" />
                    <span>{lightboxIndex + 1} of {filteredImages.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;