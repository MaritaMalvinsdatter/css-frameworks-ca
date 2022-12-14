// export function postTemplateA(postData) {
//     return `<div class="post id =${postData.id}">${postData.title}</div>`
// }

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

    let btn = document.createElement("button");
    btn.innerHTML =`<a href="edit_post.html?id=${postData.id}">Edit Post</a>`;
    post.append(btn);;

    return post;
}

export function postTemplatePosts(postData) {
    const post = document.createElement("div");
    post.classList.add("mainpost", "container-fluid");
    post.innerHTML = `<a href="post.html?id=${postData.id}" class="text-decoration-none"><h2 class="text-muted">${postData.title}</h2></a>`;

    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("img-fluid");
        img.src = postData.media; 
        img.alt = `Image from ${postData.title}`;
        post.append(img)
      }
    
    // if (postData.tags) {
    //     const tags = document.createElement("label");
    //     tags.innerText = postData.tags;
    //     post.append(tags)
    // } 

    return post;
}

export function renderPost(postData, parent) {
    // parent.innerHTML += postTemplateA(postData)
    parent.append(postTemplatePost(postData));
}

export function renderPosts(postDataList, parent) {
    const postHTMLElements = postDataList.map(postTemplatePosts);
    parent.append(...postHTMLElements);
}