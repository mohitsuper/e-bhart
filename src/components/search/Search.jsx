import React, { useState } from 'react'
const searchData = [
  {
      name: 'Fashion',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Shirt',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'Jacket',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
  {
      name: 'Mobile',
      image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg'
  },
  {
      name: 'Laptop',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Home',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'book',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
]
export default function Search() 
{
  const [search,setSearch] = useState("");
  
  
  const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search));

  return (
    <div className='flex justify-center'>
        <input type="text" placeholder='Enter' className='bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black ' value={search} onChange={(e)=>setSearch(e.target.value)} />

      <div className='flex justify-center z-[1000]'>
        {
            (!search)? 
            "":
            <>
              <div className="block absolute xl:top-[100%] top-[370px] xl:right-[3%] md:right-[25%] sm:right-[20%] right-[8%]  xl:w-[384px]  bg-white justity-between ">
              
              {
                  (filterSearchData.length >0)?
                  <>
                  {
                      filterSearchData.map((v,i)=>
                      { 
                        return(
                          <div key={i} className="py-2 px-2 gap-3 w-[384px]">
                            <div className="flex items-center gap-5 bg-[#eee] w-full">
                                <img className="w-10" src={v.image} alt="" />
                                {v.name}
                            </div>
                        </div>             
                        
                        ) 
                      
                      }
                    )
                  } 
                  </>
                   :
                   <div className='w-[384px] h-[100px] mx-auto flex justify-center'>
                      <img className="bg-white w-[200px]mx-auto h-full" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                   </div>

          
              }
              </div>
            </>
        }
      </div>
  </div>
  )
}


