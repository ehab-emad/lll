import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { getData } from "../store/createslic";

export default function Admin(){
    const nav=useNavigate()
    function deleteproduct(id){
        fetch('https://ss-sggy.onrender.com/products/'+ id,{
            method:"DELETE"
        }).then(Response=>{
            if(!Response.ok){
                throw new Error()
              
            }
            dispatch(getData())
           
        })
        .catch(erorr=>{
            alert("unable to delete the product details")
        })
    }

 
const data=useSelector((state)=>state.productss.product)
const dispatch=useDispatch()
useEffect(()=>{dispatch(getData())},[dispatch])
return(
<Container>
  <div className="d-flex justify-content-between p-5" style={{maxWidth:"100%"}}>
  <button className="btn btn-success" onClick={()=>{nav('/')}}>back</button>
  <h2 className="title-st">products</h2>
  </div>
<Row className="">
   
    <Col>
    </Col>
    <Col className="m-4 "style={{maxWidth:"100%"}} >
   
    <button className="btn btn-outline-primary mb-2" onClick={()=>dispatch(getData())}>Refresh </button>
    <Link to={"/adminss/create"}> <button className="btn btn-primary  me-1">createproduct</button></Link>
   
    </Col>
</Row>
<table style={{maxWidth:"100%"}} className="table">

    <thead style={{width:"10px"}}>
        <tr >
        <th className="ko">
id
            </th>
             <th className="ko">
Image
            </th>
            <th className="ko">
actions
            </th>
        </tr>
    </thead>
    <tbody>
    {
data.length>0 ? 
(data.map((item)=>{
return(
    <>
    <tr>
<td className="ko">{item.id}</td>

<td><img src={"https://ss-sggy.onrender.com/" + item.images } width={"40"} alt="..."></img></td>
{/* {console.log("http://localhost:30001/" + item.images)} */}

<td style={{width:"9px",whiteSpace:"nowrap",} } className="d">
    
     <button onClick={()=>deleteproduct(item.id)} className="btn btn-primary btn-sm mt-1 d-block ko" >حذف</button>
</td>






</tr>
    
    </>
)

})):<h3>no data found</h3>
    }
    </tbody>
   
</table>


</Container>





)



}