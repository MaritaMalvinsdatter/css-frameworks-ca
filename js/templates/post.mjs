import { removePost } from "../posts/remove.mjs";

export function postTemplatePosts(postData) {
    const post = document.createElement("div");
    post.classList.add("mainpost", "container-fluid", "d-flex", "flex-column", "border", "border-primary", "my-5");
    post.innerHTML = `<a href="post.html?id=${postData.id}" class="text-decoration-none"><h2 class="text-muted text-center">${postData.title}</h2></a>`;

    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("img-fluid", "mb-3");
        img.src = postData.media; 
        img.alt = `Image from ${postData.title}`;
        post.append(img)
      }

    const author = document.createElement("p");
    author.classList.add("text-center")
    author.innerHTML = `Author: ${postData.author.name} <br>
    <img src="${postData.author.avatar}" width="50" height="60">`;
    post.append(author);

      const profileName = JSON.parse(window.localStorage.getItem('profile'))

      if (profileName.name === postData.author.name) {
        const btn = document.createElement("button");
        // btn.classList.add("btn", "btn-primary", "btn-sm")
        btn.innerHTML =`<a href="edit_post.html?id=${postData.id}" class="text-muted">Edit my Post</a>`;
        post.append(btn);;
    } 

    return post;
}

export function postTemplatePost(postData) {
    const post = document.createElement("div");
    post.classList.add("mainpost", "container-fluid", "d-flex", "flex-column", "border", "border-primary");
    post.innerHTML = `<h2>${postData.title}</h2>`;
    const body = document.createElement("p");
    body.innerHTML = `${postData.body}`;
    post.append(body);
    
    
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("img-fluid");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        post.append(img)
      }
    
    if (postData.tags) {
        const tags = document.createElement("label");
        tags.innerText = postData.tags;
        post.append(tags)
    } 

    const profileName = JSON.parse(window.localStorage.getItem('profile'))

    // console.log(profileName.name);
    // console.log(postData.author.name);

    if (profileName.name === postData.author.name) {
        const btnDiv = document.createElement("div");
        btnDiv.classList.add("mt-3")
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn", "me-2", "p-2");
        deleteBtn.innerText = "Delete";
        post.append(deleteBtn); 
        deleteBtn.addEventListener("click", async () => {
          const confirmed = confirm("Are you sure you want to delete this listing?");
          if (confirmed) {
            try {
              await removePost(postData.id);
              window.location.assign("/profile.html");
            } catch (error) {
              console.error(error);
              // Handle error, e.g. display error message to user
            }
          }
        });
    
        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtnGr", "p-2");
        editBtn.setAttribute("data-bs-toggle", "modal")
        editBtn.setAttribute("data-bs-target", "#editListingModal")
        editBtn.setAttribute("id", "myInput")
        editBtn.innerText = "Edit Listing";
    
        btnDiv.appendChild(deleteBtn);
        btnDiv.appendChild(editBtn)
        post.append(btnDiv);
    }

    return post;
}

export function renderPosts(postDataList, parent) {
    const postHTMLElements = postDataList.map(postTemplatePosts);
    parent.append(...postHTMLElements);
}

export function renderPost(postData, parent) {
    parent.append(postTemplatePost(postData));
}