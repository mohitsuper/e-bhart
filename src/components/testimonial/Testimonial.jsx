import React from 'react'
import { FaUserAlt } from "react-icons/fa";


export default function Testimonial() {
  return (
    <div className='container mx-auto my-5 px-3 sm:px-0'>
            <div className='text-center my-5'>
                <h1 className='font-bold'>Testimonial</h1>
                <p className='font-bold text-[#555]'>what our <span className='text-pink-500'>customers</span> are saying</p>
            </div>   
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
            <div className=' p-5 text-center rounded-md'>
                <FaUserAlt   className='w-full text-[3rem] text-pink-500 mb-3'/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                <p className="text-gray-500">Senior Product Designer</p>

            </div>
            <div className=' p-5 text-center rounded-md'>
                <FaUserAlt   className='w-full text-[3rem] text-pink-500 mb-3'/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                <p className="text-gray-500">Senior Product Designer</p>

            </div>
            <div className=' p-5 text-center rounded-md'>
                <FaUserAlt   className='w-full text-[3rem] text-pink-500 mb-3'/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                <p className="text-gray-500">Senior Product Designer</p>

            </div>
       
       
     </div>
</div>
  )
}
