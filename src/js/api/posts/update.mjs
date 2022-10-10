import { API_SOCIAL_URL } from "/src/js/api/constants.mjs";
import { tokenFetch } from "/src/js/api/tokenFetch.mjs"
const action = "/posts"

// updates exiting post
export async function updatePost(postData) {
    if (!postData.id) {
        console.error("postID needed to update excisting post");
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
    console.log(updatePostURL);

    const response = await tokenFetch(updatePostURL, {
        method: "put",
        body: JSON.stringify(postData)
    })

    const post = await response.json();

    console.log(post);

    return post;
}