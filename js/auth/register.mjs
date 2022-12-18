import { API_SOCIAL_URL } from "/js/api/constants.mjs";

const action = "/auth/register";
const method = "post";

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
    // alert("Registration Complete - Welcome!")
    // window.location.assign("../profile.html")
    // document.getElementById("myForm").reset();
    return result;

}