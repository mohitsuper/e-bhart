import React, { useState, useEffect } from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

function Products(){
  const [productData, setProductData] = useState( [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
        title: 'Kaushalam kalash Copper Pot',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
  
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]
);

  useEffect(() => {
    async function fetchData() { 
      //add protduct firebase 

     productData.map(async (data)=>{
      const productsRef = collection(fireDB, "products");
      const querySnapshot = await getDocs(productsRef);
      const products = querySnapshot.docs.map((doc) => doc.data())
      const imageUrls = products.map((product) => product.image);
     

      if(!data.image == imageUrls){
        const docSnap = await addDoc(productsRef, data);
        console.log("success")
      }

     
     })

      //add new data in productData varible
      const productsRef = collection(fireDB, "products");
      const querySnapshot = await getDocs(productsRef);
      const products = querySnapshot.docs.map((doc) => doc.data());
      setProductData(products);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className='container-2xl px-3'>
        <h1 className='text-xl text-center w-full my-3 font-semibold'>Best Products</h1>
        <div className='container  mx-auto grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
          {
            productData.map((v, i) => {
              return (
                <Card v={v} key={i} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function Card({v}){
  const {image, title, desc, price, id} = v;
  
  return (
    <Link to={`/productinfo/${id}`} >
      <div className='flex flex-col w-auto h-auto  rounded-md shadow'>
        <div className=' flex basis-[60%] h-auto  border rounded-md'>
          <img src={image} alt="" className='w-full h-full ' />
        </div>
        <div className='flex basis-[40%] flex-col p-4'>
          <h1 className='font-bold'>{title.slice(0,20)}</h1>
          <p className='text-[.8rem]'>{desc}</p>
          <p className='font-semibold text-[#444]'>&#8377; {price}</p>
          <Button className='bg-pink-500 hover:bg-pink-200 duration-500'>
            <Link to={`/cart/${id}`}>Add to cart</Link> 
          </Button>
        </div>
      </div>
    </Link>
  )
}

export default Products;