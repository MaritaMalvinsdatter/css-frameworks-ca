// export function postTemplateA(postData) {
//     return `<div class="post id =${postData.id}">${postData.title}</div>`
// }

export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;
    // post.classList.add("postBody");
    // post.innerText = postData.body;
    return post;
}

export function renderPost(postData, parent) {
    // parent.innerHTML += postTemplateA(postData)
    parent.append(postTemplateB(postData));
}

export function renderPosts(postDataList, parent) {
    const postHTMLElements = postDataList.map(postTemplateB);
    parent.append(...postHTMLElements);

    // postDataList.forEach((post) => {
    //     postTemplateB(post);
    // })
}