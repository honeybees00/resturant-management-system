import React from 'react'
import { useState,useEffect } from 'react'
import  supabase  from '/supabase/supabase-js';
import { BrowserRouter } from 'react-router-dom';


export const Menu = () => {
  //set stat for menu_items here//
    const[menuItems,setMenuItems]= useState([]);


    //This is fetching menu_items from table in supabase//
    useEffect(()=>{
    async function fetchMenu() {
      const {data,error}= await supabase .from('menuItems').select();
      if (error){
        console.error("Error fetching menu".error);
      } else{
        setMenuItems(data);
      }
      }
  
    
      }
      
      fetchMenu()
    )
  }[];
    
    //make sure to filter menuItems for category//  
     const breakfastItems=menuItems.filter(items=> items.category==='breakfast');
     const lunchItems=menuItems.filter(items=> items.category==='Lunch');
     const dinnerItems=menuItems.filter(items=> items.category==='dinner');
     const drinksItems=menuItems.filter(items=> items.category==='drinks');

       

  
  

  return (
    <div>
      {/*Breakfast*/}
      {breakfastItems.map((item)=>(
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        <img src={item.imgage_url} alt={item.name}/>//
       <div key={item.id} class="card" style={{"width: 18rem"}}>
  <img src={item.imgage_url} className="card-img-top" alt={item.name}/>
  <div className="card-body">
    <h3 card-title>{item.name}</h3>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">${item.price}</p>
     
  </div>
   
</div>


 

  {/*Lunch*/}
  {lunchItems.map((item)=>(
  <div key={item.id}>
  <h2>Lunch</h2>
  {lunchItem.map((item)=>(
     <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <img src={item.imgage_url} alt={item.name}/>
          <h3 className="card-title">{item.name}</h3>
          <p className="card-text">${item.price}</p>
        </div>
  
  )
  )
  }
  

  {/*Dinner*/}
  <h2>Dinner</h2>
  {dinnerItem.map((item)=>(
     <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <img src={item.imgage_url} alt={item.name}/>
          <div className="card-body"></div>
          <h3 className="card-title">{item.name}</h3>
          <p className="card-text">${item.price}</p>
        </div>//

    
  )
)}

  
  {/*Drinks*/}
  <h2>Drinks</h2>
  {drinksItem.map((item)=>( 
    <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <img src={item.imgage_url} alt={item.name}/>
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">${item.price}</p>
            
            
          </div>
      </div>

  )
</div>
  ))
