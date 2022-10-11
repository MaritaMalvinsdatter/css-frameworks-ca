import { API_SOCIAL_URL } from "/src/js/api/constants.mjs";
import { tokenFetch } from "/src/js/api/tokenFetch.mjs"
const action = "/posts"

// edits exiting post
export async function editPost(postData) {
    if (!postData.id) {
        console.error("postID needed to edit excisting post");
    }

    const editPostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
    console.log(editPostURL);

    const response = await tokenFetch(editPostURL, {
        method: "put",
        body: JSON.stringify(postData)
    })

    const post = await response.json();

    console.log(post);

    return post;
}