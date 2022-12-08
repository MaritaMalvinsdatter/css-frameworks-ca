import { getPost, editPost } from "/js/posts/postIndex.mjs";

export async function setEditPostListener() {
    const form = document.querySelector("#edit-post");
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const userAlert = document.querySelector("#error-alert");

    if (form) {

        const button = form.querySelector("button");
        button.disabled = true;

        const post = await getPost(id);

        const profileName = JSON.parse(window.localStorage.getItem('profile'))

        // shows orignal input
        form.title.value = post.title;
        form.body.value = post.body;
        form.media.value = post.media;
        form.tags.value = post.tags;

        button.disabled = false;
    
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;

            post.tags = post.tags.split(",");

            if (editPost(post) && profileName.name === post.author) {
                window.location.assign(`/post.html?id=${post.id}`);
            } else {
                userAlert.classList.add("alert-warning");
                userAlert.innerHTML += `You can only update your own posts`;
            }

            // Send to API
            
            console.log(post);
        })
    }
}