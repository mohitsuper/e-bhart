import React from 'react'

export default function UserInfo() {
  let userData = localStorage.getItem('users');
  userData = JSON.parse(userData);
  return (
    <div className='container flex flex-col justify-center bg-pink-50 border rounded  p-3 border-pink-500 mx-auto'>
                <div className='flex w-[150px] mx-auto justify-center'>
                <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" className='w-[150px]'/>
                </div>
              <div className="">
                            <h1 className=" text-center text-lg"><span className=" font-bold">Name :</span>{userData.name}</h1>
                            <h1 className=" text-center text-lg"><span className=" font-bold">Email :</span>{userData.email}</h1>
                            <h1 className=" text-center text-lg"><span className=" font-bold">role :</span>{userData.role}</h1>
             </div>
  </div>
  )
}
