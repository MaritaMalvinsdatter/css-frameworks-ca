import { login } from "../api/auth/login.mjs";

// export code so it can be re-used
export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");

    if (form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const user = Object.fromEntries(formData.entries())

            // Send to API
            login(user)
            console.log(user);
        })
    }
}