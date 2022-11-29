import { API_SOCIAL_URL } from "/src/js/api/constants.mjs";
import { tokenFetch } from "/src/js/api/tokenFetch.mjs";
const action = "/posts";

// gets single post, id needed
export async function getPost(id) {
    if (!id) {
        console.error("postID needed to get post");
    }
    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;
    const response = await tokenFetch(getPostURL)
    const post = await response.json();

    // console.log(post);

    return post;
}


// gets multiple posts
export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_URL}${action}`;
    const response = await tokenFetch(updatePostURL)
    const post = await response.json();

    // console.log(post);

    return post;
}