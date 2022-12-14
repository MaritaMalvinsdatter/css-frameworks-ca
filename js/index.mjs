
import * as handlers from "./eventHandlers/handlerIndex.mjs";
import * as templates from "./templates/templateIndex.mjs";
import * as postMethods from "./posts/postIndex.mjs";
import * as constants from "./api/constants.mjs";

// import { createPost } from "./posts/create.mjs";

console.log(constants.API_AUTHOR_URL);

const path = location.pathname

if (path === '/index.html') {
    handlers.setLoginFormListener()
} else if (path === '/register.html') {
    handlers.setRegisterFormListener()
} else if (path === '/profile.html') {
    handlers.setCreatePostListener()
    testMutiplePosts()
} else if (path === '/edit_post.html') {
    handlers.setEditPostListener()
} else if (path === '/post.html') {
    testOnePost()
} 

async function testOnePost() {
    const post = await postMethods.getPost()
    const container = document.querySelector("#post");
    templates.renderPost(post, container)
    console.log(post);
}

async function testMutiplePosts() {
    const posts = await postMethods.getPosts()
    const container = document.querySelector("#news-feed");
    templates.renderPosts(posts, container)
    console.log(posts);
}




// posts handlers
// post.createPost()
// post.getPost()
// post.getPosts().then(console.log)
// post.getPost(581).then(console.log)
// post.removePost()
// post.updatePost()

// posts

// updatePost({
//     id: 552,
//     title: "New title",
//     body: "bla bla",
// })

// removePost(558)