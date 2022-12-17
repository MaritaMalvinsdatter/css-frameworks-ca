import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { API_POST_AUTHOR } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs"
import { headers } from "/js/api/tokenFetch.mjs"

const action = "/posts"
const method = "DELETE";

// removes exiting post
export async function removePost(id = 0) {
    if (!id) {
        console.error("postID needed to delete existing post");
    }

    const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;
    console.log(deletePostURL);

    const response = await tokenFetch(deletePostURL, {
        method: method,
        headers() {}
    });

    // if (!token) {
    //     console.error("Log in to delete post");
    // }

    if (response.ok) {
        return await response.json();
    } else {
        console.error("cold not delete");
    }
    
}

export async function setRemovePostListener() {
    const removeButton = document.querySelector("#deleteBtn");
    
	removeButton.addEventListener("click", async (event) => {
       document.querySelector(`value`) = post.id;
            await removePost(post.id)
    })
}

