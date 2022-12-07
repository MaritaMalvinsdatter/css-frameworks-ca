
import { setRegisterFormListener } from "./eventHandlers/registerUser.mjs";
import { setLoginFormListener } from "./eventHandlers/loginUser.mjs";

import * as postMethods from "./posts/postIndex.mjs";
import * as templates from "./templates/templateIndex.mjs";

const path = location.pathname

if (path === '/index.html') {
    setLoginFormListener()
} else if (path === '/register.html') {
    setRegisterFormListener()
} 

async function testTemplateA() {
    const posts = await postMethods.getPosts()
    const post = posts[85];
    const container = document.querySelector("#post");
    templates.renderPost(post, container)
}

async function testTemplateB() {
    const posts = await postMethods.getPosts()
    const container = document.querySelector("#news-feed");
    templates.renderPosts(posts, container)
}

testTemplateA()
testTemplateB()

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