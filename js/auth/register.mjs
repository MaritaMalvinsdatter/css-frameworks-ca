import { API_SOCIAL_URL } from "/js/api/constants.mjs";

const action = "/auth/register";
const method = "post";

/**
Sends a user's registration information to the API and returns the API response.
@async
@function register
@param {Object} user - An object containing the user's registration information, including their name, email, and password.
@returns {Promise<Object>} - A Promise that resolves with the API response as an object.
*/
export async function register(user) {
    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(user);
    console.log(registerURL);

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body,
    });

    const result = await response.json();
    console.log(result);
    alert("Registration Complete - Welcome! PLease login")
    window.location.assign("../index.html")
    return result;
}