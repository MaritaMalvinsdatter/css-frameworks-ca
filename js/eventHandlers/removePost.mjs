import { removePost } from "/js/posts/postIndex.mjs";

export function setRemovePostListener() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const removeButton = document.querySelector("#deleteBtn");

    if(removeButton) {
      removeButton.addEventListener("click", async () => {
        await removePost(id);
        removePost(id);
        window.location.assign(`/profile.html`); 
      })
    } 
  }



