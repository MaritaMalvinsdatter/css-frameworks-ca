import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { API_POST_AUTHOR } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs"

const action = "/posts"
const method = "/DELETE";

// removes exiting post
export async function removePost(id) {
    if (id === undefined) {
        console.error("postID needed to delete existing post");
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${id}?${API_POST_AUTHOR}`;
    console.log(updatePostURL);

    const response = await tokenFetch(updatePostURL, {
        method: method
    });

    return await response.json();
}