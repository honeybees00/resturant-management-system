import React from 'react'
import { useEffect,useState }",./services/supabaseClient"; from 'react'
import supabase from '../services/supabaseClient';
export const Chatbot = () => {
const [products, setproducts]= useState('');
async function fetchMenu() {
    const {data,error} =await supabase.from("menu_items").select();
    
}
  
}
