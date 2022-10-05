import { register } from "../api/auth/register.mjs";

// export code so it can be re-used
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

            console.log(user);

            // Send to API
            register(user)
            // console.log(user);
        })
    }
}