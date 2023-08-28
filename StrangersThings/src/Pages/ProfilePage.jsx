import { useState, useEffect } from 'react';
import { Routes, Route, Link,useParams,useNavigate } from "react-router-dom";

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
  function Messages ({message}){
      
      return (
          
          <div>
              <h2>Seller: {message.post.author.username}</h2>
              <h3>Content: {message.content}</h3>
              <h4>Post: {message.post.title}</h4>
          </div>
      )
      
  }
  
 
  return (

      <div>

        <div>
          <h1>welcome {username}</h1>
        </div>
          <div>
              <h1>INBOX</h1>
                {
                  FilterMessageReceived(messages).map(message=>{
                      return <Messages key={message._id} message={message}/>})
                }  
              
          </div>
          <div>
              <h1>SENT</h1>  
              {
                  FilterMessageSent(messages).map(message=>{
                      return <Messages key={message._id} message={message}/>})
                } 
          </div>
      </div>
  )
}