import { register } from "/js/auth/register.mjs";

/**
Sets a listener for the registration form and sends its data to the API when submitted.
@function setRegisterFormListener
*/

export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const user = Object.fromEntries(formData.entries())

            if (user.banner === "") {
                delete user.banner
            }
            if (user.avatar === "") {
                delete user.avatar
            }

            // console.log(user);

            // Send to API
            register(user)
        })
    }
}