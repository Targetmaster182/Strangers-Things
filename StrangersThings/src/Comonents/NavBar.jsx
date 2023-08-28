import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './NavBar.css'

export default function NavBar({token, setToken}) {
    const navigate = useNavigate()

    async function handleClick(token, setToken){
        await setToken("")
        navigate('/')

    }
    if (!token) {
        return(
            <nav id="navbar">
                <ul>
                    <li>
                        <Link to="/">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/SignUp">SIGN UP</Link>
                    </li>
                                    <li>
                        <Link to="/Posts">POSTS</Link>
                    </li>
                </ul>
            </nav>
        )

    } else if (token) {
    return (
            <nav id="navbar">
                <ul>

                    
                    <li>
                        <Link to="/Posts">POSTS</Link>
                    </li>                    
                    <li>
                        <Link to="/Profile"> PROFILE</Link>
                    </li>
                    <li>
                        <Link to="/CreatePost"> CREATE POST</Link>
                    </li>

                    <button className="logout" onClick={() => handleClick(token, setToken)}>LOGOUT</button>
                    
                    
                </ul>


            </nav>
        )
    }
}