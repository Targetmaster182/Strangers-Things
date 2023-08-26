import { useState, useEffect } from 'react';

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Profile({token}) {
    const [username, setUsername] = useState("")
    const [error, setError] = useState(null)

    const myData = async () => {

        try {
          const response = await fetch(`${API_URL}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
          const result = await response.json();
          console.log(result);
          setUsername(result.data.username)
          return result
        } catch (err) {
          setError(err.message);
        }
      }
      useEffect(() => {
        myData();
    }, [token])
    return (
        <>
        <h1>Welcome {username}</h1>

        </>
    )

}