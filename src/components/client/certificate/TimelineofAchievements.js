import React from 'react'

export default function TimelineofAchievements({timeline}) {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Timeline of Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Our journey of recognition and excellence over the years
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <span className="text-2xl font-bold text-emerald-600">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-emerald-600 rounded-full mt-2 mr-6"></div>
                <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
