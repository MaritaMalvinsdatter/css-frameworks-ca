import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { API_AUTHOR_URL } from "/js/api/constants.mjs";
import { API_POST_AUTHOR } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs";
import * as templates from "/js/templates/templateIndex.mjs";
const action = "/posts";


// gets single post
export async function getPost() {

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    console.log(id);

    if (!id) {
        console.error("postID needed to get post");
    }
    const getPostURL = `${API_SOCIAL_URL}${action}/${id}?${API_POST_AUTHOR}`;
    const response = await tokenFetch(getPostURL)
    const post = await response.json();

    console.log(getPostURL);

    return post;
}

export async function getOnePost() {
    const post = await getPost()
    const container = document.querySelector("#post");
    templates.renderPost(post, container)
    console.log(post);
}



// gets multiple posts
export async function getPosts() {
    const updatePostURL = `${API_AUTHOR_URL}`;
    const response = await tokenFetch(updatePostURL)
    const post = await response.json();

    // console.log(updatePostURL);

    return post;
}

export async function getMutiplePosts() {
    const posts = await getPosts()
    const container = document.querySelector("#news-feed");
    templates.renderPosts(posts, container)
    console.log(posts);
}
