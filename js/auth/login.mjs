import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import * as storage from "/js/api/storage.mjs";

const action = "/auth/login";
const method = "post";

export async function login(user) {
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(user);

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body,
    });

    const { accessToken, ...profile } = await response.json()

    storage.save("token", accessToken);
    storage.save("profile", profile);
    window.location.assign("/profile.html")
}