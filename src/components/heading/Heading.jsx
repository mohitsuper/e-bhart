import React from 'react'

export default function Heading({title,StyleName}) {
  return (
    <h2 className={` text-2xl lg:text-3xl font-bold my-5 ${StyleName}`} >{title}</h2>
  )
}
