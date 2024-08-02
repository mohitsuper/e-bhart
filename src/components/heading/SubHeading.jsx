import React from 'react'

function SubHeading({title,StyleName}) {
  return (
    <div className={`text-sm font-semibold text-black ${StyleName}`}>{title}</div>

  )
}

export default SubHeading