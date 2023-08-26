import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function NavBar({token, setToken}) {
    const navigate = useNavigate()

    async function handleClick(token, setToken){
        await setToken("")
        navigate('/')

    }
    if (!token) {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/SignUp">Sign UP</Link>
                    </li>
                                    <li>
                        <Link to="/Posts">Posts</Link>
                    </li>
                </ul>
            </nav>
        )

    } else if (token) {
    return (
            <nav>
                <ul>

                    
                    <li>
                        <Link to="/Posts">Posts</Link>
                    </li>
                    

                    
                    <li>
                        <Link to="/Profile"> Profile</Link>
                    </li>

                    <li>
                        <Link to="/CreatePost"> Create Post</Link>
                    </li>

                    <button onClick={() => handleClick(token, setToken)}>Logout</button>
                    
                    
                </ul>


            </nav>
        )
    }
}