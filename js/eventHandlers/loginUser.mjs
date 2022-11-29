import { login } from "/js/auth/login.mjs";

export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const user = Object.fromEntries(formData.entries());

            console.log(user);

            // Send to API
            login(user)
        })
    }
}