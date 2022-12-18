import * as handlers from "./eventHandlers/handlerIndex.mjs";
import * as postMethods from "./posts/postIndex.mjs";

const path = location.pathname

if (path === '/index.html') {
    handlers.setLoginFormListener()
} else if (path === '/register.html') {
    handlers.setRegisterFormListener()
} else if (path === '/profile.html') {
    handlers.setCreatePostListener()
    postMethods.getMutiplePosts()
    // handlers.filterPostsListener()
}  else if (path === '/post.html') {
    postMethods.getOnePost()
}  else if (path === '/edit_post.html') {
    handlers.setEditPostListener()
    handlers.setRemovePostListener()
}
