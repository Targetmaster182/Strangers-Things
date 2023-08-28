import { useState, useEffect } from "react";
import { Route, Link, Routes  } from "react-router-dom";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import '../Comonents/editpost.css'
const API_URL = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-A`

export default function edit_Post() {    
    let token = sessionStorage.getItem('token');
    const navigate = useNavigate();
    const {id} = useParams();    
    const {state} = useLocation();
    const {post} = state;
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    const [price, setPrice] = useState(post.price);
    const [location, setLocation] = useState(post.location);
    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
            const response = await fetch(`${API_URL}/posts/${id}`, {
              method: "PATCH",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                post: {
                  title: title,
                  description: description,
                  price: price,
                  location: location,
                }
              })
            });
            const result = await response.json();
            console.log(result)
            navigate("/Posts")
          } catch (err) {
            console.error(err);
          }
            
    }

    return(

        <div className="maindiv">
            <div className="editdiv">

            <form  onSubmit={handleSubmit}>
                <label className="subtitle">TITLE: </label>  
                        <input 
                        value={title}  
                        id="title"  onChange={(e)=>{ 
                            setTitle(e.target.value) 
                        }}/>
                <br></br>
                    
                
                <label className="subtitle">DESCRIPTION: </label>
                     
                        <input 
                        value={description}  
                        id="description" onChange={(e)=>{ 
                            setDescription(e.target.value) 
                        }}/>
                <br></br>
                    
                
                <label className="subtitle">PRICE: </label>
                      
                    <input 
                        value={price}  
                        id="price" onChange={(e)=>{ 
                            setPrice(e.target.value) 
                            
                        }}/>
                <br></br>
                    
                
                <label className="subtitle">LOCATION:  </label>
                      
                        <input 
                            value={location}  
                            id="location" onChange={(e)=>{ 
                                setLocation(e.target.value) 
                            }}/>

                        <br></br>
                    
                
                <button className="submit">Submit</button>   
            </form>
            </div>
        </div>
    );
  
}