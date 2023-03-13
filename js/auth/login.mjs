import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import * as storage from "/js/api/tokenStorage.mjs";

const action = "/auth/login";
const method = "post";

const userAlert = document.querySelector("#error-alert");

/**
Sends a user's login information to the API and saves the access token and profile to local storage upon success.
@async
@function login
@param {Object} user - An object containing the user's email and password.
*/
export async function login(user) {
    userAlert.innerHTML = "";
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(user);

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body,
    });

    const { accessToken, ...profile } = await response.json();

     if (accessToken) {
        storage.save("token", accessToken);
        storage.save("profile", profile);
        window.location.assign("/profile.html");
    } else {
        userAlert.classList.add("alert-warning");
        userAlert.innerHTML += `No user with this email registered. Please register to make an account!`;
    }

}