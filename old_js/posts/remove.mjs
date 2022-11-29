import { API_SOCIAL_URL } from "/src/js/api/constants.mjs";
import { tokenFetch } from "/src/js/api/tokenFetch.mjs"
const action = "/posts"

// removes exiting post
export async function removePost(id) {
    if (!id) {
        console.error("postID needed to delete post");
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;
    console.log(updatePostURL);

    const response = await tokenFetch(updatePostURL, {
        method: "delete",
    })

    const post = await response.json();

    console.log(post);

    return post;
}