import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Comonents/SignUp.css';


const API_URL=`https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-A`

export default function SignUpPage({setToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(null)
  
    const navigate = useNavigate()
    async function submitForm(e) {
      e.preventDefault()
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
                      
              } catch (err) {
                  setError(err.message);
              }
          }
          await signUp();
          navigate('/')
          
      }
    }
    return (
      <div className='maindiv'>
        <div className='signupdiv'>
          <h1>Sign Up</h1>
          <form onSubmit={submitForm}>
            <label className='subtitle' htmlFor="username">USERNAME: </label>
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
            <label className='subtitle' htmlFor="password">PASSWORD: </label>
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
            <button className='submit' type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }