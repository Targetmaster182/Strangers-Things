import { FetchPosts } from "../API/index"
import { useState, useEffect } from "react";
import PostCard from "../Comonents/PostCard";


export default function AllPosts({token}) {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([]);
        async function fetchData(token) {
            const data = await FetchPosts(token)
            setPosts(data)
            setFilteredPosts(data)
        }
        useEffect(() => {
            fetchData(token)

        }, [token])

        function handleSubmit(e) {
            e.preventDefault();
            const search = e.target.value;
            const filteredPosts = posts.filter((post) => {
              return (
                post.title.toLowerCase().includes(search.toLowerCase()) || 
                post.description.toLowerCase().includes(search.toLowerCase()) ||
                post.price.toLowerCase().includes(search.toLowerCase()) ||
                (post.author && post.author.username).toLowerCase().includes(search.toLowerCase()) ||
                post.location.toLowerCase().includes(search.toLowerCase()) ) 
            });
            setFilteredPosts(filteredPosts);
          }

    return (
        <div>            
            <section>
                <h1>POSTS</h1>
                <form onSubmit={handleSubmit}>
                    <label>Search</label>
                    <input onChange={handleSubmit} type="text"/>
                    
                </form>
                {
                    filteredPosts.map((post) => (
                        <PostCard
                        key={post._id}
                        post={post}  
                        token={token}
                        FetchPosts={fetchData}  
                    
                        />
                    ))
                }
            </section>
            </div>
        
    )
}