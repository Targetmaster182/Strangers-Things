import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function LoginPage({setToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [setError] = useState(null)
    
  
    const navigate = useNavigate()
    async function submitForm(e) {
      e.preventDefault()
      const login = async () => {
        try {
            const response = await fetch(`${API_URL}/users/login`, 
            { 
                method: "POST", 
                headers: { 
                    "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                    user: {
                        username, 
                        password 
                    }
                }) 
            })
            const result = await response.json();
            if (result.success) {
              const { token } = result.data
              sessionStorage.setItem('token', token);
              sessionStorage.setItem("username",username );
              setToken(token)
              navigate('/Profile')
              
            } else {
              setErrorMessage(result.error.message)
            } 

            
            console.log(result)
            
        } catch (err) {
          setError(err.message)
        }          
    }
      await login()
    }
    
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="username">Username: </label>
          <input
            value={username} 
            type="username"
            id="username"
            onChange={(e) => {
              setErrorMessage('');
              setUsername(e.target.value)
            }} 
          />
          <br></br>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={(e) => {
              setErrorMessage('');
              setPassword(e.target.value)
            }}
          />
          <p>{errorMessage}</p>
          <button type="submit">Log In</button>
        </form>
        <Link to="/SignUp"> Don't have an account? Sign UP</Link>
      </div>
    )
  }