import React from 'react'
import Layout from '../../components/layout/Layout'
import Heading from '../../components/heading/Heading'
import UserInfo from '../user/UserInfo'
import { GiShoppingBag } from "react-icons/gi";
import SubHeading from '../../components/heading/SubHeading';
import ProductDetail from './ProductDetail';


export default function AdminDashboard() {
  return (
    <Layout>
        <div className="container mx-auto ">
          <div className='bg-pink-50 border border-pink-500 rounded-md my-5'>
            <Heading title="Admin dashbord"  StyleName={'text-center text-pink-500'}/>
          </div>
          <UserInfo/>
          <div className='grid gap-5 xl:grid-cols-3 grid-cols-1 my-5'>
            <Item/>
            <Item/>
            <Item/>

          </div>
          <ProductDetail/>
        </div>
    </Layout>
  )
}


function Item(){
   return(
    <div className='flex flex-col justify-cenetr items-center border border-pink-500 bg-pink-50 p-5 rounded-md gap-3'>
       <GiShoppingBag className='text-pink-500 text-[40px]' />
       <h3 className="text-xl text-pink-500 font-bold">10</h3>
       <SubHeading title={"Total products"} StyleName="text-pink-500"/>
    </div>
   )
}