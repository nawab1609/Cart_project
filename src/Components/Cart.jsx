import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Cart({cartData,DeleteData,total,QuantityChange}) {
  const navigate=useNavigate();
const buy=()=>{
  navigate("/payment",{state:{total}})
}
  return (
    <div>
      <table className='table text-center'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Total</th>
            </tr>
        </thead>

        <tbody>
    {
      cartData.map((items,index)=>(
        <>
          <tr>
            <td>{index+1}</td>
            <td>{items.Name}</td>
            <td><img src={items.Image} alt="" width={"50px"} height={"50px"} className='rounded'/></td>
            <td><button className='btn btn-danger' onClick={()=>QuantityChange(items,-1)}>-</button><span className='mx-3'>{items.Quantity}</span><button className='btn btn-success'  onClick={()=>QuantityChange(items,+1)}>+</button></td>
            <td>{items.Price} ₹</td>
            <td><button className='btn btn-danger' onClick={()=>DeleteData(index)}>Delete</button></td>
            <td>{items.Quantity*items.Price}₹</td>
          </tr>
        </>
      ))
    }
        </tbody>
      </table>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10"></div>
          <div className="col-sm-2 text-center"><h2>Total :- {total}₹</h2>
          <button className='btn btn-warning my-5 btn-lg' onClick={buy}>Buy now</button>
          </div>
        </div>
      </div>
    
    </div>
  )
}
