import React from 'react'

function Signal({ color, isActive }) {
  return (
    <div className='signal' style={{backgroundColor:`${isActive ? color : "grey"}`}}>
      
    </div>
  )
}

export default Signal
