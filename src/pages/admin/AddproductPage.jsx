

import React, { useState } from "react";
import {addDoc, collection, getDocs} from 'firebase/firestore'
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
 
const categoryList = [
  {
      name: 'fashion'
  },
  {
      name: 'shirt'
  },
  {
      name: 'jacket'
  },
  {
      name: 'mobile'
  },
  {
      name: 'laptop'
  },
  {
      name: 'shoes'
  },
  {
      name: 'home'
  },
  {
      name: 'books'
  }
]



const AddproductPage = () => {
  const [product, setProduct] = useState({});
  let [proinfo,setproinfo] = useState(
    {
      title:"",
      price:"",
      img:"",
      category:"",
      proDec:"",

  })
  let {title,
    price,
    category,
    img,
    proDec
} = proinfo;
  let getData= (e)=>{
    let oldarry = {...proinfo}
    let name = e.target.name;
    let value = e.target.value;
    oldarry[name] = value;
    setproinfo(oldarry)

  }
  let Addproduct = async ()=>{
  try{
    let colle = collection(fireDB,"products")
    let info = await getDocs(colle);
     let products = info.docs.map(doc => doc.data());
     let productExist = products.find(product => product.img === img);
     if(!productExist){
        if(!title==""||price==""||img==""||category==""||dec==""){
            toast.error("Please fill all the fields");
            let coll = collection(fireDB,"products")
            let copyData = {title,price,img,proDec,category}
            let dataBase = await addDoc(coll,copyData);
            localStorage.setItem("Newproducts",JSON.stringify(copyData))
        }
      }
      else{
        toast.error("product already exist")
      }

      setproinfo({
        title:"",
        price:"",
        img:"",
        category:"",
        proDec:"",
      })
      toast.success("success")
      navigator("/admin");
  }
  catch(error){
    toast.error("error")
    console.log(error)
  }

  }
  return (
      <div>
          <div className='flex justify-center items-center h-screen'>
              {/* Login Form  */}
              <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                  {/* Top Heading  */}
                  <div className="mb-5">
                      <h2 className='text-center text-2xl font-bold text-pink-500 '>
                          Update Product
                      </h2>
                  </div>

                  {/* Input One  */}
                  <div className="mb-3">
                      <input
                          type="text"
                          onChange={getData}
                          value={title}
                          name="title"
                          placeholder='Product Title'
                          className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Two  */}
                  <div className="mb-3">
                      <input
                           onChange={getData}
                           value={price}
                          type="number"
                          name="price"
                          placeholder='Product Price'
                          className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Three  */}
                  <div className="mb-3">
                      <input
                          onChange={getData}
                          value={img}
                          type="text"
                          name="img"
                          placeholder='Product Image Url'
                          className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                      />
                  </div>

                  {/* Input Four  */}
                  <div className="mb-3">
                      <select
                          onChange={getData}
                          value={category}
                          className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  ">
                          <option disabled>Select Product Category</option>
                          {categoryList.map((value, index) => {
                              const { name } = value
                              return (
                                  <option className=" first-letter:uppercase" key={index} value={category}>{name}</option>
                              )
                          })}
                      </select>
                  </div>

                  {/* Input Five  */}
                  <div className="mb-3">
                      <textarea
                           onChange={getData}
                           value={proDec}
                          name="proDec" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">
                      </textarea>
                  </div>

                  {/* Update Product Button  */}
                  <div className="mb-3">
                      <button
                          type='button'
                          onClick={Addproduct}
                          className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                      >
                          Update Product
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default AddproductPage;