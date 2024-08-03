import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useLocation } from 'react-router-dom';
import { productData } from '../../components/Products/ProductData';

export function Card() {
  let localtion = useLocation();
  let index = localtion.pathname.split('/')[2];
  let filter = productData.filter((v)=>v.id==index);
  console.log(filter);
  //how to get product info page data in card page?

  const [prolist, setProlist] = useState([]);
  console.log(prolist)


  let objNew = {
      id: filter[0].id,
      originalPrice: '₹999',
      href: '#',
      name: filter[0].title,
      price: filter[0].price,
      discount: '10',
      color: 'Black',
      imageSrc: filter[0].image,
      quantity: filter[0].quantity,
    }

    //how to add new element in prolist
    useEffect(() => {
      if (!prolist.find(item => item.id === objNew.id)) {
        setProlist([...prolist, objNew]);
      }
    
       },[]);

   


  const removeItem = (id) => {
    setProlist(prolist.filter(item => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setProlist(prolist.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  const decrementQuantity = (id) => {
    setProlist(prolist.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };


  
  return (
    <Layout>
      <div className='container-2xl mx-auto px-5'>
        <h1 className='text-[2rem] my-5 font-bold text-[#333]'>Shopping Cart</h1>
        <div className='flex justify-between flex-col xl:flex-row'>
          <div className='flex flex-col gap-1 basis-[40%]'>
            {prolist.map((item) =>(
              <div className="grid grid-cols-2 gap-2 my-3" key={item.id}>
                <div className='w-[7rem]'>
                  <img src={item.imageSrc} alt={item.name} />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  
                  <div className='flex gap-1'>
                    <p>{item.color}</p>
                    <p className='strick-throw'>&#8377;{item.price}</p>
                    <p>{item.discount}</p>
                  </div>
                </div>
                <div className='col-span-1 flex gap-5'>
                  <div className='flex gap-2'>
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <input
                      type="number"
                      className='w-[30px] h-[20px] border border-[#333] text-center'
                      value={item.quantity}
                      readOnly
                    />
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <div
                    className='flex gap-1 text-red-500 cursor-pointer'
                    onClick={() => removeItem(item.id)}
                  >
                    <p>&times;</p>
                    <p>Remove Item</p>
                  </div>
                </div>
                <hr className='h-[4px] bg-[#eee]' />
              </div>
            ))}
          </div>
          <div className='flex flex-col basis-[50%]'>
            <h2 className='text-xl font-semibold'>Price Details</h2>
            <hr className='h-[3px] bg-[#eee]' />
            <table className='border p-5 my-5 text-center'>
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Discount</th>
                  <th>price</th>
                  <th>Delivery Charge</th>
                </tr>
              </thead>
              <tbody>
                 { prolist.map((v)=>{
                  let dis = (v.price*v.discount)/100;
                  let price = v.price-dis;
                  // let totol += price;
                    return(
                      <tr>
                      <td>&#8377;{v.price}</td>
                      <td className='text-green-500'>-&#8377;{dis}</td>
                      <td>&#8377;{price}</td>
                      <td className='text-green-500'>Free</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
            <div>
              <span>Total Amount:{prolist.forEach((v)=>{})} </span>
              <span>₹8,888</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
