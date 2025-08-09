'use client'
import { CircleX, Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import HeaderMenuMobile from './headerMenuMobile'

export default function Header() {

  const [open , setOpen] = useState(false)
   const menuRef = useRef(null);


    useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if clicked outside and menu is open
      if (open && menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const navLinksClasssName = "text-gray-700 text-center hover:text-emerald-600 px-3 py-2 font-medium"
  return (


     
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">


            <div className="flex items-center">
              

             <Link href='/home' >
              <div className="flex-shrink-0 flex  items-center">
                <div className="text-emerald-600 text-2xl font-bold">🕌</div>
                <span className="ml-2 text-lg md:text-xl font-bold text-gray-800">MIAQM</span>
              </div></Link>

            </div>

            {/* certificates */}
            
            <div className="hidden lg:flex items-center space-x-5">
              <Link href="/home" className={navLinksClasssName}>Home</Link>
              <Link href="/home/about" className={navLinksClasssName}>About</Link>
              <Link href="/home/certificates" className={navLinksClasssName}>Certificates</Link>

              <Link href="/home/courses" className={navLinksClasssName}>Courses</Link>
              <Link href="/home/admission" className={navLinksClasssName}>Admission</Link>
               <Link href="/home/gallery" className={navLinksClasssName}>Gallery</Link>
              <Link href="/home/notices" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium">Notices</Link>
              {/* <Link href="/donation" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium">Donate</Link> */}
            </div>

            {/* Mobile menu button */}
            <div 
              onClick={() => setOpen(!open) }
            className="lg:hidden flex items-center">
              <button className="text-gray-700 hover:text-emerald-600 cursor-pointer ">
                 { open ?<CircleX />    :   <Menu />}
              </button>
            </div>


          </div>

          <div  ref={menuRef} >
            <HeaderMenuMobile 
  navLinksClasssName="px-4 py-2 text-gray-700 font-medium" 
  open={open}  setOpen={setOpen}
/>
          </div>






        </div>
      </div>

  

  )
}
