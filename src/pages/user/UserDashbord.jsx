import React from 'react'
import Layout from '../../components/layout/Layout'
import Heading from '../../components/heading/Heading'
import SubHeading from '../../components/heading/SubHeading'
import UserInfo from './UserInfo'

export default function UserDashbord() {
let products = [
        {
            id: 1,
            name: 'Nike Air Force 1 07 LV8',
            imageSrc:
                'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
            href: '#',
            price: '₹61,999',
            color: 'Orange',
            imageAlt: 'Nike Air Force 1 07 LV8',
            quantity: 1,
        },
    ]

    console.log(products[0].id)
      
  return (
    <Layout>
        <div className='container mx-auto px-2 my-5'>
            <UserInfo/>
            <div className='flex flex-col'>
             <Heading title={"order Details"}/>
             <div className='border border-pink-500 rounded-md flex '>
                    <div className='flex flex-col bg-pink-50 p-[50px] gap-2 basis-[40%] border border-pink-500'>
                    <div className='mb-4'>
                                <SubHeading title={"order id"}/>
                                <div className="text-sm font-medium text-gray-900">₹84,499</div>
                            </div>
                            <div className="mb-4">
                                                    <div className="text-sm font-semibold">Total Amount</div>
                                                    <div className="text-sm font-medium text-gray-900">₹84,499</div>
                            </div>
                            <div className="mb-4">
                                <div className="text-sm font-semibold">Order Status</div>
                                <div className="text-sm font-medium text-green-800">Confirmed</div>
                            </div>
                    </div>
                    <div className='flex gap-5 p-5   w-full basis-[60%] flex-warp flex-col xl:flex-row'>
                     <img src={products[0].imageSrc} alt="" className='w-[5rem] h-[5rem]'/>
                     <div className='flex flex-col gap-2'>
                      <SubHeading title={products[0].name}/>
                      <p className='text-[#aaa]'>{products[0].color}</p>
                      <p className='text-[#aaa]'>&times;{products[0].quantity}</p>
                     </div>
                     <SubHeading title={products[0].price}/>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
