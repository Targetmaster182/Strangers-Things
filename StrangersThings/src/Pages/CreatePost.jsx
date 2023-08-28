import { useState, useEffect } from 'react'
import PostForm from '../Comonents/PostForm'




export default function CreatePost({token, setToken}) {

    return (
        <div>
         
            <PostForm token={token}/>
        </div>
    )
}