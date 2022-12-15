import { removePost } from "/js/posts/postIndex.mjs";

export async function setRemovePostListener() {
    const removeButton = document.querySelector("#deleteBtn");
    // const url = new URL(location.href);
    // console.log(url);
    // const id = url.searchParams.get("id");
    // console.log(id);

	removeButton.addEventListener("click", ( event ) => {
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            console.log(post);
            post.id = id;
        
            if (removePost(id)) {
                setTimeout(function() { window.location.assign(`/profile.html`); }, 500); 
              } else {
                console.log("fuck this");
              }

            
    })
}



