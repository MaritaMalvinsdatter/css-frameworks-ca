import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs"

const action = "/posts"

// edits exiting post
export async function updatePost(postData) {
    if (!postData.id) {
        console.error("postID needed to edit existing post");
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
    // console.log(updatePostURL);

    const response = await tokenFetch(updatePostURL, {
        method: "put",
        body: JSON.stringify(postData)
    })

    const post = await response.json();

    console.log(post);

    return post;
}