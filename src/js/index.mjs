// register and login
// import { setRegisterFormListener } from "./handlers/register.mjs";
// import { setLoginFormListener } from "./handlers/login.mjs";
// import * as post from "/src/js/api/posts/index.mjs";

import * as listeners from "./handlers/handlerIndex.mjs"

// register and login
const path = location.pathname

if (path === '/profile/login.html') {
    listeners.setLoginFormListener()
} else if (path === '/profile/register.html') {
    listeners.setRegisterFormListener()
} else if (path === '/feed/my_feed.html') {
    listeners.setCreatePostListener()
} else if (path === '/feed/edit_post.html') {
    listeners.setEditPostListener()
}

// posts handlers
// post.createPost()
// post.getPosts()
// post.getPost(4367).then(console.log)
// post.removePost()
// post.updatePost()


//posts
// createPost({
//     title: "My first example post",
//     body: "JavaScripts global scope is like a public toilet. You cant avoid going in there, but try to limit your contact with surfaces when you do."
// })

// updatePost({
//     id: 3722,
//     title: "JS Quote",
//     body: "JavaScripts global scope is like a public toilet. You cant avoid going in there, but try to limit your contact with surfaces when you do."
// })

// removePost(3722)
