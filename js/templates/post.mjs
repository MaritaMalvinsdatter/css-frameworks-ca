// export function postTemplateA(postData) {
//     return `<div class="post id =${postData.id}">${postData.title}</div>`
// }

export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("mainpost", "container-fluid");
    post.innerHTML = `<a href="post.html?id=${postData.id}"><h2>${postData.title}</h2></a>`;
    const body = document.createElement("p");
    body.innerHTML = `<u>Body:</u> ${postData.body}`;
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

    return post;
}

export function renderPost(postData, parent) {
    // parent.innerHTML += postTemplateA(postData)
    parent.append(postTemplateB(postData));
}

export function renderPosts(postDataList, parent) {
    const postHTMLElements = postDataList.map(postTemplateB);
    parent.append(...postHTMLElements);
}