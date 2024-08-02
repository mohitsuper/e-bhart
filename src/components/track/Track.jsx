import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";


export default function Track() {
  return (
    <div className='container mx-auto my-5 px-3 sm:px-0'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
          <div className='bg-[#eee] p-5 text-center rounded-md'>
             <AiOutlineShopping  className='w-full text-[3rem] text-pink-500 mb-3'/>
             <p>Premium Tshirt</p>
             <p>Our T-Shrit 100% made of cotton.</p>
          </div>
          <div className='bg-[#eee] p-5 text-center rounded-md'>
             <AiOutlineShopping  className='w-full text-[3rem] text-pink-500 mb-3'/>
             <p>Premium Tshirt</p>
             <p>Our T-Shrit 100% made of cotton.</p>
          </div>
          <div className='bg-[#eee] p-5 text-center rounded-md'>
             <AiOutlineShopping  className='w-full text-[3rem] text-pink-500 mb-3'/>
             <p>Premium Tshirt</p>
             <p>Our T-Shrit 100% made of cotton.</p>
          </div>

        </div>
    </div>
  )
}
