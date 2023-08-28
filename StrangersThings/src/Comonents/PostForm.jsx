import { useState } from 'react'
import { createPost } from '../API/index.js'

export default function PostForm({token}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("On Request")


    async function handleSubmit(e) {
        e.preventDefault()
        const newPost = {post:{
          title:title,
          description:description,
          price:price,
          location:location,

        }}
        await createPost(newPost, token)
        setTitle('')
        setDescription('')
        setPrice('')
        setLocation('[On Request]')

        

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <label htmlFor="description">Description: </label>
            <textarea
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <label htmlFor="price">Price: </label>
            <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br></br>
            <label htmlFor="location">Location: </label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />


            <button className="submit">Submit</button>
        </form>
    )
}