import Link from 'next/link'
import React from 'react'

export default function HeaderMenuMobile({navLinksClasssName}) {
  return (
    <div className= ' fixed bg-white w-full rounded-b-xl ' >
        <hr />
      <div className=" flex flex-col md:px-5 md:py-5 pb-4 gap-3  ">
              <Link href="/" className={navLinksClasssName}>Home</Link>
              <Link href="/about" className={navLinksClasssName}>About</Link>
              <Link href="/courses" className={navLinksClasssName}>Courses</Link>
              <Link href="/admission" className={navLinksClasssName}>Admission</Link>
              <Link href="/gallery" className={navLinksClasssName}>Gallery</Link>
              <div className='text-center' >
              <Link href="/notices" className="bg-emerald-600  text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium" >Notices</Link>
              </div>
             {/* <div className='text-center' >
                 <Link href="/donation" className="bg-emerald-600  text-white px-4 py-2 rounded-lg hover:bg-emerald-700 font-medium">Donate</Link>
             </div> */}
            </div>
    </div>
  )
}
