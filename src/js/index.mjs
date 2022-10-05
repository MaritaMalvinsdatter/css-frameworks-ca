import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

setRegisterFormListener()

const path = location.pathname
console.log(location.pathname);

if (path === '/profile/login.html') {
    setLoginFormListener()
} else if (path === '/profile/register.html') {
    setRegisterFormListener()
}