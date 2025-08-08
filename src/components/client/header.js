'use client'
import { CircleX, Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import HeaderMenuMobile from './headerMenuMobile'

export default function Header() {

  const [open , setOpen] = useState(false)

  const navLinksClasssName = "text-gray-700 text-center hover:text-emerald-600 px-3 py-2 font-medium"
  return (


     
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">


            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-emerald-600 text-2xl font-bold">🕌</div>
                <span className="ml-2 text-lg md:text-xl font-bold text-gray-800">MIAQM</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-5">
              <Link href="/" className={navLinksClasssName}>Home</Link>
              <Link href="/about" className={navLinksClasssName}>About</Link>
              <Link href="/courses" className={navLinksClasssName}>Courses</Link>
              <Link href="/admission" className={navLinksClasssName}>Admission</Link>
              <Link href="/gallery" className={navLinksClasssName}>Gallery</Link>
              <Link href="/notices" className={navLinksClasssName}>Notices</Link>
              <Link href="/donation" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium">Donate</Link>
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

<div className='flex lg:hidden  justify-center' >
  {
  open && <HeaderMenuMobile navLinksClasssName={navLinksClasssName} />
}
</div>


        </div>
      </div>

  

  )
}
