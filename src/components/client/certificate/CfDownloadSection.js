import { Download } from 'lucide-react'
import React from 'react'

export default function CfDownloadSection() {
  return (
   <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Download Certificates
          </h2>
          <div className=" rounded-xl p-8">
            <Download className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <p className="text-lg text-gray-700 mb-8">
              Access digital copies of our certificates for verification or reference purposes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Individual Certificates
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download All (ZIP)
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
