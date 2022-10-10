// register and login
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "/src/js/api/posts/index.mjs";

// register and login
const path = location.pathname

if (path === '/profile/login.html') {
    setLoginFormListener()
} else if (path === '/profile/register.html') {
    setRegisterFormListener()
}

// posts handlers
post.createPost()
post.getPosts()
post.getPost(4367).then(console.log)
post.removePost()
post.updatePost()


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
