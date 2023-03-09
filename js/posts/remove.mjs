import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { API_POST_AUTHOR } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs"

const action = "/posts"

export async function removePost(id) {
    if (!id) {
        throw new Error("Deleting requires a postID");
    }
    const removePostURL = `${API_SOCIAL_URL}${action}/${id}${API_POST_AUTHOR}`;

    const response = await tokenFetch(removePostURL, {
        method: "DELETE",
    });

    if (response.ok) {
        alert("Your listing has been deleted!");
      } else {
        const errorMessage = `Failed to delete listing with status ${response.status}`;
        throw new Error(errorMessage);
      }
}

