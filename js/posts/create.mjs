import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs";

const action = "/posts";

// creates post
export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;

    const response = await tokenFetch(createPostURL, {
        method: "post",
        body: JSON.stringify(postData),
    })

    var idTest = postData.id;

    console.log(postData);
    console.log(idTest);

    return await response.json();
}