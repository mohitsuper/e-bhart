/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { collection, getDoc, getDocs } from "firebase/firestore";
// import Loader from "../../loader/Loader";

//how to get data firebase?
const Login = () => {
    // const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });


    
    /**========================================================================
     *                          User Login Function 
    *========================================================================**/

    let userLoginFunction = async ()=>{
        let {email,password} = userLogin;
        if(email==""||password==""){
            toast.error("Please fill all the fields");
        }
        try {
           let userCollection = collection(fireDB,"users");
           
           let q =  await getDocs(userCollection);
           q.forEach((doc) =>{
                if(doc.data().email==email&&doc.data().password==password) {
                toast.success("Login Successfull");
                localStorage.setItem("users",JSON.stringify(doc.data()))
                navigate('/')

                }
                else{
                    toast.error("Invalid Email or Password");
                }
         } )
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md w-[270px]">

                {/* Top Heading  */}
                <div className="mb-5 w-full">
                    <h2 className='text-center text-2xl font-bold text-pink-500 w-full'>
                        Login
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3 w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200 w-full'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-5 w-full">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200 w-full'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        onClick={userLoginFunction}
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Don't Have an account <Link className=' text-pink-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;