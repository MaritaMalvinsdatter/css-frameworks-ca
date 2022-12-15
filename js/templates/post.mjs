

export function postTemplatePosts(postData) {
    const post = document.createElement("div");
    post.classList.add("mainpost", "container-fluid", "d-flex", "flex-column", "border", "border-primary", "my-5");
    post.innerHTML = `<a href="post.html?id=${postData.id} class="text-decoration-none"><h2 class="text-muted text-center">${postData.title}</h2></a>`;

    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("img-fluid", "mb-3");
        img.src = postData.media; 
        img.alt = `Image from ${postData.title}`;
        post.append(img)
      }

      const profileName = JSON.parse(window.localStorage.getItem('profile'))

      if (profileName.name === postData.author.name) {
        const btn = document.createElement("button");
        // btn.classList.add("btn", "btn-primary", "btn-sm")
        btn.innerHTML =`<a href="edit_post.html?id=${postData.id}" class="text-muted">Edit my Post</a>`;
        post.append(btn);;
    } else {
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
            const btn = document.createElement("button");
            // btn.classList.add("btn", "btn-primary", "btn-sm")
            btn.innerHTML =`<a href="edit_post.html?id=${postData.id}" class="text-muted">Edit</a>`;
            post.append(btn);
            
            // const deleteBtn = document.createElement("button");
            // deleteBtn.classList.add("deletebtn");
            // const removeButton = document.querySelector("deleteBtn");
	        // removeButton.addEventListener("click", async () => {
            // await removePost(postData.id)
            // })

        } else {
            const btn = document.createElement("button");
            btn.classList.add("btn")
            btn.innerHTML =`<a href="profile.html">Back to Posts</a>`;
            post.append(btn);;
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