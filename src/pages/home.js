import React, { useEffect } from 'react'
import ww from '../WhatsApp-Image-2024-09-03-at-2.03.37-PM.webp'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../store/createslic'
import Header from '../components/header'
export default function Home() {
  const data=useSelector((state)=>state.productss.product)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getData())
  })
  return (
   <> 
   <Header/>
   <div className='home'>
<container>
   <h1 className='mm'>  بفضل الله الموديلات المتاحه ف المصنع 
   </h1>
{
 data.map((i)=>{
   return(<>
   <div className='ss'>
     {/* {i} */}
<img className='img-style' src={"https://ss-sggy.onrender.com/" + i.url } alt='...' loading='lazy'/>
</div>
   </>)
 })
}



</container>



   </div></>
  )
}
