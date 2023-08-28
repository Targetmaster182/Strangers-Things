import { useState, useEffect } from "react";
import { Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import '../Comonents/sendmessage.css'


const API_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-A`

export default function MessageTo(){
    let token = sessionStorage.getItem("token");
    const [messageTo, setMessageTo] = useState("")    
    const {id} = useParams();
    const navigate = useNavigate()
    async function postMessage(e){
      e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/posts/${id}/messages`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                message: {
                  content: messageTo
                }
              })
            });
            const result = await response.json();
            console.log(result);
            navigate("/Posts")   
            console.log("Message was sent")         
          } catch (err) {
            console.error(err);
          }
    }
    return (
      <div className="maindiv">
        <div className="messagediv">
        <h1>Message</h1>
        <form onSubmit={postMessage} >

            <label>
                <div>
                <label className='subtitle' htmlFor="username">MESSAGE: </label> 
                    <input 
                        value={messageTo} 
                        id="messageTo" onChange={(e)=>{ 
                            setMessageTo(e.target.value) 
                        }}/>
                </div>
            </label>
                <button className="submit">SEND</button>
        </form>
        </div>
      </div>
    )
}