import { useState } from "react";
import { FetchPosts } from "../API";


export default function PostCard({post, token, FetchPosts}) {
    const {_id, title, description, price, author, location} = post;
    

    if (token && !postAuthor) {
        return (
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
    } else if (!token) {
        return(
            <div key={_id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
            <h2>Seller: {author.username}</h2>
            <p>Location: {location}</p>
        </div>
        )

    } else if (token && postAuthor) { 
        return(
            <div>
                <div key={_id}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <h2>Seller: {author.username}</h2>
                    <p>Location: {location}</p>
                </div>
                <button>VIEW</button>
                <button>DELETE</button>
            </div>
        )

    }
}