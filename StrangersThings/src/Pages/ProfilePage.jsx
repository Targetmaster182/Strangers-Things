import { useState, useEffect } from 'react';
import { Routes, Route, Link,useParams,useNavigate } from "react-router-dom";

export default function Profile(){
  
  let data = sessionStorage.getItem("token");
  const [messages, setMessages] = useState([])
  const [error, seterror] = useState("null")
  const COHORT_NAME='2302-acc-et-web-pt-a'
  const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
  let username = sessionStorage.getItem("username");

  async function getMessage(){
      try {
          const response = await fetch(`${API_URL}/users/me`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${data}`
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
      getMessage();

  }, [])
  
  
  
  function filterMessageFromM(messages){
      const filtered = messages.filter(message=> message.fromUser.username.toLowerCase().includes(username.toLowerCase()))
      return filtered
  }
  function filterMessageToM(messages){
      const filtered = messages.filter(message=> !message.fromUser.username.toLowerCase().includes(username.toLowerCase()))
      return filtered
  }
  function Messages ({message}){
      
      return (
          
          <div className="message-box">
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
              <h1>Message To Me</h1>
                {
                  filterMessageToM(messages).map(message=>{
                      return <Messages key={message._id} message={message}/>})
                }  
              
          </div>
          <div>
              <h1>Message From Me</h1>  
              {
                  filterMessageFromM(messages).map(message=>{
                      return <Messages key={message._id} message={message}/>})
                } 
          </div>
      </div>
  )
}