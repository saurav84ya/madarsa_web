import Link from 'next/link'
import React from 'react'

export default function HeaderMenuMobile({ navLinksClasssName, open,setOpen }) {
  return (
    <div className={`
      fixed top-16 left-0 right-0 bg-white shadow-lg z-50 rounded-2xl
      transition-all duration-300 ease-in-out transform
      ${open ? 
        'translate-y-0 opacity-100 visible' : 
        '-translate-y-4 opacity-0 invisible'
      }
      overflow-hidden
    `}>
      {/* Decorative top border */}
      <div className="border-t border-gray-100 w-full"></div>
      
      <div className="flex flex-col px-5  items-center py-4 gap-3">
        <Link 
          onClick={() => setOpen(false)}
          href="/home" 
          className={`${navLinksClasssName} transition-colors duration-200 hover:text-emerald-600`}
        >
          Home
        </Link>
        
        <Link 
        onClick={() => setOpen(false)}
          href="/home/about" 
          className={`${navLinksClasssName} transition-colors duration-200 hover:text-emerald-600`}
        >
          About
        </Link>
        
        <Link 
        onClick={() => setOpen(false)}
          href="/home/courses" 
          className={`${navLinksClasssName} transition-colors duration-200 hover:text-emerald-600`}
        >
          Courses
        </Link>
        
        <Link 
        onClick={() => setOpen(false)}
          href="/home/admission" 
          className={`${navLinksClasssName} transition-colors duration-200 hover:text-emerald-600`}
        >
          Admission
        </Link>
        
        <Link 
        onClick={() => setOpen(false)}
          href="/home/gallery" 
          className={`${navLinksClasssName} transition-colors duration-200 hover:text-emerald-600`}
        >
          Gallery
        </Link>
        
        <div className="pt-2">
          <Link 
          onClick={() => setOpen(false)}
            href="/home/notices" 
            className="
              block w-full text-center bg-emerald-600 text-white 
              px-4 py-2 rounded-lg hover:bg-emerald-700 
              font-medium transition-colors duration-200
              shadow-md hover:shadow-lg
            "
          >
            Notices
          </Link>
        </div>
        
        {/*
        <div className="pt-2">
          <Link 
            href="/donation" 
            className="
              block w-full text-center bg-emerald-600 text-white 
              px-4 py-2 rounded-lg hover:bg-emerald-700 
              font-medium transition-colors duration-200
              shadow-md hover:shadow-lg
            "
          >
            Donate
          </Link>
        </div>
        */}
      </div>
    </div>
  )
}