import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { API_POST_AUTHOR } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs"

const action = "/posts"
const method = "DELETE";


export async function removePost(id) {
    if (!id) {
        throw new Error("Deleting requires a postID");
    }
    const removePostURL = `${API_SOCIAL_URL}${action}/${id}${API_POST_AUTHOR}`;

    const response = await tokenFetch(removePostURL, {
        method
    })
    return await response.json();
}

