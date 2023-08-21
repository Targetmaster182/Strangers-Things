import { FetchPosts } from "../API"
import { useState, useEffect } from "react";
import PostCard from "../Comonents/PostCard";
import NavBar from "../Comonents/NavBar";


export default function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const data = await FetchPosts()
            setPosts(data)
        }
        fetchData()

    }, [])
    return (
        <div>            
            <section>
                {
                    posts.map((post) => (
                        <PostCard
                        key={post._id}
                        post={post}    
                    
                        />
                    ))
                }
            </section>
            </div>
        
    )
}