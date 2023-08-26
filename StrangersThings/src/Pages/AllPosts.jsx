import { FetchPosts } from "../API/index"
import { useState, useEffect } from "react";
import PostCard from "../Comonents/PostCard";


export default function AllPosts({token}) {
    const [posts, setPosts] = useState([])
    
        async function fetchData(token) {
            const data = await FetchPosts(token)
            setPosts(data)
        }
        useEffect(() => {
            fetchData(token)

        }, [token])

    return (
        <div>            
            <section>
                {
                    posts.map((post) => (
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