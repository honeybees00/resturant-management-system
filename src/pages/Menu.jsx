import React from 'react'
import { useState,useEffect } from 'react'
import  supabase  from '/supabase/supabase-js';

export const Menu = () => {
    const[menuItems,setMenuItems]= useState([]);
    useEffect(()=>{
    async function fetchMenu() {
      const {data,error}= await


      
    }   

    },[]);

    

  return (
    <div>Menu</div>
  )
}
