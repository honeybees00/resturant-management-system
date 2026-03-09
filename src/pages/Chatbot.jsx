import React from 'react'
import { useEffect,useState } from 'react'
import supabase from '../services/supabaseClient';
import {ChatbotForm} from '../components/ChatbotForm'


export const ChatbotForm = () => {
const [products, setproducts]= useState('');
const [messages,setMessages]= useState([])
let question="";


async function fetchMenu() {
    const {data,error} =await supabase.from("menu_items").select();
    if (error){
        console.error("error fetching menu.",error);
    }else{
        setproducts(dats);
    }
    }
    useEffect(()=>{
        fetchMenu()
    },[])
const [loading, setLoading]=useState(false);
const instruction = `your are going to be a happy helpful assistant in my online resturant.

${JSON.stringify(product,null,2)}
You are going to take the order products and the request to our staff.

always confirm the order
When the order is confirmed say thank you for the support, and give a order summary of the total !
When the order is confirm say Good Bye, and give a summary of the total
!
Format Rule:Only respond in plain Text.Dont use any format like HTML or Mark Down. Dont use Bold or Italic fonts.` 
//when submit is pressed//
const onsubmitForm=async (e)=>{
    const url = import.meta.Vite_ai_chatbot_url;
    const token=import.meta.Vite_ai_chatbot_key;
    const history=messages.concat();
    history.push({role:"user",text:question})
    setMessages(history);
    event.preventDefault();
    setLoading(true);
    const apiHistory=history.map(item=>({
        role:item.role,
        parts:[{text:item.text}]

    }))
    const result=await fetch(url,{
        method:"POST",
        header:{
            "x-goog-api-key":token
        },
        body:JSON.stringify({
            system_instruction:{parts:[{text:instructions}]},
            contents:apiHistory
        })
    })
    const data=await result.json();
    const answer=data.candidates[0].content.parts[0].text
    const response={role:"model",text:answer}
    history.push(response)
    setMessages(history)
    setLoading(false)

}
    
 return(
    <>
    <form onSubmit={{onsubmitForm}>
        <label>chat history</label>
        
            <div className='mt-3 mb-3 border rounded-3'> {
                messages.map((item,i)=>(
                    <p key =(i) classmate={item.role=="model"? "text-sucess":"text-dark"></p>
                        
                    }     
                    }
                )

                )
            }
            
            

            {loading? <p> Loading...: <></>}
            <div className="mb-3">
                    <input type="text" className="form-control" onChange={onChangeQuestion}
                        placeholder="Ask your question" />
                
                <button className='btn btn-success'>Send</button>
            </form>
       </div>
            }
        

    
    
    
 </>

