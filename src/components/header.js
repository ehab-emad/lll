import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const native=useNavigate()
  const [value,usevalue]=useState("")

  return (
    <div className='header-style'>
<form>
    <lable>admin</lable>
    <input type='text' className='bb' onChange={(e)=>usevalue(e.target.value)}/>
    <button className='btn ' onClick={()=>{
      if(value==="01009655577")
      native('/adminss')
    
    }}>ok</button>
</form>
    </div>
  )
}
