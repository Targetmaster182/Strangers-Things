const API_URL = 'https://strangers-things.herokuapp.com/api/2302-acc-et-web-pt-a'

export async function FetchPosts(token) {
    try {
        const response = await fetch (`${API_URL}/posts`, {headers: {
            'content-Type': 'aplication/json',
            'Authorization': `Bearer ${token}`
        }
        });
        const result = await response.json();
        console.log (result.data.posts);
        return result.data.posts;
    }catch (err){
        console.error(err);
    }
}

export async function createPost(NewPost, token) {
    try {
        const response = await fetch(
            `${API_URL}/posts`,{
            method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(NewPost)
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export async function editPost(editedPost, _id, token) {
    try {
      const response = await fetch(`${API_URL}/${_id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editedPost)
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}
