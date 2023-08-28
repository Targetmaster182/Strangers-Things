import { useState } from "react";
import { FetchPosts } from "../API";
import { useNavigate } from "react-router-dom";


const API_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-A`

export default function PostCard({post, token, FetchPosts}) {
    const {_id, title, description, price, author, location, isAuthor} = post;
    const [error, seterror] = useState("null")
    let data = sessionStorage.getItem("token");

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
        navigate(`/edit_Post/${post._id}`,{state:{post}});
      }

    if (!token ) {
        return (

                <div key={_id}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <h2>Seller: {author.username}</h2>
                    <p>Location: {location}</p>
                </div>

        )
    } else if (isAuthor && token) {
        return(
            <div>
                <div key={_id}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <h2>Seller: {author.username}</h2>
                <p>Location: {location}</p>
                </div>
                <div>
                    <button onClick={() => editPost(post)}>EDIT</button>
                    <br></br>
                    <button onClick={() => deletePost(post._id) }>DELETE</button>
                    
                </div>
            </div>
        )

    } else if (!isAuthor && token) { 
        return(
            <div>
                <div key={_id}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <h2>Seller: {author.username}</h2>
                    <p>Location: {location}</p>
                </div>
                
                <button>SEND MESSAGE</button>
            </div>
        )

    }
}