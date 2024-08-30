import { useContext, useState ,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

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

const UpdateProductPage = () => {
   let {id} = useParams();
   const context = useContext(myContext);
   const {getAllProductFunction } = context;
   let navigate = useNavigate();

   const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    )
});

//get single product data function 

let getSingleProductFunction = async () =>{
    try{
        
        const response = await getDoc(doc(fireDB,"products",id))
        const data = response.data()
        console.log(data)
        setProduct({
            title: data?.title,
            productImageUrl: data?.productImageUrl,
            category: data?.category,
            description: data?.description,
            quantity : data?.quantity,
            time: data?.time,
            date: data?.date,
            price:data?.price
        })

        console.log(product)

    }
    catch(error){
        console.log(error)
    }
}

useEffect(() => {
    getSingleProductFunction();
}, []);


let UpdateProductPage=  async ()=>{
  try{
     await setDoc(doc(fireDB,"products",id),product)
     toast.success("update success full..")
     getAllProductFunction()
     navigate("/admin-dashboard")
  }
  catch(error){
    console.log(error)
  }
}
   console.log(id)
    return (
            <div className='flex justify-center items-center  h-[100%] py-9'>
                {/* Login Form  */}
                <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md  h-[70%]  ">

                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-pink-500 '>
                            Update Product
                        </h2>
                    </div>

                    {/* Input One  */}
                    <div className="mb-3">
                        <input
                            onChange={(e)=>{
                                setProduct({...product,title: e.target.value})
                            }}
                            value={product.title}
                            type="text"
                            name="title"
                            placeholder='Product Title'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2  rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Input Two  */}
                    <div className="mb-3">
                        <input
                            onChange={(e)=>{
                                setProduct({...product,price: e.target.value})
                            }}
                            value={product.price}
                            type="number"
                            name="price"
                            placeholder='Product Price'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2  rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Input Three  */}
                    <div className="mb-3">
                        <input
                            onChange={(e)=>{
                                setProduct({...product,productImageUrl: e.target.value})
                            }}
                            value={product.productImageUrl}
                            type="text"
                            name="productImageUrl"
                            placeholder='Product Image Url'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2  rounded-md outline-none placeholder-pink-300'
                        />
                    </div>
  {/* this is a comment */}
                    {/* Input Four  */}
                    <div className="mb-3">
                        <select
                            className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  ">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/* Input Five  */}
                    <div className="mb-3">
                        <textarea
                            onChange={(e)=>{setProduct({...product,description:e.target.value})}}
                            value={product.description}
                            name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">
                        </textarea>
                    </div>

                    {/* Update Product Button  */}
                    <div className="mb-3">
                        <button
                            type='button'
                            onClick={UpdateProductPage}
                            className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default UpdateProductPage;