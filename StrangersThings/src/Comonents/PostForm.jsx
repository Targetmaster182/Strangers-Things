import { useState } from 'react'
import { createPost } from '../API/index.js'
import './CreatePost.css'

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
        <div className='maindiv'>
            <div className='postdiv'>
                <form onSubmit={handleSubmit}>
                    <label className='subtitle' htmlFor="title">TITLE: </label>
                    <input
                        className='postinput'
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br></br>
                    <label className='subtitle' htmlFor="description">DESCRIPTION: </label>
                    <textarea
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br></br>
                    <label className='subtitle' htmlFor="price">PRICE: </label>
                    <input
                        className='postinput'
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br></br>
                    <label className='subtitle' htmlFor="location">LOCATION: </label>
                    <input
                        className='postinput'
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <br></br>


                    <button className="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}