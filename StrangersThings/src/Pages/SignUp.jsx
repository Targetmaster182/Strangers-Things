import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function SignUpPage({setToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(null)
  
    const navigate = useNavigate()
    async function submitForm(e) {
      e.preventDefault()
      console.log ("test")
      if (password.length < 8) {
        setErrorMessage("Password is too short");
      } else {
          const signUp = async () => {
              try {
                  const response = await fetch(`${API_URL}/users/register`, 
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
                      const { token } = result.data
                      console.log(result)
                      localStorage.setItem('token', token);
                      setToken(token)
                      navigate('/ProfilePage')
              } catch (err) {
                  setError(err.message);
              }
          }
          await signUp();
          
      }
    }
    return (
      <div>
        <h1>Sign Up</h1>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }