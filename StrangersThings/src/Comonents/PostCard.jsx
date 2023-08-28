import { useState } from "react";
import { FetchPosts } from "../API";
import { useNavigate } from "react-router-dom";
import './allposts.css'


const API_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-A`

export default function PostCard({post, token, FetchPosts}) {
    const {_id, title, description, price, author, location, isAuthor} = post;
    const [error, seterror] = useState("null")
    let data = sessionStorage.getItem("token")
    const navigate = useNavigate()

    async function deletePost(id){
        
          try {
              const response = await fetch(`${API_URL}/posts/${id}`, {
                method: "DELETE",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                }
              });
              const {result} = await response.json();
              console.log(`delete ${result} `)
  
              window.location.reload();
              setIsLogin(true);
            } catch (err) {
                seterror(err.message)
            }
      }

      function editPost(post){
        navigate(`/EditPost/${post._id}`,{state:{post}});
      }

      function sendMessage(post){
        navigate(`/SendMessage/${post._id}`);
      }

    if (!token ) {
        return (
            <div className="postsd">
                <div key={_id}>
                <h1>{title}</h1>
                    <p>{description}</p>
                    <h3>Price: {price}</h3>
                    <h3>Seller: {author.username}</h3>
                    <h3>Location: {location}</h3>
                </div>
            </div>

        )
    } else if (isAuthor && token) {
        return(
            <div className="postsd">
                <div key={_id}>
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>Price: {price}</h3>
                <h3>Seller: {author.username}</h3>
                <h3>Location: {location}</h3>
                </div>
                <br></br>
                <div>
                    <button className="editButton" onClick={() => editPost(post)}>EDIT</button>
                                       
                </div>
                <br></br>
                <div>
                
                    <button className="deleteButton" onClick={() => deletePost(post._id) }>DELETE</button>
                </div>
                <br></br>
                <br></br>
            </div>
        )

    } else if (!isAuthor && token) { 
        return(
            <div className="postsd">
                <div key={_id}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <h3>Price: {price}</h3>
                    <h3>Seller: {author.username}</h3>
                    <h3>Location: {location}</h3>
                </div>
                
                <button className="messageButton" onClick={() => sendMessage(post)}>SEND MESSAGE</button>
                <br></br>
                <br></br>
            </div>
        )

    }
}