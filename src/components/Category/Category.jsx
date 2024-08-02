import React from "react"
// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
]

const Category = () => 
{
    return (
       <div className="container mx-auto px-4">
            <div className="flex lg:justify-between h-[150px] items-center gap-5 md:overflow-hidden overflow-x-scroll       hide-scroll-bar hide-scroll-bar ">
            {
                category.map
                ((v,i)=>
                {
                    return(
                        <div key={i} className="h-[100px] tetx-center bg-white">
                                <img src={v.image} className="h-[80px] w-full"/>
                                <p className="w-full text-center">{v.name}</p>
                        </div>
                   )
               }
               )
            } 
            </div>
       </div>
    );
}

export default Category;
