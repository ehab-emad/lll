import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const native=useNavigate()

  return (
    <div className='header-style'>
<form>
    <lable>admin</lable>
    <input type='text' className='bb'/>
    <button className='btn ' onClick={()=>{
      native('/adminss')
    }}>ok</button>
</form>
    </div>
  )
}
