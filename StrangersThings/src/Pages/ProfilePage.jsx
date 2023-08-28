import { useState, useEffect } from 'react';
import { Routes, Route, Link,useParams,useNavigate } from "react-router-dom";
import '../Comonents/profile.css'


const API_URL=`https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-A`

export default function Profile(){
  
  let token = sessionStorage.getItem("token");
  const [messages, setMessages] = useState([])
  const [error, seterror] = useState("null")  
  let username = sessionStorage.getItem("username");

  async function fetchMessage(){
      try {
          const response = await fetch(`${API_URL}/users/me`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            
          });
          const result = await response.json();
          const data =result.data.messages;
          
          setMessages(data)

        } catch (err) {
          seterror(err.message)
        }
  }
  

  useEffect(() => {
      fetchMessage();

  }, [])
  
  
  
  function FilterMessageSent(messages){
      const filtered = messages.filter(message=> message.fromUser.username.toLowerCase().includes(username.toLowerCase()))
      return filtered
  }
  function FilterMessageReceived(messages){
      const filtered = messages.filter(message=> !message.fromUser.username.toLowerCase().includes(username.toLowerCase()))
      return filtered
  }
  function MessagesReceived ({message}){
      
      return (
          
          <div>
              <h2>From: {message.post.author.username}</h2>
              <h3>Content: {message.content}</h3>
              <h4>Post: {message.post.title}</h4>
          </div>
      )
      
  }

  function MessagesSent ({message}){
      
    return (
        
        <div>
            <h2>Sent By Me</h2>
            <h3>Content: {message.content}</h3>
            <h4>Post: {message.post.title}</h4>
        </div>
    )
    
}
  
 
  return (

      <div className='profilediv'>

        <div className='welcomediv'>
          <h1>welcome {username}</h1>
        </div>
        <div className='messagesdiv'>
            <div className='inboxdiv'>
                <h1 className='title'>INBOX</h1>
                  {
                    FilterMessageReceived(messages).map(message=>{
                        return <MessagesReceived key={message._id} message={message}/>})
                  }  
                
            </div>
            <div className='sentdiv'>
                <h1 className='title'>SENT</h1>  
                {
                    FilterMessageSent(messages).map(message=>{
                        return <MessagesSent key={message._id} message={message}/>})
                  } 
            </div>
          </div>
      </div>
  )
}