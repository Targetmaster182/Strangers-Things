import { useState, useEffect } from 'react'
import PostForm from '../Comonents/PostForm'
import { createPost } from '../API/index'



export default function CreatePost({token, setToken}) {

    return (
        <div>
         
            <PostForm token={token}/>
        </div>
    )
}