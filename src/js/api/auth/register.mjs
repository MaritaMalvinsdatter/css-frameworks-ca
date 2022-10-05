import { API_SOCIAL_URL } from "/src/js/api/constants.mjs"

const action = "/auth/register";
const method = "post";

export async function register(user) {
    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(user);

    const respons = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await respons.json()
    console.log(result);
}
