const API_URL = 'https://strangers-things.herokuapp.com/api/2302-acc-et-web-pt-a'

export async function FetchPosts() {
    try {
        const response = await fetch (
            `${API_URL}/posts`

        );
        const result = await response.json();
        console.log (result);
        return result.data.posts;
    }catch (err){
        console.error(err);
    }
}