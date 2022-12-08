
import * as handlers from "./eventHandlers/handlerIndex.mjs";
import * as templates from "./templates/templateIndex.mjs";
import * as postMethods from "./posts/postIndex.mjs";

const path = location.pathname

if (path === '/index.html') {
    handlers.setLoginFormListener()
} else if (path === '/register.html') {
    handlers.setRegisterFormListener()
} else if (path === '/profile.html') {
    handlers.setCreatePostListener()
} else if (path === '/edit_post.html') {
    handlers.setEditPostListener()
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

testOnePost()
testMutiplePosts()

// posts handlers
// post.createPost()
// post.getPost()
// post.getPosts().then(console.log)
// post.getPost(581).then(console.log)
// post.removePost()
// post.updatePost()

// posts
// createPost({
//     title: "My first example post",
//     body: "JavaScripts global scope is like a public toilet. You cant avoid going in there, but try to limit your contact with surfaces when you do."
// })

// updatePost({
//     id: 552,
//     title: "New title",
//     body: "bla bla",
// })

// removePost(558)