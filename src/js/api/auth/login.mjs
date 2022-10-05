import { API_SOCIAL_URL } from "/src/js/api/constants.mjs"

const action = "/auth/login";
const method = "post";

export async function login(user) {
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(user);

    const respons = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await respons.json()
    console.log(result);
}
