import { createPost } from "/js/posts/postIndex.mjs"

export function setCreatePostListener() {
    const form = document.querySelector("#create-post");

    if (form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())

            // Send to API
            createPost(post);
            console.log(post);
            form.reset();
        });
    }
}