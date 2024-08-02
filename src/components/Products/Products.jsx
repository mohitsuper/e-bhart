import React from 'react'
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { productData } from './ProductData';
export default function Products() {
  return (
    <div>
        <div className='container-2xl px-3'>
            <h1 className='text-xl text-center w-full my-3 font-semibold'>Best Products</h1>
             <div className='container  mx-auto grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
              {
                productData.map((v,i)=>
                {
                   return(
                    <Card v={v} key={i}/>
                   )
                } 
              ) 
              }
             </div>
        </div>
    </div>
  )
}



function Card({v,i}){
    const {image,title,trendingProductName,desc,price,id} = v;
           
      return(
        <Link to={`/productinfo/${id}`} >
        <div className='flex flex-col w-auto h-auto  rounded-md shadow' key={i}>
        <div className=' flex basis-[60%] h-auto  border rounded-md'>
              <img src={image} alt="" className='w-full h-full ' />
        </div>
        <div className='flex basis-[40%] flex-col p-4'>
            <span className='text-[.7rem] textx-[#aaa]'>{trendingProductName}</span>
            <h1 className='font-bold'>{title.slice(0,10)}</h1>
            <p className='text-[.8rem]'>{desc.slice(0,70)}</p>
            <p className='font-semibold text-[#444]'>&#8377; {price}</p>
            <Button className='bg-pink-500 hover:bg-pink-200 duration-500'>
              <Link to={`/cart/${id}`}>Add to card</Link> </Button>
        </div>
  </div>
  </Link>

 )
}

