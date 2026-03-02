import React from 'react'
import {useState} from 'react'

export const OrderPage = () => {
    const {customerName,setCustomerName}=useState('');
    const {OrderDetails,setOrderDetails}=useState('');
    function handleSubmit(event){
    event.preventDefault();
    alert(`Thank you,${customerName}!`);
    setCustomerName('');
    setOrderDetails('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="customer_name" className="form-label">Name</label>
    <input value={customerName} type="text" class="form-control" id="customer_name" aria-describedby="emailHelp"onChange={(e) => setCustomerName(e.target.value)}/>

    <div id="emailHelp" className="form-form">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="order_details" className="form-label">order_details</label>
    <textarea  value={CustomerDetail}class="form-control" id="order_details" onChange={(e)=>setOrderDetails(e.target.value)}></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary">Order Now</button>
</form>
</div>
  )};


    
