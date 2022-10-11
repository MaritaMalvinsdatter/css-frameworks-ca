import { editPost } from "/src/js/api/posts/postIndex.mjs"

export function seteditPostListener() {
    const form = document.querySelector("#edit-post");

    if (form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())

            // Send to API
            editPost(post)
            console.log(post);
        })
    }
}