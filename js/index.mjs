// import * as constants from "./api/constants.mjs"

// console.log(constants.API_SOCIAL_URL);
// console.log(constants.API_POSTS_URL);

import { setRegisterFormListener } from "./eventHandlers/registerUser.mjs";
import { setLoginFormListener } from "./eventHandlers/loginUser.mjs";

const path = location.pathname

if (path === '/index.html') {
    setLoginFormListener()
} else if (path === '/register.html') {
    setRegisterFormListener()
} 