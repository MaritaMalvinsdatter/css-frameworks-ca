import { editPost } from "/js/api/posts/postIndex.mjs"

export function setEditPostListener() {
    const form = document.querySelector("#edit-post");

    const url = URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;

            // Send to API
            editPost(post)
            console.log(post);
        })
    }
}