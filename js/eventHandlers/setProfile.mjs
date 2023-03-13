import { load, save } from "../api/tokenStorage.mjs";

export function setProfilePage() {
  const profile = load("profile");
  const nameElem = document.querySelector("#profile-name");
  const emailElem = document.querySelector("#profile-email");
  const bannerElem = document.querySelector("#profile-banner");
  const avatarElem = document.querySelector("#profile-avatar");

  nameElem.textContent = `Username: ${profile.name}`;
  emailElem.textContent = profile.email;

  if (profile.banner) {
    bannerElem.style.backgroundImage = `url(${profile.banner})`;
  }

  if (profile.avatar) {
    avatarElem.src = profile.avatar;
  } else {
    avatarElem.src = "/src/img/blank-profile-picture-gca82a1260_640.png";
    save("profile", profile); 
  }
}

