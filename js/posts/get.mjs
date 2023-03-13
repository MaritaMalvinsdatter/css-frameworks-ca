import { API_SOCIAL_URL } from "/js/api/constants.mjs";
import { API_AUTHOR_URL } from "/js/api/constants.mjs";
import { API_POST_AUTHOR } from "/js/api/constants.mjs";
import { tokenFetch } from "/js/api/tokenFetch.mjs";
import * as templates from "/js/templates/templateIndex.mjs";
const action = "/posts";
let posts = [];

// gets single post
export async function getPost() {

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    console.log(id);

    if (!id) {
        console.error("postID needed to get post");
    }
    const getPostURL = `${API_SOCIAL_URL}${action}/${id}?${API_POST_AUTHOR}`;
    const response = await tokenFetch(getPostURL)
    const post = await response.json();

    console.log(getPostURL);

    return post;
}

export async function getOnePost() {
    const post = await getPost()
    const container = document.querySelector("#post");
    templates.renderPost(post, container)
    console.log(post);
}

// gets multiple posts
export async function getPosts() {
    const updatePostURL = `${API_AUTHOR_URL}`;
    const response = await tokenFetch(updatePostURL)
    const post = await response.json();

    return post;
}

  export async function getMultiplePosts() {
    try {
      posts = await getPosts();
      const container = document.querySelector("#news-feed");
      templates.renderPosts(posts, container);
    } catch (error) {
      console.log(error);
    }
  }


// search
export function searchposts() {
    const searchInput = document.querySelector("#search-input");
    const searchQuery = searchInput.value.toLowerCase();

    const filteredPostsByTitle = posts.filter(post => post.title.toLowerCase().includes(searchQuery));
    const filteredPostsBySeller = posts.filter(post => post.author.name.toLowerCase().includes(searchQuery));

    const filteredPosts = [...filteredPostsByTitle, ...filteredPostsBySeller];

    const container = document.querySelector("#news-feed");
    container.innerHTML = "";
    templates.renderPosts(filteredPosts, container);
}

const searchButton = document.querySelector("#search-button");
if (searchButton) {
  searchButton.addEventListener("click", searchposts);
}

// filter 
export function filterPostsListener() {
    const newest = document.querySelector("#postNew");
    const oldToNew = document.querySelector("#postOldNew");
    const withImages = document.querySelector("#postImages");
  
    oldToNew.addEventListener("click", (event) => {
      const oldestToNewest = posts.sort((a, b) => {
        return new Date(a.created) - new Date(b.created);
      });
      const container = document.querySelector("#news-feed");
      container.innerHTML = "";
      templates.renderPosts(oldestToNewest, container);
    });
  
    newest.addEventListener("click", (event) => {
      const newestToOldest = posts.sort((a, b) => {
        return new Date(b.created) - new Date(a.created);
      });
      const container = document.querySelector("#news-feed");
      container.innerHTML = "";
      templates.renderPosts(newestToOldest, container);
    });
  
    withImages.addEventListener("click", (event) => {
      const postsWithImage = posts.filter((post) => {
        return post.media !== null && post.media !== "";
      });
      const container = document.querySelector("#news-feed");
      container.innerHTML = "";
      templates.renderPosts(postsWithImage, container);
    });
  }
  
  
  
  
