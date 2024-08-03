/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
// import Loader from "../../loader/Loader";
 import Loader from "../../loader/Loader";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
    const context = useContext(myContext);
    const {loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
    });


    let userSignupFunction =async ()=>{
        let {name,email,password} = userSignup;
        if(name==""||email==""||password==""){
            toast.error("All are detiels full fil");
        }
        try{

            try{
                let userData = {name,email,password,role:"user"};
                let userRefrance = collection(fireDB,"users");
               
                addDoc(userRefrance,userData);
                setUserSignup(
                    {
                        name: "",
                        email: "",
                        password: "",
                    }
                )
            }
            catch(error){
                toast.error("error");
                console.log(error);
            }
            toast.success("signin compled...");
            navigate("/login");
        }
        catch(error){
            console.log(error);
            toast.error('signin failed...');
        }

    }
    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

  
    return (
        <div className='flex justify-center items-center h-screen '>
            {loading && <Loader/>}
            {/* Login Form  */}
            <div className="login_Form bg-pink-50 px-5 py-5 border border-pink-100 rounded-xl shadow-md mx-5 w-[270px] ">

                {/* Top Heading  */}
                <div className="mb-5 w-full">
                    <h2 className='text-center text-2xl font-bold text-pink-500 w-full'>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3 w-full">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            })
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200 w-full'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3 w-full">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value
                            })
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200 w-full'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5 w-full">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value
                            })
                        }}
                        className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200 w-full'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5 w-full">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md w-full'
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;