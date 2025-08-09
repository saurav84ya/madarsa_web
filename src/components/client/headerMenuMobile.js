import Link from 'next/link'
import React from 'react'

export default function HeaderMenuMobile({navLinksClasssName}) {
  return (
    <div className= ' fixed bg-white w-full rounded-b-xl ' >
        <hr />
      <div className=" flex flex-col md:px-5 md:py-5 pb-4 gap-3  ">
              <Link href="/home" className={navLinksClasssName}>Home</Link>
              <Link href="/home/about" className={navLinksClasssName}>About</Link>
              <Link href="/home/courses" className={navLinksClasssName}>Courses</Link>
              <Link href="/home/admission" className={navLinksClasssName}>Admission</Link>
              <Link href="/home/gallery" className={navLinksClasssName}>Gallery</Link>
              <div className='text-center' >
              <Link href="/home/notices" className="bg-emerald-600  text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium" >Notices</Link>
              </div>
             {/* <div className='text-center' >
                 <Link href="/donation" className="bg-emerald-600  text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium">Donate</Link>
             </div> */}
            </div>
    </div>
  )
}
