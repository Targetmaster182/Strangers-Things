export default function PostCard({post}) {
    const {_id, title, description, price, author, username, location} = post;
    return (
        <div key={_id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
            <h2>Seller: {author.username}</h2>
            <p>Location: {location}</p>
        </div>
    )
}