import React from 'react'
import Layout from '../../components/layout/Layout'
import { useLocation } from 'react-router-dom'
import { productData } from '../../components/Products/ProductData';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
export default function Productinfo() {
 let Location = useLocation();
 let id = Location.pathname.split('/')[2];
 let filter = productData.filter((v)=>v.id == id)[1];
  return (
   <Layout>

    <div className='container-2xl mx-auto my-5'>
      <h1 className='text-center text-2xl font-bold my-5 '>product information</h1>
       <div className='container mx-auto flex xl:flex-row  sm:flex-row flex-col  px-3 gap-4 justify-center'>
           <div className='w-auto basis-[40%]'>
               <img src={filter.image} className='w-full h-[400px]' alt="nn" /> 
               
           </div>
           <div className=' w-auto basis-[60%] p-2   gap-5 flex flex-col'>
            <h1 className=' text-xl font-[600] text-[#444]  '>{filter.title}</h1>
            <p className='text-[1.2rem] font-light text-[#666] text-uppercase'>man's fanshion t shrit</p>
            <h2 className='text-[#333] font-bold'>₹{filter.price}</h2>
            <div className='dec text-xl font-semibold'>product discribtion</div>
            <p className=''>{filter.desc}</p>
            <Button className='bg-pink-500 hover:bg-pink-200 duration-500'>
            <Link to={`/cart/${filter.id}`}>Add to card</Link> </Button>
           </div>

       </div>
    </div>
   </Layout>
  )
}
