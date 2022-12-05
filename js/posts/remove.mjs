import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs"

const action = "/posts"

// edits exiting post
export async function removePost(id) {
    if (!id) {
        console.error("postID needed to delete existing post");
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;
    // console.log(updatePostURL);

    const response = await tokenFetch(updatePostURL, {
        method: "delete",
    })

    return await response.json();
}